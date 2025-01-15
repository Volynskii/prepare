import React from 'react';

const InorderTraversal = () => {
    var inorderTraversal = function*(arr) {
        const traversal = function*(arr) {
            for (let el of arr) {
                if (Array.isArray(el)) {
                    yield* traversal(el); // Рекурсивно обходим вложенный массив
                } else {
                    yield el; // Возвращаем значение, если это не массив
                }
            }
        };
        yield* traversal(arr); // Запускаем генератор на переданном массиве
    };
    return (
        <div>

        </div>
    );
};

export default InorderTraversal;