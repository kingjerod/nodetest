var glob = require('glob');

describe('blanket', function() {
  it('should fix blanket code coverage for files with no tests', function(done){
    glob.sync('./src/*.js').forEach(function(file) {
      require('../' + file.slice(2));
    });
    done();
  });
})
