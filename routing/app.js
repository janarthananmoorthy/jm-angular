var sampleApp = angular.module('sampleApp', []);
 
sampleApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addOrder', {
        templateUrl: 'templates/add_order.html',
        controller: 'AddOrderController'
      }).
      when('/showCarModels', {
        templateUrl: 'templates/show_models.html',
        controller: 'ShowModelsController',
        modelType: 'CAR'
      }).
      when('/showBikeModels', {
        templateUrl: 'templates/show_models.html',
        controller: 'ShowModelsController',
        modelType: 'BIKE'
      }).
      when('/showOrders/:orderId', {
        templateUrl: 'templates/show_models.html',
        controller: 'ShowModelsController'
      }).
      otherwise({
        redirectTo: '/addOrder'
      });
  }]);

sampleApp.controller('AddOrderController', ['$scope', function($scope){

}]);

sampleApp.controller('ShowModelsController', ['$scope', '$route' ,'$routeParams', function($scope, $route, $routeParams){
  $scope.order_id = $routeParams.orderId;
  $scope.model_type = $route.current.modelType;

}]);