function Controller(){
  this.firstname = null;
  this.lastname = null;
  this.validator = /\w{2,}/;
}

Controller.prototype.getFirstName = function getFirstName(){
  this.firstname = prompt('Please enter your first name. Note: min 2 chars');  
  if(!this.validator.test(this.firstname)){
    this.firstname = null;
  }
}

Controller.prototype.getLastName = function getLastName(){
  this.lastname = prompt('Please enter your last name. Note: min 2 chars');
  if(!this.validator.test(this.lastname)){
    this.lastname = null;
  }  
}

Controller.prototype.start = function start(){
  while(!this.firstname){
    this.getFirstName();
  }
  while(!this.lastname){
    this.getLastName();
  }

  // at this point all inputs have passed validation
  var message = 'Hello ' + this.firstname + ' ' + this.lastname;
  alert(message);
  document.body.innerHTML = message;
}