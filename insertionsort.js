$(function(){

  /* ******************
   * GLOBAL VARIABLES *
   * ******************/
  
  var $cards = $('#cards');
  var $playingCards = $('.playingCards');

  /* ****************
   * EVENT HANDLERS *
   * ****************/

  $playingCards.on('click', this, function(){
    swapWithPrevCard($(this));
  });

  /* ******************
   * HELPER FUNCTIONS *
   * ******************/
  
  var rand = function(max){
    return Math.floor(Math.random() * max);
  }; 

  var shuffleCards = function(){
    $cards.fadeOut('slow', function(){
      _.each($cards.children(), function(card){
        $(card).insertBefore($cards.children()[rand(5)]);
      });
      $cards.fadeIn(1000);
    });

  };

  var swapWithPrevCard = function(card){
    var $card = card;
    var $prev = $card.prev(); 
    if(!$prev.length){ return; } 
    var distance = $card.position().left - $prev.position().left;
    
    $card.animate({'left': '-' + distance + 'px'}, 
      { duration: 500,
        start: function(){
          $prev.animate({'left': distance + 'px'}, 500); 
        },
        done: function(){
          $card.css('left', 'auto');
          $prev.css('left', 'auto');
          $card.insertBefore($prev); 
        }
      });
  };
  var swapWithNextCard = function(card){
    var $card = card;
    var $next = $card.next(); 
    if(!$next.length){ return; } 
    var distance = $next.position().left - $card.position().left;
    
    $card.animate({'left': distance + 'px'}, 
      { duration: 500,
        start: function(){
          $next.animate({'left': '-' + distance + 'px'}, 500); 
        },
        done: function(){
          $card.css('left', 'auto');
          $next.css('left', 'auto');
          $card.insertAfter($next); 
        }
      });
  };

  /* **************
   * DEFAULT CODE *
   * **************/

  shuffleCards();
});
