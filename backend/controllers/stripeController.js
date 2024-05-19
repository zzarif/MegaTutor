const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const processPayment = async (req, res) => {
  const { success_url, cancel_url } = req.body;
  try {
    const session = await stripe.checkout.sessions
      .create({
        payment_method_types: ["card"],
        client_reference_id: "bk_7a-fbd11708381007124",
        customer_email: "payment@megatutor.com",
        metadata: {
          workshop_id: "workshop_id",
          customer_id: 123456,
          booking_id: "booking_id",
        },
        line_items: [
          {
            price_data: {
              currency: "myr",
              unit_amount: 200000,
              product_data: {
                name: "Booking Fee",
                description: "your tutor confirmed",
              },
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
