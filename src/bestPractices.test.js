import answers from './bestPractices.js';

describe('best practices', function(){
    it('you should avoid global variables', function() {
        answers.globals();
        chai.expect(window.myObject).not.to.be.ok;
    });

    it('you should use parseInt correctly', function() {
        chai.expect(answers.parseInt('12')).to.eql(12);
        chai.expect(answers.parseInt('12px')).to.eql(12);
        chai.expect(answers.parseInt('0x12')).to.eql(0);
    });

    it('you should understand strict comparison', function() {
        chai.expect(answers.identity(1, '1')).to.eql(false);
        chai.expect(answers.identity(1, 1)).to.eql(true);
        chai.expect(answers.identity(0, false)).to.eql(false);
    });

});
