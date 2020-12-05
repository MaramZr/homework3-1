
const data = require("hw3.json");
 


console.log("*BATTERS* ");
batters(data);

console.log(" ");
console.log(" ");
console.log(" ");


function topping (arr){
for(var i of arr ){
   for ( var element of i.topping){
     console.log(element.type);
   }
}
}
console.log("*TOPPING* ");
topping(data);

console.log(" ");
console.log(" ");
console.log(" ");


//for calculating the Ppu average 
function average (arr)
{
var pp = 0;
var numofpp = 0;

for(var i in arr )
{
  pp+= arr[numofpp].ppu;
  numofpp++;
}
console.log( "the average of Ppu =  "+pp/numofpp);
}

average(data);


//cal Ppu Sum 
function sum (arr){
var pp = 0;
var x = 0;

for(var i in arr )
{
  pp += arr[x].ppu;
  x++;
}
console.log(pp);
}



sum(" The Sum of Ppu = " + data);
console.log(" ");

//List of all mentioned IDs regardless to the type
function getID (arr)
{
for(var i of arr )
{
if( i !== "batters" || "topping")
{
console.log(i.id)
 }
var x = i["batters"];
       for ( var u of x.batter)
       {
     console.log(u.id)
   }

   for ( var x of t.topping)
   {
     console.log(x.id)
   }
}
}
console.log("List of all mentioned IDs regardless to the type")
getID(data);


console.log(" ");
console.log(" ");
console.log(" ");

