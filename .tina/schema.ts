import { defineSchema } from "@tinacms/cli"

import page from './pages/page'
import blog from './pages/blog'

export default defineSchema({
  collections: [
    page,
    blog,
  ],
})
