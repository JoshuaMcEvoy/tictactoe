const gameLogic = {

  playerOne: true,
  playerTwo: false,
  playerOneScore: 0,
  playerTwoScore: 0,

  resetBoard: function (){
    //removes classes of cross and naught from all divs
    $('#squareOne').removeClass('cross');
    $('#squareOne').removeClass('naught');

    $('#squareTwo').removeClass('cross');
    $('#squareTwo').removeClass('naught');

    $('#squareThree').removeClass('cross');
    $('#squareThree').removeClass('naught');

    $('#squareFour').removeClass('cross');
    $('#squareFour').removeClass('naught');

    $('#squareFive').removeClass('cross');
    $('#squareFive').removeClass('naught');

    $('#squareSix').removeClass('cross');
    $('#squareSix').removeClass('naught');

    $('#squareSeven').removeClass('cross');
    $('#squareSeven').removeClass('naught');

    $('#squareEight').removeClass('cross');
    $('#squareEight').removeClass('naught');

    $('#squareNine').removeClass('cross');
    $('#squareNine').removeClass('naught');
  },

  resetPlayerOne: function (){
    //resets the player to true so they can have the next turn
    gameLogic.playerOne = true;
  },

  resetPlayerTwo: function (){
    //resets the player to true so they can have the next turn
    gameLogic.playerTwo = true;
  },

  rowOne: function () {
    if ($('#squareOne').hasClass('cross') && $('#squareTwo').hasClass('cross') && $('#squareThree').hasClass('cross')){
      console.log(`Player One Wins!`);
      gameLogic.playerOneScore + 1;
      gameLogic.resetBoard();
    }
    else if ($('#squareOne').hasClass('naught') && $('#squareTwo').hasClass('naught') && $('#squareThree').hasClass('naught')){
      console.log(`Player Two Wins!`);
      gameLogic.playerTwoScore + 1;
      gameLogic.resetBoard();
    }
  },

  rowTwo: function () {
    if ($('#squareFour').hasClass('cross') && $('#squareFive').hasClass('cross') && $('#squareSix').hasClass('cross')){
      console.log(`Player One Wins!`);
      gameLogic.playerOneScore + 1;
      gameLogic.resetBoard();
    }
    else if ($('#squareFour').hasClass('naught') && $('#squareFive').hasClass('naught') && $('#squareSix').hasClass('naught')){
      console.log(`Player Two Wins!`);
      gameLogic.playerTwoScore + 1;
      gameLogic.resetBoard();
    }
  },

  rowThree: function () {
    if ($('#squareSeven').hasClass('cross') && $('#squareEight').hasClass('cross') && $('#squareNine').hasClass('cross')){
      console.log(`Player One Wins!`);
      gameLogic.playerOneScore + 1;
      gameLogic.resetBoard();
    }
    else if ($('#squareSeven').hasClass('naught') && $('#squareEight').hasClass('naught') && $('#squareNine').hasClass('naught')){
      console.log(`Player Two Wins!`);
      gameLogic.playerTwoScore + 1;
      gameLogic.resetBoard();
    }
  },

  colOne: function () {
    if ($('#squareOne').hasClass('cross') && $('#squareFour').hasClass('cross') && $('#squareSeven').hasClass('cross')){
      console.log(`Player One Wins!`);
      gameLogic.playerOneScore + 1;
      gameLogic.resetBoard();
    }
    else if ($('#squareOne').hasClass('naught') && $('#squareFour').hasClass('naught') && $('#squareSeven').hasClass('naught')){
      console.log(`Player Two Wins!`);
      gameLogic.playerTwoScore + 1;
      gameLogic.resetBoard();
    }
  },

  colTwo: function () {
    if ($('#squareTwo').hasClass('cross') && $('#squareFive').hasClass('cross') && $('#squareEight').hasClass('cross')){
      console.log(`Player One Wins!`);
      gameLogic.playerOneScore + 1;
      gameLogic.resetBoard();
    }
    else if ($('#squareTwo').hasClass('naught') && $('#squareFive').hasClass('naught') && $('#squareEight').hasClass('naught')){
      console.log(`Player Two Wins!`);
      gameLogic.playerTwoScore + 1;
      gameLogic.resetBoard();
    }
  },

  colThree: function () {
    if ($('#squareThree').hasClass('cross') && $('#squareSix').hasClass('cross') && $('#squareNine').hasClass('cross')){
      console.log(`Player One Wins!`);
      gameLogic.playerOneScore + 1;
      gameLogic.resetBoard();
    }
    else if ($('#squareThree').hasClass('naught') && $('#squareSix').hasClass('naught') && $('#squareNine').hasClass('naught')){
      console.log(`Player Two Wins!`);
      gameLogic.playerTwoScore + 1;
      gameLogic.resetBoard();
    }
  },

  diagOne : function () {
    if ($('#squareOne').hasClass('cross') && $('#squareFive').hasClass('cross') && $('#squareNine').hasClass('cross')){
      console.log(`Player One Wins!`);
      gameLogic.playerOneScore + 1;
      gameLogic.resetBoard();
    }
    else if ($('#squareOne').hasClass('naught') && $('#squareFive').hasClass('naught') && $('#squareNine').hasClass('naught')){
      console.log(`Player Two Wins!`);
      gameLogic.playerTwoScore + 1;
      gameLogic.resetBoard();
    }
  },

  diagTwo : function () {
    if ($('#squareThree').hasClass('cross') && $('#squareFive').hasClass('cross') && $('#squareSeven').hasClass('cross')){
      console.log(`Player One Wins!`);
      gameLogic.playerOneScore + 1;
      gameLogic.resetBoard();
    }
    else if ($('#squareThree').hasClass('naught') && $('#squareFive').hasClass('naught') && $('#squareSeven').hasClass('naught')){
      console.log(`Player Two Wins!`);
      gameLogic.playerTwoScore + 1;
      gameLogic.resetBoard();
    }
  },

  winnerCheck: function (){
    //Checks through logic to see if three matches are together
    gameLogic.rowOne();
    gameLogic.rowTwo();
    gameLogic.rowThree();
    gameLogic.colOne();
    gameLogic.colTwo();
    gameLogic.colThree();
    gameLogic.diagOne();
    gameLogic.diagTwo();
  },

  divClicked: function (){
    if (
      $(this).hasClass('cross') ||
      $(this).hasClass('naught')
      ){
      console.log(`already picked`);
    }

    else if (gameLogic.playerOne){
      $(this).addClass('cross');
      gameLogic.playerOne = false;
      gameLogic.resetPlayerTwo();
      gameLogic.winnerCheck();
    }
    else {
      $(this).addClass('naught');
      gameLogic.playerTwo = false;
      gameLogic.resetPlayerOne();
      gameLogic.winnerCheck();
    }
  }
};


$(document).ready(function () {
  //jquery here
  $('#crossIcon').on('click', function (){
    $(this).toggleClass('expand');
  });
  $('.square').on('click', gameLogic.divClicked)
});
