import Link from 'next/link';
import styles from '../styles/navbar.module.scss';

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Link href="/"><h3>Home</h3></Link>
        </nav>
    )
 }