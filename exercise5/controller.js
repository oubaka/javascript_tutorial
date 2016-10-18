/**
 * @param {Element} container
 * @param {Controller[]} bucket
 */
function Controller(container, bucket) {
  this.container = container;
  this.bucket = bucket;
  this.modes = ['edit', 'saved'];
  this.mode = this.modes[0];

  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var nameRegex = /\w{2,}/;

  this.inputModels = [
    { name: 'name', inputElement: null, labelElement: null, type: 'text', value: '', filter: nameRegex },
    { name: 'email', inputElement: null, labelElement: null, type: 'email', value: '', filter: emailRegex }
  ];

  this.actionModels = [
    { name: 'save', action: this.save.bind(this), htmlElement: null, mode: this.modes[0] },
    { name: 'edit', action: this.edit.bind(this), htmlElement: null, mode: this.modes[1] },
    { name: 'delete', action: this.remove.bind(this), htmlElement: null, mode: this.modes[1] }
  ];

  // create a row representing this entity
  this.row = this.createRow();
  this.renderInputs();
  this.renderActions();
}

Controller.prototype.createRow = function createRow() {
  var doc = document;
  var tr = doc.createElement('tr');
  var actionsTd = doc.createElement('td');

  this.inputModels.forEach(function (model) {
    this.createInputView(tr, model);
  }.bind(this));

  this.actionModels.forEach(function (action) {
    this.createActionView(actionsTd, action);
  }.bind(this));

  tr.appendChild(actionsTd);
  var first = this.container.firstChild;
  if (first) {
    this.container.insertBefore(tr, first);
  } else {
    this.container.appendChild(tr);
  }
  return tr;
}

/**
 * @param {object} inputModel
 * @param {Element} container
 */
Controller.prototype.createInputView = function createInputView(container, inputModel) {
  var doc = document;
  var td = doc.createElement('td');
  var input = doc.createElement('input');
  var label = doc.createElement('label');
  input.type = inputModel.type;
  input.name = inputModel.name;
  input.placeholder = inputModel.name;
  label.innerHTML = inputModel.name;
  td.appendChild(input);
  td.appendChild(label);
  inputModel.inputElement = input;
  inputModel.labelElement = label;
  container.appendChild(td);
}

/**
 * @param {object} actionModel
 * @param {Element} container
 */
Controller.prototype.createActionView = function createActionView(container, actionModel) {
  var button = document.createElement('button');
  button.innerHTML = actionModel.name;
  button.addEventListener('click', actionModel.action);
  actionModel.htmlElement = button;
  container.appendChild(button);
}

Controller.prototype.renderMode0 = function renderMode0(input) {
  input.inputElement.style.display = 'initial';
  input.labelElement.style.display = 'none';
  input.inputElement.innerHTML = input.value;
}

Controller.prototype.renderMode1 = function renderMode1(input) {
  input.inputElement.style.display = 'none';
  input.labelElement.style.display = 'initial';
  input.labelElement.innerHTML = input.value;
}

Controller.prototype.renderInputs = function renderInputs() {
  this.inputModels.forEach(function (input) {
    switch (this.mode) {
      case this.modes[0]:
        this.renderMode0(input);
        break;
      case this.modes[1]:
        this.renderMode1(input);
        break;
    }
  }.bind(this));
}

Controller.prototype.renderActions = function renderActions() {
  this.actionModels.forEach(function (action) {
    action.htmlElement.style.display = action.mode === this.mode ? 'initial' : 'none';    
  }.bind(this));
}

/**
 * @param {Event} e
 */
Controller.prototype.save = function save(e) {
  var validationPassed = true;
  this.inputModels.forEach(function (model) {
    if (!model.filter.test(model.inputElement.value)) {
      validationPassed = false;
      alert('Please check ' + model.name + ' input @ row ' + (this.bucket.indexOf(this) + 1));
    }
    model.value = model.inputElement.value;
  }.bind(this));
  if (validationPassed) {
    this.mode = this.modes[1];
  }
  this.renderInputs();
  this.renderActions();
};

/**
 * @param {Event} e
 */
Controller.prototype.edit = function edit(e) {
  this.mode = this.modes[0];
  this.renderInputs();
  this.renderActions();
}

/**
 * @param {Event} e
 */
Controller.prototype.remove = function remove(e) {
  var index = this.bucket.indexOf(this);
  this.bucket.splice(index, 1);
  this.row.remove();
}