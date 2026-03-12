// TERMINAL COMMAND FUNCTIONS


// NETWORK SCAN SIMULATION
function scanNetwork(){

printToTerminal("Scanning local network...");

setTimeout(()=>{

printToTerminal("7 devices detected:");

printToTerminal("Node01  | 192.168.1.10 | ONLINE");
printToTerminal("Node02  | 192.168.1.11 | ONLINE");
printToTerminal("Node03  | 192.168.1.12 | ONLINE");
printToTerminal("Node04  | 192.168.1.13 | ONLINE");
printToTerminal("Node05  | 192.168.1.14 | ONLINE");
printToTerminal("Node06  | 192.168.1.15 | ONLINE");
printToTerminal("Node07  | 192.168.1.16 | ONLINE");

},1200);

}



// RANDOM IP GENERATOR
function showIP(){

const ip =
"192.168." +
Math.floor(Math.random()*255) +
"." +
Math.floor(Math.random()*255);

printToTerminal("Current system IP: " + ip);

}



// AI ASSISTANT
function aiChat(){

const responses = [

"AI: System secure.",
"AI: Monitoring network traffic...",
"AI: Firewall status stable.",
"AI: Encryption protocols active.",
"AI: Possible anomaly detected on Node03.",
"AI: CPU temperature within safe range.",
"AI: Log files analyzed successfully.",
"AI: No threats detected."

];

const response =
responses[Math.floor(Math.random()*responses.length)];

printToTerminal(response);

}



// DATABASE LOADER
function loadDatabase(){

const panel = document.getElementById("databasePanel");

panel.innerHTML = "";

const files = [

"admin_keys.json",
"password_hashes.txt",
"encrypted_logs.bin",
"vpn_connections.cfg",
"crypto_wallet.dat",
"network_dump.bin",
"user_credentials.db",
"system_backup.zip",
"firewall_rules.cfg",
"session_logs.log"

];


files.forEach(file => {

const div = document.createElement("div");

div.textContent = file;

div.addEventListener("click", ()=>{

printToTerminal("Opening " + file + "...");

setTimeout(()=>{
printToTerminal(file + " opened successfully.");
},800);

});

panel.appendChild(div);

});

printToTerminal("Database loaded: " + files.length + " files found.");

}



// HACK ATTACK SIMULATION
function launchAttack(){

const bar = document.getElementById("attackBar");

let progress = 0;

printToTerminal("Launching cyber attack...");

const messages = [

"Bypassing firewall...",
"Decrypting secure data...",
"Injecting network packets...",
"Establishing remote access...",
"Uploading exploit payload..."

];

const interval = setInterval(()=>{

progress++;

bar.style.width = progress + "%";


if(progress % 20 === 0){

const msg =
messages[Math.floor(Math.random()*messages.length)];

printToTerminal(msg);

}


if(progress >= 100){

clearInterval(interval);

printToTerminal("Attack complete. Access granted.");

bar.style.width = "0%";

}

},40);

}
