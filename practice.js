// this is a regular function
let add = (n1, n2) => n1+n2; 

//in the console it will print out 9
console.log(add(3,6));

let Car = (color) => {
    // will throw an error if Car is not called with new key word
    if(!new.target){
        throw 'Car must be called with new keyword'
    };
    // sets the property color to the instances that will be created
    this.color = color;
};

// when you use the new keyword it sets the reference to Car. If you don't when it is ran it will say undifined because is not returning anything.

// 'use strict'; option will also throw an error if you do not use the new keyword 
let redCar = new Car ("red");

// this is a second intance the Car consturctor. It will have no relation to other instances only that it has the same reference. 
let blueCar = new Car ("blue");

//when you create propeties using constuctors they are all public proprties meaning you can access them using dotnotation.
console.log(redCar.color);

// javascript doesn't have the concept of private propeties but you can create them using closures 

// cover can only be accessed by using these functions 
 let Book = (_cover) => {
    this.setCover = (cover) =>{
        _cover = cover;
    }

    this.getCover = () =>  _cover;
 };


