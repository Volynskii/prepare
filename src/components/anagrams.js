const findAnagrams = (arr) => {
    // Группируем слова по их "отсортированному" виду
    const anagramMap = arr.reduce((map, word) => {
        const sortedWord = word.split('').sort().join(''); // Сортируем буквы в слове
        if (!map[sortedWord]) {
            map[sortedWord] = [];
        }
        map[sortedWord].push(word);
        return map;
    }, {});

    // Преобразуем группы анаграмм в массив
    const anagrams = Object.values(anagramMap);

    // Сортируем группы по возрастанию длины
    return anagrams.sort((a, b) => a.length - b.length);
};

// Пример использования
const words = ['гора', 'раки', 'каир', 'рога', 'ирак', 'игра'];
const result = findAnagrams(words);
console.log(result);
