'use client'
import styles from "./style.module.scss";

import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Navbar from "../nav";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div onClick={() => setIsActive(!isActive)} className={styles.button}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Navbar />}
            </AnimatePresence>
        </>
    );
}

export default Header;