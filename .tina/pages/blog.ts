import seo from '../components/seo'

export default {
    label: "Blog Posts",
    name: "post",
    path: "content/post",
    fields: [
      {
        type: "string",
        label: "Title",
        name: "title",
      },
      {
        label: "Body",
        name: "body",
        type: "rich-text",
        isBody: true
      },
      seo
    ],
}