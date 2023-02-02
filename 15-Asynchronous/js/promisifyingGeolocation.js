'use strict';

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then((position) => console.log(position))
  .catch((error) => console.error(new Error(error.message)));
