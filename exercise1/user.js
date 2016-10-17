/**
 * @param {String} name
 * @param {Number} age
 */
function User(name, age) {
  this.name = name;
  this.age = age;
}

/**
 * @param {User} user
 */
User.prototype.compare = function compare(user) {
  var text = ' is older than ';
  if(this.age == user.age){
    return this.name + ' and ' + user.name + ' are of same age';
  }else{
    return this.age > user.age ? this.name + text + user.name : user.name + text + this.name;
  }
}