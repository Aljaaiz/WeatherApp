class Weather{
    constructor(city,state){
        this.key = '85ff954134f310afbd25828f921c38fe';
        this.city = city;
        this.state = state;
    }

    // Fetch Waether from Api
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.key}&units=metric`)

        const responseData = await response.json();
        return responseData
    }
    changeLocation(city,state){
        this.state = state;
        this.city = city;
    }
}
