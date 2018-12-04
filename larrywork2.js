var name = "Hakeem";
var name2 = "BJ";
var name3 = "Peter";
var job = "Amazon";
var job2 = "Stop & Shop";
var job3 = "Shawmut";
var hours = 40;
var pay = 15;
var pay1 = 27;
var biweekly = 2;
//This is showing how much each worker is being taxed, its not used I'm still trying to figure out how to implement it into the equation
var tax = 0.1;
var tax2 = 0.03;
var tax3 = 0.02;
//PP1 is taxed by .1 (-120), while PP2 is taxed by .03 (-36) and PP3 is taxed by .02(-21.6)
var payperiod1 = (((hours * pay) * biweekly ) * (1-tax));
var payperiod2 = (((hours * pay) * biweekly ) * (1-tax2));
var payperiod3 = ((hours * pay1) * (1-tax3));

console.log(name, "works for", job, "while", name2, "works for", job2, "and", name3, "works for", job3 );
console.log(name, "gets paid weekly, while" , name2 , "and", name3, "get paid biweekly.");
console.log ("Each of them are taxed differently each pay period.");
console.log("Who makes the most money each pay period", name, name2, "or", name3, "?");
console.log("The results are in and", name3, "makes the most each pay period making $", payperiod2, "while", name2, "comes in second making $", payperiod1 , "and", name,"makes the least making $", payperiod3);
if(payperiod3 < payperiod2, payperiod1) {console.log(name, " is a loser");}
