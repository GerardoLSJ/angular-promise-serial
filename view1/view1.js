'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope,$q,$timeout) {


  var listOfItems = [1, 2, 3, 4, 5];
 // var promise = $q.all(listOfItems);

// Creating an empty initial promise that always resolves itself.
var promise = $q.all([]);

// Iterating list of items.
angular.forEach(listOfItems, function (item) {
  promise = promise.then(function () {
    return $timeout(function () {
      console.log('Item executed: ' + item);
        	
          return new Promise(function(success, error){
          console.log("Vuelta dentro: "+item);
          console.warn(item*item*item);
            setTimeout(function() {
              console.warn("ANOTHER DELAY OMG");
              return success();
            },  Math.floor((Math.random() * 1500) + 1));
          

        });

    }, Math.floor((Math.random() * 1500) + 1) );
  });
});

promise.finally(function () {
  console.log('Chain finished!');
});



});