app.controller('itemsController', function($scope, $route, $location, itemsService, messageService){
   
  $scope.items = itemsService.getItems();
    
    $scope.message = messageService.getMessage();
    
  $scope.addItem = function()
    {
        
        var rec = new Item($scope.iname, $scope.rate);
        itemsService.addItem(rec);
        $location.path('/items');
    }
});