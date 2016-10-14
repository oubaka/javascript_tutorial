/**
 * @param {Element[]} checkboxes
 * @param {Element} noneCheckbox, the checkbox with name = None
 */
function Controller(checkboxes, noneCheckbox) {
  this.activeList = [];

  this.checkboxes = checkboxes;

  this.noneCheckbox = noneCheckbox;

  // register click event for other checkboxes
  this.checkboxes.forEach(function (checkbox) {
    checkbox.onclick = function onclick() {
      var target = arguments[0].target;
      this.handleOthers(target);
    }.bind(this);
  }.bind(this));

  // register click event for checkbox for none
  this.noneCheckbox.onclick = function onclick() {
    var target = arguments[0].target;
    if (target.checked) this.handleNone();
  }.bind(this);
}

/**
 * handles selection on other checkboxes
 * @param {Element} target
 */
Controller.prototype.handleOthers = function handleOthers(target) {
  if (this.activeList.length > 2 && target.checked) {
    target.checked = false;
    alert('You have already selected ' + this.activeList.join(', '));
  } else if (target.checked) {
    this.noneCheckbox.checked = false;
    this.activeList.push(target.name);
  } else if (!target.checked) {
    var index = this.activeList.indexOf(target.name);
    this.activeList.splice(index, 1);
  }
}

Controller.prototype.handleNone = function handleNone() {
  this.activeList.length = 0;
  this.checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}