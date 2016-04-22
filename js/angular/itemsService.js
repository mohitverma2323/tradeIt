function Item(name, rate)
{
    this.name = name;
    this.rate = rate;
}

app.service('itemsService', function() {
    
    var itemList = new Array();
    
    
	return {
		getItems : function() {
			return itemList;
		},
		addItem : function(item) {
		   itemList.push(item);	
		}
		
	};
});