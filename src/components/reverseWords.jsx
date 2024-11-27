const reverseString = (word) => {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
};

const reverseWords = (str) => {
    return str
        .split(' ')
        .map(reverseString) // Используем функцию для разворота слова
        .join(' ');
};

const result = reverseWords("Welcome to this Javascript Guide!");
console.log(result); // "emocleW ot siht tpircsavaJ !ediuG"
