var alpha = "ABCDEFG";
var result = alpha.substring(2, 6);

console.log(result);
//-------------------------------------------------------------------------------------------------------------------------
function sayHello() {
    console.log("Hello");
} 
sayHello("Larry");
//------------------------------------------------------------------------------------------------------------------------
function sayHello(who) {
    console.log("Hello" + who);
} 
sayHello("Larry");
//------------------------------------------------------------------------------------------------------------------------
//Example 1:
function myTimes (x) {
    return x + 2;
}
myTimes(5);
console.log(myTimes(5));


//Example 2
function word() {
  console.log("Larry");
}
word();

function word2() {
  console.log("Hello");
}
word2();


//Example 3
function addition(x) {
  console.log( x + 5);
}

addition(10);

						
var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18) {
  greeting = "Good Evening!";
} else if (hourNow > 12) {
    greeting = "Good Afternoon!"
} else if (hourNow > 0) {
    greeting = "Good Morning";
} else {
    greeting = "Welcome!";
}
//--------------------------------------------------------------------------------------------------------
// Create a variable for the subtotal and make a calculation
var subtotal = (13 + 1) * 5; // Subtotal is 70

// Create a variable for the shipping and make a calculation
var shipping = 0.5 * (13 + 1); // Shipping is 7

// Create the total by combining the subtotal and shipping values
var total = subtotal + shipping; // Total is 77


function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}

var areaOne = getSize(3,2,3)[0];
var volumeOne = getSize(3,2,3)[1];
//--------------------------------------------------------------------------------
// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}


// Create two hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
