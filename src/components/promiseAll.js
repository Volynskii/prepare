import React from 'react';

const PromiseAll = () => {

    function myPromiseAll(promises) {
        return new Promise((resolve, reject) => {
            const results = [];
            let completedCount = 0;

            // если массив пустой — сразу резолвим
            if (promises.length === 0) {
                return resolve([]);
            }

            promises.forEach((promise, index) => {
                // оборачиваем каждый элемент — чтобы работать и с промисами, и с обычными значениями
                Promise.resolve(promise)
                    .then(value => {
                        results[index] = value; // сохраняем результат по нужному индексу
                        completedCount++;

                        // если все успешно завершились — резолвим
                        if (completedCount === promises.length) {
                            resolve(results);
                        }
                    })
                    .catch(error => {
                        // если хотя бы один промис упал — реджектим сразу
                        reject(error);
                    });
            });
        });
    }


    return (
        <div>

        </div>
    );
};

export default PromiseAll;