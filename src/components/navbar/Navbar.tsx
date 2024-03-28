import { FC } from 'react'
import Links from './links/Links'
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar: FC = () => {
    return (
        <header className={styles.container}>
            <Link href='/' className={styles.logo}>Logo</Link>
            <Links/>
        </header>
    )
}

export default Navbar;