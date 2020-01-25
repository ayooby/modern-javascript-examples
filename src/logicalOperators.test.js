import answers from './logicalOperators.js';

describe('logical operators', function(){
    it('you should be able to work with logical or', function() {
        chai.expect(answers.or(true, false)).to.be.ok;
        chai.expect(answers.or(true, true)).to.be.ok;
        chai.expect(answers.or(false, false)).not.to.be.ok;
        chai.expect(answers.or(3, 4)).to.not.eq(7);
    });

    it('you should be able to work with logical and', function() {
        chai.expect(answers.and(false, false)).not.to.be.ok;
        chai.expect(answers.and(true, false)).not.to.be.ok;
        chai.expect(answers.and(true, true)).to.be.ok;
        chai.expect(answers.and(3, 4)).to.be.ok;
    });
});
