const gameLogic = {

  playerOne: true,
  playerTwo: false,
  playerOneScore: 0,
  playerTwoScore: 0,
  movesCount: 0,

  updateScore: function(){
    //look for player being FALSE as it has already be modified in the divClicked function.
    if (!gameLogic.playerOne){
      gameLogic.playerOneScore += 1;
      gameLogic.movesCount = 0;
      $('#playerOneScoreLabel').html(gameLogic.playerOneScore);
    }
    else {
      gameLogic.playerTwoScore += 1;
      gameLogic.movesCount = 0;
      $('#playerTwoScoreLabel').html(gameLogic.playerTwoScore);
    }
  },

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

    gameLogic.playerOne = true;
  },

  resetPlayerOne: function (){
    //resets the player to true so they can have the next turn
    gameLogic.playerOne = true;
  },

  resetPlayerTwo: function (){
    //resets the player to true so they can have the next turn
    gameLogic.playerTwo = true;
  },

  checkRowOne: function () {
    if ($('#squareOne div').is('#crossIcon') && $('#squareTwo div').is('#crossIcon') && $('#squareThree div').is('#crossIcon')){
      console.log(`Player One Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strike strikeRowOne"><div>')
      $('body').append(strikeOut);
      // gameLogic.winnerScreen();
    }
    else if ($('#squareOne div').is('.wrap') && $('#squareTwo div').is('.wrap') && $('#squareThree div').is('.wrap')){
      console.log(`Player Two Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strike strikeRowOne"><div>')
      $('body').append(strikeOut);
      // gameLogic.winnerScreen();
    }
  },

  checkRowTwo: function () {
    if ($('#squareFour div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareSix div').is('#crossIcon')){
      console.log(`Player One Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strike strikeRowTwo"><div>')
      $('body').append(strikeOut);
    }
    else if ($('#squareFour div').is('.wrap') && $('#squareFive div').is('.wrap') && $('#squareSix div').is('.wrap')){
      console.log(`Player Two Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strike strikeRowTwo"><div>')
      $('body').append(strikeOut);
    }
  },

  checkRowThree: function () {
    if ($('#squareSeven div').is('#crossIcon') && $('#squareEight div').is('#crossIcon') && $('#squareNine div').is('#crossIcon')){
      console.log(`Player One Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strike strikeRowThree"><div>')
      $('body').append(strikeOut);
    }
    else if ($('#squareSeven div').is('.wrap') && $('#squareEight div').is('.wrap') && $('#squareNine div').is('.wrap')){
      console.log(`Player Two Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strike strikeRowThree"><div>')
      $('body').append(strikeOut);
    }
  },

  checkColOne: function () {
    if ($('#squareOne div').is('#crossIcon') && $('#squareFour div').is('#crossIcon') && $('#squareSeven div').is('#crossIcon')){
      console.log(`Player One Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strikeVert strikeColOne"><div>')
      $('body').append(strikeOut);
    }
    else if ($('#squareOne div').is('.wrap') && $('#squareFour div').is('.wrap') && $('#squareSeven div').is('.wrap')){
      console.log(`Player Two Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strikeVert strikeColOne"><div>')
      $('body').append(strikeOut);
    }
  },

  checkColTwo: function () {
    if ($('#squareTwo div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareEight div').is('#crossIcon')){
      console.log(`Player One Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strikeVert strikeColTwo"><div>')
      $('body').append(strikeOut);
    }
    else if ($('#squareTwo div').is('.wrap') && $('#squareFive div').is('.wrap') && $('#squareEight div').is('.wrap')){
      console.log(`Player Two Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strikeVert strikeColTwo"><div>')
      $('body').append(strikeOut);

    }
  },

  checkColThree: function () {
    if ($('#squareThree div').is('#crossIcon') && $('#squareSix div').is('#crossIcon') && $('#squareNine div').is('#crossIcon')){
      console.log(`Player One Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strikeVert strikeColThree"><div>')
      $('body').append(strikeOut);
    }
    else if ($('#squareThree div').is('.wrap') && $('#squareSix div').is('.wrap') && $('#squareNine div').is('.wrap')){
      console.log(`Player Two Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strikeVert strikeColThree"><div>')
      $('body').append(strikeOut);
    }
  },

  checkDiagOne: function () {
    if ($('#squareOne div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareNine div').is('#crossIcon')){
      console.log(`Player One Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strikeDiag strikeDiagOne"><div>')
      $('body').append(strikeOut);
    }
    else if ($('#squareOne div').is('.wrap') && $('#squareFive div').is('.wrap') && $('#squareNine div').is('.wrap')){
      console.log(`Player Two Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strikeDiag strikeDiagOne"><div>')
      $('body').append(strikeOut);
    }
  },

  checkDiagTwo: function () {
    if ($('#squareThree div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareSeven div').is('#crossIcon')){
      console.log(`Player One Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strikeDiag strikeDiagTwo"><div>')
      $('body').append(strikeOut);
    }
    else if ($('#squareThree div').is('.wrap') && $('#squareFive div').is('.wrap') && $('#squareSeven div').is('.wrap')){
      console.log(`Player Two Wins!`);
      gameLogic.updateScore();
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strikeDiag strikeDiagTwo"><div>')
      $('body').append(strikeOut);
    }
  },

  winnerCheck: function (){
    //Checks through logic to see if three matches are together
    gameLogic.checkRowOne();
    gameLogic.checkRowTwo();
    gameLogic.checkRowThree();
    gameLogic.checkColOne();
    gameLogic.checkColTwo();
    gameLogic.checkColThree();
    gameLogic.checkDiagOne();
    gameLogic.checkDiagTwo();
    if (gameLogic.movesCount === 9){
      //draw
      gameLogic.resetBoard();
      alert(`DRAW!`)
    }
  },

  divClicked: function (){
    gameLogic.movesCount += 1;
    // if this has a child element then log
    if ($(this)[0].childElementCount === 1){
      console.log(`already picked`);
    }

    else if (gameLogic.playerOne){
      let crossDiv = $('<div></div>');
      crossDiv.attr('id','crossIcon');
      let spanDiv = $('<span></span>');
      $(this).append(crossDiv);
      $(crossDiv).append(spanDiv.clone());
      $(crossDiv).append(spanDiv.clone());
      gameLogic.playerOne = false;
      gameLogic.resetPlayerTwo();
      gameLogic.winnerCheck();
    }
    else {
      // create divs and applies class/ids to make and animate circles
      let circleDiv = $('<div></div>');
      circleDiv.attr('class','wrap');
      let spanDiv = $('<div></div>');
      spanDiv.attr('class', 'circle');
      $(this).append(circleDiv);
      $(circleDiv).append(spanDiv.clone());
      //changes playerTwo to false so will go back to playerOne's turn.
      gameLogic.playerTwo = false;
      gameLogic.resetPlayerOne();
      gameLogic.winnerCheck();
    }
    if (gameLogic.playerOne){
      $('#scoreContainerPlayerOne').addClass('highlight');
      $('#scoreContainerPlayerTwo').removeClass('highlight');
    }
    else {
      $('#scoreContainerPlayerTwo').addClass('highlight');
      $('#scoreContainerPlayerOne').removeClass('highlight');
    }
  }
};

$(document).ready(function () {
  if (gameLogic.playerOne){
    $('#scoreContainerPlayerOne').addClass('highlight');
  }
  else {
    $('#scoreContainerPlayerTwo').addClass('highlight');
  }
  //reload the whole page, removing counts and setting playerOne to true.
  $('#restartButton').on('click', function(){
    location.reload();
    gameLogic.resetBoard();
    gameLogic.movesCount = 0;
  })
  //watches for click on squares and runs function to determine what should be placed in square.
  $('.square').on('click', gameLogic.divClicked)
});
