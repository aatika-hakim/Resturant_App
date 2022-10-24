import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
      <div className={styles.item}>
        <div className={styles.text}>Resturant</div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href="/gallery">
            <li className={styles.listItem}>Gallery</li>
          </Link>
          <Link href="/menu">
            <li className={styles.listItem}>Menu</li>
          </Link>
          <Link href="/about">
            <li className={styles.listItem}>About </li>
          </Link>
          <Link href="/contact">
            <li className={styles.listItem}>Contact</li>
          </Link>
          <li className={styles.listItem}>
            <Image src="/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>0</div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
