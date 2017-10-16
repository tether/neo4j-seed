/**
 * Dependencies.
 */

const fs = require('fs')
const neo4j = require('neo4j-driver').v1
const chalk = require('chalk')


/**
 * Create neo4j session driver.
 */

const driver = neo4j.driver(
  process.env.NEO4J_BOLT_URL || "bolt://localhost",
  neo4j.auth.basic(
    process.env.NEO4J_BOLT_USER || "neo4j",
    process.env.NEO4J_BOLT_PASSWORD || "neo4j"
  )
)
const session = driver.session()


/**
 * Expose seed tool.
 */

module.exports = seed


/**
 * Read foler and execute queries contained in it.
 *
 * @param {String} folder
 * @api public
 */

function seed (folder) {
  // @note could read seed.json (to set order)
  walk(folder).then(exit, exit)
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
      if (err) reject()
      else Promise.all(files.map(file => run(folder, file))).then(resolve, reject)
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

function run (folder, file) {
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
                console.log(chalk.green('completed'), file)
                resolve()
              }
            })
          }
        })
      } else {
        reject()
      }
    })
  })
}


/**
 * Close driver and exit process.
 *
 * @api private
 */

function exit () {
  driver.close()
}
