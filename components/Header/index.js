import React from "react"

import styles from "./Header.module.scss"

const Header = () => (
    <header className={styles.header}>
        <div className="grid">
            <div className="gridItem">
                <img className={styles.headerLogo} src="/images/logo.png" alt="Tilt logo" />
            </div>
        </div>
    </header>
)

export default Header
