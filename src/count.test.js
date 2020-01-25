import answers from './count.js';

/**
 * This test describes a function, count, that takes two arguments: a starting number,
 * and an ending number. The function should console.log each number from the start
 * number to the end number, one number per 1/10th of a second. The function should
 * return an object with a cancel method, which should cancel the counting.
 */
describe('counter', function () {
    let nums;

    beforeEach(function () {
        nums = [];

        // eslint-disable-next-line no-console
        const _orig = console.log;

        if (typeof console === 'undefined') {
            console = {}; // eslint-disable-line no-native-reassign
        }

        // eslint-disable-next-line no-console
        console.log = function (val) {
            nums.push(val);
            _orig.apply(console, arguments);
        };
    });
    // TODO: Change timeout function from test! use system time instead. timeout is not accurate
    // Known Issue: Firefox and Safari will fail this test.(read above)
    it('should count from start number to end number, one per 1/10th of a second', function (done) {
        this.timeout(600);
        answers.count(1, 5);

        setTimeout(function () {
            chai.expect(nums.length > 1).to.be.ok;
            chai.expect(nums.length < 5).to.be.ok;
        }, 200);

        setTimeout(function () {
            chai.expect(nums.length).to.eql(5);
            chai.expect(nums[0]).to.eql(1);
            chai.expect(nums[4]).to.eql(5);
            done();
        }, 550);
    });

    it('should provide a method to cancel the counting', function (done) {
        this.timeout(600);

        const counter = answers.count(1, 5);

        chai.expect(counter).to.be.a('object');
        chai.expect(counter.cancel).to.be.a('function');

        counter.cancel();

        setTimeout(function () {
            chai.expect(nums.length < 5).to.be.ok;

            done();
        }, 550);
    });
});

