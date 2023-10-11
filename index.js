const { turtle } = require("./1");
const { calcHandshake } = require("./2");
const { getUniqueStr } = require("./3");

/**
 *
 *  Ответ: на 4 день
 */

const day = turtle();
console.log(day);

/**
 *
 *  Ответ: 45 рукопожатий
 */

const countOfHandshake = calcHandshake();
console.log(countOfHandshake);

// Уникальные: Кошка,Собака,Корова,Гусеница,Мангуст
const str =
  "Кошка,Собака,Корова,Гусеница,Мангуст,Корова,Корова,Корова,Собака,Мангуст,Корова,Гусеница,Гусеница";

const uniqueStr = getUniqueStr(str);
console.log(uniqueStr);
