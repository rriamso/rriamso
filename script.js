/*@author M Soyombo & A Olatilewa
15/11/24
script.js
*/
//Js validation
// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // this gets the form element by its ID
    const form = document.getElementById('contactForm');
    
    // Add an event listener for the form's submit event
    form.addEventListener('submit', function(event) {
        
        // this prevents the default form submission behavior
        event.preventDefault();
        
        // this is just the constructions of the names itself
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Validate the form fields
        if (validateForm(name, email, phone, message)) {
            // form submitted successfully if the form validation is right
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // function to validate the form fields
    function validateForm(name, email, phone, message) {
        // this checks if the name field is empty
        if (name === '') {
            alert('Name is required.');
            return false;
        }
        // this checks if the email field contains a valid email address
        if (!validateEmail(email)) { 
            alert('Please enter a valid email address.');
            return false;
        }
        // Check if the phone field contains a valid phone number
        if (!validatePhone(phone)) { 
            //if there is no number inputed the system will tell the user to input a valid number
            alert('Please enter a valid phone number.');
            return false;
        }
    
        // this checks if the message field is empty
        if (message === '') {
            //if message box is empty it will come out as true and tell the user
            //the alert in the box below
            alert('Message is required.');
            return false;
        }
        // If all validations pass the code will return true to the user
        return true;
    }

    // Helper function to validate email using a regular expression
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //pattern for validating email to make sure the email has no errors. it will tell you if you are missing certain symbols or keys
        return emailRegex.test(email);// if the form is valid it will let it go through and return it to the
        //code to process in
    }

    // Helper function to validate phone number using a regular expression
    function validatePhone(phone) {
        const phoneRegex = /^\d{10}$/;//same function as the email regex but for the phone number
        return phoneRegex.test(phone);
    }
});