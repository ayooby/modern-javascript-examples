export default {
  alterContext: function (fn, obj) {
    return fn.call(obj)
  },

  alterObjects: function (constructor, greeting) {
    constructor.prototype.greeting = greeting
  },

  iterate: function (obj) {
    return Object.keys(obj).map(key => `${key}: ${obj[key]}`)
  }
};