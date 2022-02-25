import video from '../components/video'

const imageTextSection = {
    label: 'Image/Text Section',
    name: 'imageTextSection',
    ui: {
        defaultItem: {
            layout: 'row'
        }
    },
    fields: [
        {
            label: 'Layout',
            name: 'layout',
            type: "string",
            options: [
                {
                    label: 'Image | Text - Row',
                    value: 'row'
                }, 
                {
                    label: 'Text | Image - Row',
                    value: 'row-reverse'
                },
                {
                    label: 'Image | Text - Column',
                    value: 'column'
                }, 
                {
                    label: 'Text | Image - Column',
                    value: 'column-reverse'
                },
                {
                    label: 'Image only',
                    value: 'image'
                }
            ],
        },
        {
            label: 'Body',
            name: 'body',
            type: 'rich-text'
        },
        {
            label: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            label: 'Image Alt Description',
            name: 'alt',
            type: 'string'
        },
    ],
}

const textSection = {
    label: 'Text Section',
    name: 'textSection',
    fields: [
        {
            label: 'Body',
            name: 'body',
            type: 'rich-text'
        },
    ],
}

const videoSection = {
    label: 'Video Section',
    name: 'videoSection',
    fields: [
        {
            label: 'Body',
            name: 'body',
            type: 'rich-text',
        },
        video
    ],
}

export default {
    label: 'Sections',
    name: 'section',
    type: 'object',
    list: true,
    templates: [
        textSection,
        imageTextSection,
        videoSection
    ]
}