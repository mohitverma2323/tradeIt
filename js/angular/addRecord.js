app.controller('addRecordController', function($scope, $route, $location, dataService, itemsService, contactsService, messageService){
  
    $scope.itemList = itemsService.getItems();
    $scope.contactList = contactsService.getContacts();
    $scope.message = messageService.getMessage();
    
    if($scope.itemList.length==0)
        {
            messageService.setMessage("You don't have any items to sell, add Items in items list");
            $location.path('/addItem')
        
        }
       else if($scope.contactList.length==0)
           {
               messageService.setMessage("You don't have any contacts, add a Contact in contacts list");
               $location.path('/addContact');
           }
    
    $scope.addRecord = function()
    {
        
        var rec = new Record($scope.date, $scope.name, $scope.item, $scope.quantity, $scope.rate, ($scope.quantity * $scope.rate), $scope.type);
        dataService.addRecord(rec);
        $location.path('/records');
    }
    
    
});