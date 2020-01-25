export default {
    createModule : function(greeting, name) {
      return {
        name,
        greeting,
        sayIt: function() { return `${this.greeting}, ${this.name}`},
      }
    }
};