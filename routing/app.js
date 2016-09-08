var sampleApp = angular.module('sampleApp', []);
 
sampleApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addOrder', {
        templateUrl: 'templates/add_order.html',
        controller: 'AddOrderController'
      }).
      when('/showOrders', {
        templateUrl: 'templates/show_orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/addOrder'
      });
  }]);

sampleApp.controller('AddOrderController', ['$scope', function($scope){

}]);

sampleApp.controller('ShowOrdersController', ['$scope', function($scope){

}]);