export default {
    containsNumber: function (str) {
        const number = str.match(/\d+/g)

        if (number == null) return false
        return Boolean(number.length)
    },

    containsRepeatingLetter: function (str) {
        const hasDuplicates = (/([a-zA-Z]).*?\1/).test(str)
        return hasDuplicates
    },

    endsWithVowel: function (str) {
        return (/[aeiou]$/i).test(str);
    },

    captureThreeNumbers: function (str) {
        const number = str.match(/\d{3}/g)

        if (number == null) return false
        return number[0]
    },

    matchesPattern: function (str) {
        return (/^\d{3}-\d{3}-\d{4}$/g).test(str)
    },
    isUSD: function (str) {
        return (/^\$(?:\d+(?!,)(?:\.\d{1,2})?|(?:\d{1,3}(?:,\d{3})*(?:\.\d{2})?))$/).test(str)
    }
};
