class Turn{
    playerTurn = '';
    selectedShape = '';

    constructor(parPlayer){
        this.playerTurn = parPlayer;
    }//constructor(parPlayer)

    prepareTurn(parCurrentPlayer
        , parOtherPlayer
        , parIsPlayer1Turn
        , parRock
        , parPaper
        , parScissors)
    {
        //Look away message is only applicable if there are two human players
        if(!isPlayer2Computer(parCurrentPlayer.playerName))
        {
            displayLookAwayMessage(parOtherPlayer.playerName);
        }

        displayCurrentTurnPlayerName(parCurrentPlayer.playerName);
        displayShapes(parIsPlayer1Turn
            ,parRock.arrayShapePlayerImages
            ,parPaper.arrayShapePlayerImages
            ,parScissors.arrayShapePlayerImages
            );
    }//prepareTurn(parCurrentPlayer, parOtherPlayer){
}//class Turn{