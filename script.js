//contact constructor / business logic
function Contact(first, last) {
    this.firstName = first; 
    this.lastName = last;
}
//new contact object
/*var ada = new Contact("Ada", "Lovelace");
var me =new Contact("mag","mutheu")
console.log(me.firstName);*/

  // user interface logic
  $(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
  
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });
  });
