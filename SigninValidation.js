function validateName() {
 
  var name = document.getElementById('name').value;
  var namePattern = /^[a-zA-Z]+$/;
  if (!namePattern.test(name)) {
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent ='Name should only contain alphabetic characters';
    errorContainer.classList.add('error');
  } 
}
function validatePassword() 

{
  var password = document.getElementById('password').value;
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$_.])[A-Za-z\d@$_.]{9,}$/;
  if (!passwordPattern.test(password)) {
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = 'Password must contain at least 8 characters, including uppercase, lowercase, digits, and special characters(@,$,_).';
    errorContainer.classList.add('error');
  } 
}