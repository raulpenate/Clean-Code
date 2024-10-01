(() => {
  //Applying unique responsibility principle
  //Prioritize composition over hereby

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

  interface UserProps {
    email: string;
    role: string;
    lastAccess: Date;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  interface UserSettingsProps extends PersonProps, UserProps, SettingsProps {}

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public setting: Settings;

    constructor({
      name,
      gender,
      birthday,
      email,
      lastAccess,
      role,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthday });
      this.user = new User({ email, lastAccess, role });
      this.setting = new Settings({ workingDirectory, lastOpenFolder });
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
