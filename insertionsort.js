$(function(){

  /* ******************
   * GLOBAL VARIABLES *
   * ******************/

  var $ace = $('#ace');
  var $two = $('#two');
  var $three = $('#three');
  var $four = $('#four');
  var $five = $('#five');
  var deck = [$ace, $two, $three, $four, $five];

  /* ******************
   * HELPER FUNCTIONS *
   * ******************/

  var rand = function(max){
    return Math.floor(Math.random() * max);
  }; 

  var shuffleCards = function(){
    _.each(deck, function(card, key, collection){
      card.insertAfter(collection[rand(4)]);
    });
  };

  /* **************
   * DEFAULT CODE *
   * **************/

  shuffleCards();
});
