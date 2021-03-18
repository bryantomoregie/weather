const yesterdayButton = document.querySelector('.yesterday');
const todayButton = document.querySelector('.today');
const tomorrowButton = document.querySelector('.tomorrow');

const cityInput = document.querySelector('.city-input');
const input = cityInput.nodeValue; 

const key = "741642e0a67311272db651cf02236ed2";
const dataObj = "";


async function getData(){
    const response = await fetch (`api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`);
    const data = await response.json();
    console.log(data);
    return data;
}

todayButton.addEventListener("click", () => {
   alert("You have built your first js app and it was simple!");

})


/*
On button click, a function is triggered that takes the input in the box
send it to the api and returns data
With that data I will 
*/