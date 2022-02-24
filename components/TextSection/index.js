import React from "react"
import PropTypes from 'prop-types'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

import styles from "./TextSection.module.scss"

const TextSection = ({ section }) => (
    <section className={styles.textSection}>
        <div className="grid">
            <div className="gridItem large-8 large-offset-2">
                <TinaMarkdown content={section.body} />
            </div>
        </div>
    </section>
)

export default TextSection

TextSection.propTypes = {
  title: PropTypes.string, 
  subtitle: PropTypes.string, 
}
