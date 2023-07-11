function validateFirstName() {
 
    var firstname = document.getElementById('firstname').value;
    var firstnamePattern = /^[a-zA-Z]+$/;
    if (!firstnamePattern.test(firstname)) {
      alert('Name should only contain alphabetic characters');
     
     
    } 
   }

   function validateLastName() {
 
    var lastname = document.getElementById('lastname').value;
    var lastnamePattern = /^[a-zA-Z]+$/;
    if (!lastnamePattern.test(lastname)) {
      alert('Name should only contain alphabetic characters');
     
     
    } 
   }
   function validateDateOfBirth() {

    var dob = document.getElementById('dob').value;

    var enteredDate = new Date(dob);

    var currentDate = new Date();
    if (enteredDate > currentDate) {
        alert('Date of Birth cannot be a future date.');
      } 
    }

    function validateEmail() 
    {
  
        var email = document.getElementById('email').value;
  
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(email))
         {
          alert( 'Please enter a valid email address.');
        } 
    }

    function validatePhoneNumber() {
  
        var phoneNumber = document.getElementById('phoneNumber').value;
          var phoneNumberPattern = /^\d{10}$/;
          if (!phoneNumberPattern.test(phoneNumber)) {
          alert('Please enter a valid 10-digit phone number.');
          
        }
      }