const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const processPayment = async (req, res) => {
  const { amount, booking_id, success_url, cancel_url, user_email } = req.body;
  try {
    const session = await stripe.checkout.sessions
      .create({
        payment_method_types: ["card"],
        client_reference_id: booking_id,
        user_email: user_email ?? "",
        line_items: [
          {
            price_data: {
              currency: "myr",
              unit_amount: amount * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: success_url,
        cancel_url: cancel_url,
      })
      .catch((err) => {
        throw err;
        console.log(err);
      });

    // await confirmJob(booking_id, session.id);
    res.status(200).json({
      status: 200,
      message: "success",
      data: {
        session_id: session.id,
        session_url: session.url,
        amount: session.amount_total,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      data: error,
      message: "Error",
      status: 500,
    });
  }
};

module.exports = { processPayment };
