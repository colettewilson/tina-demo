import React from "react"
import PropTypes from 'prop-types'

import TextSection from '../TextSection'
import ImageTextSection from '../ImageTextSection'
import VideoSection from '../VideoSection'

const PageBuilder = ({ sections }) => {
    const components = {
        "PageSectionTextSection": TextSection,
        "PageSectionImageTextSection": ImageTextSection,
        "PageSectionVideoSection": VideoSection
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
  sections: PropTypes.shape({
      body: PropTypes.object
  })
}