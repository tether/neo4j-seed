/**
 * Dependencies.
 */

const fs = require('fs')


/**
 * Read foler and execute queries contained in it.
 *
 * @param {String} folder
 * @param {Object?} session (neo4j driver session)
 * @api public
 */

module.exports = (folder, session) => {

}


/**
 * Walk directory.
 *
 * @param {String} folder
 * @return {Promise}
 * @api private
 */

function walk (folder) {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (err, files) => {
      if (err) {
        reject()
      } else {
        files.map(file => {
          fs.stat(folder + '/' + file, (err, stats) => {
            
          })
        })
      }
    })
  })
}
