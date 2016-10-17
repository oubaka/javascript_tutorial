/**
 * @param {Element} form
 */
function Controller(form){
  this.form = form;
  this.form.addEventListener('submit', this.onsubmit.bind(this));
}

/**
 * @param {Event} e
 */
Controller.prototype.onsubmit = function onsubmit(e){  
  if(parseInt(e.target.number.value)){
    e.target.result.value = true;
    alert('Form submitted successfully');
  }else{
    e.target.result.value = '';
  }

  e.preventDefault();
}