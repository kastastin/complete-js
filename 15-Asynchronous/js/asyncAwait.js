'use strict';

const countriesContainer = document.querySelector('.countries');

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};

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
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

// <-- Async & Await -->
const whereAmI = async function () {
  try {
    // Geolocation
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse geocoding
    const responseGeocoding = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    if (!responseGeocoding.ok)
      throw new Error(
        `Wrong bigdatacloud API request. ${responseGeocoding.status}`
      );
    const dataGeocoding = await responseGeocoding.json();

    // Country data
    const responseCountryInfo = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeocoding.countryName}`
    );
    if (!responseCountryInfo.ok)
      throw new Error(
        `Wrong restcountries API request. ${responseCountryInfo.status}`
      );
    const dataCountryInfo = await responseCountryInfo.json();

    renderCountry(dataCountryInfo[0]);
  } catch (error) {
    renderError(`Something went wrong! (${error.message}) 🛑`);
    console.error(`${error} 🔴`);
  } finally {
    countriesContainer.style.opacity = 1;
  }
};

whereAmI();

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (error) {
//   alert(error.message);
// }
