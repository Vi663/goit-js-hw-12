import './css/styles.css';
import Country from './partials/fetchCountries.js';
import _ from 'lodash';
import Notiflix from "notiflix";
import countryListTemplate from './partials/templates/countryList.hbs'
import countryMarkupTemplate from './partials/templates/countryMarkup.hbs'

const input = document.getElementById('search-box');
const countryContainer = document.querySelector('.country-list');
// const infoContainer = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;
input.addEventListener('input', _.debounce(onInputChange, DEBOUNCE_DELAY));

const newCountry = new Country();
function onInputChange(e) {
  const inputValue = e.target.value;
  // e.currentTarget.elements.query.value
  newCountry.fetchCountries(inputValue).then((data) => {
    if (data.length === 1) {
      renderMarkupFor1Country(data)
    } else if (data.length > 1 && data.length <= 10) {
      renderMarkupFor4Countrys(data)
    } else if (data.length >= 10) {
      renderMarkupFor1Country()
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.',
        {
          timeout: 3000,
        },
      );
    } else if (data.status === 404) {
      renderMarkupFor1Country()
      Notiflix.Notify.failure(
        'Oops, there is no country with that name',
        {
          timeout: 3000,
        },
      );
    }
  });
  // console.log(countryMarkup);
  
  
};

function renderMarkupFor1Country(country) {
  const countryMarkup = countryMarkupTemplate(country);
  countryContainer.innerHTML = countryMarkup;
};
function renderMarkupFor4Countrys(country) {
  const countryMarkup = countryListTemplate(country);
  countryContainer.innerHTML = countryMarkup;
};

