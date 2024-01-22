import React from 'react'
import styles from '@/styles/components/home/testimonial.module.scss'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div className={styles.main}>
        <div className={styles.heading}>
            <h3>TESTIMONIAL</h3>
            <h1>What Our clients Say</h1>
        </div>
        <div className={styles.cards}>
            <div className={styles.card}>
                <Image
                src='/profile.jpg'
                alt='profile-img'
                width={100}
                height={100} 
                className={styles.profile_img}/>

                <Image
                src='/quotes-icon.png'
                alt='quotes-icon'
                width={40}
                height={40}
                className={styles.quotation_icon} />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur!
                </p>
                <div className={styles.profile}>
                    <h2>William James</h2>
                    <h3>Enterprenuer</h3>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                src='/profile.jpg'
                alt='profile-img'
                width={100}
                height={100} 
                className={styles.profile_img}/>

                <Image
                src='/quotes-icon.png'
                alt='quotes-icon'
                width={40}
                height={40}
                className={styles.quotation_icon} />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur!
                </p>
                <div className={styles.profile}>
                    <h2>William James</h2>
                    <h3>Enterprenuer</h3>
                </div>
            </div>
            <div className={styles.card}>
                <Image
                src='/profile.jpg'
                alt='profile-img'
                width={100}
                height={100} 
                className={styles.profile_img}/>

                <Image
                src='/quotes-icon.png'
                alt='quotes-icon'
                width={40}
                height={40}
                className={styles.quotation_icon} />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur!
                </p>
                <div className={styles.profile}>
                    <h2>William James</h2>
                    <h3>Enterprenuer</h3>
                </div>
            </div>
            
        </div>
    </div >
  )
}

export default Testimonial