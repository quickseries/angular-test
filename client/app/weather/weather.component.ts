angular.module('weather').component('weather', {

    // templateUrl: 'weather.template.html',
    template: `
    <form>
        <p>Painel | Temperature</p>
        <div class="row">
            <div class="col-sm-2">
                <div class="form-group">
                    <input type="number" ng-model="weather" class="form-control" step="0.1" required>
                </div>
            </div> 
            <div class="col-sm-2">
                <div class="form-group">
                    <button type="submit" ng-click="addWeather(weather)" class="btn btn-success">Add Temperature</button>
                </div>    
            </div>    
        </div>       
    </form>

    <div class="row">
    <div class="col-md-8">
        <h3>Temperature Log:</h3>    
        <table class="table table-striped table-bordered" ng-if="weatherList.length >0">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temperature</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="item in weatherList">
                    <th>{{item.date | date}} </th>
                    <td>{{item.number }} °c</td>
                    <td><button ng-click="removeWeather(item)" class="btn btn-danger">Remove</button></td>
                </tr>
            </tbody>
        </table>
    </div>        
    </div>

    `,
    controller: function weatherController($scope) {
        $scope.weatherList = [];


        // Add weather
        $scope.addWeather = function (weather) {
            if(weather == null){
                alert("This field requied a value.")
                return;
            }
            
            //convert to decimal
            var temperature = parseFloat(weather);
            
            if(!temperature){
                alert("This field requied only numbers.")
                return;
            }
  
            //add  temperature in weather list
            $scope.weatherList.push({ 'number': weather, date: new Date() });
        }

        //Remove Weather
        $scope.removeWeather = function (item) {
            //remove de weather of weatherList              
            $scope.weatherList.splice($scope.weatherList.indexOf(item), 1);
        }

    }

})

