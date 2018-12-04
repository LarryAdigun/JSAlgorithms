var restaurant = "PastaZilla" ;
var address = "123 PastaVill Lane" ;
var phoneNum = "401-777-1234" ;
var rating = 4.8 ;
var dishes = 375 ; 
//var tables = 4 ;
var tables = ["table1", "table2", "table3", "table4"];

var customersPerTable = 10 ;
//var customersPerDay = 200;
var numHoursOpen = 12;
var avgPlateCost = 22;
var avgTableTime = 1.5; 

var numCustPerSession = customersPerTable * tables.length ;
var timePerDay = (numHoursOpen / avgTableTime) ;

var maxDaily = numCustPerSession * timePerDay * avgPlateCost;
console.log (restaurant , "would make",  maxDaily.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}) , "in revenue per day." ) ;
console.log(numCustPerSession);