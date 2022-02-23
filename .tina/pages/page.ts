import header from '../components/header'
import pageBuilder from '../components/pageBuilder'

export default {
    label: "Page Content",
    name: "page",
    path: "content/page",
    format: "mdx",
    fields: [
        header,
        pageBuilder
    ],
}