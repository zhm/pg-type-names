# pg-type-names [![Build Status](https://travis-ci.org/zhm/pg-type-names.svg?branch=master)](https://travis-ci.org/zhm/pg-type-names)

Return the data type names given postgres OIDs. This module just provides simple lookup tables for OID -> typename.

## Installation

```sh
npm install pg-type-names
```

## Example

```js
var types = require('pg-type-names');

console.log(types.names[20]);
console.log(types.oids['bigint']);
console.log(types.descriptions['bigint']);
```
