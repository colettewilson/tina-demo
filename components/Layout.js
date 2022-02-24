import Link from 'next/link'
import Head from 'next/head'
import PropTypes from 'prop-types'

export const Layout = props => {
  const { children } = props

  return (
    <div>
      <Head>
        <title>Tina Demo</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' | '}
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}
