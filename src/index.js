import orderByProps from './app.js';

const objIn = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

const new1 = orderByProps(objIn, ['name', 'level']);
console.log(new1);
