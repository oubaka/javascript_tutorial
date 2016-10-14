var container = document.getElementById('table-body');
var controllers = [];

function addNew(){
  var controller = new Controller(container, controllers);
  controllers.unshift(controller);
}

addNew();