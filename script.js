// Configuration
const DERIV_APP_ID = "33SBsW7aBtu6hgWpXKFi4";

// Connect to Deriv WebSocket
const socket = new WebSocket(
  `wss://ws.derivws.com/websockets/v3?app_id=${DERIV_APP_ID}`
);

// When connected
socket.onopen = () => {
  console.log("Connected to Deriv");
  subscribeV75();
};

// Receive messages
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(data);
};

// Subscribe to Volatility 75 ticks
function subscribeV75() {
  socket.send(
    JSON.stringify({
      ticks: "R_75",
      subscribe: 1
    })
  );
}

// Login button
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    alert("Deriv login will be connected in the next step.");
  });
}


 
