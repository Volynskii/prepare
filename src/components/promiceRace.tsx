function myPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            Promise.resolve(promise)
                .then(resolve) // Разрешаем внешний промис при первом `resolve`
                .catch(reject); // Отклоняем внешний промис при первом `reject`
        }
    });
}

const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("promise1 resolved"), 300);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("promise2 resolved"), 200);
});

const promise3 = new Promise((_, reject) => {
    setTimeout(() => reject("promise3 rejected"), 100);
});

const result = myPromiseRace([promise1, promise2, promise3])
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
