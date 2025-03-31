import React from 'react';

const FetchWithRetry = () => {

    function fetchWithRetry(url, options = {}, retries = 3, delayMs = 1000) {
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        return new Promise(async (resolve, reject) => {
            let lastError;

            for (let attempt = 0; attempt <= retries; attempt++) {
                try {
                    const res = await fetch(url, options);

                    if (!res.ok) {
                        // считаем ошибкой только 5xx — можно адаптировать
                        if (res.status >= 500) {
                            throw new Error(`Server error: ${res.status}`);
                        }
                        // если ошибка "клиентская" (4xx), нет смысла ретраить
                        return resolve(res);
                    }

                    return resolve(res); // успех
                } catch (err) {
                    lastError = err;
                    if (attempt < retries) {
                        await delay(delayMs); // подождать перед следующей попыткой
                    }
                }
            }

            reject(lastError); // если все попытки неудачны
        });
    }


    return (
        <div>
            
        </div>
    );
};

export default FetchWithRetry;