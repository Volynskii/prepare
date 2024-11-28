import React from 'react';

const Emitter = () => {

    class EventEmitter {
        constructor() {
            this.events = new Map(); // Хранилище для событий и их обработчиков
        }

        // Метод для подписки
        subscribe(event, callback) {
            if (!this.events.has(event)) {
                this.events.set(event, []); // Если события еще нет, добавляем массив
            }

            const handlers = this.events.get(event);
            handlers.push(callback);

            // Возвращаем объект с методом release для отписки
            return {
                release: () => {
                    const index = handlers.indexOf(callback);
                    if (index !== -1) {
                        handlers.splice(index, 1); // Удаляем обработчик
                    }
                }
            };
        }

        // Метод для вызова событий
        emit(event, ...args) {
            if (this.events.has(event)) {
                const handlers = this.events.get(event);
                handlers.forEach((callback) => {
                    callback(...args); // Вызываем каждый обработчик
                });
            }
        }
    }

// Определение callback1 и callback2
    function callback1(x, y) {
        console.log(x + y, "event 1");
    }

    function callback2(x, y) {
        console.log(x * y, "event 2");
    }

// Создаем экземпляр EventEmitter
    const emitter = new EventEmitter();

// Подписываемся на события
    const sub1 = emitter.subscribe("event1", callback1); // callback1 вызывается для event1
    const sub2 = emitter.subscribe("event2", callback2); // callback2 вызывается для event2
    const sub3 = emitter.subscribe("event1", callback1); // callback1 вызывается второй раз для event1

    console.log('emitter!',emitter)
    console.log('sub1', sub1);
    console.log('sub2', sub2);
    console.log('sub3', sub3);

// Вызываем события
    emitter.emit("event1", 1, 2); // callback1 вызывается дважды
    emitter.emit("event2", 3, 4); // callback2 вызывается один раз

// Вывод в консоль:
// 3 event 1
// 3 event 1
// 12 event 2

// Удаляем подписки
    sub1.release(); // Удаляем первую подписку callback1 на event1
    sub3.release(); // Удаляем вторую подписку callback1 на event1

// Вызываем события снова
    emitter.emit("event1", 1, 2); // callback1 больше не вызывается
    emitter.emit("event2", 3, 4); // callback2 все еще вызывается

// Вывод в консоль:
// 12 event 2


    return (
        <div>
            123
        </div>
    );
};

export default Emitter;