// https://github.com/fawazahmed0/currency-api/blob/1/2022-01-02/currencies.json

function initPage () {

    var requestURL = 'https://api.exchangerate.host/latest'; 
    var request = new XMLHttpRequest(); 
    request.open('GET', requestURL);
    request.responseType = 'json.stringify';
    request.send();
    console.log(requestURL);
    
    
    request.onload = function() {
      var response = request.response;
      console.log(response);
      console.log(this.onload);
    }
    
    
    const dropdownBtn = document.getElementById("btn");
    const dropdownMenu = document.getElementById("dropdown");
    const toggleArrow = document.getElementById("arrow");
    var userChoiceEl = document.querySelector('.userChoice')
    
    
    
    dropdownMenu.addEventListener('click', function(e) {
      console.log(e.target)
    fetch('https://api.exchangerate.host/latest')
    .then(function(response) {
      return response.json()
    }).then(function(data) {
      console.log(data.rates)
    
      for(let CUR in data.rates){
        if (CUR === e.target.id){
          console.log(CUR, data.rates[CUR])
          const h3 = document.createElement('h3')
          h3.textContent = `Currency: ${CUR} and Rate: ${(data.rates[CUR] * 5.95).toFixed(2)}`
          userChoiceEl.append(h3)
        }
      }
    })
    });
    
    // Toggle dropdown function
    const toggleDropdown = function () {
      dropdownMenu.classList.toggle("show");
      toggleArrow.classList.toggle("arrow");
    };
    
    // Toggle dropdown open/close when dropdown button is clicked
    dropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleDropdown();
      console.log(e)
    });
    
    // Close dropdown when dom element is clicked
    document.documentElement.addEventListener("click", function () {
      if (dropdownMenu.classList.contains("show")) {
        toggleDropdown();
      }
    });
    
    
    } initPage();
    
    
    
    
    
    
