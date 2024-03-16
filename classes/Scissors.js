class Scissors extends Shape{
    constructor(parShapeName, parArrayImages)
    {
        super(parShapeName, parArrayImages);
    }

    defeats(parShape)
    {
        return parShape instanceof Paper;
    }
}//class Rock extends Shape{