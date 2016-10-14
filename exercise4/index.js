// container
var container = document.getElementById('container');

// create and register all checkboxes
checkboxes.forEach(function (model) {
  var controller = new Controller(model, container);
});