function Dep () {
  this.subs = []
}

Dep.prototype.add = function () {
  this.subs.push(Dep.target)
}

Dep.prototype.notify = function () {
  this.subs.forEach(sub => {
    sub.fn.apply(null, arguments)
  })
}

Dep.target = null
