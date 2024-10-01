(() => {
  //No applying unique responsibility principle

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthday: Date;
  }

  class Person {
    public birthday: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthday }: PersonProps) {
      this.birthday = birthday;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps extends PersonProps {
    email: string;
    role: string;
    lastAccess: Date;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role, name, gender, birthday }: UserProps) {
      super({ name, gender, birthday });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      lastAccess,
      name,
      gender,
      birthday,
    }: UserSettingsProps) {
      super({ email, role, lastAccess, name, gender, birthday });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "a@a.cm",
    role: "admin",
    lastAccess: new Date("2024-01-01"),
    name: "Ana",
    gender: "F",
    birthday: new Date("2020-01-01"),
  });

  console.log({ userSettings });
})();
