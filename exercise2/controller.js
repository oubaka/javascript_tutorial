/**
 * @param {Element[]} checkboxes
 */
function Controller(checkboxes) {
  this.checkboxes = checkboxes;
}

Controller.prototype.check = function check(state) {
  this.checkboxes.forEach(function (checkbox) {
    checkbox.checked = state;
  });
}