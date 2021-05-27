var app=new Vue({
    el:"#app",
    data:{
        city:"",
        weatherList:[]

    },
    methods:{
        searchWeather:function (){
            var self=this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
           .then(function (response){
                self.weatherList=response.data.data.forecast
           },function (err){})
        },
        changeCity:function (city){
            this.city=city;
            this.searchWeather();
        }
    }
})