import answers from './regex.js';

describe('regular expressions', function() {
    it('you should be able to detect a number in a string', function() {
        chai.expect(answers.containsNumber('abc123')).to.eql(true);
        chai.expect(answers.containsNumber('abc')).to.eql(false);
    });

    it('you should be able to detect a repeating letter in a string', function() {
        chai.expect(answers.containsRepeatingLetter('bookkeeping')).to.eql(true);
        chai.expect(answers.containsRepeatingLetter('rattler')).to.eql(true);
        chai.expect(answers.containsRepeatingLetter('ZEPPELIN')).to.eql(true);
        chai.expect(answers.containsRepeatingLetter('cats')).to.eql(false);
        chai.expect(answers.containsRepeatingLetter('l33t')).to.eql(false);
    });

    it('you should be able to determine whether a string ends with a vowel (aeiou)', function() {
        chai.expect(answers.endsWithVowel('cats')).to.eql(false);
        chai.expect(answers.endsWithVowel('gorilla')).to.eql(true);
        chai.expect(answers.endsWithVowel('I KNOW KUNG FU')).to.eql(true);
    });

    it('you should be able to capture the first series of three numbers', function() {
        chai.expect(answers.captureThreeNumbers('abc123')).to.eql('123');
        chai.expect(answers.captureThreeNumbers('9876543')).to.eql('987');
        chai.expect(answers.captureThreeNumbers('abcdef')).to.eql(false);
        chai.expect(answers.captureThreeNumbers('12ab12ab')).to.eql(false);
    });

    it('you should be able to determine whether a string matches a pattern', function() {
        // the pattern is XXX-XXX-XXXX where all X's are digits
        chai.expect(answers.matchesPattern('800-555-1212')).to.eql(true);
        chai.expect(answers.matchesPattern('451-933-7899')).to.eql(true);
        chai.expect(answers.matchesPattern('33-444-5555')).to.eql(false);
        chai.expect(answers.matchesPattern('abc-def-hijk')).to.eql(false);
        chai.expect(answers.matchesPattern('1800-555-1212')).to.eql(false);
        chai.expect(answers.matchesPattern('800-555-12121')).to.eql(false);
        chai.expect(answers.matchesPattern('800-5555-1212')).to.eql(false);
        chai.expect(answers.matchesPattern('800-55-1212')).to.eql(false);
    });

    it('you should be able to detect correctly-formatted monetary amounts in USD', function() {
        chai.expect(answers.isUSD('$132.03')).to.eql(true);
        chai.expect(answers.isUSD('$32.03')).to.eql(true);
        chai.expect(answers.isUSD('$2.03')).to.eql(true);
        chai.expect(answers.isUSD('$1,023,032.03')).to.eql(true);
        chai.expect(answers.isUSD('$20,933,209.93')).to.eql(true);
        chai.expect(answers.isUSD('$20,933,209')).to.eql(true);
        chai.expect(answers.isUSD('$459,049,393.21')).to.eql(true);
        chai.expect(answers.isUSD('34,344.34')).to.eql(false);
        chai.expect(answers.isUSD('$,344.34')).to.eql(false);
        chai.expect(answers.isUSD('$34,344.3')).to.eql(false);
        chai.expect(answers.isUSD('$34,344.344')).to.eql(false);
        chai.expect(answers.isUSD('$34,344_34')).to.eql(false);
        chai.expect(answers.isUSD('$3,432,12.12')).to.eql(false);
        chai.expect(answers.isUSD('$3,432,1,034.12')).to.eql(false);
        chai.expect(answers.isUSD('4$3,432,034.12')).to.eql(false);
    });

});
