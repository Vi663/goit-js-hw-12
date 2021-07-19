import './css/styles.css';
import Country from './partials/fetchCountries.js';
import _ from 'lodash';
import countryListTemplate from './partials/templates/countryList.hbs'
import countryMarkupTemplate from './partials/templates/countryMarkup.hbs'

const refs = {
  input: document.getElementById('search-box'),
  countryContainer: document.querySelector('.country-list'),
  infoContainer: document.querySelector('.country-info'),
}

const DEBOUNCE_DELAY = 300;
refs.input.addEventListener('input', _.debounce(onInputChange, DEBOUNCE_DELAY));

const newCountry = new Country();
function onInputChange(e) {
  const inputValue = e.target.value;
  // e.currentTarget.elements.query.value
  newCountry.fetchCountries(inputValue);
  const data = newCountry.fetchCountries(inputValue);
  const countryMarkup = countryMarkupTemplate(data);
  refs.countryContainer.innerHTML = countryMarkup;
  console.log(countryMarkup);
  console.log(data);
};

// function renderMarkup() {
  
// }

