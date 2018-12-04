var company = ["Apple", "Samsung", "Google", "Blackberry"];
var phoneType = ["iPhone", "Galaxy", "Pixel", "OS"];
var prices = [ 500, 300, 150, 10];
var amount =[ 999.99, 799.99, 799.99, 399.99];
var i;
var sum = 0

for(i=0; i < prices.length; i++) {
    var total = prices[i] * amount[i]; console.log("The sales for the", company[i] , phoneType[i] ,"for the month are", total.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}))}
    
for (i=0; i < prices.length; i++) {sum+= (prices[i] * amount[i]);}
console.log("The revenue for the phone sales all together is", sum.toLocaleString('en-US', {style: 'currency' , currency: 'USD'}));

  
