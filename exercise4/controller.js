/**
 * @param {object[]} model
 * @param {Element} container
 */
function Controller(model, container) {
  this.model = model;
  this.container = container;

  this.createView(this.container, this.model);
}

/**
 * Creates the necessary HTML element
 * @param {Element} parent
 * @param {String} name
 * 
 * @return Element
 */
Controller.prototype.getViewTemplate = function getViewTemplate(name) {
  var li = document.createElement('li');
  var checkbox = document.createElement('input');
  checkbox.name = name;
  checkbox.id = name;
  checkbox.type = 'checkbox';
  var label = document.createElement('label');
  label.innerHTML = name;
  label.setAttribute('for', name);

  li.appendChild(checkbox);
  li.appendChild(label);
  return li;
}

/**
 * @return Element
 */
Controller.prototype.getContainerTemplate = function getContainerTemplate() {
  var ul = document.createElement('ul');
  ul.classList.add('child');
  ul.style.height = 0;
  return ul;
}

/**
 * @param {Element} container, contains children checkboxes
 */
Controller.prototype.checkAll = function checkAll(container) {  
  var event = document.createEvent("HTMLEvents");
  event.initEvent("change", true, true);
  container.querySelectorAll('input[type=checkbox]').forEach(function (checkbox) {
    checkbox.checked = true;
    checkbox.dispatchEvent(event);
  });
}

/**
 * @param {Element} container, contains children checkboxes
 */
Controller.prototype.uncheckAll = function uncheckAll(container) { 
  var event = document.createEvent("HTMLEvents");
  event.initEvent("change", true, true); 
  container.querySelectorAll('input[type=checkbox]').forEach(function (checkbox) {
    checkbox.checked = false;
    checkbox.dispatchEvent(event);
  });
}

/**
 * @param {Element} element
 * @param {Element} childContainer, container holding child checkboxes
 */
Controller.prototype.setupEvent = function setupEvent(element, childContainer) {
  element.onchange = function onchange() {    
    var checkbox = arguments[1].target;
    var childContainer = arguments[0];
    
    if (checkbox.checked) {
      childContainer.style.height = 'initial';
      this.checkAll(childContainer);
      checkbox.scrollIntoView();
    } else {
      childContainer.style.height = 0;
      this.uncheckAll(childContainer);
    }    
  }.bind(this, childContainer);
}

/**
 * @param {Element} container
 * @param {object} model
 */
Controller.prototype.createView = function createView(container, model) {
  var template = this.getViewTemplate(model.name);

  container.appendChild(template);
  if (model.children) {
    // get children container
    var childContainer = this.getContainerTemplate();
    template.appendChild(childContainer);
    // register checkbox
    this.setupEvent(template.querySelector('#' + model.name), childContainer);
    // create view for children
    model.children.forEach(function (model) {
      this.createView(childContainer, model)
    }.bind(this));
  }
}