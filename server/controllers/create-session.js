require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.createSession = async (req, res) => {
  try {
    const products = req.body;
    const lineItems = products.map((product)=> ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.title,
        },
        unit_amount: product.price * 100
      },
      quantity: 1
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_BASE_URL}/success`,
      cancel_url: `${process.env.CLIENT_BASE_URL}/cancel`,
    })
    
    res.status(200).json({
      id: session.id
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message
    })
  }
    return res.status(200).json({
    status: "success",
    message: "hello from server"
  })
}