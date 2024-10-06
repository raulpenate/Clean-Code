(() => {
  console.time("Finished");
  setTimeout(() => {
    console.log("hola");
  }, 1000);

  for (let i = 0; i <= 1000000; i++) {
    console.log(i);
  }
  console.timeEnd("Finished");
})();
