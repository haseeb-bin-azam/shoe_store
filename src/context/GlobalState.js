import React, { createContext, useState } from 'react';
import shoes from '../shoes.json'

export const TransactionContext = createContext(shoes);

export const TransactionProvider = ({ children }) => {

    let [cart, setCart] = useState([]);


    let addCart = (id) => {

        const check = cart.every(item => {
            return item._id !== id;
        })
        // console.log(check);
        if (check) {
            const data = shoes.filter(shoe => {
                return shoe._id === id;
            })
            // console.log(data);
            setCart([...cart, ...data]);
        }

        else {
            alert('item has already been added');
        }

    }

    let reduction = (id) => {
        // console.log(id);
        // console.log(cart);

        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart]);
    };

    let increase = id => {
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        setCart([...cart]);
    };

    let removeProduct = id => {
        if (window.confirm("Do you want to remove this product???")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            setCart([...cart]);
        }
    };

    let getTotal = () => {
        let total = 0;

        cart.map(item => {
            total += item.price * item.count;
        })

        return total;
    };


    return (
        <TransactionContext.Provider value={{
            addCart,
            cart,
            reduction,
            increase,
            removeProduct,
            getTotal
        }}>
            {children}
        </TransactionContext.Provider>
    )
}