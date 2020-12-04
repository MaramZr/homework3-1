
const data = require("hw3.json");
 
/*
const data = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]

function batters (arr){
for(var i of arr ){
  var element = i["batters"];
       for ( var u of element.batter){
     console.log(u.type);
   }
}}*/

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

