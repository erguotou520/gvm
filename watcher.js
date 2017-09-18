function Watcher (data, exp, fn) {
  this.exp = exp
  this.fn = fn
  Dep.target = this
  data[exp]
}
