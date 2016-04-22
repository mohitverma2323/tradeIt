app.controller('contactsController', function($scope, $route, $location, contactsService, messageService){
   
  $scope.contacts = contactsService.getContacts();
    
    $scope.message = messageService.getMessage();
    
  $scope.addContact = function()
    {
        
        var rec = new Contact($scope.cname, $scope.cnumber);
        contactsService.addContact(rec);
        $location.path('/contacts');
    }
});