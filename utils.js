var OBJECT_PROTOTYPE = '[object Object]'

function protoString (obj) {
  return Object.prototype.toString.call(obj)
}

function isObject (obj) {
  return protoString(obj) === OBJECT_PROTOTYPE
}
