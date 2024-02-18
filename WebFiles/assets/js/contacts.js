'use strict';

// Validation forms
function validateForm(selector) {
  Array.from(document.querySelectorAll(selector)).forEach((item) => {
    item.addEventListener('input', (e) => {
      if (e.target.value === '') {
        item.dataset.touched = false;
      }
    });
    item.addEventListener('invalid', () => {
      item.dataset.touched = true;
    });
    item.addEventListener('blur', () => {
      if (item.value !== '') item.dataset.touched = true;
    });
  });
}

validateForm('.js-form .form-field');

var form = document.querySelector('.js-form');
var formName = '.js-form';

form.addEventListener('submit', function (e) {
  submitForm(e, formName);
});

function submitForm(e, formName) {
  e.preventDefault();
  var name = $(formName + ' .js-field-name').val();
  var email = $(formName + ' .js-field-email').val();
  var message = $(formName + ' .js-field-message').val();

  var formData = {
    name: name,
    email: email,
    message: message
  };

  $.ajax({
    type: 'POST',
    url: 'https://api.ray-ayala.com/sendcontact',
    data: JSON.stringify(formData),
    contentType: 'application/json',
    crossDomain: true,
    success: function () {
      console.log('success');
      toastr.success(formData.name + ' thank you for reaching out. I will get back to you soon!');
      // ...
    },
    error: function () {

      console.log('error');
      toastr.error('An Error has occurred. Please try again');
      // ...
    }
  });
  form.reset();
}
