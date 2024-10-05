export abstract class Car {
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Audi extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Toyota extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Honda extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Mazda extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}
