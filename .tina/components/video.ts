export default {
    label: 'Video',
    name: 'videoEmbed',
    type: 'object',
    ui: {
        defaultItem: {
            aspectRatio: '16:9'
        }
    },
    fields: [
        {
            label: 'Video URL',
            name: 'videoUrl',
            type: 'string'
        },
        {
            label: 'Aspect Ratio',
            name: 'aspectRatio',
            type: 'string',
            options: [
                {
                    label: '16:9',
                    value: '16:9'
                },
                {
                    label: '4:3',
                    value: '4:3'
                }
            ]
        }
    ]
}