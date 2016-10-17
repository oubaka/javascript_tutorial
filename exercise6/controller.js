/**
 * @param {Element} form
 * @param {object} model
 */
function Controller(form, model) {
  this.model = model;
  this.form = form;
  this.errors = [];

  this.form.addEventListener('submit', this.onSubmit.bind(this));
}

Controller.prototype.isValid = function isValid() {
  this.errors.length = 0;
  for (var key in this.model) {
    var model = this.model[key];
    var inputElement = this.form[key];
    if (model.filter) {
      if (!model.filter.test(inputElement.value)) {
        this.errors.push(model);
      }
    } else if (model.stateProperty) {
      if (inputElement[model.stateProperty] !== model.stateValue) {
        this.errors.push(model);
      }      
    }
  }

  return this.errors.length == 0;
}

/**
 * @param {Event} e
 */
Controller.prototype.onSubmit = function onSubmit(e){
  if(this.isValid()){
    alert('Form submitted successfully');
  }else{
    var error = this.getErrors()[0];
    alert(error.errorMsg);
  }
  e.preventDefault();
}

Controller.prototype.getErrors = function getErrors() {
  return this.errors;
}