import { FC } from 'react'
import Links from './links/Links'
import styles from './navbar.module.css';

const Navbar: FC = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <Links/>
        </header>
    )
}

export default Navbar;