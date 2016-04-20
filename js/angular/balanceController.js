app.controller('balanceController', function($scope, $route, $location, dataService){
   
    var records = dataService.getRecords();
    
    $scope.balance = new Array();
     
    function Contact (name, amount)
    {
        this.name = name;
        this.amount = amount;
    }
    
    
    for(i=0;i< records.length ; i++)
        {
            res = checkInBalance(records[i].name);
            if(res===false)
                { 
                    var bal = new Contact(records[i].name, records[i].amount);
                    $scope.balance.push(bal);
                 }
            else
                {
                    console.log("index is: "+res);
                    var oldBal = $scope.balance[res].amount;
                    var addBal = records[i].amount;
                    console.log("old balance "+oldBal);
                    console.log("add Balance "+addBal);
                    $scope.balance[res].amount = parseFloat(oldBal)+parseFloat(addBal);
                    
                }
            
            
        }
            
    function checkInBalance(val)
            {
                                
                for(k=0;k<$scope.balance.length;k++)
                    {
                        
                        if($scope.balance[k].name==val)
                            {
                            return k;
                            }
                    }
                
                    return false;
                
            }
    
});