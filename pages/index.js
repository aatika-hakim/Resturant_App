import Head from 'next/head'
import Menu from './menu'
import Gallery from './gallery'
import About from './about'
import Contact from './contact'
import styles from '../styles/Home.module.css'
import Feature from '../components/Feature'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resturant App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feature />
      <Gallery />
      <Menu />
      <About />
      <Contact />
    </div>
  )
}
