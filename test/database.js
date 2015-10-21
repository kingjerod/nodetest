var should = require('should');
var Database = require('../src/database');

describe('database', function(){
  it('should connect', function(done){
    var db = new Database('user', 'pw');
    db.connect(function(connected){
      connected.should.be.true();
      db.should.have.property('connected', true);
      done();
    })
  });

  it('should disconnect', function(done){
    var db = new Database('user', 'pw');
    db.disconnect(function(connected){
      connected.should.be.false();
      db.should.have.property('connected', false);
      done();
    })
  });
});
