
export default class Country {
  constructor() { }
  fetchCountries(name) {
    return fetch(
      `https://restcountries.eu/rest/v2/name/${name}`
    ).then(response => response.json())
  }
}