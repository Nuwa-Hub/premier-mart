const Order = require("../models/Order");

const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");

const router = require("express").Router();

//GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();

    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const upadateOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(upadateOrder);
  } catch (err) {
    res.status(501).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(501).json("Order has been deleted.... ");
  } catch (err) {
    res.status(501).json(err);
  }
});

//GET USER Order
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.findOne({ userId: req.params.userId });

    res.status(200).json(orders);
  } catch (err) {
    res.status(501).json(err);
  }
});

//GET MONTHLY INCOME
router.get("/income/:Id", verifyTokenAndAdmin, async (req, res) => {
  //const productId = req.query.pid;
  const productId =req.params.Id
  
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(201).json(income);
  } catch (err) {
    res.status(501).json(err);
  }
});

module.exports = router;
