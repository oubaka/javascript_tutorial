/**
 * @param {object[]} model
 * @param {Element} container
 */
function Controller(model, container) {
  this.model = model;
  this.container = container;

  var fragment = new DocumentFragment();
  this.createView(fragment, this.model);
  this.container.appendChild(fragment);
}

/**
 * Creates the necessary HTML element
 * @param {Element} parent
 * @param {String} name
 * 
 * @return Element
 */
Controller.prototype.getViewTemplate = function getViewTemplate(name) {
  var doc = document;
  var li = doc.createElement('li');
  var checkbox = doc.createElement('input');
  checkbox.name = name;
  checkbox.id = name;
  checkbox.type = 'checkbox';
  var label = doc.createElement('label');
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
  var doc = document;
  var ul = doc.createElement('ul');
  ul.classList.add('child');
  ul.style.height = 0;
  return ul;
}

/**
 * @param {Element} container, contains children checkboxes
 */
Controller.prototype.checkAll = function checkAll(container) {  
  var event = new Event('change', {
    bubbles: true,
    cancelable: true
  });  
  container.querySelectorAll('input[type=checkbox]').forEach(function (checkbox) {
    checkbox.checked = true;
    checkbox.dispatchEvent(event);
  });
}

/**
 * @param {Element} container, contains children checkboxes
 */
Controller.prototype.uncheckAll = function uncheckAll(container) { 
   var event = new Event('change', {
    bubbles: true,
    cancelable: true
  });   
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
  element.addEventListener('change', function(childContainer, ev){    
    var checkbox = ev.target;    
  
    if (checkbox.checked) {
      childContainer.style.height = 'initial';
      this.checkAll(childContainer);
      checkbox.scrollIntoView();
    } else {
      childContainer.style.height = 0;
      this.uncheckAll(childContainer);
    }    
  }.bind(this, childContainer));
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