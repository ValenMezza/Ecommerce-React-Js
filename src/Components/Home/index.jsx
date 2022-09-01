import React from 'react'
import Products from '../Products'
import Cart from '../Cart/index'


import styles from'./styles.module.scss'

const Home = () => {
    return (
        <div className={styles.home}>
            <Cart></Cart>
            <Products/>
        </div>
    )
}

export default Home