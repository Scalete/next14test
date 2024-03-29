import { FC } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image';

const SinglePostPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={'https://images.pexels.com/photos/4123018/pexels-photo-4123018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" fill/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image width={50} height={50} className={styles.avatar} src={'https://images.pexels.com/photos/4123018/pexels-photo-4123018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt=""/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailvalue}>Maxim Palaguta</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailvalue}>11.05.2001</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quos aspernatur nam reprehenderit, sapiente neque fugiat quidem modi adipisci quaerat soluta. Dolor fuga voluptatibus nisi nulla. Commodi illo corrupti dolorum.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;