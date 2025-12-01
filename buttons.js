/* 
Block Comment
*/

// Sends a message to validate the JS loading
console.log("Hello");

function logPress() {
    console.log("Good job!");
    console.log("You clicked the button");
}

function showAlert() {
   //will show an alert in a moment, but first check if it can log to console. 
   alert("Boo!");
}

function toggleDark() {
    document.body.classList.toggle("dark-mode");
    console.log("toggleDark called");
}

function wackyEffects(){
    console.log("WackyEffects called");
    document.getElementById("instructions").classList.toggle("flipped");
    if(document.getElementById("pageTitle").innerHTML === "The Powerful Buttons"){
        document.getElementById("pageTitle").innerHTML = "The Wacky Buttons";
    } else {
        document.getElementById("pageTitle").innerHTML = "The Powerful Buttons";
    }
}