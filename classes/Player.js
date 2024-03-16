class Player{
    playerName = '';
    score = 0;

    constructor(parName){
        this.playerName = parName;
    }//constructor(parName){

    selectShape(parBtnShapeSelected, parRPSGame){
        const shapes = {btnRock:parRPSGame.rock
                        , btnPaper:parRPSGame.paper
                        , btnScissors:parRPSGame.scissors
                    };
        
        return shapes[parBtnShapeSelected.id];
    }//selectShape(){
}//class Player{