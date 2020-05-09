const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const keys = require("./config/keys.js");
// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require("stripe")(keys.STRIPE_SECRET);

const app = express();
app.use(bodyParser.json());

app.post("/api/checkoutSession", async (req, res) => {
    const { shoppingCart, client, total } = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                name: "Claire Hempbury Purchase",
                description: "You are about to pay for your order.",
                images: [],
                amount: total * 100,
                currency: "eur",
                quantity: 1,
            },
        ],
        success_url: keys.SUCCES_URL,
        cancel_url: keys.CANCEL_URL,
    });
    return res.status(200).json({ sessionId: session.id });
});

app.get("/auth/getProducts", require("./routes/getProducts"));
app.post("/auth/register", require("./routes/register"));
app.post("/auth/login", require("./routes/login"));
app.post("/auth/loginWithToken", require("./routes/loginWithToken"));
app.post("/auth/updateClient", require("./routes/updateClient"));

//===============================test or initial db routes=====================================

// app.get('/auth/createClients', require('./routes/createClients'))
// app.get('/auth/createProducts', require('./routes/createProducts'))
// app.post('/auth/addProducts', require('./routes/addProducts'))

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
