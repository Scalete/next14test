import { FC } from 'react'
import Links from './links/Links'

const Navbar: FC = () => {
    return (
        <header>
            <div>Logo</div>
            <Links/>
        </header>
    )
}

export default Navbar;