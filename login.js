// LOGIN SYSTEM

function login() {

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

const loginScreen = document.getElementById("loginScreen");
const mainSystem = document.getElementById("mainSystem");
const loginMessage = document.getElementById("loginMessage");


// Demo credentials
const USER = "root";
const PASS = "1234";


// Check login
if(username === USER && password === PASS){

// Success message
loginMessage.style.color = "#00ff9c";
loginMessage.innerText = "ACCESS GRANTED";

// Small delay for effect
setTimeout(()=>{

loginScreen.style.display = "none";
mainSystem.style.display = "block";

},800);

}else{

// Failed login
loginMessage.style.color = "red";
loginMessage.innerText = "ACCESS DENIED";

}

}


// ENTER KEY LOGIN

document.addEventListener("keydown",function(e){

if(e.key === "Enter"){

const loginScreenVisible = document.getElementById("loginScreen").style.display !== "none";

if(loginScreenVisible){
login();
}

}

});
