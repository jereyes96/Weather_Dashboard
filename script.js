let weather = {
    apikey:"ab20ecf3a7a7334c37d13604a356c965",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=" + this.apiKey
        )
        .then((response)=> response.json())
        .then((data)=> console.log(data));
    },
   /* displayWeather: function(data) {
        const{name}= data;
        const{icon, description } = data.weather[0];
        const{temp, humidity} = data.main;
        const{ speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innertext = "Weather in " + name;
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();

})

// API KEY NOT WORKING FOR  SOME REASON
