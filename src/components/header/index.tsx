'use client'

import styles from "./style.module.scss";
import Navbar from "./nav";

import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    // Create ref to store the previous pathname & satisfy ESLint.
    const prevPathname = useRef(pathname);

    // The useEffect to close the Navbar on route change
    useEffect(() => {
        if (pathname !== prevPathname.current && isActive) {
            setIsActive(false);
        }

        // Update the ref with the current pathname for the next render's comparison
        prevPathname.current = pathname;
    }, [pathname, isActive])


    return (
        <>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    </div>
                </div>
            </div>

            <AnimatePresence key="navbar" mode="wait">
                {isActive && <Navbar />}
            </AnimatePresence>
        </>
    );
}

export default Header;