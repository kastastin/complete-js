'use strict';

const countriesContainer = document.querySelector('.countries');

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

  countriesContainer.style.opacity = 1;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getPosition = function () {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

// <-- Async & Await -->
const whereAmI = async function () {
  // Geolocation
  const position = await getPosition();
  const { latitude: lat, longitude: lng } = position.coords;

  // Reverse geocoding
  const responseGeocoding = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  );
  const dataGeocoding = await responseGeocoding.json();

  // Country data
  const responseCountryInfo = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeocoding.countryName}`
  );
  const dataCountryInfo = await responseCountryInfo.json();

  renderCountry(dataCountryInfo[0]);
};

whereAmI();
