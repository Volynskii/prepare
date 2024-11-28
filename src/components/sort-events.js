const sortEvents = (arr) => {
    // Выбираем только четные числа
    const evens = arr.filter(num => num % 2 === 0);

    // Реализация пузырьковой сортировки для четных чисел
    for (let i = 0; i < evens.length; i++) {
        for (let j = 0; j < evens.length - i - 1; j++) {
            if (evens[j] > evens[j + 1]) {
                // Меняем элементы местами
                [evens[j], evens[j + 1]] = [evens[j + 1], evens[j]];
            }
        }
    }

    // Вставляем отсортированные четные числа обратно на их позиции
    let evenIndex = 0; // Индекс для четных чисел
    return arr.map(num => (num % 2 === 0 ? evens[evenIndex++] : num));
};

// Пример использования
const arr = [1, 8, 3, 9, 12, 13, 2, 5, 6];
const result = sortEvents(arr);
console.log(result); // [1, 2, 3, 9, 6, 13, 8, 5, 12]
