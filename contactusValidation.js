function validateName() {
 
    var name = document.getElementById('name').value;
    var namePattern = /^[a-zA-Z]+$/;
    if (!namePattern.test(name)) {
      alert('Name should only contain alphabetic characters');
     
     
    } 
   }