document.getElementById('registration-form').addEventListener('submit', function(event) {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('new-password').value;
    const contactNumber = document.getElementById('contact-number').value;
    const feedback = document.getElementById('feedback').value;
    const termsAndConditions = document.getElementById('terms-and-conditions').checked;
  
    if (!termsAndConditions) {
      alert('You must accept the terms and conditions.');
      event.preventDefault();
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
      return;
    }
  
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      event.preventDefault();
      return;
    }
  
    if (!validatePhoneNumber(contactNumber)) {
      alert('Please enter a valid contact number.');
      event.preventDefault();
      return;
    }
  
    alert('Registration successful!');
  });
  
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validatePhoneNumber(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
  }