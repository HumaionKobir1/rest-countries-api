const loadAllData = () => {
    const url = `https://restcountries.com/v3.1/all`
    fetch(url)
    .then(res => res.json())
    .then(data => showData(data));
}

const showData = (countries) => {
    const containerInfo = document.getElementById('container-info');
    // console.log(countries[0].name)
    countries.slice(0, 50).forEach(country => {
        console.log(country.name.common);

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img class="h-60 rounded-md" src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${country.name.common}</h2>
          <p>Population: ${country.population}</p>
          <div class="card-actions">
            <button onclick="showDetails()" class="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
        `;
        
        containerInfo.appendChild(div);
    })
}


loadAllData();