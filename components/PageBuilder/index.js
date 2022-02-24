import React from "react"
import PropTypes from 'prop-types'

import TextSection from '../TextSection'
import ImageTextSection from '../ImageTextSection'

const PageBuilder = ({ sections }) => {
    const components = {
        "PageSectionTextSection": TextSection,
        "PageSectionImageTextSection": ImageTextSection
    }

    return sections.map((section, index) => {
        if (components[section.__typename]) {
            return React.createElement(components[section.__typename], {
                key: `${section.__typename}_${index}`,
                section
            })
        }
    })
}

export default PageBuilder

PageBuilder.propTypes = {
  title: PropTypes.string, 
  subtitle: PropTypes.string, 
}
