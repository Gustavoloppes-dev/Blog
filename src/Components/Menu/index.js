import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import MenuLinks from '../MenuLinks'


export default function Menu() {
    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLinks
                    to="/"
                >
                    Inicio
                </MenuLinks>
                <MenuLinks
                    to="/sobremim"
                >
                    Sobremim
                </MenuLinks>
            </nav>
        </header>
    )
}