// index.js

// Code for tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Code for side menu functionality
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Code for contact form validation and submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    if (!contactForm.checkValidity()) {
        event.preventDefault();
        alert('Please fill out all required fields.');
    } else {
        const nameInput = contactForm.querySelector('input[name="Name"]');
        const phoneInput = contactForm.querySelector('input[name="phone"]');
        const emailInput = contactForm.querySelector('input[name="email"]');

        if (!validateName(nameInput.value)) {
            event.preventDefault();
            alert('Please enter a valid name (only alphabets allowed).');
        } else if (!validatePhoneNumber(phoneInput.value)) {
            event.preventDefault();
            alert('Please enter a valid 10-digit phone number.');
        } else if (!validateEmail(emailInput.value)) {
            event.preventDefault();
            alert('Please enter a valid email address (example@asdf.com).');
        } else {
            alert('Form submitted successfully!');
        }
    }
});

function validateName(name) {
    const namePattern = /^[a-zA-Z ]+$/;
    return namePattern.test(name);
}

function validatePhoneNumber(phoneNumber) {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    return cleanedPhoneNumber.length === 10;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const resetButton = contactForm.querySelector('button[type="reset"]');
resetButton.addEventListener('click', function() {
    contactForm.reset();
});







