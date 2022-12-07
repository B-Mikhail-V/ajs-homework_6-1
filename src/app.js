/* eslint no-prototype-builtins: "error" */
const objIn = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(obj, params) {
  const kk = Object.keys(obj); // все ключи исходного объекта
  const firstArray = params; // новый список ключей
  const objNew = {};
  kk.splice(kk.lastIndexOf(params[0]), 1); // удаление первого параметра из списка ключей
  kk.splice(kk.lastIndexOf(params[1]), 1); // удаление второго параметра из списка ключей

  // сортировка оставшего списка ключей и добавление к новому списку ключей
  kk.sort();
  for (const item in kk) {
    // if (kk.hasOwnProperty(item)) {
    firstArray.push(kk[item]);
    // }
  }

  // формирование нового объекта
  for (const kk in firstArray) {
    objNew[firstArray[kk]] = obj[firstArray[kk]];
  }

  return objNew;
}
