import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าแรก | Chubu0012</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรกของเว็บไซต์</h1>
        <Image src="/shopping.svg" width="300" height="300" alt="" />
        <p>Welcome Most Shop</p>
        <Link href={'/products'} className={styles.btn}>ดูสินค้าทั้งหมด</Link>
      </div>
    </>
  )
}
