angular.module('smartMirror.controller', [])
  .controller('appController', (Weather, $scope, $interval) => {
    getWeather();
    $interval(getWeather, 18000000)

    function getWeather() {
      navigator.geolocation.getCurrentPosition((pos) => {
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        Weather.get(lat, lon)
          .then((data)=> {
            $scope.weather = data.weather[0];
            var temp = Math.round((data.main.temp * 9/5) - 459.67);
            $scope.temp = temp;
          }, (err) => {
            console.log(err);
          });
      });
    }
  });
