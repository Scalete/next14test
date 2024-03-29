import { FC } from 'react'
import styles from './postCard.module.css'
import Image from 'next/image';
import Link from 'next/link';

const PostCard: FC = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src={'https://images.pexels.com/photos/4123018/pexels-photo-4123018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" fill className={styles.img}/>
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga cupiditate laudantium eaque ab esse impedit atque soluta dolorum reiciendis autem nam, omnis minima veniam iste magnam eius asperiores tenetur?</p>
            <Link href={'/blog/post'}>READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard;