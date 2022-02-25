import React from "react"
import PropTypes from 'prop-types'
import RichText from '../RichText'
import ReactPlayer from 'react-player'

import styles from './VideoSection.module.scss'

const VideoSection = ({ section }) => (
    <section className={styles.videoSection}>
        <div className="grid">
            <div className="gridItem large-8 large-offset-2">
                <div className={styles.videoSectionVideo} data-aspect={section.videoEmbed.aspectRatio}>
                    <ReactPlayer 
                        url={section.videoEmbed.videoUrl}
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            {section.body && <div className="gridItem large-8 large-offset-2">
                <RichText content={section.body} />
            </div>}
        </div>
    </section>
)

export default VideoSection

VideoSection.propTypes = {
    section: PropTypes.shape({
        body: PropTypes.object,
        videoEmbed: PropTypes.shape({
            videoUrl: PropTypes.string,
            aspectRatio: PropTypes.string
        })
    }),
}
