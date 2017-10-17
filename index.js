/**
 * Dependencies.
 */

const fs = require('fs')
const chalk = require('chalk')


/**
 * Read foler and execute queries contained in it.
 *
 * @param {String} folder
 * @api public
 */
module.exports = (folder, driver) => {
  const exit = () => driver.close()
  // @note could read seed.json (to set order)
  walk(folder, driver.session())
    .then(exit, exit)
}



/**
 * Walk directory.
 *
 * @param {String} folder
 * @return {Promise}
 * @api private
 */

function walk (folder, session) {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (err, files) => {
      if (err) reject()
      else Promise.all(files.map(file => run(folder, file, session))).then(resolve, reject)
    })
  })
}


/**
 * Run queries for a given file.
 *
 * @param {String} folder
 * @param {String} file
 * @api private
 */

function run (folder, file, session) {
  const path = folder + '/' + file
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (stats.isFile()) {
        fs.readFile(path, (err, content) => {
          if (err) reject()
          else {
            session.run(content.toString()).subscribe({
              onError(err) {
                console.log(chalk.red('error'), err.message)
                reject()
              },
              onCompleted() {
                console.log(chalk.green('completed'), path)
                resolve()
              }
            })
          }
        })
      } else if (stats.isDirectory()) {
        walk(path, session).then(resolve, reject)
      } else {
        reject()
      }
    })
  })
}
