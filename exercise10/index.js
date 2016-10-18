var form = document.forms.registration;

var model = {
  id: {
    filter: /\w{1,}/,
    errorMsg: "Login Id can't be empty"
  },
  email: {
    filter: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    errorMsg: 'email is not a valid email address'
  },
  name: {
    filter: /\w{2,}/,
    errorMsg: 'name can not be less than 2 characters'
  },
  homepage: {
    filter: /^(https?:\/\/)?(([a-zA-Z]+)\.)?(([-a-zA-Z0-9@:%_\+~#?&//=]{2,256}\.[a-z]{2,4})\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?)$/,
    errorMsg: 'homepage is not a valid website address'
  },
  about: {
    filter: /[\w\s]{50,}/,
    errorMsg: 'about can not be less than 50 characters'
  },
  receive: {
    stateProperty: 'checked',
    stateValue: true,
    errorMsg: 'you must opt-in for notifications'
  }
}

// form controller
var controller = new Controller(form, model);