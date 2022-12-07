import orderByProps from '../src/app.js';

test('function orderByProps', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = {
    name: 'мечник', level: 2, attack: 80, defence: 40, health: 10,
  };
  expect(orderByProps(obj, ['name', 'level'])).toEqual(result);
});
