function Controller(){
  this.url = null;
  this.validator = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
}

Controller.prototype.getURL = function getURL(){
  this.url = prompt('Please enter your URL, starting with http / https');  
  if(!this.validator.test(this.url)){
    this.url = null;
  }
}

Controller.prototype.start = function start(){  
  while(!this.url){
    this.getURL();
    if(!this.url){
      alert('Please enter a valid URL, starting with http / https');
    }
  }

  // at this point the url has passed validation
  var features = 'menubar=0,location=0,resizable=0,scrollbars=0,status=0,width=400,height=450';
  var win = window.open(this.url, '_blank', features);  
}