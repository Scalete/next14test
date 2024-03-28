"use client"

import { FC } from 'react'
import styles from './navLink.module.css';
import Link from 'next/link';
import { ILink } from '@/interfaces/navbar/interface';
import { usePathname } from 'next/navigation';

const NavLink: FC<{item: ILink}> = ({item}) => {

  const pathName = usePathname();

  return (
    <li className={`${styles.container} ${pathName === item.path ? styles.active : ''}`}>
      <Link href={item.path}>{item.title}</Link>
    </li>
  )
}

export default NavLink;