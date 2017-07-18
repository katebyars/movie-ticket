//Business Logic
function Ticket(age, time, titles) {
  this.age = age;
  this.time = time;
  this.titles = titles;
}
 function ticketPrice(age, time, titles) {
  return age + time + titles
}
//UI Logic
$(function(){
  $(".tickets").submit(function(event){
    event.preventDefault();
    var age = parseInt($("input:radio[name=age]:checked").val());
    var time = parseInt($("input:radio[name=time]:checked").val());
    var titles = parseInt($("input:radio[name=titles]:checked").val());
    $(".outputPrice").empty();
    $(".outputPrice").append("<li>" + " $" + ticketPrice(age, time, titles) + "</li>");
    //var age = val("")
  });
});
