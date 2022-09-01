import { NavLink } from 'react-router-dom'
import NavBar from '../NavBar/index'

import styles from './styles.module.scss'

const Header = function Header() {
    return (
        <>
            <header>
                <img src="/DiseñoLogo.png" alt="" />
                {/* <div><a href="/">ARGENTO</a></div>
                <div className={styles.navList}>
                    <ul>
                        <li><a href="#">Termos</a> </li>
                        <li><a href="#">Mates</a> </li>
                        <li><a href="#">Combos</a> </li>
                    </ul>
                </div> */}
            </header>
        </>

    )
}
export default Header