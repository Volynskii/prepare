import React from 'react';

const InstanceOf = () => {
    var checkIfInstanceOf = function(obj, classFunction) {

        while (obj != null) {
            if(obj.constructor === classFunction) {
                return true
            }
            obj = Object.getPrototypeOf(obj);
        }

        return false;
    };
    return (
        <div>

        </div>
    );
};

export default InstanceOf;