const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

add(5, 3)
  .then((sum) => {
    console.log(sum);
  })
  .catch((error) => {
    console.log(error);
  });
