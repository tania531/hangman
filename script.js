$(document).ready(function(){
  function hangman(word){
    var $ch = $("#userChoice");
    var ug = ' ';
    var result = [];
    var letterArray = word.split("");
    var guess = false;
    var wrongGuesses = [];
    var misses = 0;
    for(var i = 0; i < word.length; i++){
      $("#blankWord").append(" _ ");
      $("#base").append("___");
    }
    $("#guess").click(function(){
      ug = $ch.val();
      if(word.indexOf(ug) === -1){
        wrongGuesses.push(ug);
        $("#wrongGuesses").html(wrongGuesses);
        misses++;
      } else {
        for(var i = 0; i < word.length; i++){
          if(ug === word[i]){
            result[i] = ug;
          }
        }
      }

      $("#blankWord").html("Current Result: " + result);
      // return result;
      $ch.val('');
    }); // end click
    $("#wrongGuesses").append(wrongGuesses);
    $("#figure").append('Misses: ' + misses);
  }

  hangman("apple");
});
