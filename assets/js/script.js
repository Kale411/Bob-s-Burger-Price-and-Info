

function burgerOfTheDay() {
    let burgerNo = Math.floor(Math.random() * 333) + 1;
    let apiUrl = 'https://bobsburgers-api.herokuapp.com/burgerOfTheDay/' + burgerNo;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayBurger(data);
                })
            }
        })
}

function displayBurger(burger) {
    console.log(burger.name);
    console.log(burger.price);
    console.log(burger.episode);
}

burgerOfTheDay();