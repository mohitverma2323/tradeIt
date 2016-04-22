app.service('messageService', function() {
    
    var message = "Everything Looks Good :)" ;
    
    
	return {
		getMessage : function() {
			return message;
		},
		setMessage : function(msg) {
		   message = msg;
            return message;
		}
		
	};
});