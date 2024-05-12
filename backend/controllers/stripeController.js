

var dotenv = require('dotenv')
dotenv.config({
	path: './.env',
	debug: true
});


const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

module.exports.processPayment = async (req, res) => {

  var amount = req.body.amount;



  var booking_id = req.body.booking_id;


  var success_url = req.body.success_url;
  var cancel_url = req.body.cancel_url;
  var user_email = req.body.user_email ?? null;





  try {

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      client_reference_id: booking_id,
      user_email: user_email ?? "",
      
    
      

  

      line_items: [
        {
          price_data: {
            currency: 'myr',
        
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: success_url,
      cancel_url: cancel_url,
    }).catch((err) => {
      throw err;
      console.log(err);
    });

    res.status(200).json({
      status: 200,
      message: 'success',
      data: {
        session_id: session.id,
        session_url: session.url,
        amount: session.amount_total,

      }
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




module.exports.getSessionById = async (req, res) => {
  var session_id = req.query.session_id;

  if (session_id == null || session_id == undefined) {
    res.status(400).json({
      status: 400,
      message: 'session_id is empty',
    });
  }
  else {
    try {
      const session = await stripe.checkout.sessions.retrieve(
        session_id
      );
      res.status(200).json({
        status: 200,
        message: 'success',
        data: {
          status: session.payment_status,
          amount_total: session.amount_total,

         
          customer_details: session.customer_details,
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        data: error.raw.message,
        message: "Error",
        status: 500,

      });
    }
  }
}
