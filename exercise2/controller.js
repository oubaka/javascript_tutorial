/**
 * @param {Element[]} checkboxes
 */
function Controller(checkboxes){
  this.checkboxes = checkboxes;
}

Controller.prototype.checkAll = function checkAll(){
  this.checkboxes.forEach(function (checkbox) {
    checkbox.checked = true;
  });
}

Controller.prototype.none = function none(){
  this.checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}