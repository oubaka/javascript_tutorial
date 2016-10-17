var checkboxes = document.querySelectorAll('#Monday,#Tuesday,#Wednesday,#Thursday,#Friday,#Saturday,#Sunday');
var noneCheckbox = document.querySelector('#None');
var controller = new Controller(checkboxes, noneCheckbox);