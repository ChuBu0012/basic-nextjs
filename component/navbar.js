import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <Link href={"/"}>
                    <Image src={"/logo.png"} width={50} height={50} alt='logo' />
                </Link>
            </div>

            <Link href={'/'}>หน้าแรก</Link>
            <Link href={'/about'}>เกี่ยวกับเรา</Link>
            <Link href={'/products'}>สินค้าทั้งหมด</Link>
        </nav>
    );
}

export default Navbar;
