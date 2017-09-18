function observe (obj) {
  if (!isObject(obj)) {
    return
  }
  for (var key in obj) {
    var val = obj[key]
    observe(val)
    var dep = new Dep()
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function () {
        dep.add()
        return val
      },
      set: function (v) {
        if (v !== val) {
          // 添加订阅
          dep.notify(v, val)
          val = v
        }
      }
    })
  }
}
