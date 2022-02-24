import React from "react"
import PropTypes from 'prop-types'

import styles from "./TextSection.module.scss"

const TextSection = ({ body }) => (
    <section className={styles.textSection}>
        <div className="grid">
            <div className="gridItem large-8 large-offset-2">
                <p>Something</p>
            </div>
        </div>
    </section>
)

export default TextSection

TextSection.propTypes = {
  title: PropTypes.string, 
  subtitle: PropTypes.string, 
}
