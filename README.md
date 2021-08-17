swaggerhub-cli-plugin-schema
============================

A plugin to fetch schemas from schemastore.org

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/swaggerhub-cli-plugin-schema.svg)](https://npmjs.org/package/swaggerhub-cli-plugin-schema)
[![Downloads/week](https://img.shields.io/npm/dw/swaggerhub-cli-plugin-schema.svg)](https://npmjs.org/package/swaggerhub-cli-plugin-schema)
[![License](https://img.shields.io/npm/l/swaggerhub-cli-plugin-schema.svg)](https://github.com/ponelat/swaggerhub-cli-plugin-schema/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g swaggerhub-cli-plugin-schema
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
swaggerhub-cli-plugin-schema/0.0.0 linux-x64 node-v12.13.1
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example schema:get SCHEMA-NAME`](#oclif-example-schemaget-schema-name)
* [`oclif-example schema:list`](#oclif-example-schemalist)

## `oclif-example schema:get SCHEMA-NAME`

Fetch a JSON Schema named NAME.

```
USAGE
  $ oclif-example schema:get SCHEMA-NAME

ARGUMENTS
  SCHEMA-NAME  The JSON Schema to fetch. See schema:list for a list.

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/schema/get.js](https://github.com/ponelat/swaggerhub-cli-plugin-schema/blob/v0.0.0/src/commands/schema/get.js)_

## `oclif-example schema:list`

List the schemas available

```
USAGE
  $ oclif-example schema:list

DESCRIPTION
  ...
  List the schemas available from schemastore.org
```

_See code: [src/commands/schema/list.js](https://github.com/ponelat/swaggerhub-cli-plugin-schema/blob/v0.0.0/src/commands/schema/list.js)_
<!-- commandsstop -->
