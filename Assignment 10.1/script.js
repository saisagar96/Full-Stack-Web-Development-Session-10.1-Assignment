class Rectangle { //Declaring a class as Rectangle
    constructor(length, breadth) { //Calling constructor as a method
        this.breadth = breadth;
        this.length = length;
    }
    
    calculateArea() { //Calculating the area of the Rectangle
        document.write("Area of the rectangle with " + this.length + " and " + this.breadth + " is " + this.length*this.breadth);
    }
}
var MyRectangle = new Rectangle(85, 75);
MyRectangle.calculateArea();