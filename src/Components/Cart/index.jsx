// import { useEffect } from 'react';
// import { useContext, useState } from 'react'
// import { CartContext } from '../../Context/CartContext';



// export const Cart = () => {

//     const [cartOpen, setCartOpen] = useState(false)
//     const [productsLength, setProductsLength] = useState(0)

//     const { cartItems } = useContext(CartContext)
//     useEffect(() => {
//         setProductsLength(
//             cartItems.reduce((previous, current) => previous + current.amount, 0)
//         )
//     }, [cartItems])
//     const total = cartItems.reduce((previous, current) => previous + current.amount * current.Precio, 0);


//     return (
//         <div className={styles.cartContainer}>
//             <div className={styles.buttonCartContainer}>
//                 <div className={styles.buttonCart}>
//                     {!cartOpen ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z" /></svg>
//                     ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M9.8 42q-.8 0-1.425-.475T7.55 40.3L1.9 19.95q-.2-.75.275-1.35.475-.6 1.275-.6h10L22.7 4.5q.25-.3.55-.475.3-.175.7-.175.4 0 .7.175.3.175.55.475L34.4 18h10.25q.75 0 1.225.6.475.6.275 1.35l-5.7 20.35q-.2.75-.825 1.225Q39 42 38.2 42Zm.5-3h27.4l5.05-18H5.3ZM24 33q1.25 0 2.125-.875T27 30q0-1.25-.875-2.125T24 27q-1.25 0-2.125.875T21 30q0 1.25.875 2.125T24 33Zm-6.9-15h13.65l-6.8-10Zm-6.8 21h27.4Z" /></svg>
//                     )}
//                 </div>

//                 {!cartOpen && <div className={styles.productsNumber}>{productsLength}</div>}
//             </div>
//             {cartItems.length === 0 ? <p>Tu carrito esta vacío</p> : (
//                 <div>{cartItems.map((item, i)=> (
//                     <itemCart key={i} item={item}/>
//                 ))}</div>
//             )}

//             <h2>Total: ${total}</h2>
//         </div>
//     )
// }
// export default Cart


import { useEffect } from 'react';
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import { ItemCart } from "../ItemCart/index";
import styles from './styles.module.scss'

const Cart = () => {
    /* Creamos 2 estados, uno para ver si el carrito esta abierto o no 
    y otro para obtener la cantidad de productos que tenemos en el carrito */
    const [cartOpen, setCartOpen] = useState(false);
    const [productsLength, setProductsLength] = useState(0);

    /* Traemos del context los productos del carrito */
    const { cartItems } = useContext(CartContext);

    /* Cada vez que se modifica el carrito, actualizamos la cantidad de productos */
    useEffect(() => {
        setProductsLength(
            cartItems?.reduce((previous, current) => previous + current.amount, 0)
        );
    }, [cartItems]);

    /* Obtenemos el precio total */
    const total = cartItems?.reduce(
        (previous, current) => previous + current.amount * current.Precio,
        0
    );

    return (
        <div className={styles.cartContainer}>
            <div
                onClick={() => setCartOpen(!cartOpen)}
                className={styles.buttonCartContainer}
            >
                <div className={styles.buttonCart}>
                    {!cartOpen ? (
                        <svg
                            className={styles.open}
                            width={"35px"}
                            viewBox="0 0 30 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M29.733 6.64651C29.595 6.44711 29.4108 6.28414 29.196 6.17154C28.9813 6.05895 28.7425 6.00009 28.5 6.00001H7.9995L6.2685 1.84501C6.04153 1.29784 5.6572 0.830389 5.16424 0.501923C4.67127 0.173457 4.09187 -0.00123156 3.4995 6.53586e-06H0V3.00001H3.4995L10.6155 20.0775C10.7295 20.3507 10.9218 20.5841 11.1681 20.7483C11.4145 20.9125 11.7039 21 12 21H24C24.6255 21 25.185 20.6115 25.4055 20.028L29.9055 8.02801C29.9905 7.80094 30.0193 7.55664 29.9892 7.31603C29.9592 7.07543 29.8713 6.84569 29.733 6.64651V6.64651Z"
                                fill="#F0F0F0"
                            />
                            <path
                                d="M12.75 27C13.9926 27 15 25.9926 15 24.75C15 23.5074 13.9926 22.5 12.75 22.5C11.5074 22.5 10.5 23.5074 10.5 24.75C10.5 25.9926 11.5074 27 12.75 27Z"
                                fill="#F0F0F0"
                            />
                            <path
                                d="M23.25 27C24.4926 27 25.5 25.9926 25.5 24.75C25.5 23.5074 24.4926 22.5 23.25 22.5C22.0074 22.5 21 23.5074 21 24.75C21 25.9926 22.0074 27 23.25 27Z"
                                fill="#F0F0F0"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.559099 0.559099C0.917199 0.201108 1.40282 0 1.90917 0C2.41553 0 2.90115 0.201108 3.25925 0.559099L10.0115 7.31138L16.7638 0.559099C17.124 0.211254 17.6063 0.0187787 18.107 0.0231296C18.6077 0.0274804 19.0866 0.228309 19.4407 0.582361C19.7947 0.936413 19.9956 1.41536 19.9999 1.91605C20.0043 2.41673 19.8118 2.8991 19.464 3.25925L12.7117 10.0115L19.464 16.7638C19.8118 17.124 20.0043 17.6063 19.9999 18.107C19.9956 18.6077 19.7947 19.0866 19.4407 19.4407C19.0866 19.7947 18.6077 19.9956 18.107 19.9999C17.6063 20.0043 17.124 19.8118 16.7638 19.464L10.0115 12.7117L3.25925 19.464C2.8991 19.8118 2.41673 20.0043 1.91605 19.9999C1.41536 19.9956 0.936413 19.7947 0.582361 19.4407C0.228309 19.0866 0.0274804 18.6077 0.0231296 18.107C0.0187787 17.6063 0.211254 17.124 0.559099 16.7638L7.31138 10.0115L0.559099 3.25925C0.201108 2.90115 0 2.41553 0 1.90917C0 1.40282 0.201108 0.917199 0.559099 0.559099Z"
                                fill="#F0F0F0"
                            />
                        </svg>
                    )}
                </div>
                {!cartOpen && (
                    <div className={styles.productsNumber}>{productsLength}</div>
                )}
            </div>

            {cartItems && cartOpen && (
                <div className={styles.cart}>
                    <h2>Tu carrito</h2>

                    {cartItems.length === 0 ? (
                        <p className={styles.cartVacio}>Tu carrito esta vacio</p>
                    ) : (
                        <div className={styles.productsContainer}>
                            {cartItems.map((item, i) => (
                                <ItemCart key={i} item={item} />
                            ))}
                        </div>
                    )}

                    <h2 className={styles.total}>Total: ${total}</h2>
                </div>
            )}
        </div>
    );
};

export default Cart;