const micromatch = require('micromatch')

module.exports = {
  'packages/**/*.js': (files) => {
    console.log(files, 7777777777777)
    // from `files` filter those _NOT_ matching `*test.js`
    const match = micromatch.not(files, 'packages/**/dist/*.js')
    return `eslint ${match.join(' ')}`
  }
}
