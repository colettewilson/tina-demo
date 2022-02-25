import React from "react"
import PropTypes from 'prop-types'
import RichText from '../RichText'

import styles from "./ImageTextSection.module.scss"

const ImageTextSection = ({ section }) => (
    <section className={styles.imageTextSection} data-layout={section.layout}>
        {section.image && <div className={styles.imageTextSection__image}>
            <img src={section.image} alt={section.alt} />
        </div>}
        {section.body && <div className={styles.imageTextSection__text}>
            <div className={styles.imageTextSection__textInner}>
                <RichText content={section.body} />
            </div>
        </div>}
    </section>
)

export default ImageTextSection

ImageTextSection.propTypes = {
    section: PropTypes.shape({
        body: PropTypes.object,
        image: PropTypes.string,
        alt: PropTypes.string
    }),
}