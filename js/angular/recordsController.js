app.controller('recordsController', function($scope, $route, $location, dataService){
   
  $scope.records = dataService.getRecords();
    
    
});