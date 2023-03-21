var infoContainerEl = document.querySelector('#burgerOfTheDayInput');

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

    var burgerNameEl = document.createElement('span');
    burgerNameEl.textContent = burger.name;
    burgerNameEl.classList = "display-block burgerEl";
    infoEl.appendChild(burgerNameEl);
    console.log(burger.name);

    var burgerPriceEl = document.createElement('span');
    burgerPriceEl.textContent = burger.price;
    burgerPriceEl.classList = "display-block ofTheDayEl";
    infoEl.appendChild(burgerPriceEl);
    console.log(burger.price);

    var burgerEpisodeEl = document.createElement('span');
    burgerEpisodeEl.textContent = 'Season ' + burger.season + ' Episode ' + burger.episode;
    burgerEpisodeEl.classList = "display-block burgerEl";
    infoEl.appendChild(burgerEpisodeEl);
    console.log(burger.episode);

    infoContainerEl.appendChild(infoEl);
}

burgerOfTheDay();