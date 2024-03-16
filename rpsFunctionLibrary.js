function preLoadValues(){

    //Display the game owner's name at the header. Example: John's Rock paper scissors.
    document.querySelector('title').innerHTML = displayNameInPossessiveNoun(gameOwnerName)+' Rock Paper Scissors';
    document.querySelector('.ownerName').innerHTML = displayNameInPossessiveNoun(gameOwnerName);

    //BEGIN: PRELOADED VALUES FOR TESTING
    // //Check two players
    // document.querySelector('#formNumPlayers input[value="2"]').checked = true;

    // //Player 1 name: Ethan
    // document.querySelector('#inputPlayer1Name').value = 'Ethan';

    // //Player 2 name: Fiona
    // document.querySelector('#inputPlayer2Name').value = 'Fiona';

    // //Number of rounds: Three
    // document.querySelector('#formPlayerNameAndRounds input[value="3"]').checked = true;
    //END: PRELOADED VALUES FOR TESTING
}//function preLoadValues(){

function displayCurrentTurnPlayerName(parPlayerName){
    const turnPlayerName = document.querySelector('#turnPlayerName');
    turnPlayerName.innerHTML = displayNameInPossessiveNoun(parPlayerName);
}//function displayCurrentTurnPlayerName(parPlayerName){

function displayElement(parElement){
    parElement.classList.remove('d-none');
    parElement.classList.add('d-block');
}//function displayElement(parElement){

function displayLookAwayMessage(parPlayerName){
    const alertLookAway = document.querySelector('#alertLookAway');
    const playerToLookAway = document.querySelector('#playerToLookAway');

    displayElement(alertLookAway);
    playerToLookAway.innerHTML = parPlayerName;
}//function displayLookAwayMessage(playerName){

function displayNameInPossessiveNoun(parName){    
    const isTheLastLetter_S = parName.charAt(parName.length - 1).toLowerCase() === 's';    
    return isTheLastLetter_S ? parName+"&apos;" : parName+"&apos;s";
}//function getOwnerName(parName){

//displayRoundInfo(1, parNumRounds);
function displayRoundInfo(parCurrentRound, parTotalRounds){
    const roundCounter = document.querySelector('#roundCounter'); 
    const currentRound = document.querySelectorAll('.currentRound');
    const totalRounds = document.querySelector('#totalRounds');
    
    displayElement(roundCounter);

    //currentRound.innerHTML = parCurrentRound;
    for(let index = 0; index<currentRound.length; index++){
        currentRound[index].innerHTML = parCurrentRound;
    }//for(let index = 0; index<currentRound.length; index++){
    totalRounds.innerHTML = parTotalRounds;
}//function displayRoundInfo(parCurrentRound, parTotalRounds){

function displayRoundWinner(parRPSGame)
{
    const roundWinnerName = document.querySelector('#roundWinnerName');
    const currentRound = parRPSGame.arrayRounds[currentRoundNumber-1];
    const roundResult = currentRound.getRoundWinner();
    const player1Score = document.querySelector('#player1Score');
    const player2Score = document.querySelector('#player2Score');
    const player1SelectedShapeImage = document.querySelector('#player1SelectedShapeImage');
    const player2SelectedShapeImage = document.querySelector('#player2SelectedShapeImage');
    const player1SelectedShapeName = document.querySelector('#player1SelectedShapeName');
    const player2SelectedShapeName = document.querySelector('#player2SelectedShapeName');
    const btnPlayNextRound = document.querySelector('#btnPlayNextRound');
    const btnDisplayWinner = document.querySelector('#btnDisplayWinner');

    //hide sectionSelectAShape
    toggleDisplayElement(sectionSelectAShape);

    //displayRoundWinnerNameAndUpdateScores(roundResult, player1, player2);
    if(player1.playerName===roundResult)
    {
      player1Score.innerHTML = ++player1.score
      roundWinnerName.innerHTML = player1.playerName;
    }
    else if(player2.playerName===roundResult)
    {
      player2Score.innerHTML = ++player2.score
      roundWinnerName.innerHTML = player2.playerName;
    }
    else
    {
      roundWinnerName.innerHTML = roundResult; //Draw!              
    }

    //Display selected shape of each player.
    player1SelectedShapeImage.src = currentRound.arrayTurns[0].selectedShape.arrayShapePlayerImages[0];
    player2SelectedShapeImage.src = currentRound.arrayTurns[1].selectedShape.arrayShapePlayerImages[1];
    player1SelectedShapeName.innerHTML = currentRound.arrayTurns[0].selectedShape.shapeName;
    player2SelectedShapeName.innerHTML = currentRound.arrayTurns[1].selectedShape.shapeName;



    //BEGIN: TEMP
    if(parRPSGame.isGameOver())
    {
        displayElement(btnDisplayWinner);
        hideElement(btnPlayNextRound);
    }
    else
    {
      displayElement(btnPlayNextRound);
      hideElement(btnDisplayWinner);
    }
    //END: TEMP

    toggleDisplayElement(roundWinner);
}//function displayRoundWinnder()

function whitenames(names) {
    if (document.getElementById("inputPlayer1Name").value===0)
    $("btnStartGame").prop("disabled", true);
    if (document.getElementById("inputPlayer2Name").value===0) {
        $("btnStartGame").prop("disabled", true);
    }
}// Function to no continue when names are not declared

function displayShapes(parIsPlayer1Turn
                      ,parRockImages
                      ,parPaperImages
                      ,parScissorsImages
                      )
{
    const imgRock = document.querySelector('#imgRock');
    const imgPaper = document.querySelector('#imgPaper');
    const imgScissors = document.querySelector('#imgScissors');
    const sectionSelectAShape = document.querySelector('#sectionSelectAShape');
 
    if(parIsPlayer1Turn)
    {
        imgRock.setAttribute('src', parRockImages[0]);
        imgPaper.setAttribute('src', parPaperImages[0]);
        imgScissors.setAttribute('src', parScissorsImages[0]);
    }
    else
    {
        imgRock.setAttribute('src', parRockImages[1]);
        imgPaper.setAttribute('src', parPaperImages[1]);
        imgScissors.setAttribute('src', parScissorsImages[1]);
    }
    
    if(sectionSelectAShape.classList.contains('d-none'))
    {
        toggleDisplayElement(sectionSelectAShape);
    }    
}//function displayShapes(parIsPlayer1Turn){
    
function displaySectionScore(parPlayerScores){
    const sectionScore = document.querySelector('#sectionScore');
    const player1Name = document.querySelector('.player1Name');
    const player1Score = document.querySelector('#player1Score');
    const player2Name = document.querySelector('.player2Name');
    const player2Score = document.querySelector('#player2Score');
    
    displayElement(sectionScore);        

    arrayPlayerScores = Object.entries(parPlayerScores);
    player1Name.innerHTML = arrayPlayerScores[0][0];
    player1Score.innerHTML = arrayPlayerScores[0][1];
    player2Name.innerHTML = arrayPlayerScores[1][0];
    player2Score.innerHTML = arrayPlayerScores[1][1];
        
}//function displaySectionScore(parPlayer1, parPlayer2){


function getNumPlayers(){    
    const inputNumPlayerRadioButtonGroup = document.querySelectorAll("input[name=inputNumPlayer]");
    return Number(getRadioButtonValue(inputNumPlayerRadioButtonGroup));
}//function getNumPlayers(){

function getRadioButtonValue(parRadioButtons){
    let radioButtonValue = '';

    for(const radioButton of parRadioButtons){
        if(radioButton.checked)
        {
            radioButtonValue = radioButton.value;
        }
    }//for(const radioButton of parRadioButtons){

    return radioButtonValue;
}//function getRadioButtonValue(parElement){

function hideElement(parElement){
    parElement.classList.remove('d-block');
    parElement.classList.add('d-none');
}//function hideElement(parElement){

function isPlayer2Computer(parPlayer2Name){
    return parPlayer2Name === 'Computer';
}

function prepareGame(parNumPlayers){
    
    const divNumPlayers = document.querySelector('.divNumPlayers');
    const formPlayerNameAndRounds = document.querySelector('#formPlayerNameAndRounds');
    const textBoxPlayer2 = document.querySelector('#textBoxPlayer2');
    
    toggleDisplayElement(divNumPlayers);
    toggleDisplayElement(formPlayerNameAndRounds);

    if(parNumPlayers===1)
    {
        hideElement(textBoxPlayer2);
    }
}//function inputNumPlayersAndRounds(){

function setupSectionSelectAShape(parRpsGame){
    const roundCounter = document.querySelector('#roundCounter');
    const currentRound = document.querySelector('#currentRound');
    const totalRounds = document.querySelector('#totalRounds');

    const sectionScore = document.querySelector('#sectionScore');
    const player1Names = document.querySelectorAll('.player1Name');
    const player1Score = document.querySelector('#player1Score');
    const player2Names = document.querySelectorAll('.player2Name');
    const player2Score = document.querySelector('#player2Score');

    const alertLookAway = document.querySelector('#alertLookAway');
    const alertPlayer2Name = document.querySelector('.player2Name');

    const turnPlayerName = document.querySelector('#turnPlayerName');

    toggleDisplayElement(roundCounter);
    currentRound.innerHTML = parRpsGame.currentRound;
    totalRounds.innerHTML = parRpsGame.totalRounds;

    toggleDisplayElement(sectionScore);
    player1Names.forEach(function(player1Name){
        player1Name.innerHTML = parRpsGame.players[0].playerName;
    });
    player1Score.innerHTML = parRpsGame.players[0].score;
    player2Names.forEach(function(player2Name){
        player2Name.innerHTML = parRpsGame.players[1].playerName;
    });

    player2Score.innerHTML = parRpsGame.players[1].score;

    if(inputNumPlayer==1)
    {
        hideElement(alertLookAway);
    }

    turnPlayerName.innerHTML = displayNameInPossessiveNoun(parRpsGame.players[0].playerName);



}//function setupSectionSelectAShape(){

function toggleDisplayElement(parElement){
    if(parElement.classList.contains('d-block'))
    {
        hideElement(parElement);
    }
    else if(parElement.classList.contains('d-none'))
    {
        displayElement(parElement);
    }
}//function toggleDisplayElement(parElement){

