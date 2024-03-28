"use client"

import { FC, useState } from 'react'
import styles from './links.module.css'
import { ILink } from '@/interfaces/navbar/interface'
import NavLink from './navLink/NavLink'

const links: ILink[] = [
    {
        title: "Homepage",
        path: '/',
    },
    {
        title: "About",
        path: '/about',
    },
    {
        title: "Contact",
        path: '/contact',
    },
    {
        title: "Blog",
        path: '/blog',
    },
]

const Links: FC = () => {

    const [open, setOpen] = useState(false);

    //Temporary
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                {
                    links.map(((link, i) => (
                        <NavLink key={i} item={link}/>
                    )))
                }
                {
                    session ? (
                        <>
                            {
                                isAdmin && (
                                    <NavLink item={{title: 'Admin', path: '/admin'}}/>
                                )
                            }
                            <button className={styles.logout}>Logout</button>
                        </>
                    ): (
                        <NavLink item={{title: 'Login', path: '/login'}}/>
                    )
                }
            </ul>
            <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>Menu</button>
            {
                open && (
                    <ul className={styles.mobileLinks}>
                        {
                            links.map(((link, i) => (
                                <NavLink key={i} item={link}/>
                            )))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default Links;