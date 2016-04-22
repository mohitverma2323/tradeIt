function Contact(name, phoneNumber)
{
    this.name = name;
    this.phoneNumber = phoneNumber;
}

app.service('contactsService', function() {
    
    var contactList = new Array();

    
	return {
		getContacts : function() {
			return contactList;
		},
		addContact : function(item) {
		   contactList.push(item);	
		}
		
	};
});