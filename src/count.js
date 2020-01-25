
export default {
    count : function (start, end) {
      let timer = setInterval(function() {
        console.log(start)
          if (start++ == end) {
            clearInterval(timer)
        }
      }, 100)
      return { cancel: () => clearInterval(timer) }
    }
};

