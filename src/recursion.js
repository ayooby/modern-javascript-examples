export default {
  listFiles: function (data, dirName) {
    let result = []

    for (let p in data.files) {
      if (typeof (data.files[p]) == 'string') {
        if (dirName == data.dir) {
          result.push(data.files[p])
          continue
        }
        if (!dirName) {
          result.push(data.files[p])
        }
        continue
      }
      if (typeof (data.files[p]) == 'object') {
        if (dirName) {
          const target = (dirName == data.dir) ? data.files[p].dir : dirName
          result.push(...this.listFiles(data.files[p], target))
        } else {
          result.push(...this.listFiles(data.files[p]))
        }
      }
    }
    return result
  },

};
