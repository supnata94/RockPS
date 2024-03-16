class Round{
    currentTurnNumber = 0;
    arrayTurns = [];
    roundWinner = '';

    constructor(parArrayTurns){
        this.arrayTurns = parArrayTurns;
    }//constructor(parCurrentRound, parArrayTurns){

    getRoundWinner(){
        const drawMessage = 'Draw!';
        const isBothShapeSame = this.arrayTurns[0].selectedShape===this.arrayTurns[1].selectedShape?true:false;

        if(isBothShapeSame)
        {
            this.roundWinner = drawMessage;
        }
        else if(this.arrayTurns[0].selectedShape.defeats(this.arrayTurns[1].selectedShape))
        {
            this.roundWinner = this.arrayTurns[0].playerTurn.playerName;
        }
        else
        {
            this.roundWinner = this.arrayTurns[1].playerTurn.playerName;
        }
        return this.roundWinner;
    }//getRoundWinner(){

}//class RPS_ROUND{