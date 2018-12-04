var bookedCars = [];
var cars = ["Rolls Royce", "Ferrari", "Maserati", "Lamborghini", "Bugatti" ];

bookedCars.unshift(cars.splice(0,2,));

console.log(cars)
console.log(bookedCars)
