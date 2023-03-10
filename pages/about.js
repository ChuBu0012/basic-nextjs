import React from 'react';
import styles from '@/styles/About.module.css';
import Image from 'next/image';
import Head from 'next/head';
const About = () => {
    return (
        <>
            <Head>
                <title>เกี่ยวกับเรา | Chubu0012</title>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>เกี่ยวกับเรา</h1>
                <Image src="/about.svg" width={400} height={400} alt='aboutlogo' />
            </div>
        </>
    );
}

export default About;
