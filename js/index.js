// markers (X,O)
//player one chooses marker
//random choice for who goes first
//change marker function at the end of each turn

const markers = ['X','O'];
const player1Marker = 'X';
const player2Marker = 'O';
let player1 = null;
let playing = true;
let tiles = ['','','','','','','','',''];

// const checkForWin = function() {
//   if (tiles[0] && tiles[1] && tiles[2] === )
// }
//checks if all
const checkForTie = function() {
  if (!tiles.includes('')) {
    playing = false;
  }
};

//changes whos turn it is
const changePlayer = function() {
  if (player1) {
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

// click return which box it is.
$(document).ready(function() {
  if (playing) {

    $('.box').on('click', function() {
      if (player1) {
        const box = $(this).attr('id');
        tiles[parseInt(box)-1] = player1Marker;
        $(this).html(player1Marker);
        $(this).unbind('click');
        // checkForWin()
        checkForTie()
        changePlayer()
      } else {
        const box = $(this).attr('id');
        tiles[parseInt(box)-1] = player2Marker;
        $(this).html(player2Marker);
        $(this).unbind('click');
        // checkForWin()
        checkForTie()
        changePlayer()
      }
    });
  } else {
    console.log("Would you like to play again?");
  }






});
