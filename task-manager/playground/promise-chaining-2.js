require("../src/db/mongoose");

const res = require("express/lib/response");
const Tasks = require("../src/models/tasks");

Tasks.findByIdAndDelete("62db6c33d022f43966bb412e", { completed: true })
  .then((task) => {
    console.log(task);
    return Tasks.countDocuments({ completed: true });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
