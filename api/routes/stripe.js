const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create({
    Source: req.body.tokenId,
    amount: req.tokenId.amount,
    currency: "usd",
  },(stripeErr,stripeRes)=>{
      if(stripeErr){
          res.status(500).json(stripeErr);
      }else{
        res.status(500).json(stripeRes);
      }
  });
});

module.exports = router;