import { FC } from 'react'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <div>
      <div className={styles.logoHeader}>
        <img src="/img/logo1.svg" alt="Logo" />
        <p>|</p>
        <p>лизинговая компания</p>
      </div>
    </div>
  )
}

export default Header
