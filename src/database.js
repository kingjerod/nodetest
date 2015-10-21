
function Database(username, password){
  this.username = username;
  this.password = password;
  this.connected = false;
};

Database.prototype.connect = function(cb){
  this.connected = true;
  return cb(true);
};

Database.prototype.disconnect = function(cb){
  this.connected = false;
  return cb(false);
};

module.exports = exports = function(username, password) {
  return new Database(username, password);
}
