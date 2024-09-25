(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    return ["manzana", "cereza", "ciruela"].includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores

  interface fruitsByColorOptions {
    [name: string]: [string, string];
  }
  function getFruitsByColor(color: string): string[] {
    const fruitsByColor: fruitsByColorOptions = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"],
    };

    if (!Object.keys(fruitsByColor).includes(color))
      throw Error("the color must be: red, yellow, purple");

    return fruitsByColor[color];
  }

  // Simplificar esta función

  function workingSteps(
    isFirstStepWorking = true,
    isSecondStepWorking = true,
    isThirdStepWorking = true,
    isFourthStepWorking = true
  ) {
    if (!isFirstStepWorking) return "First step broken.";
    if (!isSecondStepWorking) return "Second step broken.";
    if (!isThirdStepWorking) return "Third step broken.";
    if (!isFourthStepWorking) return "Fourth step broken.";

    return "Working properly!";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
