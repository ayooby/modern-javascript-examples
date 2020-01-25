export default {
    argsAsArray : function(fn, arr) {
      return fn(...arr)
    },

    speak : function(fn, obj) {
      return fn.call(obj)
    },

    functionFunction : function(str) {
      return function(b){
          return str + ', ' + b
      }
    },

    makeClosures : function(arr, fn) {
      return arr.map(item => () => fn(item))
    },

    partial : function(fn, str1, str2) {
      return (ending) => fn(str1, str2, ending)
    },

    useArguments : function() {
      let result =0
      for (let i=0; i < arguments.length; i++) {
        result += arguments[i]
      }
      return result
    },

    callIt : function(fn) {
      let arr = new Array()
      for (let i=1; i < arguments.length; i++) {
        arr.push(arguments[i])
      }
      return fn(...arr)
    },

    partialUsingArguments : function(fn) {
      let args = Array.prototype.slice.call(arguments, 1)
      return function() {
        let remainingArgs = Array.prototype.slice.call(arguments)
        return fn.apply(null, args.concat(remainingArgs))
      }
    },

    curryIt : function(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return fn(a, b, c);
          };
        };
      };
    }
};

