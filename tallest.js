//Max and min of an array you have to use apply

var tallest = [121.92, 124.46,  127.00, 132.08 ,134.62, 137.16, 139.70 , 149.86, 154.94, 157.48];
var taller = Math.min.apply(null, tallest);
console.log(taller);



