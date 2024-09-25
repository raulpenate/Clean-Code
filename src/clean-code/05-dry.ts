type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  toStringValidation() {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((this[key] as unknown as string).length <= 0)
            throw Error(`${key} is empty`);
          break;
        case "number":
          if ((this[key] as unknown as number) <= 0)
            throw Error(`${key} is less than 0`);
          break;
      }
    }
  }

  toString() {
    //verify the class
    // if (this.name.length <= 0) throw Error("name is empty");
    // if (this.price <= 0) throw Error("price is empty");
    // if (this.size.length <= 0) throw Error("string is empty");
    this.toStringValidation();

    return `${this.name} ${this.price} ${this.size}`;
  }
}

(() => {
  //   const product = new Product("camisa", 1, "M");
  const product = new Product("a", 1, "M");
  console.log(product.toString());
})();
