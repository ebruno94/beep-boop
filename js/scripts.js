// Business
function isException(number){
  if (number === "0" || number === "1"){
    return true;
  } else {
    return false;
  }
}

function analyze(number, name){
  var arrayNums = number.split("");
  console.log(arrayNums);
  console.log(number);
  var result = "";
  if ((number % 3 === 0) && (number !== "0")){
    return "I'm sorry, " + name + ". I'm afraid I can't do that.";
  } else {
      for (var i = 0; i < arrayNums.length; i++){
        if (!isException(arrayNums[i])){
          result += arrayNums[i];
        } else {
          if (arrayNums[i] === "0"){
            result = "Beep!";
          } else {
            result = "Boop!";
          }
          break;
        }
      }
    return result;
  }
};


// UI
$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var userName = $("input#name").val();
    var userNum = $("input#number").val();
    var result = analyze(userNum, userName);
    $("#resultWindow").show();
    $(".result").text(result);
  });
});
