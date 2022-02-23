export default {
    title: 'SEO',
    name: 'seo',
    type: 'object',
    fields: [
      {
        label: 'Canonical (Optional)',
        name: 'canonical',
        type: 'string',
        description: `A default canonical url will be generated using the site url (provided in the global SEO options) and the slug. It is only necessary to complete this field if wishing to override the dynamic canonical url.`,
      },
      {
        label: 'Meta title (Optional)',
        name: 'metaTitle',
        type: 'string',
        description:
          'A default meta title will be generated using the page title, the secondary title (provided in the global SEO options) and the site title. This field is only necessary if wishing to override the dynamic meta title.',
      },
      {
        label: 'Description (Recommended)',
        name: 'description',
        type: 'string',
        description: 'Please provide a unique meta description.',
        ui: {
          component: "textarea"
        },
        validation: (Rule) => Rule.max(155).warning('Description too long. Optimal length is 155 characters or less.'),
      },
      {
        label: 'Open Graph Image (Optional)',
        name: 'image',
        type: 'image',
      },
      {
        label: 'No Index Meta tag',
        name: 'noIndex',
        type: 'boolean',
        description: 'Remove URL from search index.',
        options: {
          layout: 'checkbox',
        },
      },
    ],
  }