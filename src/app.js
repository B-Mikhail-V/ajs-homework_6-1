export default function orderByProps(obj, params) {
  const kk = Object.keys(obj); // все ключи исходного объекта
  const firstArray = params; // новый список ключей
  const objNew = {};
  /* eslint-disable-next-line */
  for (const id in params) {
    kk.splice(kk.lastIndexOf(params[id]), 1); // удаление параметров из списка ключей
  }

  // сортировка оставшего списка ключей и добавление к новому списку ключей
  kk.sort();
  /* eslint-disable-next-line */
  for (const item in kk) {
    firstArray.push(kk[item]);
  }

  // формирование нового объекта
  /* eslint-disable-next-line */
  for (const kk in firstArray) {
    objNew[firstArray[kk]] = obj[firstArray[kk]];
  }

  return objNew;
}
