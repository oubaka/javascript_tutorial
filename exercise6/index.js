var form = document.forms.registration;

var model = {
  id: {
    filter: /\w{1,}/,
    errorMsg: "Login Id can't be empty"
  },
  email: {
    filter: /\w{1,}/,
    errorMsg: 'email is not valid'
  },
  name: {
    filter: /\w{1,}/,
    errorMsg: 'name can not be empty'
  },
  homepage: {
    filter: /\w{1,}/,
    errorMsg: 'homepage can not be empty'
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