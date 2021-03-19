var yesterdayButton = document.querySelector('.yesterday');
var todayButton = document.querySelector('.today');
var tomorrowButton = document.querySelector('.tomorrow');
var temperature = document.querySelector('.temperature');

var cityInput = document.querySelector('.city-input');

var key = "741642e0a67311272db651cf02236ed2";

async function getData(){
    var input = cityInput.value; 
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`)
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp']
        temperature.innerHTML = tempValue;
    })
    .catch(err => alert("Wrong city name!"))
}

// async function getData(){
//     var input = cityInput.value; 
//     try {
//         var response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`);
//     } catch (error) {
//         console.log(error)
//     }
//     var data = await response.json();
//     console.log(data);
//     return data;
// }

todayButton.addEventListener("click", () => {
       getData();
})






/*
On button click, a function is triggered that takes the input in the box
send it to the api and returns data
With that data I will 
*/