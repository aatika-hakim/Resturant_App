import Title from './Title'
import Text from './Text'
import styles from '../styles/Feature.module.css'

const Feature = () => {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.container}>
        <Text className={styles.Text}>CONTRAY TO POPPULAR BELIEF</Text>
        <Title className={styles.title}>Neque porro quisquam </Title>
        <Text className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <button className={styles.button}>
          <div className={styles.btn1}>VIEW MORE</div>
          <div className={styles.btn2}>Go</div>
        </button>
      </div>
    </section>
  )
}

export default Feature
