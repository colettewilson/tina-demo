const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets')],
    prependData: `@import "_global/_variables.scss";`,
  },
}
