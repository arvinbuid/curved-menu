'use client'

import styles from './style.module.scss';
import LinkPage from '../link';

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../header/animation';

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Services",
        href: "/services",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact Us",
        href: "/contact-us",
    },

]

export default function Navbar() {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.menu}
        >
            <div className={styles.body}>
                <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>

                    {navItems.map((data, index) => {
                        return <LinkPage
                            key={index}
                            data={{ ...data, index }}
                            isActive={selectedIndicator == data.href}
                            setSelectedIndicator={setSelectedIndicator}>
                        </LinkPage>
                    })}
                </div>

                {/* Footer */}
                <div className={styles.footer}>
                    <a href='https://facebook.com'>Facebook</a>
                    <a href='https://x.com'>X</a>
                    <a href='https://instagram.com'>Instagram</a>
                    <a href='https://linkedin.com'>LinkedIn</a>
                </div>
            </div>
        </motion.div>
    )

}