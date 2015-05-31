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
      console.log('ug: ', ug);
      if(word.indexOf(ug) === -1){
        alert('wrong');
        wrongGuesses.push(ug);
      } else {
        alert('right');
        for(var i = 0; i < word.length; i++){
          if(ug === word[i]){
            result[i] = ug;
          }
        }
      }


      $("#blankWord").html(result);
      // return result;
      $ch.val('');
    }); // end click
    $("#blankWord").html(result);
    $("#wrongGuesses").append(wrongGuesses);
    $("#figure").append('Misses: ' + misses);
  }

  hangman("apple");
});
