'use strict';

const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');

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

// <-- Promise is a container for a future value -->

const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} [${response.status}]`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // Fetch First Country
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    `'${country}' not found`
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Fetch Second Country (neighbour)
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `'${neighbour}' not found`
      );
    })
    .then((data) => renderCountry(data[0], 'neighbour'))
    .catch((error) => {
      console.error(`${error} 🧐`);
      renderError(`Something went wrong. ${error.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});
