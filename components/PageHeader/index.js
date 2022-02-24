import React from "react"
import PropTypes from 'prop-types'

import styles from "./PageHeader.module.scss"

const PageHeader = ({ title, subtitle }) => (
    <section className={styles.pageHeader}>
        <div className="grid">
            <div className="gridItem large-10 large-offset-2">
                <h1 className={styles.pageHeaderTitle}>{title}</h1>
                <h2 className={styles.pageHeaderSubtitle}>{subtitle}</h2>
            </div>
        </div>
    </section>
)

export default PageHeader

PageHeader.propTypes = {
  title: PropTypes.string, 
  subtitle: PropTypes.string, 
}
