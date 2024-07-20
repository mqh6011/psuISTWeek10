

sayHellByName("Janet");
var name = getName();
console.log("The function returned:" + name);



//*** ---- HALF OF THIS IS THE SCHOOL ASSIGNMENT AND HALF IS FROM THE VIDEO. THE TWO MAIN FUNCTIONS ARE sayHello & ourList ---- *//

// sayHello = first part & ourList = second part


function sayHello() 
{
// console.log("Hello from our function!");

//retrive userInput ***MAKE SURE THIS HAS # 6.13.2024***
var userInput = document.querySelector("#userInput").value;
var thingSelected = document.querySelector("#theThings").value; 
var ourMessage = document.querySelector("#userMessage").value;


console.log(userInput);
console.log(thingSelected);
console.log(ourMessage);

document.querySelector("body").style = "background-color:"+thingSelected;


//output userInput
//console.log("Hello to" + userInput);

// console.log(userInput + "has chosen" + thingSelected);

//make sure text has good spacing
document.querySelector("#userReply").innerHTML =  userInput + " has chosen " + thingSelected + " and said: " + ourMessage;


}


function ourList () 
{
//6.14.2024 - This is the stuff from the lesson 
//6.14.2024 - querySelector / .value calls the values from the text box
var ourFirstItem = document.querySelector("#ThingOne").value;
var ourSecItem = document.querySelector("#ThingTwo").value; 
var ourThirdItem = document.querySelector("#ThingThree").value;

//6.14.2024 - Debug. This is the same as above, which is from the video. 
console.log(ourFirstItem);
console.log(ourSecItem);
console.log(ourThirdItem);

//*** KEEPING THESE FOR LATER. They basicly just serve as outputing in different ways */
//output userInput
//console.log("Hello to" + userInput);
// console.log(userInput + "has chosen" + thingSelected);

//6.12.2024 innerHTML = relates to thetext inside the ><
//ids are the ones specificed in the list on the html doc
//output from the vars above.
document.querySelector("#listOne").innerHTML =  ourFirstItem;
document.querySelector("#listTwo").innerHTML =  ourSecItem;
document.querySelector("#listThree").innerHTML =  ourThirdItem;
}



//6.14.2024 - this is stuff form the lesson

// function sayHellByName(name)
// {
//     console.log("Hello there, " + name + "!")
// }


// function getName()
// {
//     return "Pete";
// }

// function makeBackgroundRed()
// {
//     document.querySelector("body").style = "background-color:red;";
// }