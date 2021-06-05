module.exports = {
  today() {
    return (new Date()).toDateString()
  },
  getTomorrow() {
    let d = new Date()
    d.setDate(d.getDate() + 1)
    return d.toDateString()
  }
}