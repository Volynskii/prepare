const pipe = (fns) => {
    return (initialValue) => {
        return fns.reduce((acc, fn) => {
            fn(acc)
        }, initialValue);
    };
};

const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

const calculationOne = pipe([
    times(2),
    times(3),
]);

console.log(calculationOne(2)); // 12

const calculationTwo = pipe([
    times(2),
    plus(3),
    times(4),
]);

console.log(calculationTwo(2)); // 28
