import clsx from 'clsx'
import styles from '../styles/Text.module.css'

function Text({ children, className }) {
  return <p className={clsx(styles.text, className)}>{children}</p>
}

export default Text
