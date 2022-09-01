
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from "./styles.module.scss";

export const ItemCart = ({ item }) => {
    /* Traemos del context las funciones para agregar y sacar productos del carrito */
    const { addItemToCart, deleteItemToCart } = useContext(CartContext);

    /* Desestructuramos el item para sacar solo la id */
    const { amount } = item;

    return (
        <div className={styles.cartItem}>
            <img src={item.img} alt={item.product} />
            <div className={styles.dataContainer}>
                <div className={styles.left}>
                    <p>{item.product}</p>
                    <div className={styles.buttons}>
                        <button onClick={() => addItemToCart(item._id, "add", amount)}>
                            AGREGAR
                        </button>
                        <button onClick={() => deleteItemToCart(item._id, "del", amount)}>
                            SACAR
                        </button>
                    </div>
                </div>
                <div className={styles.right}>
                    <div>{item.amount}</div>
                    <p>Total: ${item.amount * item.Precio}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemCart;