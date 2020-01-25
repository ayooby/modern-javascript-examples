
export default {
    indexOf : function(arr, item) {
      return arr.findIndex(value => value === item )
    },

    sum : function(arr) {
      return arr.reduce((acc, number) => number + acc, 0)
    },

    remove : function(arr, item) {
      return arr.filter(value => value != item)
    },

    removeWithoutCopy : function(arr, item) {
      let index = arr.length
      while (index--){
        if (arr[index] === item) {
          arr.splice(index, 1)
        }
      }
      return arr
    },

    append : function(arr, item) {
      return arr.concat(item)
    },

    truncate : function(arr) {
      return arr.slice(0, -1)
    },

    prepend : function(arr, item) {
      return [item, ...arr]
    },

    curtail : function(arr) {
      return arr.slice(1)
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2)
    },

    insert : function(arr, item, index) {
      return [
          ...arr.slice(0, index),
          item,
          ...arr.slice(index)
      ]
    },

    count : function(arr, item) {
      return arr.reduce((acc, val) => {
        if(val == item) {
          acc++
        }
        return acc
      },0)
    },

    duplicates : function(arr) {
      return arr.reduce((acc, val, index, array) => {
        if(array.indexOf(val)!=index && !acc.includes(val)) {
          acc.push(val)
        }
        return acc;
      }, []);
    },

    square : function(arr) {
      return arr.map(item => item * item)
    },

    findAllOccurrences : function(arr, target) {
      return arr.reduce(
        (acc, val, index) => val === target ? [...acc, index] : acc
      ,[])
    }
};

