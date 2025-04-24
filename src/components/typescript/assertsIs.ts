import React from 'react';

const AssertsIs = () => {

    type Goose = {
        bite: VoidFunction;
        color: string;
    }

    type Duck = {
        quack: VoidFunction;
        weight: number;
    }

    const animal = Math.random() > 0.5
        ? {
            bite: () => console.log('ай!'),
            color: 'white'
        }
        : {
            quack: () => console.log('кря'),
            weight: 32
        };

    const isDuck = (jivotnoe: Goose | Duck): asserts jivotnoe is Duck => {
        return 'quack' in jivotnoe;
    }

    if (isDuck(animal)) {
        animal.quack();
        console.log(animal.weight);
    }


    return (
        <div>
            asserts is
            </div>
    );
};

export default AssertsIs;