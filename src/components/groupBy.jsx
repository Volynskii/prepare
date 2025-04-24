import React from 'react';

const GroupBy = () => {
    Array.prototype.groupBy = function (fn) {
        return this.reduce((grouped, item) => {
            const key = fn(item);
            if (!grouped[key]) {
                grouped[key] = []; // создаем пустой массив
            }
            grouped[key].push(item); // добавляем элемент в группу
            return grouped;
        }, {});
    };

    return (
        <div>

        </div>
    );
};

export default GroupBy;