var address = "1234 Valley Street" ;
var houseType = "Victorian" ;
var houseColor = "Yellow" ;
var bedrooms = 4 ;
var bathrooms = 2.5 ;
var sqft = 4000 ;
var garage = true ;
var price = 375000 ;
var comissionPercent = .06 ;
var commission = (comissionPercent * price) ;

console.log("The lovely" , houseColor , houseType , "located at" , address) ;
console.log("The total commission is", commission.toLocaleString('en-US', {style: 'currency' , currency: 'USD'})) ;
console.log("The lovely" , houseColor , houseType , "cost" ,  price.toLocaleString('en-US', {style: 'currency' , currency: 'USD'})) ;

