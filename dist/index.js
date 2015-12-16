'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var raw = JSON.parse(_fs2.default.readFileSync(_path2.default.join(__dirname, 'types.json')));

var names = {};
var oids = {};
var descriptions = {};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = raw[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var type = _step.value;

    names[type.oid] = type.name;
    oids[type.name] = type.oid;
    descriptions[type.name] = type.description;
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var api = { names: names,
  oids: oids,
  descriptions: descriptions };

exports.default = api;
//# sourceMappingURL=index.js.map