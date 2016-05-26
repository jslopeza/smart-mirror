angular.module('smartMirror.services', [])
  .factory('Weather', ['$http', '$q', ($http, $q) => {
    return {
      get: (lat, lon) => {
        var q = $q.defer();
        $http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cb315c8650e67370d543f8faf0f032c5`)
          .success((weather) => {
            q.resolve(weather);
          })
          .error((err) => {
            q.reject(err);
          });

        return q.promise;
      }
    }
  }]);
