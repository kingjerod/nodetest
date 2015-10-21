
function Daisy(lastName){
  this.lastName = lastName;
  this.hungry = true;
};

Daisy.prototype.bark = function(){
  return 'Woof!';
};

Daisy.prototype.giveTreat = function(){
  return this.bark();
};

module.exports = exports = function(lastName) {
  return new Daisy(lastName);
}
