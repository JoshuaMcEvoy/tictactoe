const gameLogic = {

  playerOne: true,
  playerTwo: false,
  playerOneScore: 0,
  playerTwoScore: 0,
  movesCount: 0,
  winnerFound: false,
  gameInProgress: true,
  cornerFlag: 0,
  plusFlag: 0,
  // swooshAudio: $('#swooshAudio')[0],
  gamePlayers: 1,
  gameZones: [['#squareThree'],
              ['#squareTwo', '#squareFour', '#squareSix', '#squareEight'],
              ['#squareOne', '#squareThree', '#squareSeven', '#squareNine']
            ],

  randomRangeArrayOne: function (max, min){
    return parseInt(Math.random() * (max - min) + min);
  },

  setDifficulty: function (){
    if (gameLogic.gamePlayers === 1){
      gameLogic.gamePlayers = 2;
      $('#difficulty').removeClass('button');
      $('#difficulty').addClass('buttonEasy');
      $('#difficulty').attr('value', 'Easy');
      gameLogic.resetBoard();

    }
    else if (gameLogic.gamePlayers === 2){
      gameLogic.gamePlayers = 3;
      $('#difficulty').removeClass('buttonEasy');
      $('#difficulty').addClass('buttonHard');
      $('#difficulty').attr('value', 'Hard');
      gameLogic.resetBoard();
    }
    else if (gameLogic.gamePlayers === 3){
      gameLogic.gamePlayers = 1;
      $('#difficulty').removeClass('buttonHard');
      $('#difficulty').addClass('button');
      $('#difficulty').attr('value', 'Player with friend');
      gameLogic.resetBoard();
    }

  },

  winnerScreen: function (){
    if (!gameLogic.playerOne){
      gameLogic.updateScore();
      // adds # and string to the end of url to call box
      window.location.hash='winnerX';
      gameLogic.gameInProgress = false;
    }
    else{
      gameLogic.updateScore();
      // adds # and string to the end of url to call box
      window.location.hash='winnerO';
      gameLogic.gameInProgress = false;
    }
  },

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
    gameLogic.gameInProgress = true;
    $('.strike').remove();
    $('.strikeDiag').remove();
    $('.strikeVert').remove();
    gameLogic.highlightSwitch();
    gameLogic.movesCount = 0;
    gameLogic.cornerFlag = 0;
    gameLogic.plusFlag = 0;
  },

  highlightSwitch: function (){
    gameLogic.playerOne = true;
    gameLogic.playerTwo = false;
    if (gameLogic.playerOne){
      // gameLogic.resetBoard();
      $('#scoreContainerPlayerOne').addClass('highlight');
      $('#scoreContainerPlayerTwo').removeClass('highlight');
    }
    else {
      // gameLogic.resetBoard();
      $('#scoreContainerPlayerTwo').addClass('highlight');
      $('#scoreContainerPlayerOne').removeClass('highlight');
    }
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
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strike strikeRowOne"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
    else if ($('#squareOne div').is('.wrap') && $('#squareTwo div').is('.wrap') && $('#squareThree div').is('.wrap')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      // gameLogic.resetBoard();
      let strikeOut = $('<div class="strike strikeRowOne"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
  },

  checkRowTwo: function () {
    if ($('#squareFour div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareSix div').is('#crossIcon')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strike strikeRowTwo"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
    else if ($('#squareFour div').is('.wrap') && $('#squareFive div').is('.wrap') && $('#squareSix div').is('.wrap')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strike strikeRowTwo"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
  },

  checkRowThree: function () {
    if ($('#squareSeven div').is('#crossIcon') && $('#squareEight div').is('#crossIcon') && $('#squareNine div').is('#crossIcon')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strike strikeRowThree"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
    else if ($('#squareSeven div').is('.wrap') && $('#squareEight div').is('.wrap') && $('#squareNine div').is('.wrap')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strike strikeRowThree"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
  },

  checkColOne: function () {
    if ($('#squareOne div').is('#crossIcon') && $('#squareFour div').is('#crossIcon') && $('#squareSeven div').is('#crossIcon')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strikeVert strikeColOne"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
    else if ($('#squareOne div').is('.wrap') && $('#squareFour div').is('.wrap') && $('#squareSeven div').is('.wrap')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strikeVert strikeColOne"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
  },

  checkColTwo: function () {
    if ($('#squareTwo div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareEight div').is('#crossIcon')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strikeVert strikeColTwo"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
    else if ($('#squareTwo div').is('.wrap') && $('#squareFive div').is('.wrap') && $('#squareEight div').is('.wrap')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strikeVert strikeColTwo"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);

    }
  },

  checkColThree: function () {
    if ($('#squareThree div').is('#crossIcon') && $('#squareSix div').is('#crossIcon') && $('#squareNine div').is('#crossIcon')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strikeVert strikeColThree"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
    else if ($('#squareThree div').is('.wrap') && $('#squareSix div').is('.wrap') && $('#squareNine div').is('.wrap')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strikeVert strikeColThree"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
  },

  checkDiagOne: function () {
    if ($('#squareOne div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareNine div').is('#crossIcon')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strikeDiag strikeDiagOne"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
    else if ($('#squareOne div').is('.wrap') && $('#squareFive div').is('.wrap') && $('#squareNine div').is('.wrap')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strikeDiag strikeDiagOne"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
  },

  checkDiagTwo: function () {
    if ($('#squareThree div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareSeven div').is('#crossIcon')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strikeDiag strikeDiagTwo"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
    else if ($('#squareThree div').is('.wrap') && $('#squareFive div').is('.wrap') && $('#squareSeven div').is('.wrap')){
      gameLogic.gameInProgress = false;
      gameLogic.winnerFound = true;
      let strikeOut = $('<div class="strikeDiag strikeDiagTwo"><div>')
      $('.gameBoard').append(strikeOut);
      setTimeout(gameLogic.winnerScreen, 1000);
    }
  },

  winnerCheck: function (){
    //Checks through logic to see if three matches are together

    if (gameLogic.movesCount <= 9){
      gameLogic.checkRowOne();
      gameLogic.checkRowTwo();
      gameLogic.checkRowThree();
      gameLogic.checkColOne();
      gameLogic.checkColTwo();
      gameLogic.checkColThree();
      gameLogic.checkDiagOne();
      gameLogic.checkDiagTwo();
    }
    if (gameLogic.movesCount === 9 && !gameLogic.winnerFound){
      gameLogic.gameInProgress = false;
      // adds # and string to the end of url to call box
      window.location.hash='draw';
      gameLogic.playerOne = true;
      gameLogic.movesCount = 0;
      gameLogic.cornerFlag = 0;
      gameLogic.plusFlag = 0;

    }
  },

  AIPlayer: function (el){
    // console.log('AI working');
    ///////////////////////////////////////////
    ////      START AI FUNCTION            ////
    ///////////////////////////////////////////
    let randomFirst = gameLogic.randomRangeArrayOne(3, 0);
    let randomSecond = gameLogic.randomRangeArrayOne(4, 0);
    let randomId = gameLogic.gameZones[parseInt(randomFirst)][parseInt(randomSecond)];

    if (randomId === undefined && gameLogic.gameInProgress === true){
      // gameLogic.AIPlayer(el);
      gameLogic.AIPlayer();
      gameLogic.winnerCheck();
    }
    else if ($(randomId)[0].childElementCount === 1 && gameLogic.gameInProgress === true) {
      gameLogic.AIPlayer();
      gameLogic.winnerCheck();
    }
    else if (gameLogic.gameInProgress === true){
      let circleDiv = $('<div></div>');
      circleDiv.attr('class','wrap');
      let spanDiv = $('<div></div>');
      spanDiv.attr('class', 'circle');
      $(randomId).append(circleDiv);
      $(circleDiv).append(spanDiv.clone());
      //changes playerTwo to false so will go back to playerOne's turn.
      // gameLogic.gameInProgress = false;
      gameLogic.playerTwo = false;
      gameLogic.resetPlayerOne();
      gameLogic.winnerCheck();
      gameLogic.movesCount += 1;
    }

    ///////////////////////////////////////////
    ////        END AI FUNCTION            ////
    ///////////////////////////////////////////
  },

  AIPlayerHard: function (el){
    debugger;
    //////////////////////////Start of second move
    //put in && flag is less than two

    //////////////////////////////////////
    ///   Start flags for positioning  ///
    //////////////////////////////////////
    if ( $('#squareTwo')[0].childElementCount === 1 || $('#squareFour')[0].childElementCount === 1 || $('#squareSix')[0].childElementCount === 1 || $('#squareEight')[0].childElementCount === 1 ) {
      if ($('#squareTwo')[0].childElementCount === 1){
        // console.log(`place corner`);
        gameLogic.plusFlag++;
      }
      if ($('#squareFour')[0].childElementCount === 1){
        // console.log(`place corner`);
        gameLogic.plusFlag++;
      }
      if ($('#squareSix')[0].childElementCount === 1){
        // console.log(`place corner`);
        gameLogic.plusFlag++;
      }
      if ($('#squareEight')[0].childElementCount === 1 ){
        // console.log(`place corner`);
        gameLogic.plusFlag++;
        // must break on this line
      }
    }

    if ( $('#squareOne')[0].childElementCount === 1 || $('#squareThree')[0].childElementCount === 1 || $('#squareSeven')[0].childElementCount === 1 || $('#squareNine')[0].childElementCount === 1 ){
      if ($('#squareOne')[0].childElementCount === 1){
        // console.log(`place plus`);
        gameLogic.cornerFlag++;
      }
      if ($('#squareThree')[0].childElementCount === 1){
        // console.log(`place plus`);
        gameLogic.cornerFlag++;
      }
      if ($('#squareSeven')[0].childElementCount === 1){
        // console.log(`place plus`);
        gameLogic.cornerFlag++;
      }
      if ($('#squareNine')[0].childElementCount === 1 ){
        gameLogic.cornerFlag++;
      }
    }
    //////////////////////////////////////
    ///    End flags for positioning   ///
    //////////////////////////////////////

    //////////////////////////////////////
    ///       Start of blockers        ///
    //////////////////////////////////////
    if (gameLogic.cornerFlag >= 2){
      if ( $('#squareOne')[0].childElementCount === 1 && $('#squareThree')[0].childElementCount === 1 && $('#squareTwo')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareTwo').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ( $('#squareOne')[0].childElementCount === 1 && $('#squareSeven')[0].childElementCount === 1 && $('#squareFour')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareFour').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ( $('#squareThree')[0].childElementCount === 1 && $('#squareNine')[0].childElementCount === 1 && $('#squareSix')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareSix').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ( $('#squareSeven')[0].childElementCount === 1 && $('#squareNine')[0].childElementCount === 1 && $('#squareEight')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareEight').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else {
        // let randomFirst = gameLogic.randomRangeArrayOne(3, 0);
        let randomSecond = gameLogic.randomRangeArrayOne(4, 0);
        let randomId = gameLogic.gameZones[1][parseInt(randomSecond)];

          if ($(randomId)[0].childElementCount === 1 && gameLogic.gameInProgress === true) {
            gameLogic.AIPlayer();
            gameLogic.winnerCheck();
          }
          else if (gameLogic.gameInProgress === true){
            let circleDiv = $('<div></div>');
            circleDiv.attr('class','wrap');
            let spanDiv = $('<div></div>');
            spanDiv.attr('class', 'circle');
            $(randomId).append(circleDiv);
            $(circleDiv).append(spanDiv.clone());
            //changes playerTwo to false so will go back to playerOne's turn.
            // gameLogic.gameInProgress = false;
            gameLogic.playerTwo = false;
            gameLogic.resetPlayerOne();
            gameLogic.winnerCheck();
            gameLogic.movesCount += 1;
          }
      }
    }
    else if (gameLogic.plusFlag){
      // if ($('#squareFive')[0].childElementCount === 1 && gameLogic.movesCount === 2){
      //   let circleDiv = $('<div></div>');
      //   circleDiv.attr('class','wrap');
      //   let spanDiv = $('<div></div>');
      //   spanDiv.attr('class', 'circle');
      //   $('#squareThree').append(circleDiv);
      //   $(circleDiv).append(spanDiv.clone());
      //   gameLogic.playerTwo = false;
      //   gameLogic.resetPlayerOne();
      //   gameLogic.winnerCheck();
      //   gameLogic.movesCount += 1;
      // }
      if ($('#squareFive')[0].childElementCount === 0){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareFive').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareOne div').is('#crossIcon') && $('#squareTwo div').is('#crossIcon') && $('#squareThree')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareThree').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      // Double match blockers
      else if ($('#squareOne div').is('#crossIcon') && $('#squareFour div').is('#crossIcon') && $('#squareSeven')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareSeven').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareTwo div').is('#crossIcon') && $('#squareThree div').is('#crossIcon') && $('#squareOne')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareOne').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareTwo div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareEight')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareEight').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareThree div').is('#crossIcon') && $('#squareSix div').is('#crossIcon') && $('#squareNine')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareNine').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareFour div').is('#crossIcon') && $('#squareSeven div').is('#crossIcon') && $('#squareOne')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareOne').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareFour div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareSix')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareSix').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareFive div').is('#crossIcon') && $('#squareEight div').is('#crossIcon') && $('#squareTwo')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareTwo').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareFive div').is('#crossIcon') && $('#squareSix div').is('#crossIcon') && $('#squareFour')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareFour').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareSix div').is('#crossIcon') && $('#squareNine div').is('#crossIcon') && $('#squareThree')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareThree').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareSeven div').is('#crossIcon') && $('#squareEight div').is('#crossIcon') && $('#squareNine')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareNine').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareEight div').is('#crossIcon') && $('#squareNine div').is('#crossIcon') && $('#squareSeven')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareSeven').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareOne div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareNine')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareNine').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareThree div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareSeven')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareSeven').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareSeven div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareThree')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareThree').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }
      else if ($('#squareNine div').is('#crossIcon') && $('#squareFive div').is('#crossIcon') && $('#squareOne')[0].childElementCount === 0 ){
        let circleDiv = $('<div></div>');
        circleDiv.attr('class','wrap');
        let spanDiv = $('<div></div>');
        spanDiv.attr('class', 'circle');
        $('#squareOne').append(circleDiv);
        $(circleDiv).append(spanDiv.clone());
        gameLogic.playerTwo = false;
        gameLogic.resetPlayerOne();
        gameLogic.winnerCheck();
        gameLogic.movesCount += 1;
      }


    }

    //////////////////////////Start of first move
    else if ( ($('#squareFive')[0].childElementCount === 0) ){
      //Zone One
      let circleDiv = $('<div></div>');
      circleDiv.attr('class','wrap');
      let spanDiv = $('<div></div>');
      spanDiv.attr('class', 'circle');
      $('#squareFive').append(circleDiv);
      $(circleDiv).append(spanDiv.clone());
      gameLogic.playerTwo = false;
      gameLogic.resetPlayerOne();
      gameLogic.winnerCheck();
      gameLogic.movesCount += 1;
    }

    else if ( $('#squareTwo')[0].childElementCount === 0 && $('#squareFour')[0].childElementCount === 0 && $('#squareSix')[0].childElementCount === 0 && $('#squareEight')[0].childElementCount === 0 ){
      //Zone Two
      let random = gameLogic.randomRangeArrayOne(4, 0)
      let randomId = gameLogic.gameZones[1][parseInt(random)];
      let circleDiv = $('<div></div>');
      circleDiv.attr('class','wrap');
      let spanDiv = $('<div></div>');
      spanDiv.attr('class', 'circle');
      $(randomId).append(circleDiv);
      $(circleDiv).append(spanDiv.clone());
      gameLogic.playerTwo = false;
      gameLogic.resetPlayerOne();
      gameLogic.winnerCheck();
      gameLogic.movesCount += 1;

    }
    //////////////////////////End of first move

    else {
      gameLogic.AIPlayer();
    }

  },

  runAI: function (el){
    gameLogic.AIPlayer(el)
  },

  runAIHard: function (el){
    gameLogic.AIPlayerHard(el)
  },

  divClicked: function (el){
    //starts easy AI
    // debugger;
    if (gameLogic.gamePlayers === 2 && gameLogic.gameInProgress === true){

      if (gameLogic.playerTwo){
        setTimeout(gameLogic.runAI, 1100);
      }
      else if (gameLogic.playerOne){
        gameLogic.movesCount += 1;
        let crossDiv = $('<div></div>');
        crossDiv.attr('id','crossIcon');
        let spanDiv = $('<span></span>');
        $(this).append(crossDiv);
        $(crossDiv).append(spanDiv.clone());
        $(crossDiv).append(spanDiv.clone());
        // gameLogic.swooshAudio.play();
        gameLogic.playerOne = false;
        gameLogic.resetPlayerTwo();
        gameLogic.winnerCheck();
        gameLogic.divClicked();
        if (gameLogic.playerOne){
          $('#scoreContainerPlayerOne').addClass('highlight');
          $('#scoreContainerPlayerTwo').removeClass('highlight');
        }
        else {
          $('#scoreContainerPlayerTwo').addClass('highlight');
          $('#scoreContainerPlayerOne').removeClass('highlight');
        }
      }
    }

    //starts Hard AI
    else if (gameLogic.gamePlayers === 3){

      if (gameLogic.playerTwo){
        setTimeout(gameLogic.runAIHard, 1100);
      }
      else if (gameLogic.playerOne) {
        gameLogic.movesCount += 1;
        let crossDiv = $('<div></div>');
        crossDiv.attr('id','crossIcon');
        let spanDiv = $('<span></span>');
        $(this).append(crossDiv);
        $(crossDiv).append(spanDiv.clone());
        $(crossDiv).append(spanDiv.clone());
        // gameLogic.swooshAudio.play();
        gameLogic.playerOne = false;
        gameLogic.resetPlayerTwo();
        gameLogic.winnerCheck();
        gameLogic.divClicked();
        if (gameLogic.playerOne){
          $('#scoreContainerPlayerOne').addClass('highlight');
          $('#scoreContainerPlayerTwo').removeClass('highlight');
        }
        else {
          $('#scoreContainerPlayerTwo').addClass('highlight');
          $('#scoreContainerPlayerOne').removeClass('highlight');
        }
      }
    }

    //starts two player
    else if (gameLogic.gamePlayers === 1){

      if (!gameLogic.gameInProgress){
        //stops user from clicking board
      }

      // if this has a child element then log
      else if ($(this)[0].childElementCount === 1){
        console.log(`already picked`);
      }

      else if (gameLogic.playerOne){
        gameLogic.movesCount += 1;
        let crossDiv = $('<div></div>');
        crossDiv.attr('id','crossIcon');
        let spanDiv = $('<span></span>');
        $(this).append(crossDiv);
        $(crossDiv).append(spanDiv.clone());
        $(crossDiv).append(spanDiv.clone());
        // gameLogic.swooshAudio.play();
        gameLogic.playerOne = false;
        gameLogic.resetPlayerTwo();
        gameLogic.winnerCheck();
      }
      else {
        gameLogic.movesCount += 1;
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
    }
  };

$(document).ready(function () {
  //will alternate between players.
  $('#scoreContainerPlayerTwo').on('click', function (){
    gameLogic.playerOne = false;
    gameLogic.playerTwo = true;
    if (gameLogic.playerOne){
      // gameLogic.resetBoard();
      $('#scoreContainerPlayerOne').addClass('highlight');
      $('#scoreContainerPlayerTwo').removeClass('highlight');
    }
    else {
      // gameLogic.resetBoard();
      $('#scoreContainerPlayerTwo').addClass('highlight');
      $('#scoreContainerPlayerOne').removeClass('highlight');
      gameLogic.divClicked(this);
    }
  });

  $('#scoreContainerPlayerOne').on('click', function (){
    gameLogic.highlightSwitch();
  });

  //sets the playerOne to highligthed so it can be toggled later.
  $('#scoreContainerPlayerOne').addClass('highlight');

  //reload the whole page, resets counts and sets playerOne to true.
  $('#restartButton').on('click', function(){
    location.reload();
    gameLogic.resetBoard();
    gameLogic.movesCount = 0;
  })
  //watches for click on squares and runs function to determine what should be placed in square.
  $('.square').on('click', gameLogic.divClicked);

  //clears board when close button on pop up is clicked.
  $('.close').on('click', gameLogic.resetBoard);

  $('#difficulty').on('click', gameLogic.setDifficulty);

});
