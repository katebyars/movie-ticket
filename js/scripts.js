//Business Logic
function Ticket(names, age, time, titles) {
  this.names = name;
  this.age = age;
  this.time = time;
  this.titles = titles;
}

Ticket.prototype.ticketDetails = function(){
  return this.names + ", " + this.age + ", " + this.time + ", " + this.titles;
}

//UI Logic
$(function(){
  $(".tickets").submit(function(event){
    event.preventDefault();

      var inputtedNames = $('input#names').val();
      var inputtedAge = $("input:radio[name=age]:checked").val();
      var inputtedTime = $("input:radio[name=time]:checked").val();
      var inputtedTitle = $("input:radio[name=titles]:checked").val();


      var newTicketDetails = (inputtedNames, inputtedAge, inputtedTime, inputtedTitle);
      alert(newTicketDetails)

  //  $(".outputPrice").empty();
    newTicketDetails.forEach(function(newTicketDetail){
      $("ul.outputPrice").append("<li>" + newTicketDetail.ticketDetails() + "</li>");
    });
    $('#names').val('');
    $('.radio').val('');
  });
});
