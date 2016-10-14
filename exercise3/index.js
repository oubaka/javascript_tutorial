var checkboxes = document.querySelectorAll('input[type=checkbox]:not([name=None])');
var noneCheckbox = document.querySelectorAll('input[type=checkbox][name=None]');
var controller = new Controller(checkboxes, noneCheckbox[0]);