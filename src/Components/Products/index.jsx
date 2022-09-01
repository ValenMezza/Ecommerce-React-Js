import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { ProductsData } from '../../Data/ProductsData'

import styles from './styles.module.scss'

function Products() {

  const {addItemToCart} = useContext(CartContext)

  return (
    <div className={styles.productsContainer}>
      {ProductsData.map((product, i)=>(
        <div key={i} className={styles.item}>
          <img height='300px' width='300px' src={product.img} alt={product.product}/>
          <div >
            <h3>{product.product}</h3>
            <p>${product.Precio}</p>
          </div>
          <button onClick={()=> addItemToCart(product)}>Agregar al carrito</button>
          <button>Ver detalle</button>
        </div>
      ))}
    </div>
  )
}

export default Products