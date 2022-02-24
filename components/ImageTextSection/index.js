import React from "react"
import PropTypes from 'prop-types'

import styles from "./ImageTextSection.module.scss"

const ImageTextSection = ({ body, image }) => (
    <section className={styles.imagetextSection}>
        <div className="grid">
            <div className="gridItem large-8 large-offset-2">
                <p>Something Else</p>
            </div>
        </div>
    </section>
)

export default ImageTextSection

ImageTextSection.propTypes = {
  body: PropTypes.any, 
  image: PropTypes.any, 
}
