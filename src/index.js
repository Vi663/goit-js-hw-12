import './css/styles.css';
import fetchCountries from './partials/fetchCountries.js';
import _ from 'lodash';
import countryListTemplate from './partials/templates/countryList.hbs'
import countryMarkupTemplate from './partials/templates/countryMarkup.hbs'

const input = document.getElementById('search-box');
const countryContainer = document.querySelector('country-list');
const infoContainer = document.querySelector('country-info');
const DEBOUNCE_DELAY = 300;
input.addEventListener('input', _.debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
  const inputValue = e.target.value;
  fetchCountries(inputValue);
  // renderMarkup();
};

function renderMarkup() {
  // const htmlString = countryMarkupTemplate(fetchCountries(`${inputValue}`));
  // countryContainer.innerHTML = htmlString;
}

