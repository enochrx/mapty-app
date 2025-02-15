"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

// if (navigator.geolocation)
navigator.geolocation?.getCurrentPosition(
  function (position) {
    //success cb
    // console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    const map = L.map("map").setView(coords, 13);

    // var Stadia_AlidadeSatellite =

    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}",
      {
        minZoom: 0,
        maxZoom: 20,
        attribution:
          '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: "jpg",
      }
    ).addTo(map);

    // L.tileLayer(
    //   "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png",
    //   {
    //     attribution:
    //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //   }
    // ).addTo(map);

    L.marker(coords)
      .addTo(map)
      .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      .openPopup();

    map.on("click", mapEvent => console.log(mapEvent));
  },
  function () {
    //err cb
    alert("Can not get your location");
  }
);
