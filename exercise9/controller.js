/**
 * @param {Element} source
 * @param {Element} destination
 * @param {object[]} models
 */
function Controller(source, destination, models) {
  this.source = source;
  this.destination = destination;
  this.models = models;

  this.initialize();
}

Controller.prototype.initialize = function initialize() {
  var source = this.source;
  this.models.forEach(function (model) {
    var option = document.createElement('option');
    option.value = model.value;
    option.innerHTML = model.name;
    source.appendChild(option);
  }.bind(this));
}

Controller.prototype.add = function add() {
  var destination = this.destination;
  var selections = this.source.selectedOptions;
  while (selections.length > 0) {
    if (selections[0]) {
      destination.appendChild(selections[0]);
    }
  }
}

Controller.prototype.remove = function remove() {
  var source = this.source;
  var selections = this.destination.selectedOptions;
  while (selections.length > 0) {
    if (selections[0]) {
      source.appendChild(selections[0]);
    }
  }
}