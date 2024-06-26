import { FC } from 'react'
import styles from './contact.module.css';
import Image from 'next/image';

const ContactPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/contact.png' alt='Contact Image' fill/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name and Surname' />
          <input type="email" placeholder='Email Address' />
          <input type="text" placeholder='Phone Number (Optional)' />
          <textarea name='' id='' placeholder='Message' cols={30} rows={10}></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div> 
  )
}

export default ContactPage;