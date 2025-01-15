import React from 'react';

const PromiseTimeLimit = () => {
    var timeLimit = function(fn, t) {
        return async function(...args) {
            const originalPromise = fn(...args);
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(()=> {
                    reject('Time Limit Exceeded')
                },t)
            })
            return Promise.race([originalPromise, timeoutPromise])
        }
    };

    return (
        <div>
            promise time limit!
        </div>
    );
};

export default PromiseTimeLimit;