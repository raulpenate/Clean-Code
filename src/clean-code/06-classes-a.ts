(() => {
  //No applying unique responsibility principle
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(name, gender, birthday);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      lastAccess: Date,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(email, role, lastAccess, name, gender, birthday);
    }
  }

  const userSettings = new UserSettings(
    "/usr/home",
    "/home",
    "a@a.cm",
    "admin",
    new Date("2024-01-01"),
    "Ana",
    "F",
    new Date("2020-01-01")
  );

  console.log({ userSettings });
})();
