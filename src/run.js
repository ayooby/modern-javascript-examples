import './arrays.test.js';
import './async.test.js';
import './bestPractices.test.js';
import './count.test.js';
import './functions.test.js';
import './logicalOperators.test.js';
import './modules.test.js';
import './numbers.test.js';
import './objects.test.js';
import './recursion.test.js';
import './regex.test.js';
import 'https://unpkg.com/chai@4.1.2/chai.js';

mocha.checkLeaks();
mocha.setup({ignoreLeaks: true});
mocha.run();