$(document).ready(function(){
  function hangman(word){
    var $ch = $("#userChoice");
    var ug = ' ';
    var result = [];
    // var letterArray = word.split("");
    var guess = false;
    var wrongGuesses = [];
    var misses = 0;
    for(var i = 0; i < word.length; i++){
      $("#blankWord").append(" _ ");
      $("#base").append("___");
    }
    $("#guess").click(function(){
      ug = $ch.val();
      console.log("ug: ", ug);
      letterArray.forEach(function(l){
        result = letterArray.map(function(w, i){
          if(ug === l){
            return result[i] = w;
            $("#blankWord").append(result);
            $(this).val('');
          } else {
            return  result[i] = ' _ ';
            // result = result.splice(i,1,' _ ');
          }
          // return ( ug === w) ? result[i] = w : result[i] = '_' ;
        });
        wrongGuesses.push(ug);
        $("#wrongGuesses").append(wrongGuesses);
      });
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
