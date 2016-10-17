/**
 * @param {Element[]} checkboxes
 */
function Controller(checkboxes) {
  this.checkboxes = checkboxes;
}

Controller.prototype.check = function check(type) {
  switch (type) {
    case 'all':
      this.checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
      });
      break;
    case 'none':
      this.checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
      break;
  }
}