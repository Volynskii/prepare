import React from 'react';

const GroupBy = () => {
    Array.prototype.groupBy = function (fn) {
        return this.reduce((grouped, item) => {
            const key = fn(item)
            if(!grouped[key]) {
                grouped[key] = []
            } else {
                grouped[key].push(item)
            }
            return grouped;
        }, {});
    };

    return (
        <div>

        </div>
    );
};

export default GroupBy;