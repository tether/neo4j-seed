# Neo4j-Seed

[![NPM](https://img.shields.io/npm/v/neo4j-seed.svg)](https://www.npmjs.com/package/neo4j-seed)
[![Downloads](https://img.shields.io/npm/dm/neo4j-seed.svg)](http://npm-stat.com/charts.html?package=neo4j-seed)
[![guidelines](https://tether.github.io/contribution-guide/badge-guidelines.svg)](https://github.com/tether/contribution-guide)

Seed [Neo4j database](https://neo4j.com/) from a folder.
* **Recursive**: Recursively traverse a folder and execute queries contained in files (see [example](https://github.com/tether/neo4j-seed/tree/master/example))
* **Command line**: Use this module from the command line to quickly seed or erase your database.


## Usage

### Programmatic

```js
const seed = require('neo4j-seed')
// look for every file in mydebseed and execute queries
seed(__dirname + '/mydbseed')
```

A session is automatically created from the official [neo4j javascript driver](https://github.com/neo4j/neo4j-javascript-driver) but it is possible to change credentials and database url through the `NEO4J_BOLT_URL`, `NEO4J_BOLT_USER` and `NEO4J_BOLT_PASSWORD` environment variables.


### Command line

This module is also available from the command line.

```shell
# seed database from folder called mydbseed
$ neo4j-seed mydbseed


# erase database]
$ neo4j-seed -r
```

Environment variables are automatically read from a `.env` file in order to set up your db credentials.

## Installation

```shell
npm install neo4j-seed -g
```

[![NPM](https://nodei.co/npm/neo4j-seed.png)](https://nodei.co/npm/neo4j-seed/)


## Question

For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/tether/contribution-guide/blob/master/community.md" target="_blank">community guidelines</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

The open source community is very important to us. If you want to participate to this repository, please make sure to read our <a href="https://github.com/tether/contribution-guide" target="_blank">guidelines</a> before making any pull request. If you have any related project, please let everyone know in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2017 Tether Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
