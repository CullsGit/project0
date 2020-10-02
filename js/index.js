let player1Marker = '';
let player2Marker = '';
let player1 = null;
let tiles = ['','','','','','','','',''];
let swordScore = 0;
let shieldScore = 0;


const checkForWin = function (marker) {
  if (tiles[0] === marker && tiles[1] === marker && tiles[2] === marker ||
      tiles[3] === marker && tiles[4] === marker && tiles[5] === marker ||
      tiles[6] === marker && tiles[7] === marker && tiles[8] === marker ||
      tiles[0] === marker && tiles[3] === marker && tiles[6] === marker ||
      tiles[1] === marker && tiles[4] === marker && tiles[7] === marker ||
      tiles[2] === marker && tiles[5] === marker && tiles[8] === marker ||
      tiles[0] === marker && tiles[4] === marker && tiles[8] === marker ||
      tiles[2] === marker && tiles[4] === marker && tiles[6] === marker) {

      if (marker === 'X') {
        $('.Xtile').css('transform','scale(1.4)');
        $('.box').css('pointer-events', 'none');
        swordScore += 1;
        $('#sc1').html(swordScore);

      } else {
        $('.Otile').css('transform','scale(1.4)');
        $('.box').css('pointer-events', 'none');
        shieldScore += 1;
        $('#sc2').html(shieldScore);
      }

  }

}

//checks if all tiles are filled and no winner.
const checkForTie = function() {
  if (tiles.includes('')) {
    playing = true;
  } else {
    playing = false;
  }
};

//changes whos turn it is
const changePlayer = function() {
  if (player1 === true) {
    player1 = false;

  } else {
    player1 = true;
  }
};

//coin toss for which player goes first
const goesFirst = function() {
  const coin = Math.round(Math.random());
  if (coin === 1) {
    player1 = true;

  } else {
    player1 = false;
  };
};

$(document).ready(function() {

    $('.bigbtn').on('click', function() {

      $('#shield').toggleClass('shrink');
      $('#shield').css('pointer-events', 'none');
      $('#sword').animate({
        left: -250 ,
        top: -15,
      }, 1500);
      $('#sword').css('pointer-events', 'none');
      $('#sword').toggleClass('shrink');
      $('#shield').animate({
        right: -250 ,
        top: -15,
      }, 1500);
      $('.choose').fadeOut(2000);
      // $('.choose').css('visibility', 'hidden');
      if ($(this).attr('id') === 'sword') {
        player1Marker = 'X'
        $('#sw').html('P1:')
        player2Marker = 'O'
        $('#sh').html('P2:')
      } else {
        player1Marker = 'O'
        $('#sw').html('P2:')
        player2Marker = 'X'
        $('#sh').html('P1:')
      }
    })


    goesFirst()
    $('.box').on('click', function() {

      if (player1) {
        const box = $(this).attr('id');
        tiles[parseInt(box)-1] = player1Marker;
        $(this).addClass(`${ player1Marker }tile`)
        $(this).unbind('click');
        checkForTie();
        changePlayer();
        checkForWin(player1Marker);
      } else {
        const box = $(this).attr('id');
        tiles[parseInt(box)-1] = player2Marker;
        $(this).addClass(`${ player2Marker }tile`)
        $(this).unbind('click');
        checkForTie()
        changePlayer()
        checkForWin(player2Marker);
      };

    });
//reset button buggy
    $('#reset').on('click', function() {
      tiles = ['','','','','','','','',''];

      $('.box').css("background-image", "url(images/cardfront.png)")
      $('.box').css('transform','scale(1)');



    })



});
