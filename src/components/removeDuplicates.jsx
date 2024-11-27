const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const removeDuplicates = (arr) => {
    const unique = [];
    for (let item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
};

console.log(removeDuplicates(array)); // [1, 2, 3, 5, 9, 8]
