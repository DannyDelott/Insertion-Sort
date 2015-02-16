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

  // swaps the card with the previous sibling, then executes a done function.
  var swapWithPrevCard = function(card, done){
    var $card = card;
    var $prev = $card.prev(); 
    if(!$prev.length){ return; } 
    done = done || function(){};
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
          done();
        }
      });
  };
  var swapWithNextCard = function(card, done){
    var $card = card;
    var $next = $card.next(); 
    if(!$next.length){ return; } 
    done = done || function(){};
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
          done();
        }
      });
  };

  var insertionSort = function(){
    var str = '';
    _.each($cards.children(), function(card, i, arr){
      str += ', ' + $(card).find('.rank').text();
    });
    console.log(str);
  };

  /* **************
   * DEFAULT CODE *
   * **************/

  shuffleCards();
});
