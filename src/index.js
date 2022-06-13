'use strict';

// const axios = require('axios');

const state = {
  temperature: 0,
  currentColor: 'black',
  currentLandscape: 'summer',
};

// increase temperature
const increaseTemperature = () => {
  state.temperature += 1;
  const temperatureContainer = document.getElementById('temperature');

  temperatureContainer.textContent = `${state.temperature}° F`;

  changeTemperatureColor();
  changeLandscape();
};

// decrease temperature
const decreaseTemperature = () => {
  state.temperature -= 1;
  const temperatureContainer = document.getElementById('temperature');

  temperatureContainer.textContent = `${state.temperature}° F`;

  changeTemperatureColor();
  changeLandscape();
};

// helper function to change temperature text color
const changeTemperatureColor = () => {
  const temperatureContainer = document.getElementById('temperature');

  if (state.temperature >= 80) {
    state.currentColor = 'coral';
  } else if (state.temperature >= 60 && state.temperature <= 79) {
    state.currentColor = '#f5b942';
  } else if (state.temperature >= 40 && state.temperature <= 59) {
    state.currentColor = 'teal';
  } else if (state.temperature >= 20 && state.temperature <= 39) {
    state.currentColor = '#1a557d';
  } else {
    state.currentColor = '#979da1';
  }

  temperatureContainer.style.color = state.currentColor;
};

// helper function to change landscape based on temp
const changeLandscape = () => {
  const landscapeImage = document.getElementById('landscape-image');
  const landscapeCaption = document.getElementById('landscape-caption');

  if (state.temperature >= 80) {
    landscapeImage.src = 'assets/marissa-rodriguez-summer.jpg';
    landscapeCaption.textContent = 'Photo by Marissa Rodriguez';
  } else if (state.temperature >= 60 && state.temperature <= 79) {
    landscapeImage.src = 'assets/laura-adai-spring.jpg';
    landscapeCaption.textContent = 'Photo by Laura Adai';
  } else if (state.temperature >= 40 && state.temperature <= 59) {
    landscapeImage.src = 'assets/janmesh-shah-fall.jpg';
    landscapeCaption.textContent = 'Photo by Janmesh Shah';
  } else {
    landscapeImage.src = 'assets/donnie-rosie-winter.jpg';
    landscapeCaption.textContent = 'Photo by Donnie Rosie';
  }
};

// update display city based on user input
const updateDisplayCity = () => {
  const displayCity = document.getElementById('display-city');
  const userInputCity = document.getElementById('input-city').value;

  const capitalizedCity =
    userInputCity.charAt(0).toUpperCase() +
    userInputCity.slice(1).toLowerCase();

  displayCity.textContent = capitalizedCity;
};

const registerEventHandlers = () => {
  const increaseTempButton = document.getElementById('increase-temp');
  increaseTempButton.addEventListener('click', increaseTemperature);

  const decreaseTempButton = document.getElementById('decrease-temp');
  decreaseTempButton.addEventListener('click', decreaseTemperature);

  const changeCityButton = document.getElementById('change-city-button');
  changeCityButton.addEventListener('click', updateDisplayCity);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
