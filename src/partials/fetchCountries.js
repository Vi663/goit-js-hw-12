export default function fetchCountries(name) {
  // fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;languages').then
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => { response.json() })
    .then(data => {console.log(data.name)})
    // .catch(error);
}
  