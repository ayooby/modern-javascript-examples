export default {
    async : function(value) {
      return new Promise((resolve, reject) => {
        if (value === true) resolve(true)
        resolve(value)
      })
    },

    manipulateRemoteData : function(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(jsonResponse => {
            const people = jsonResponse.people.reduce(
              (acc, people ) => [...acc, people.name]
            ,[])
            .sort((a,b) => {
              const peopleA = a.toUpperCase()
              const peopleB = b.toUpperCase()
              return (peopleA < peopleB) ? -1 : (peopleA > peopleB) ? 1 : 0;
            })
          resolve(people)
        })
        .catch(error => reject(error))
      })
    }
};
