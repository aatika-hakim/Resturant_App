import clsx from 'clsx'
import styles from '../styles/Title.module.css'

function Title({ children, className }) {
  return (
    <h1 className={clsx(styles.title, className)}>
      {children}
    </h1>
  )
}

export default Title
