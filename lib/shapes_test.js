const {Circle, Saure, Triangle} = require("./shapes")

//Test-Circle
describe("Circle", () => {
    test("renders correctly", () => {
        const shape = new Circle();
        var color = ("blue")
        shape.setColor(color);
        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>')
    });
});

//Test-Square
describe("Square", () => {
    test("renders correctly", () => {
        const shape = new Square();
        var color = ("red")
        shape.setColor(color);
        expect(shape.render()).toEqual('<rect cx="50%" height="200" width="200" fill="${this.color}"/>')
    });
});

//Test-Triangle
describe("Triangle", () => {
    test("renders correctly", () => {
        const shape = new Triangle();
        var color = ("gray")
        shape.setColor(color);
        expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="0,200,300,200,150,0" fill="${this.color}"/>')
    });
});