const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers cannot be less than zero!");
      }
      resolve(a + b);
    }, 2000);
  });
};
const doWork = async () => {
  const sum = await add(2, 7);
  const sum2 = await add(sum, -5);
  const sum3 = await add(sum2, 7);
  return sum3;
};

doWork()
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log("Error", e);
  });
