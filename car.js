var carName = "Honda";
var year = "2018";
var model = "Sedan";
var totalCost = 22000;
var moneyDown = 2500;
var carTax = .06;
var years2 = 24;
var year = 12;
var insurance = 160; 
var interest = .03

var finalAmount = totalCost - moneyDown;
var taxPer2Year = finalAmount * carTax;
var insurancePer2yrs = insurance * years2;
var insurancePerYear = insurancePer2yrs / 2;
var insurancePerMonth = insurancePerYear / year ;


var carPaymentPer2Yr = (finalAmount + taxPer2Year) / years2;
var carPaymentPerYr = carPaymentPer2Yr / year;
var interestPerMonth = carPaymentPerYr * interest;
var actualCarPayment = (carPaymentPerYr + insurancePerMonth + interestPerMonth );

console.log("Your car payment every month including insurance would be", actualCarPayment.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}), ".");

