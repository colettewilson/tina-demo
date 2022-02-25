import PropTypes from 'prop-types'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

import styles from "./RichText.module.scss"

const RichText = ({ content }) => <div className={styles.richText}><TinaMarkdown content={content} /></div>

export default RichText

RichText.propTypes = {
  content: PropTypes.object,
}
