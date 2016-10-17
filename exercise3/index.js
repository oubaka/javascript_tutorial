var checkboxes = document.querySelectorAll('input[type=checkbox]:not([name=None])');
var noneCheckbox = document.querySelector('input[type=checkbox][name=None]');
var controller = new Controller(checkboxes, noneCheckbox);