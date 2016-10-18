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

Controller.prototype.move = function move(isSource) {
  var destination = isSource ? this.destination : this.source;
  var selections = isSource ? this.source.selectedOptions : this.destination.selectedOptions;
  while (selections.length > 0) {
    if (selections[0]) {
      destination.appendChild(selections[0]);
    }
  }
}