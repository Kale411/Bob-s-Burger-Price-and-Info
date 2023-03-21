
infoContainerEl = document.querySelector('#burgerOfTheDayInput');

function burgerOfTheDay() {
    let burgerNo = Math.floor(Math.random() * 333) + 1;
    let apiUrl = 'https://bobsburgers-api.herokuapp.com/burgerOfTheDay/' + burgerNo;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayInfo(data);
                })
            }
        })
}

function displayInfo(burger) {

    var infoEl = document.createElement('div');
    infoEl.classList = '';

    var burgerNameEl = document.createElement('span');
    burgerNameEl.textContent = burger.name;
    infoEl.appendChild(burgerNameEl);
    console.log(burger.name);

    var burgerPriceEl = document.createElement('span');
    burgerPriceEl.textContent = burger.price;
    infoEl.appendChild(burgerPriceEl);
    console.log(burger.price);

    var burgerEpisodeEl = document.createElement('span');
    burgerEpisodeEl.textContent = 'Season ' + burger.season + ' Episode ' + burger.episode;
    infoEl.appendChild(burgerEpisodeEl);
    console.log(burger.episode);

    infoContainerEl.appendChild(infoEl);
}

burgerOfTheDay();