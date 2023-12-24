import React from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/CategoryCard.module.css'

const inter = Inter({ subsets: ['latin'] })

const category = ({ categoryName, imageUrl }) => {

    return (
        <>
            <div className={styles.card}>
                <div className={styles.imageBox}>
                    <Image
                        src={imageUrl}
                        alt={`Image for ${categoryName}`}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className={styles.shadow}>
                    <Image
                        src='/Product Categories/shadow.png'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className={styles.cardHeading}>
                    <h2>{categoryName}</h2>
                </div>
            </div>
        </>
    )
}

export default category;