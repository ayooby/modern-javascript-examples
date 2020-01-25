export default {
    valueAtBit: function(num, bit) {
      const n = num.toString(2)

      if (bit > n.length) return 0
      return parseInt(n.toString(2)[n.length - bit])
    },

    base10: function(str) {
      return parseInt(str, 2)
    },

    convertToBinary: function(num) {
      let binary = parseInt(num, 10).toString(2)
      const defaultSize = 8
      while (defaultSize > binary.length) {
        binary = '0'+binary
      }
      return binary
    },

    multiply: function(a, b) {
      const commonMultiplier = 1000000;

      a *= commonMultiplier;
      b *= commonMultiplier;

      return (a * b) / (commonMultiplier * commonMultiplier);
    }
};
