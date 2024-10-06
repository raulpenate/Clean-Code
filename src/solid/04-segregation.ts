interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface SwimmingBird {
  swim(): void;
}

interface RunningBird {
  run(): void;
}

class Tucan implements Bird, FlyingBird, RunningBird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Humminbirg implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements Bird, RunningBird {
  public eat(): void {}
  public run(): void {}
}

class Pengiun implements Bird, SwimmingBird {
  public eat(): void {}
  public swim() {}
}
