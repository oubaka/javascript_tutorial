/**
 * @param {Element} form
 */
function Controller(form) {
  this.form = form;
  this.form.addEventListener('submit', this.onsubmit.bind(this));
  this.subdomainRegex = /^(w{3})$/i;
  this.urlRegex = /^(https?:\/\/)?(([a-zA-Z]+)\.)?(([-a-zA-Z0-9@:%_\+~#?&//=]{2,256}\.[a-z]{2,4})\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?)$/;
}

/**
 * @param {Event} e
 */
Controller.prototype.onsubmit = function onsubmit(e) {
  var url = e.target.url.value;

  if (this.urlRegex.test(url)) {
    var match = this.urlRegex.exec(url);
    // we are interested in groups 2 & 3
    var subdomain = this.subdomainRegex.test(match[3]) ? null : match[3];
    var domain = match[5];
    var message = subdomain ? 'Domain: ' + domain + ' Subdomain: ' + subdomain : 'Domain: ' + domain;
    alert(message);
  } else {
    alert('Please check the URL supplied');
  }
  
  e.preventDefault();
}