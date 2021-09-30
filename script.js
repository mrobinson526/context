var accusation = 1;
var createH3 = function() {
  var h3 = $('<h3></h3>').text("Accusation " + accusation);
  $('body').append(h3);
  accusation++;

  if (accusation > 100) {
    console.log("Reached 100;");
    displayArr();
    return;
  } else {
    createH3();
  }
}

$(document).ready(function() {
  createH3();
  $('.container>h3').click(function() {
    alert("Accusation" [i] + ": " + "I accuse " + friendArr[i] + ", " + "with the " + weaponArr[i] + " in the " + locationArr[i] + "!" );
  });
  
  function makeArr() {
    var accusation = 1;
    var friendArr = ["Tony", "James", "Mary", "John", "Sheila"];
    var weaponArr = ["shovel", "axe", "knife", "bat", "cup", "plate", "chair", "brick", "coin", "shoe", "purse", "fruit", "phone", "pen", "vase", "cd", "tape", "broom", "cup", "keys"];
    var locationArr = ["copy room", "kitchen", "back yard", "front yard", "porch", "swimming pool", "field", "break room", "class room", "den"];
  };
  function displayArr() {
    for (i=0; i<Math.max(friendArr.length, weaponArr.length, locationArr.length); i++) {
      var arrFri = friendArr[i%friendArr.length];
      var arrWea = weaponArr[i%weaponArr.length];
      var arrLoc = locationArr(i%locationArr.length);
      alert("Accusation" [i] + ": " + "I accuse " + friendArr[i] + ", " + "with the " + weaponArr[i] + " in the " + locationArr[i] + "!" );
    }
    return displayArr;
  }
  var myArr = makeArr();
  myArr();
});