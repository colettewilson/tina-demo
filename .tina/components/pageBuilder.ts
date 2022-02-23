const imageTextSection = {
    label: 'Image/Text Section',
    name: 'imageTextSection',
    fields: [
        {
            label: 'Body',
            name: 'body',
            type: 'rich-text',
        },
        {
            label: 'Image',
            name: 'image',
            type: 'image',
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
            type: 'rich-text',
        },
    ],
  }

export default {
    label: 'Sections',
    name: 'section',
    type: 'object',
    list: true,
    templates: [
        textSection,
        imageTextSection
    ]
}