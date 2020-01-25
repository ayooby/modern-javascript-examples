import answers from './functions.js';

describe('functions', function() {
    let sayItCalled = false;
    const sayIt = function(greeting, name, punctuation) {
        sayItCalled = true;
        return greeting + ', ' + name + (punctuation || '!');
    };

    beforeEach(function () {
        sayItCalled = false;
    });

    it('you should be able to use an array as arguments when calling a function', function() {

        const result = answers.argsAsArray(sayIt, [ 'Hello', 'Ellie', '!' ]);

        chai.expect(result).to.eql('Hello, Ellie!');
        chai.expect(sayItCalled).to.be.ok;

    });

    it('you should be able to change the context in which a function is called', function() {
        const speak = function() {
            return sayIt(this.greeting, this.name, '!!!');
        };
        const obj = {
            greeting : 'Hello',
            name : 'Rebecca'
        };

        const result = answers.speak(speak, obj);
        chai.expect(result).to.eql('Hello, Rebecca!!!');
        chai.expect(sayItCalled).to.be.ok;
    });

    it('you should be able to return a function from a function', function() {
        chai.expect(answers.functionFunction('Hello')).to.be.a('function');
        chai.expect(answers.functionFunction('Hello')('world')).to.eql('Hello, world');
        chai.expect(answers.functionFunction('Hai')('can i haz funxtion?')).to.eql('Hai, can i haz funxtion?');
    });

    it('you should be able to use closures', function () {
        const arr = [ Math.random(), Math.random(), Math.random(), Math.random() ];
        const square = function (x) { return x * x; };
        const funcs = answers.makeClosures(arr, square);
        chai.expect(funcs).to.be.a('array');
        chai.expect(funcs).to.have.length(arr.length);
        for (let i = 0; i < arr.length; i++) {
            chai.expect(funcs[i]()).to.eql(square(arr[i]));
        }
    });

    it('you should be able to create a "partial" function', function() {
        const partial = answers.partial(sayIt, 'Hello', 'Ellie');
        chai.expect(partial).to.be.a('function');
        chai.expect(partial('!!!')).to.eql('Hello, Ellie!!!');
        chai.expect(sayItCalled).to.be.ok;
    });

    it('you should be able to use arguments', function () {
        const a = Math.random();
        const b = Math.random();
        const c = Math.random();
        const d = Math.random();

        chai.expect(answers.useArguments(a)).to.eql(a);
        chai.expect(answers.useArguments(a, b)).to.eql(a + b);
        chai.expect(answers.useArguments(a, b, c)).to.eql(a + b + c);
        chai.expect(answers.useArguments(a, b, c, d)).to.eql(a + b + c + d);
    });

    it('you should be able to apply functions with arbitrary numbers of arguments', function () {
        (function () {
            const a = Math.random();
            const b = Math.random();
            const c = Math.random();

            let wasITake2ArgumentsCalled = false;
            const iTake2Arguments = function (firstArgument, secondArgument) {
                chai.expect(arguments.length).to.eql(2);
                chai.expect(firstArgument).to.eql(a);
                chai.expect(secondArgument).to.eql(b);

                wasITake2ArgumentsCalled = true;
            };

            let wasITake3ArgumentsCalled = false;
            const iTake3Arguments = function (firstArgument, secondArgument, thirdArgument) {
                chai.expect(arguments.length).to.eql(3);
                chai.expect(firstArgument).to.eql(a);
                chai.expect(secondArgument).to.eql(b);
                chai.expect(thirdArgument).to.eql(c);

                wasITake3ArgumentsCalled = true;
            };

            answers.callIt(iTake2Arguments, a, b);
            answers.callIt(iTake3Arguments, a, b, c);

            chai.expect(wasITake2ArgumentsCalled).to.be.ok;
            chai.expect(wasITake3ArgumentsCalled).to.be.ok;
        }());
    });


    it('you should be able to create a "partial" function for variable number of applied arguments', function () {
        const partialMe = function (x, y, z) {
            return x / y * z;
        };
        chai.expect(answers.partialUsingArguments(partialMe)).to.be.a('function');

        const a = Math.random();
        const b = Math.random();
        const c = Math.random();
        chai.expect(answers.partialUsingArguments(partialMe)(a, b, c)).to.eql(partialMe(a, b, c));
        chai.expect(answers.partialUsingArguments(partialMe, a)(b, c)).to.eql(partialMe(a, b, c));
        chai.expect(answers.partialUsingArguments(partialMe, a, b)(c)).to.eql(partialMe(a, b, c));
        chai.expect(answers.partialUsingArguments(partialMe, a, b, c)()).to.eql(partialMe(a, b, c));
    });

    it('you should be able to curry existing functions', function () {
        const curryMe = function (x, y, z) {
            return x / y * z;
        };

        const a = Math.random();
        const b = Math.random();
        const c = Math.random();
        let result;

        result = answers.curryIt(curryMe);
        chai.expect(typeof result).to.eql('function');
        chai.expect(result.length).to.eql(1);

        result = answers.curryIt(curryMe)(a);
        chai.expect(typeof result).to.eql('function');
        chai.expect(result.length).to.eql(1);

        result = answers.curryIt(curryMe)(a)(b);
        chai.expect(typeof result).to.eql('function');
        chai.expect(result.length).to.eql(1);

        result = answers.curryIt(curryMe)(a)(b)(c);
        chai.expect(typeof result).to.eql('number');
        chai.expect(result).to.eql(curryMe(a, b, c));
    });
});
