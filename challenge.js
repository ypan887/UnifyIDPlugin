/**
 * Note: Read README first.
 */

/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */
$.fn.existAndUnique = function () {
    return this.length === 1;
}

function getUsernameField() {
  let usernameField = $('input[type=email]');
  usernameField = usernameField.existAndUnique() ? usernameField : $('input[type=email]');
  usernameField = usernameField.existAndUnique() ? usernameField : $('input[type=text]');
  usernameField = usernameField.existAndUnique() ? usernameField : $('input[type=text][name=username]');
  usernameField = usernameField.existAndUnique() ? usernameField : $('input[type=text][name=email]');
  usernameField = usernameField.existAndUnique() ? usernameField : $('input[type=text][name=username]');
  usernameField = usernameField.existAndUnique() ? usernameField : $('input[type=text][name=onlineId1]');
  usernameField = usernameField.existAndUnique() ? usernameField : $('#usernameMasked');
  return usernameField;
}

function getPasswordField() {
  let passwordField = $('input[type=password]');
  passwordField = passwordField.existAndUnique() ? passwordField : $('input[type=password][name=password]');
  return passwordField;
}

function getFormField() {
  let formField = getPasswordField().closest('form')
  return formField;
}

function getSubmitButton() {
  let submitButton = $("button").filter(
    function(){
      return $(this).text() === 'Log in' || $(this).text() === 'Sign In'
    }
  );
  submitButton = submitButton.existAndUnique()? submitButton : $('[type=submit]');
  submitButton = submitButton.existAndUnique()? submitButton : $("#signInBtn");
  return submitButton;
}

/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  let usernameField = getUsernameField();
  let passwordField = getPasswordField();

  usernameField.val(username);
  passwordField.val(password);

  setTimeout(() => {
  	getSubmitButton().click();
  }, 1000);

};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    form: getFormField(),
    submitButton: getSubmitButton(),
    username: getUsernameField(),
    password: getPasswordField()
  };

};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    username: getUsernameField().val(),
    password: getPasswordField().val()
  };

};
