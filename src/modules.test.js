import answers from './modules.js';

describe('the module pattern', function() {
    it('you should be able to create a function that returns a module', function() {
        const module = answers.createModule('hello', 'matt');

        chai.expect(module).to.be.a('object');
        chai.expect(module.sayIt).to.be.a('function');
        chai.expect(module.name).to.eql('matt');
        chai.expect(module.greeting).to.eql('hello');
        chai.expect(module.sayIt()).to.eql('hello, matt');

        module.name = 'katniss';
        module.greeting = 'hi';
        chai.expect(module.name).to.eql('katniss');
        chai.expect(module.greeting).to.eql('hi');
        chai.expect(module.sayIt()).to.eql('hi, katniss');
    });
});
