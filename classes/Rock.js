class Rock extends Shape{
    constructor(parShapeName, parArrayImages)
    {
        super(parShapeName, parArrayImages);
    }

    defeats(parShape)
    {
        return parShape instanceof Scissors;
    }
}//class Rock extends Shape{
