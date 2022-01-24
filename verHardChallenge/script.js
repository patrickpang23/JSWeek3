// VERY HARD: Object prototype chain and prototypal inheritance exercise.

// 1. Create a Person constructor that has three properties: name, job, and age.

// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".

// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".

// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.

// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.

// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.

// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.

// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?

// Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.

// function Person(name, job, age) { }

// function Programmer(name, job, age, languages) { }

class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  exercise() {
    console.log("Running is fun!");
  }
  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

class Programmer extends Person {
  constructor(name, job, age, languages, busy = true) {
    super(name, job, age);
    this.languages = languages;
    this.busy = busy;

  }

  completeTask() {
    this.busy = false;
  }

  acceptNewTask() {
    this.busy = true;
  }

  offerNewTask() {
    if (this.busy === true) {
      console.log(`${this.name} can't accept any new tasks right now.`)
    } else {
      console.log(`${this.name} would love to take on a new responsibility.`)
    }
  }

  learnLanguage(language) {
    // language === 'c++'

    // this.languages === "Javascript";

    this.languages = this.languages + `${language}`;






    // this.languages === "Javascript c++";
  }

  listLanguages() {
    console.log(this.languages)
  }
}
// const person1 = new Person("Patrick", "Developer", 19);
// console.log(person1.name);
const programmer = new Programmer("Patrick", "Developer", 19, "");

// programmer.learnLanguage('anything else');
programmer.listLanguages(); // "Javascript python"
programmer.learnLanguage("HTML");
programmer.listLanguages();
programmer.learnLanguage("C++");
programmer.listLanguages();
programmer.learnLanguage("JavaScript");
programmer.listLanguages();

programmer.offerNewTask();