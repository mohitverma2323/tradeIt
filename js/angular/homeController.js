app.controller('homeController', function($scope, $route, $location, dataService){
   
    console.log("this is awesome!");
    
    $scope.changePage = function(val)
    {
        console.log(val);
        console.log("here here!");
        $location.path('/'+val);
    }
    
});