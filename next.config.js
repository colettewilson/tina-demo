const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
    prependData: `@import "_global/_variables.scss";`,
  },
}
