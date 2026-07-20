/* ============================================
   DIGIT PROFITS EDGE
   Deriv API Integration
   ============================================ */

// Replace with your own App ID locally
const DERIV_APP_ID = "CR7229316";

const ws = new WebSocket(
    `wss://ws.derivws.com/websockets/v3?app_id=${DERIV_APP_ID}`
);

ws.onopen = () => {
    console.log("Connected to Deriv API");
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);

    // Display live ticks
    if (data.tick) {
        const price = document.getElementById("live-price");

        if (price) {
            price.textContent = data.tick.quote;
        }
    }
};

ws.onerror = (error) => {
    console.error(error);
};

ws.onclose = () => {
    console.log("Connection closed");
};

// Subscribe to a market
function subscribeMarket(symbol = "R_100") {
    ws.send(
        JSON.stringify({
            ticks: symbol,
            subscribe: 1
        })
    );
}

// Authorize using a user's API token
function authorize(token) {
    ws.send(
        JSON.stringify({
            authorize: token
        })
    );
}

// Example:
// const token = prompt("Enter your Deriv API Token");
// authorize(token);
// subscribeMarket("R_100");
