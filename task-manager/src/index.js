const express = require("express");

const app = express();

require("./db/mongoose");

const User = require("./models/user");
const Tasks = require("./models/tasks");

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const task = await Tasks.find();
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/tasks/:id", async (req, res) => {
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

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send();
  }
});

app.get("/users/:id", async (req, res) => {
  let _id = req.params.id;

  try {
    const findId = await User.findById(_id);
    if (!findId) {
      res.status(400).send();
    }
    res.status(200).send(findId);
  } catch (error) {
    res.status(500).send();
  }
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.post("/tasks", async (req, res) => {
  const task = new Tasks(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

// app.post("/tasks", (req, res) => {
//   const task = new Tasks(req.body);

//   task
//     .save()
//     .then(() => {
//       res.status(201).send(task);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
