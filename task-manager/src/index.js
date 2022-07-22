const express = require("express");

const app = express();

require("./db/mongoose");

const User = require("./models/user");
const Tasks = require("./models/tasks");

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/users", (req, res) => {
  User.find({ name: "Emmanuel" })
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});
app.post("/tasks", (req, res) => {
  const task = new Tasks(req.body);

  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
