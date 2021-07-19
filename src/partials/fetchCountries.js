export default class Country {
  constructor() {}
  fetchCountries(name) {
    // fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;languages').then
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(response => {response.json()})
      .then(data => {
        return data;
      })
      .catch(error => console.log(error));
  }
}