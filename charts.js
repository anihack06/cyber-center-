// SYSTEM MONITOR CHARTS

const cpuCtx = document.getElementById("cpuChart").getContext("2d");
const networkCtx = document.getElementById("networkChart").getContext("2d");


// CPU CHART
const cpuChart = new Chart(cpuCtx, {
type: "line",
data: {
labels: ["1","2","3","4","5","6","7","8","9","10"],
datasets: [{
label: "CPU Usage (%)",
data: Array.from({length:10},()=>Math.floor(Math.random()*50)),
borderColor: "#00ff9c",
backgroundColor: "rgba(0,255,156,0.1)",
tension: 0.3
}]
},
options:{
responsive:true,
plugins:{
legend:{display:false}
},
scales:{
y:{
min:0,
max:100
}
}
}
});


// NETWORK CHART
const networkChart = new Chart(networkCtx, {
type: "line",
data: {
labels: ["1","2","3","4","5","6","7","8","9","10"],
datasets: [{
label: "Network Traffic (Mbps)",
data: Array.from({length:10},()=>Math.floor(Math.random()*100)),
borderColor: "#00ff9c",
backgroundColor: "rgba(0,255,156,0.1)",
tension: 0.3
}]
},
options:{
responsive:true,
plugins:{
legend:{display:false}
},
scales:{
y:{
min:0,
max:200
}
}
}
});



// UPDATE DATA EVERY 2 SECONDS
setInterval(()=>{

// CPU update
cpuChart.data.datasets[0].data.push(Math.floor(Math.random()*100));
cpuChart.data.datasets[0].data.shift();
cpuChart.update();


// NETWORK update
networkChart.data.datasets[0].data.push(Math.floor(Math.random()*150));
networkChart.data.datasets[0].data.shift();
networkChart.update();

},2000);
