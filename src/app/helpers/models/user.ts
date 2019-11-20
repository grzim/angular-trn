export class User {
  constructor(public name,
              public surname,
              public age,
              public professionName,
              public professionPlace,
              public login = name.slice(0, 2) + age + surname.slice(-2)) {
  }
}
