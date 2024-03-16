class RPS_GAME{
    player1;
    player2;
    arrayRounds = []; 
    currentRoundNumber = 1;
    rock;
    paper;
    scissors;   

    constructor(parPlayer1, parPlayer2, parNumRounds){
        const shapeNameRock = 'Rock';
        const shapeNamePaper = 'Paper';
        const shapeNameScissors = 'Scissors';
        const imagePlayer1Rock = 'images/player1Rock.png';
        const imagePlayer2Rock = 'images/player2Rock.png';
        const imagePlayer1Paper = 'images/player1Paper.png';
        const imagePlayer2Paper = 'images/player2Paper.png';
        const imagePlayer1Scissors = 'images/player1Scissors.png';
        const imagePlayer2Scissors = 'images/player2Scissors.png';     
             
        this.player1 = parPlayer1;
        this.player2 = parPlayer2;
        for(let index = 0; index < parNumRounds; index++){
            this.arrayRounds[index] = new Round(
                                           [       //arrayTurns
                                             new Turn(this.player1)
                                            ,new Turn(this.player2)
                                          ]
            );//arrayRounds[index] = new Round(
        }//for(let index = 0; index < parNumRounds; index++){

        this.rock = new Rock(shapeNameRock,[imagePlayer1Rock, imagePlayer2Rock]);     
        this.paper = new Paper(shapeNamePaper, [imagePlayer1Paper, imagePlayer2Paper]);    
        this.scissors = new Scissors(shapeNameScissors, [imagePlayer1Scissors, imagePlayer2Scissors]);
        this.playRound(this.currentRoundNumber);
    }//constructor(parArrayPlayers, parNumRounds){

    isGameOver(){
        let result = false;

        const isCurrentScoreSame = this.player1.score===this.player2.score;
        const leadingScore = Math.max(this.player1.score, this.player2.score);

        if(this.currentRoundNumber === this.arrayRounds.length)
        {
            result = true;
        }
        else if(!isCurrentScoreSame)
        {
            result = this.arrayRounds.length/2 < leadingScore?true:false;
        }

        return result;

    }//isGameOver(){

    getGameWinner(){
        const drawMessage = 'Draw!';
        let winner = '';
        if(this.player1.score===this.player2.score){
            winner = drawMessage;
        }
        else if(this.player1.score > this.player2.score)
        {
            winner = player1.playerName;
        }
        else
        {
            winner = player2.playerName;
        }
        return winner;
    }//getGameWinner(){

    playRound(parCurrentRoundNumber){
        const totalRounds = this.arrayRounds.length;

        //Example: Round 1 of total rounds
        displayRoundInfo(parCurrentRoundNumber, totalRounds); 
        
        displaySectionScore(
            {
                [this.player1.playerName]:this.player1.score
               ,[this.player2.playerName]:this.player2.score
            }
        );//displayWinsCounter({

        //If player 2 is a human, display player to look away.
        const currentRound = this.arrayRounds[parCurrentRoundNumber-1];
        const isPlayer1Turn = currentRound.currentTurnNumber === 0;
        //if(this.player2.playerName != 'Computer')
        if(!isPlayer2Computer(this.player2.playerName))
        {            
            displayLookAwayMessage(
                isPlayer1Turn?this.player2.playerName
                                :this.player1.playerName
                                );

        }//if(this.#player2 instanceof HumanPlayer)

        displayCurrentTurnPlayerName(isPlayer1Turn?this.player1.playerName
                                        :this.player2.playerName
                                    );//displayCurrentTurnPlayerName(isPlayer1Turn?this.player1.playerName

        displayShapes(isPlayer1Turn
                    ,this.rock.arrayShapePlayerImages
                    ,this.paper.arrayShapePlayerImages
                    ,this.scissors.arrayShapePlayerImages
                    );   
    }//playRound(parCurrentRound){

}//class RPS_GAME(){