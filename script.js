var accusation = 1;
var friendArr = ["Tony", "James", "Mary", "John", "Sheila"];
var weaponArr = ["shovel", "axe", "knife", "bat", "cup", "plate", "chair", "brick", "coin", "shoe", "purse", "fruit", "phone", "pen", "vase", "cd", "tape", "broom", "cup", "keys"];
var locationArr = ["copy room", "kitchen", "back yard", "front yard", "porch", "swimming pool", "field", "break room", "class room", "den"];


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
  $("h3").on("click", function(msgH3) {
    alert("Accusation" + accusation + ":" + " I accuse " + friendArr[i] + " with the " + weaponArr[i] + " in the " + locationArr[i] + "!");
  })
msgH3();
  for (i=0; i<99999; i++) {
    console.log(friendArr[i%friendArr.length], weaponArr[i%weaponArr.length], locationArr[i%locationArr.length]);
  }
})