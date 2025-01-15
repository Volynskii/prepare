import React from 'react';

const Debounce = () => {

    var debounce = function(fn, t = 1000) {
        let timer;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), t);
        }
    };


    return (
        <div>

        </div>
    );
};

export default Debounce;