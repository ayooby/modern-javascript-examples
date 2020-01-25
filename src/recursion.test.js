import answers from './recursion.js';

describe('recursion', function() {
    const fileData = {
        dir : 'app',
        files : [
            'index.html',
            {
                dir : 'js',
                files: [
                    'main.js',
                    'app.js',
                    'misc.js',
                    {
                        dir : 'vendor',
                        files : [
                            'jquery.js',
                            'underscore.js'
                        ]
                    }
                ]
            },
            {
                dir : 'css',
                files : [
                    'reset.css',
                    'main.css'
                ]
            }
        ]
    };

    it('you should be able to return a list of files from the data', function() {
        const result = answers.listFiles(fileData);
        chai.expect(result).to.be.a('array');
        chai.expect(result.length).to.eql(8);
        chai.expect(result.indexOf('index.html') > -1).to.be.ok;
        chai.expect(result.indexOf('main.js') > -1).to.be.ok;
        chai.expect(result.indexOf('underscore.js') > -1).to.be.ok;
    });

    it('you should be able to return a list of files in a subdir', function() {
        const result = answers.listFiles(fileData, 'js');
        chai.expect(result).to.be.a('array');
        chai.expect(result.length).to.eql(5);
        chai.expect(result.indexOf('main.js') > -1).to.be.ok;
        chai.expect(result.indexOf('underscore.js') > -1).to.be.ok;
    });
});