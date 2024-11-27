import React, { useState } from "react";
import type { IProduct } from "./models";
import { PRODUCTS, FRUITS } from "./constants";
import Cart from "./Cart";
import "./styles.css";

export default function App() {
    const [isFruitOnly, setIsFruitOnly] = useState(false);

    // Функция для объединения повторяющихся данных
    const aggregateProducts = (products: IProduct[]) => {
        const aggregated = products.reduce((acc: Record<string, IProduct>, product) => {
            if (acc[product.name]) {
                acc[product.name].count += product.count;
                acc[product.name].price += product.price * product.count; // Суммируем цену
            } else {
                acc[product.name] = { ...product }; // Если продукт ещё не был добавлен
            }
            return acc;
        }, {});
        return Object.values(aggregated);
    };

    // Фильтрация продуктов по чекбоксу
    const filteredProducts = isFruitOnly
        ? PRODUCTS.filter((product) => FRUITS.includes(product.name))
        : PRODUCTS;

    // Объединённые данные
    const aggregatedProducts = aggregateProducts(filteredProducts);

    // Считаем общее количество и стоимость
    const totalQuantity = aggregatedProducts.reduce((sum, product) => sum + product.count, 0);
    const totalPrice = aggregatedProducts.reduce((sum, product) => sum + product.price, 0);

    return (
        <div className="wrapper">
            <div>
                <input
                    type="checkbox"
                    id="isFruit"
                    checked={isFruitOnly}
                    onChange={(e) => setIsFruitOnly(e.target.checked)}
                />
                <label htmlFor="isFruit">Показывать только фрукты</label>
            </div>

            <div>
                Общее количество: <span>{totalQuantity}</span>
            </div>
            <div>
                Общая цена: <span>{totalPrice}</span>
            </div>

            <div>Список продуктов:</div>
            <div className="cart-wrapper">
                {aggregatedProducts.map((product) => (
                    <Cart
                        key={product.name}
                        name={product.name}
                        price={product.price}
                        count={product.count}
                    />
                ))}
            </div>
        </div>
    );
}
