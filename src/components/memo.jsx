const memo = (fn) => {
    const cache = new Map(); // Хранилище для кеша

    return (...args) => {
        const key = JSON.stringify(args); // Создаем ключ для кеша из аргументов
        if (cache.has(key)) {
            console.log("Fetching from cache");
            return cache.get(key); // Возвращаем из кеша
        }

        console.log("Computing result");
        const result = fn(...args); // Вычисляем результат
        cache.set(key, result); // Сохраняем результат в кеш
        return result;
    };
};

// Пример использования
const pow = (a) => a * a;

const memoized = memo(pow);

console.log(memoized(4)); // "Computing result", 16
console.log(memoized(4)); // "Fetching from cache", 16
console.log(memoized(5)); // "Computing result", 25
console.log(memoized(5)); // "Fetching from cache", 25
