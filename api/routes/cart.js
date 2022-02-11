const Cart = require("../models/Cart");

const { verifyTokenAndAdmin, verifyToken } = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/",verifyToken,  async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const saveCart = await newCart.save();
    res.status(200).json(saveCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const upadateCart = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(upadateCart);
  } catch (err) {
    res.status(501).json(err);
  }
});

//DELETE
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(501).json("Cart has been deleted.... ");
  } catch (err) {
    res.status(501).json(err);
  }
});

//GET USER CART
router.get("/find/:userId", verifyToken,async (req, res) => {
  try {
    const cart = await Cart.findOne({userId:req.params.userId});

    res.status(200).json(cart);
  } catch (err) {
    res.status(501).json(err);
  }
});

//GET ALL 
router.get("/", verifyTokenAndAdmin,async (req, res) => {
  
  try {
const carts= await Cart.find();

    res.status(300).json(carts);
  } catch (err) {
    res.status(501).json(err);
  }
});

module.exports = router;
