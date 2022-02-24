import Head from 'next/head'
import PropTypes from 'prop-types'

import Header from './Header'

export const Layout = props => {
  const { children } = props

  return (
    <div>
      <Head>
        <title>Tina Demo</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}
