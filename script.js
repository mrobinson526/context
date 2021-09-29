var accusation = 1;

var createH3 = function() {
  var h3 = $('<h3></h3>').text("Accusation " + accusation);
  $('body').append(h3);
  accusation++;

  if (accusation > 100) {
    console.log("Reached 100;");
    return;
  } else {
    createH3();
  }
}

$(document).ready(function() {
  createH3();

})