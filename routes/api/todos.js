const express = require("express");
const { check, validationResult } = require("express-validator");
const Todo = require("../../models/Todo");

const router = express.Router();

//@route POST api/todo
//@desc Create todo
//@access Public
router.post(
  "/",
  check("item", "Item is required").not().isEmpty(),
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const { item } = req.body;

    try {
      // Create
      todo = new Todo({ todo: item });
      await todo.save();
      res.json(todo);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route GET api/todo
//@desc Get all todo list
//@access Public
router.get("/", async (req, res) => {
  try {
    const list = await Todo.find();
    res.json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route DELETE api/todo
//@desc Delete todo
//@access Public
router.delete("/", async (req, res) => {
  const { _id } = req.body;

  try {
    // Remove item
    await Todo.findOneAndRemove({ _id });

    res.json({ msg: "Item deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
