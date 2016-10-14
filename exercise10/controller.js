/**
 * @param {Element} form
 * @param {object} model
 */
function Controller(form, model) {
  this.model = model;
  this.form = form;
  this.errors = [];
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

Controller.prototype.getErrors = function getErrors() {
  return this.errors;
}