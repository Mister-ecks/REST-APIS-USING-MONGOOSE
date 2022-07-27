const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const bcrypt = require("bcryptjs");

const hash = async () => {
  let password = "Nagatopain@123";
  let hashedPassword = await bcrypt.hash(password, 8);
  let isSame = await bcrypt.compare("Nagatopain@123", hashedPassword);
  console.log(isSame);
  // console.log(password, hashedPassword);
};
hash();
