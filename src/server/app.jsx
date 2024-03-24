const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('your_secret_key');

const app = express();


const YOUR_SECRET_KEY = '';
const YOUR_PUBLIC_KEY = '';

stripe.apiKey = YOUR_SECRET_KEY;

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body;
  

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

function calculateOrderAmount(items) {
  const amount = 100;
  return amount;
}