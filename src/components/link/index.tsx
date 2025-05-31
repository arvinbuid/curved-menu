import styles from './style.module.scss';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { slide, scale } from '../../utils/animation';

interface LinkProps {
    data: {
        index: number,
        title: string,
        href: string
    },
    isActive: boolean,
    setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>
}

export default function LinkPage({ data, isActive, setSelectedIndicator }: LinkProps) {
    const { index, title, href } = data;

    return (
        <motion.div
            className={styles.link}
            onMouseEnter={() => { setSelectedIndicator(href) }}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <motion.div
                variants={scale}
                animate={isActive ? "open" : "closed"}
                className={styles.indicator}>
            </motion.div>
            <Link href={href}>{title}</Link>
        </motion.div>
    )
}