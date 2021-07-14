const weatherApiDataLink = ''

const weatherinfoContainer = document.getElementById('weatherInfoContainer')

const input_city = document.getElementById('input_city')

const logo_raincoat = document.querySelector('#logo_raincoat')
const logo_furcoat = document.querySelector('#logo_furcoat')
const logo_pants = document.querySelector('#logo_pants')
const logo_short = document.querySelector('#logo_short')
const logo_umbrella = document.querySelector('#logo_umbrella')
const logo_sunglasses = document.querySelector('#logo_sunglasses')
const logo_scarf = document.querySelector('#logo_scarf')
const logo_jacket = document.querySelector('#logo_jacket')
const logo_tshirt = document.querySelector('#logo_tshirt')

function init(){
	LaunchNukeRocket()
}

function LaunchNukeRocket(){
	var myCity = input_city.value.toString()
	var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + myCity + '&appid=7c92da0cb0ec5c7e6b804f896e0f7b88'
	console.log(url)
	fetch(url, { 
	  method: 'GET'
	})
	.then(function(response) { return response.json(); })
	.then(function(json) {
	  weatherinfoContainer.innerHTML = "Weather : " + json.weather[0].main + " | Temperature : " + Math.round(json.main.temp  - 273.15) + "°C"
	  DisplayClothes(json);
	});
}

function DisplayClothes(weatherJSON){

	var weather = weatherJSON.weather[0].main
	var tempCelsius = Math.round(weatherJSON.main.temp  - 273.15)

	HideAllClothes()

	if((weather == "Clear" || weather == "Snow") && tempCelsius <= 5){
		Show_Furcoat()
		Show_Pants()
		Show_Scarf()

	}else if(weather == "Clear"){
		if(tempCelsius >= 5 && tempCelsius < 20){
			Show_Jacket()
			Show_Pants()

		}else if(tempCelsius >= 21 && tempCelsius < 25){
			Show_Tshirt()
			Show_Pants()

		}else{ //tempCalsius >= 25
			Show_Tshirt()
			Show_Short()
			Show_Sunglasses()
		}

	}else if(weather == "Clouds"){
		if(tempCelsius <= 20){
			Show_Jacket()
			Show_Pants()

		}
		else{// tempCelsius > 20
			Show_Pants()
			Show_Tshirt()

		}

	}else if(weather == "Rain"){
		Show_Raincoat()
		Show_Pants()
		Show_Umbrella()

	}else{ //weather == thunder/dizzle
		Show_Pants()
		Show_Raincoat()
	}
}

function HideAllClothes(){
	logo_raincoat.style.display = "none"
	logo_furcoat.style.display = "none"
	logo_pants.style.display = "none"
	logo_short.style.display = "none"
	logo_umbrella.style.display = "none"
	logo_sunglasses.style.display = "none"
	logo_scarf.style.display = "none"
	logo_jacket.style.display = "none"
	logo_tshirt.style.display = "none"
}

function Show_Furcoat(){
	logo_furcoat.style.display = "block"
}

function Show_Raincoat(){
	logo_raincoat.style.display = "block"
}

function Show_Jacket(){
	logo_jacket.style.display = "block"
}

function Show_Tshirt(){
	logo_tshirt.style.display = "block"
}

function Show_Pants(){
	logo_pants.style.display = "block"
}

function Show_Short(){
	logo_short.style.display = "block"
}

function Show_Scarf(){
	logo_scarf.style.display = "block"
}

function Show_Umbrella(){
	logo_umbrella.style.display = "block"
}

function Show_Sunglasses(){
	logo_sunglasses.style.display = "block"
}