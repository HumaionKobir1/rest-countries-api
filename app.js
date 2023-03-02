const loadAllData = (searchText) => {
    const url = `https://restcountries.com/v3.1/name/${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => showData(data.slice(0, 9)));
    
}

const showData = countries => {
    const containerInfo = document.getElementById('container-info');
    containerInfo.innerHTML = '';
    // console.log(countries[0].name)
    countries.forEach(country => {

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img class="h-60 rounded-md" src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${country.name.common}</h2>
          <p>Area: ${country.area}</p>
          <div class="card-actions">
          <label onclick="showDetails('${country.cca2}')" for="my-modal-6" class="btn px-8 btn py-4 bg-emerald-500 rounded-xl text-white font-bold">Details</label>
          </div>
        </div>
      </div>
        `;
        
        containerInfo.appendChild(div);
    })
}

const showDetails = async id => {
  const url = `https://restcountries.com/v3.1/alpha/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayCountryDetails(data[0]);
}
const displayCountryDetails = country =>{
  const countryDetails = document.getElementById('country-details');
  countryDetails.innerHTML = `
        <img class="h-60 rounded-md" src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <p>Borders: ${country.borders}</p>
        
  `;
}
loadAllData('a');

const showAllData = () => {
  const url = `https://restcountries.com/v3.1/all`
    fetch(url)
    .then(res => res.json())
    .then(data => showData(data));

    const showAllbtn = document.getElementById('show-all');
    showAllbtn.classList.add('hidden');
}

const searchBtn = () => {
  const searchField = document.getElementById('input-field');
  searchText = searchField.value;
  loadAllData(searchText);
}
document.getElementById('input-field').addEventListener('keypress', function(e){
  if(e.key === 'Enter') {
    // loadAllData(searchText);
    searchBtn();
  }
});