app.controller('balanceController', function($scope, $route, $location, dataService){
   
    $scope.records = dataService.getRecords();
    
    $scope.balance = new Array();
    
    for(i=0;i<records.length ; i++)
        {
            if(!(res = checkInBalance(records[i].name)))
                { 
                    bal.name = records[i].name;
                    bal.amount = records[i].amount;
                    $scope.balance.push(bal);
                }
            else
                {
                    $scope.balance[res].amount + records[i].amount;
                }
            
            
        }
            
    function checkInBalance(val)
            {
                for(k=0;k<$scope.balance.length;k++)
                    {
                        if(balance.name==val)
                            return k;
                    }
                
                    return false;
                
            }
    
});