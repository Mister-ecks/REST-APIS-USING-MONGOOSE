require("../src/db/mongoose");

const res = require("express/lib/response");
const User = require("../src/models/user");

// User.findByIdAndUpdate("62d8d27f1c68c64455f9e24e", {
//   name: "Omosaku O. Emmanuel",
// })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 22 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};
updateAndCount("62da26ed15d639e52c2093d3", 22)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
