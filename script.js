$(document).ready(function(){
  function hangman(word){
    var ch = $("#userChoice").val();
    word = word.split("");
    console.log("ch: ", ch);
    var wrongGuesses = [];
    for(var i = 0; i < word.length; i++){
      $("#blankWord").append(" _ ");
      $("#base").append("___");
    }
    $("#guess").click(function(){
      word.forEach(function(w){
        if(ch === w){
          $("#blankWord").append(ch);
          
        } else {
          wrongGuesses.push(ch);
          $("#wrongGuesses").append(wrongGuesses);
          // console.log("w: ", w);
          // console.log("ch: ", ch);
        }
      });
    });
  }
  
  hangman("fantastic");
});
