/*(function () { const form = document.getElementById('contactForm'); 
    form.addEventListener('submit', function (event) { 
        if (!form.checkValidity()) { event.preventDefault(); 
        event.stopPropagation(); } form.classList.add('was-validated'); }, false); })();*/

function fieldFocus(fieldId) {
    const field = document.getElementById(fieldId);
    field.addEventListener('focus', function() {
        this.style.backgroundColor = 'skyblue';
    });
    field.addEventListener('blur', function() {
        this.style.backgroundColor = 'lightgreen';
    });
}

// Initialize focus handlers for form fields
fieldFocus('name');
fieldFocus('email');
fieldFocus('message');

// Add blur validation for email field
document.getElementById('email').addEventListener('blur', function() {
    checkAddress('email');
});


function checkAddress(fieldId) {
    const field = document.getElementById(fieldId);
    const addressPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!addressPattern.test(field.value)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}