const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Digit Profit Edge Backend is running.");
});

// OAuth callback placeholder
app.get("/oauth/callback", (req, res) => {
    const { code, state } = req.query;

    if (!code) {
        return res.status(400).send("Authorization code not found.");
    }

    res.send(`
        <h2>Digit Profit Edge</h2>
        <p>Authorization code received successfully.</p>
        <p>The secure token exchange will be added next.</p>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
