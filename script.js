// Configuration
const DERIV_APP_ID = "YOUR_DERIV_APP_ID"; // Replace with your actual numeric App ID

const socket = new WebSocket(
    `wss://ws.derivws.com/websockets/v3?app_id=${DERIV_APP_ID}`
);

socket.onopen = () => {
    console.log("Connected to Deriv");
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
};

// Example: Subscribe to Volatility 75
function subscribeV75() {
    socket.send(JSON.stringify({
        ticks: "R_75",
        subscribe: 1
    }));
}

socket.onopen = () => {
    subscribeV75();
};

 
