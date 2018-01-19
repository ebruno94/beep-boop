// Business
function isException(number){
  if (number === "0" || number === "1"){
    return true;
  } else {
    return false;
  }
};

function containsPunctuation(sentence){
  var punctuations = ["!",",","."];
  var boolFlag = false;
  for (var index = 0; index < punctuations.length; index++){
    if (sentence.includes(punctuations[index])){
      boolFlag = true;
    };
  }
  return boolFlag;
};

function analyze(number, name){
  var arrayNums = number.split("");
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

function reverse(analyzedResult){
  if (containsPunctuation(analyzedResult)){
    return analyzedResult;
  } else {
    var newString = "";
    for (var i = analyzedResult.length - 1; i >= 0; i-- ){
      newString += analyzedResult[i];
    }
    return newString;
  }
};


// UI
$(document).ready(function(){
  var userName = "";
  var userNum = "";
  var result = "";
  $("#form").submit(function(event){
    userName = $("input#name").val();
    userNum = $("input#number").val();
    event.preventDefault();
    result = analyze(userNum, userName);
    $("#resultWindow").show();
    $("#result").text(result);
  });
  $("#reverse").click(function(event){
    event.preventDefault();
    result = reverse(analyze(userNum, userName));
    $("#result").text(result);
  });
});
