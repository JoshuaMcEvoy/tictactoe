const gameLogic = {

  playerOne: true,
  playerTwo: false,
  playerOneScore: 0,
  playerTwoScore: 0,

  resetBoard: function (){
    //removes classes of cross and naught from all divs
    $('#squareOne').empty();

    $('#squareTwo').empty();

    $('#squareThree').empty();

    $('#squareFour').empty();

    $('#squareFive').empty();

    $('#squareSix').empty();

    $('#squareSeven').empty();

    $('#squareEight').empty();

    $('#squareNine').empty();
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
    if ($('#squareOne div').is('#crossIcon') && $('#squareTwo div').is('#crossIcon') && $('#squareThree div').is('#crossIcon')){
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
    if ($('#squareFour div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareSix div').is('#crossIcon')){
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
    if ($('#squareSeven div').is('#crossIcon') && $('#squareEight div').is('#crossIcon') && $('#squareNine div').is('#crossIcon')){
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
    if ($('#squareOne div').is('#crossIcon') && $('#squareFour div').is('#crossIcon') && $('#squareSeven div').is('#crossIcon')){
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
    if ($('#squareTwo div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareEight div').is('#crossIcon')){
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
    if ($('#squareThree div').is('#crossIcon') && $('#squareSix div').is('#crossIcon') && $('#squareNine div').is('#crossIcon')){
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
    if ($('#squareOne div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareNine div').is('#crossIcon')){
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
    if ($('#squareThree div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareSeven div').is('#crossIcon')){
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
      console.log(`this = ${this}`);
      let crossDiv = $('<div></div>');
      crossDiv.attr('id','crossIcon');
      let spanDiv = $('<span></span>');
      $(this).append(crossDiv);
      $(crossDiv).append(spanDiv.clone());
      $(crossDiv).append(spanDiv.clone());


      // $(this).addClass('cross');
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
  $('.circle').on('click', function () {
    $(this).toggleClass('flash');
  })
  $('.square').on('click', gameLogic.divClicked)
});
