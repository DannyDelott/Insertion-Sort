$(function(){

  /* ******************
   * GLOBAL VARIABLES *
   * ******************/
  var $playingCards = $('.playingCards');
  var $table = $('.table');

  /* ******************
   * HELPER FUNCTIONS *
   * ******************/
  // Generate a random number
  var rand = function(max){
    return Math.floor(Math.random() * max);
  }; 

  // Fade out, shuffle cards, fade in
  var shuffleCards = function(){
    $playingCards.fadeOut('slow', function(){
      _.each($table.children(), function(card){
        $(card).insertBefore($table.children()[rand(4)]);
      });
      $playingCards.fadeIn('slow');
    });

  };

  /* **************
   * DEFAULT CODE *
   * **************/

  shuffleCards();
});
