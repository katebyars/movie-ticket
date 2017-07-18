//Business Logic
function Ticket(names, age, time, titles) {
  this.names = names;
  this.age = age;
  this.time = time;
  this.titles = titles;
}

Ticket.prototype.ticketPrice = function (age, time, titles) {
  //this.age senior = 10

    if (age === "senior") {
      this.age = 10
    }  else if (age === "adult") {
      this.age = 12
    } else if (age === "child") {
      this.age = 8
    }


    if (time === "morning") {
      this.time = 1
    }
    else if (time === "afternoon") {
      this.time = 2
    }
    else if (time === "evening") {
      this.time = 3
    }

   if (titles === "new-release") {
     this.titles = 3
   }
   else if (titles === "vintage" ) {
     this.titles = 2
   }
   else if (titles === "second-run") {
     this.titles = 1
   }

 return price = (this.age + this.time + this.titles);
}

Ticket.prototype.ticketDetails = function(){
  return "Guest Name: " + this.names  + " Discount: " + this.age + " Movie Time:  " + this.time + " Movie Type: " + this.titles;
}

//UI Logic
$(function(){
  $("#tickets").submit(function(event){
    event.preventDefault();

      var inputtedNames = $("#names").val();
      var inputtedAge = $("input:radio[name=age]:checked").val();
      var inputtedTime = $("input:radio[name=time]:checked").val();
      var inputtedTitle = $("input:radio[name=titles]:checked").val();

      var newTicketDetails = new Ticket(inputtedNames, inputtedAge, inputtedTime, inputtedTitle);
      console.log(newTicketDetails);


      $(".output").text(newTicketDetails.ticketDetails());
      $(".outputPrice").text("$" +newTicketDetails.ticketPrice(inputtedAge, inputtedTime, inputtedTitle));

     $('#names').val('');
     $('.radio').val('');
  });
});
