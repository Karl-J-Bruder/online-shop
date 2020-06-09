import React, { useState, createContext, useEffect } from "react";

export const ProductContext = createContext(null);

const ProductContextProvider = ({ children }) => {
    const [items, setItems] = useState(JSON.parse((localStorage.getItem("LocalStorageCart"))) || []);
    const addToCart = item => {
        setItems(prevState => [...prevState, item]);
    };
    useEffect(() => {
        localStorage.setItem("LocalStorageCart", JSON.stringify(items))
    }, [items])
    const itemsWithQuantities = (items, qty) => {
        return items.reduce((accumulator, item) => {
            const found = accumulator.find(_item => _item.sku === item.sku);
            if (found) {
                found.quantity = found.quantity + 1;
            } else {
                accumulator.push({
                    quantity: 1,
                    ...item
                });
            }
            return accumulator;
        }, []);
    };
    return (
        <ProductContext.Provider
            value={{
                items: itemsWithQuantities(items),
                itemsCount: items.length,
                addToCart
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
