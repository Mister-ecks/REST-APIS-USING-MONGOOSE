const express = require("express");
const { route } = require("express/lib/application");
const Tasks = require("../models/tasks");
const router = new express.Router();
router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Tasks.findById(_id);
    if (!task) {
      return res.status(400).send();
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send();
  }
});
router.get("/tasks", async (req, res) => {
  try {
    const task = await Tasks.find();
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.post("/tasks", async (req, res) => {
  const task = new Tasks(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.patch("/tasks/:id", async (req, res) => {
  let updates = Object.keys(req.body);
  let allowedUpdates = ["description", "completed"];
  let isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Operation" });
  }

  try {
    let task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(400).send({ error: "No task found" });
    }
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.delete("/tasks/:id", async (req, res) => {
  try {
    let task = await Tasks.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
