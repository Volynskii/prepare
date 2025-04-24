import React from 'react';
const Queue = () => {
    class Stack {
        constructor() {
            this.storage = [];
        }

        push(data) {
            this.storage.push(data);
        }

        pop() {
            return this.storage.pop();
        }

        size() {
            return this.storage.length;
        }
    }

    class Queue {
        constructor() {
            this.stack1 = new Stack(); // Основной стек для добавления
            this.stack2 = new Stack(); // Вспомогательный стек для удаления
        }

        // Добавить в очередь (enqueue)
        enqueue(data) {
            this.stack1.push(data);
        }

        // Вернуть следующего в очереди (dequeue)
        dequeue() {
            if (this.stack2.size() === 0) {
                while (this.stack1.size() > 0) {
                    this.stack2.push(this.stack1.pop());
                }
            }

            return this.stack2.pop();
        }

        // Сколько элементов в очереди
        count() {
            return this.stack1.size() + this.stack2.size();
        }
    }

// Пример использования
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    console.log(queue.dequeue()); // 1
    console.log(queue.count());   // 1
    queue.enqueue(3);
    console.log(queue.dequeue()); // 2
    console.log(queue.dequeue()); // 3
    console.log(queue.count());   // 0
    return (
        <div>

        </div>
    );
};

export default Queue;