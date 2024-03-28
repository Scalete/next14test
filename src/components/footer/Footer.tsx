import { FC } from 'react'
import styles from './footer.module.css';

const Footer: FC = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.logo}>
                Scalet
            </div>
            <div className={styles.text}>
                © 2024 Scalet
            </div>
        </footer>
    )
}

export default Footer;