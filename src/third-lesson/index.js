/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {

    let newArray = []

    for (let i = 0; i < array.length; i++) {
        newArray[i] = fn(array[i], i, array);
    }

    return newArray;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {

    let a = initial || array[0],
        i = initial ? 0 : 1;

    for (; i < array.length; i++) {
        a = fn(a, array[i], i, array)
    }

    return a;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    return delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    return Object.keys(obj);
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {

    let arrPropUppercase = [];

    for (let objKey in obj) {
        objKey = objKey.toUpperCase();
        arrPropUppercase.push(objKey);
    }
    return arrPropUppercase;

}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {

    let sliceArray = [],
        end = to > array.length ? array.length : to;

    if (from < 0 && (array.length + from >= 0)) {
        from += array.length;
    } else if (isNaN(from) || (array.length + from < 0)) {
        from = 0;
    }

    if (end < 0 && (array.length + end >= 0)) {
        end += array.length;
    } else if (isNaN(end)) {
        end = array.length;
    }

    for (let i = from; i < end; i++) {
        sliceArray[sliceArray.length] = array[i];
    }

    return sliceArray;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */

function createProxy(obj) {
    return new Proxy(obj, {
        get: function (item, property) {
            return Math.pow(item[property], 2);
        }
    });
}


export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
