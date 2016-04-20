function Record(date, name,item, quantity, rate, amount, type)
{
    this.date = date;
    this.name = name;
    this.item = item;
    this.quantity = quantity;
    this.rate = rate;
    this.amount = amount;
    this.type = type;
    
}

app.service('dataService', function() {
	
    
    
    var recordList = new Array();

   	
	
	return {
		getRecords : function() {
			return recordList;
		},
		addRecord : function(rec) {
		   recordList.push(rec);	
		}
		
	};
});