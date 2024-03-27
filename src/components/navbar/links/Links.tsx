import Link from 'next/link'
import { FC } from 'react'

const Links: FC = () => {

    const links = [
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

    return (
        <ul>
            {
                links.map(((link, i) => (
                    <li key={i}><Link href={link.path}>{link.title}</Link></li>
                )))
            }
        </ul>
    )
}

export default Links;