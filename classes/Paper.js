class Paper extends Shape{
    constructor(parShapeName, parArrayImages)
    {
        super(parShapeName, parArrayImages);
    }

    defeats(parShape)
    {
        return parShape instanceof Rock;
    }
}//Paper extends Shape{