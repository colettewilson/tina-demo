import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import { Layout } from '../components/Layout'
import PageHeader from '../components/PageHeader'
import PageBuilder from '../components/PageBuilder'

const query = `{
  getPageDocument(relativePath: "home.mdx") {
    data {
      header {
        title
        subtitle
      }
      section {
        __typename
        ... on PageSectionTextSection {
          body
        }
        __typename
        ... on PageSectionImageTextSection {
          body
        }
      }
    }
  }
}`

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  })

  const { header, section } = data.getPageDocument.data

  return (
    <Layout>
      <PageHeader {...header} />
      <PageBuilder sections={section} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const variables = {}
  let data = {}
  try {
    data = await staticRequest({
      query,
      variables,
    })
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      // myOtherProp: 'some-other-data',
    },
  }
}
