const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data upload completed successfully!");
    reject("Error creating document");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Nothing to log to the console", error);
  });
