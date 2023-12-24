import React from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/ProductCard.module.css'

const inter = Inter({ subsets: ['latin'] })

const Product = ({ productType, productName, productPrice, imageUrl }) => {

    return (
        <>
            <div className={styles.card}>
                <h6><i class="ri-circle-fill"></i> {productType}</h6>
                <div className={styles.imageBox}>
                    <Image
                        src={imageUrl}
                        alt={`Image for ${productName}`}
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
                    <button>buy now</button>
                </div>
                <h5>{productPrice}</h5>
                <p>{productName}</p>
            </div>
        </>
    )
}

export default Product;