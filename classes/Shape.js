class Shape{
    shapeName = '';
    arrayShapePlayerImages = [];

    constructor(parShapeName, parArrayImages){

        if(this.constructor == Shape){
            throw new Error("Abstract classes can't be instantiated.");
        }
        else
        {
            this.shapeName = parShapeName;
            this.arrayShapePlayerImages = parArrayImages;
        }
     }//constructor(parShapeName, parArrayImages){

    defeats(parShape){
        throw new Error("Method defeats() must be implemented.");
    }//defeats(parShape){
}//class Shape{