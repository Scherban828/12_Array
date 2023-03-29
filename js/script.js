"use strict";
//Срздание массива 
let arr = new Array();
let arrO = [
    'Вася',
    'Петя',
    'Гоша',
];
console.log(arrO[2]);
//Многомерный массив
let arrT = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(arrT[1][2]);
//Длина массива 
console.log(arrT[1].length);
let arrNew = arrO;
arrNew.length = 2;
console.log(arrNew);
//Изменение и добавление значений Массива 
arrNew[0] = 'Коля';
console.log(arrNew);
arrNew[3] = 'Ваня';
console.log(arrO);
//Методы массивов 
arrO.push("Дима");//Добавляет элемень в конец
console.log(arrO);
arrO.shift();//Удаляет первый элемент
console.log(arrO);
arrO.pop();//Удаляет последний элемент
console.log(arrO);
arrO.unshift('Дмма', 'Денис');//Добавляет элемент в начало массива
console.log(arrO);
//Удаление элемента массаива
delete arrO[2];
console.log(arrO);//При этм остается пустая ячейка массива без значения
//Splice
arrO.splice(2, 2);//Тут удаляет полностью ячейуц с 2, 2 ячейки
console.log(arrO);
arrO.splice(0, 1, 'Толя');//Тут заменяет первый (0) элемент массива на новый
console.log(arrO);
arrO.splice(0, 0, 'Аркадий');//Тут добавляет новый элемент перед первым, делая его первым
console.log(arrO);
//slice
let arrTwo = arrO.slice(1, 2);//Тут производится копирование массива, элементов с первого по второй, не включая его
console.log(arrTwo);
let arrThree = arrO.slice(-2, -1);//Тут производится копирование массива, элементов с последнего по предпоследний, не включая его
console.log(arrO);
console.log(arrThree);
let arrFour = arrO.slice();//Полностью копирует массив
console.log(arrFour);
//Копирует массив и добавляет новый элемент
let arrFive = arrFour.concat('Гриша');
console.log(arrFive);
//Методы поиска в массиве 
console.log(arrFive.indexOf('Гриша'));//Выдает номер значения в массиве 
console.log(arrFive.includes('Гриша'));//Выдает True, при наличии указаного элемента в массиве 
//Find, Findindex
//Find - Ищет значения в массиве и оствнавливается после нахождения первого
let arrBig = [
    { name: 'Вася', age: 18 },
    { name: 'Толя', age: 25 },
];
let result = arrBig.find(function (item, index, array) {
    return item.age === 18;
});
console.log(result);
let resultI = arrBig.findIndex(function (item, index, array) {
    return item.age === 18;
});
console.log(resultI);
//Filter - как Find, но продолжает поиск после нахождения первого результата 
let resultFilt = arrBig.filter(function (item, index, array) {
    return item.age >= 18;
});
console.log(resultFilt);
//Сортировка массива
//Сортирует по имени значения
console.log(arrFive.sort());
//Сортировка чисел 
let arrNum = [1, 22, 3];
//Задаем ф-ию которя сравнивает два числа, а sort выстраивает их по возрастанию
console.log(arrNum.sort((a, b) => a - b));
//Reverse Меняет порядок значений массива
console.log(arrFive.reverse());
//Методы преобразования массива
//Так можно вернуть первые буквы значений массива
let resultCh = arrFive.map(function (item, index, array) {
    return item[0];
});
console.log(resultCh);
//split - преобразовывает строку в массив по заданному разделителю
let str = 'Вася,Гоша,Гога';
let arrStr = str.split(',');
console.log(arrStr);
//Join Наоборот преобразует массив в строку 
let strArr = arrStr.join(',');
console.log(strArr);
//Проверка на то, что данный объект является массивом 
let obj1 = { num: 25 };
if (Array.isArray(obj1)) {
    console.log('Это массив');
}
else {
    console.log('Это не массив');
};
//Методы перебора массива 
for (let item1 = 0; item1 < arrFive.length; item1++) {
    console.log(arrFive[item1]);
};
arrFive.forEach(function (item, index, array) {
    console.log(`${item} находится в позиции ${index} массива ${array}`);
});
