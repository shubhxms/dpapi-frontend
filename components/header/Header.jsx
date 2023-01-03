import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import styles from '../../styles/Home.module.css'

function Header() {
  return (
    <div>
        
        <div className={styles.main}>
            <h1>personal api</h1>
            <ConnectButton coolMode/>
        </div>
    </div>
  )
}

export default Header