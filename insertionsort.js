$(function(){

  /* ******************
   * GLOBAL VARIABLES *
   * ******************/
  var $cards = $('#cards');

  /* ******************
   * HELPER FUNCTIONS *
   * ******************/
  
  // Generate a random number
  var rand = function(max){
    return Math.floor(Math.random() * max);
  }; 

  // Fade out, shuffle cards, fade in
  var shuffleCards = function(){
    $cards.fadeOut('slow', function(){
      _.each($cards.children(), function(card){
        $(card).insertBefore($cards.children()[rand(5)]);
      });
      $cards.fadeIn(1000);
    });
  };

  // Swap two cards
  var swapCards = function($card1, $card2){
  };

  /* **************
   * DEFAULT CODE *
   * **************/

  shuffleCards();
});
