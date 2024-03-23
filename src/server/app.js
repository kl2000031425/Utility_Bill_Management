const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('your_secret_key');

const app = express();

// This is your real test secret API key.
const YOUR_SECRET_KEY = 'sk_test_51OxYnESBXtkb1tVSWMKPwosg9Yw5nWarhMloq3Mu0Z4PnjnzYQb3bHh08M7a3iHvl1VuwpQRCfs6hESabUG1uZ55004wGRy396';
const YOUR_PUBLIC_KEY = 'pk_test_51OxYnESBXtkb1tVSYs4G4EL6OTObmzxU0N4BIpz6M2XB8QeYzwTkHm8ZJVyPvBSm7AtQq6mlIydu62ONjWpn3zuG00UBokOHUQ';

stripe.apiKey = YOUR_SECRET_KEY;

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body;
  
  // Create a PaymentIntent with the order amount and currency
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
  // This function should calculate the amount based on items in the cart
  
  // Replace this constant with a calculation of the order's amount
  // For simplicity of this example, it's a hardcoded amount.
  const amount = 100;
  return amount;
}