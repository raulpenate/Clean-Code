# Clean code
- Name correctly
- Use DRY
- Use single responsibility/reduce coupling

# Code smells
The are 6 smells to avoid; remember the acronym `STUPID`:
- __Singleton__ : Global context, untraceable, can be modified from anywhere, any time and it's hard to test.
- __Tight Coupling__ : High interconection, hard to test, hard to scale or modify.
- __Untestability__ : Not adding unittesting. Also it becomes hard to test when we've in your code high coupling, singleton and non DI(dependencies injections)
- __Premature optimization__ : It's better to keep the options open, don't anticipate to the requirements and don't add unnecessary abstractions. 
- __Indescriptible names__ : Don't bee too specific or too generic. Use the right names for what you want the class to do.
- __Duplicity__ : When you copy a lot of code it's a sign. Non using DRY, creates more human error, creates more testing for the same things, can lead to different behaviors with the same code accidentally because we modify some code and think it's also use in other places, where is not.

# Project for Practice

This is a Vanilla TypeScript project in Vite, to work on exercises from the course on SOLID Principles and CleanCode.

Clone or download the project and then:

```
yarn install
or
npm install
```

To run the project, simply execute
```
yarn dev
or
npm run dev
```