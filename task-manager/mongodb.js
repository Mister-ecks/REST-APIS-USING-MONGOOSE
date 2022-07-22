// const res = require("express/lib/response");

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1/27017";
const databaseName = "task-management";

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.id);
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect", error);
    }
    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("62d0d5c494ddc6513159b12b") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log(error);
    //     }
    //     console.log(user);
    //   }
    // );
    // db.collection("users")
    //   .find({ age: 21 })
    //   .toArray((error, user) => {
    //     if (error) {
    //       return console.log(error);
    //     }
    //     console.log(user);
    //   });
    // db.collection("tasks").findOne(
    //   { _id: new ObjectId("62d0d706d185e495be4db4ba") },
    //   (error, result) => {
    //     if (error) {
    //       console.log(error);
    //     }
    //     console.log(result);
    //   }
    // );

    db.collection("tasks").insertMany(
      [
        { description: "Finish Math Algorithms", completed: false },
        { description: "Finish up typescript project", completed: false },
      ],
      (error, result) => {
        if (error) {
          console.log(error);
        }
        console.log(result);
      }
    );
    db.collection("tasks")
      .find({ completed: true })
      .toArray((error, task) => {
        if (error) {
          return console.log(error);
        }
        console.log(task);
      });
    // db.collection("tasks")
    //   .updateOne(
    //     { _id: new ObjectId("62d0d706d185e495be4db4b9") },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     if (error) {
    //       console.log(error);
    //     }
    //   });
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    db.collection("tasks")
      .deleteOne({
        description: "Complete MongoDB section",
      })
      .then((result) => {
        console.log("Entry succesfully deleted", result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
