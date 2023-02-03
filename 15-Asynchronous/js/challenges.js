'use strict';

// <-- Coding Challenge #1 -->
const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);

      return res.json();
    })
    .then((data) => {
      console.log(`
        Continent: ${data.continent}\n\
        Country: ${data.countryName}\n\
        City: ${data.city}\n\
        Locality: ${data.locality}
      `);

      return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', whereAmI);

// <-- Coding Challenge #2 -->
const imgcontainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgcontainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImage;

// createImage('img/img-1.jpg')
//   .then((img) => {
//     currentImage = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then((img) => {
//     currentImage = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch((error) => console.error(error));

// <-- Coding Challenge #3 -->
const loadNPause = async function () {
  try {
    // Load Image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load Image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
};
// loadNPause();

// Part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgsElements = await Promise.all(imgs);
    imgsElements.forEach((imgElement) => imgElement.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
