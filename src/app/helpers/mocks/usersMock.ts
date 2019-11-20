import {User} from '../models/user';

export const usersMock = [
  new User('Adam', 'Nowacki', 33, 'professor', 'AGH'),
  new User('Adrian', 'Kępa', 41, 'professor', 'AGH'),
  new User('Florian', 'Nuch', 33, 'nurse', 'Hospital'),
  new User('Anna', 'Smith', 33, 'engineer', 'NASA'),
  new User('Elisa', 'Komph', 29, 'engineer', 'Google'),
  new User('Renata', 'Debbith', 38, 'lawyer', 'court'),
  new User('Patrick', 'Smith', 38, 'operator', 'NASA', 'patsmi'),
  new User('Roland', 'Smith', 38, 'engineer', 'Apple', 'rolsmi'),
  new User('Adam', 'Trycz', 38, 'lawyer', 'court', 'tricz')
];
