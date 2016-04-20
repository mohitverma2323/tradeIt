app.controller('addRecordController', function($scope, $route, $location, dataService){
  
    
    
    $scope.addRecord = function()
    {
        
        var rec = new Record($scope.date, $scope.name, $scope.item, $scope.quantity, $scope.rate, $scope.amount, $scope.type);
        dataService.addRecord(rec);
        $location.path('/records');
    }
    
    
});