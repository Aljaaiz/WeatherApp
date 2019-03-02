const storage = new Storage()
//get Stored location Data
const weatherLocation = storage.getLocationData();
// Initialze Weather Object
const weather = new Weather(weatherLocation.city,weatherLocation.state);
const ui = new UI()


// Get Weather on DOM LOAD
  document.addEventListener('DOMContentLoaded',getWeather)


  // Change Location Event
  document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    e.preventDefault()
    let state = document.getElementById('state').value;
    let city = document.getElementById('city').value;

    weather.changeLocation(city,state)
   //Set to LS
    storage.setLocationData(city,state)
    //GEt and Display Weather
    getWeather()
    $('#locModal').modal('hide')
  })


function getWeather(){
    weather.getWeather()
    .then(res => {
       ui.paint(res)
       console.log(res);
       
    })
    .catch(err => console.log(err));
}