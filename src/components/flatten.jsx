import React from 'react';
/**
 * Выравнивает глубоко вложенный массив без использования `Array.flat`
 * @param {any[]} arr - Входной массив
 * @param {number} depth - Глубина разворачивания
 * @return {any[]} - Развернутый массив
 */
var flat = function (arr, depth) {
    if (depth === 0) return arr; // Если глубина 0, просто возвращаем массив

    let result = [];

    for (const item of arr) {
        if (Array.isArray(item) && depth > 0) {
            // Рекурсивно разворачиваем вложенные массивы
            result.push(...flat(item, depth - 1));
        } else {
            result.push(item);
        }
    }

    return result;
};

// Примеры использования:
console.log(flat([1, [2, [3, [4, 5]]]], 2)); // [1, 2, 3, [4, 5]]
console.log(flat([1, [2, [3, [4, 5]]]], 3)); // [1, 2, 3, 4, 5]
console.log(flat([1, [2, [3, [4, 5]]]], 1)); // [1, 2, [3, [4, 5]]]
console.log(flat([1, [2, [3, [4, 5]]]], 0)); // [1, [2, [3, [4, 5]]]]



const Flatten = () => {
    return (
        <div>

        </div>
    );
};

export default Flatten;