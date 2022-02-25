import React from "react"
import PropTypes from 'prop-types'
import RichText from '../RichText'

const TextSection = ({ section }) => (
    <section>
        <div className="grid">
            <div className="gridItem large-8 large-offset-2">
                <RichText content={section.body} />
            </div>
        </div>
    </section>
)

export default TextSection

TextSection.propTypes = {
    section: PropTypes.shape({
        body: PropTypes.object
    }),
}
