import micromatch from 'micromatch'

export default {
  '*.js': (files) => {
    console.log(files, 7777777777777)
    // from `files` filter those _NOT_ matching `*test.js`
    const match = micromatch.not(files, '*test.js')
    return `eslint ${match.join(' ')}`
  }
}
