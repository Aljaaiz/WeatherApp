class UI{
constructor(){
    this.location = document.getElementById('w-location');
    this.country = document.getElementById('w-country');
    this.desc = document.getElementById('w-desc');
    this.pressure = document.getElementById('w-pressure');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.temprature = document.getElementById('w-temprature');
    this.wind = document.getElementById('w-wind');
   

}
paint(weather){
    let icon = weather.weather[0].icon
    this.iconImg = `http://openweathermap.org/img/w/${icon}.png`
    this.location.textContent = weather.name
    this.humidity.innerHTML = `Humidity : ${weather.main.humidity} %`
    this.desc.textContent = weather.weather[0].description
    this.icon.setAttribute('src',this.iconImg)
    this.wind.textContent = `Wind Speed : ${weather.wind.speed}`
    this.pressure.textContent = `Pressure : ${weather.main.pressure}`
    this.temprature.textContent = `Temprature: ${weather.main.temp}˚C`
    this.country.textContent = `Country: ${weather.sys.country}`
   
}
}


