export class Person {
  private name: string | null;
  private email: string | null;
  constructor() {
    this.name = null;
    this.email = null;
  }
  public create(name: string, email: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.name = name;
        this.email = email;
        resolve();
      }, 3000);
    });
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}

async function main() {
  let person = new Person();
  console.log("= = = BEFORE CREATE = = =");
  console.log(person.getEmail());
  console.log(person.getName());
  console.log("= = = AFTER CREATE = = =");
  await person.create("Nick", "Nick's Email");
  console.log(person.getEmail());
  console.log(person.getName());
}

main();
