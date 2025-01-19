const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const blogPost = event.target.closest('.blog-post');
    const title = blogPost.querySelector('h2').innerText;
    const description = blogPost.querySelector('.description').innerText;
  });
});


    // Select the form
const contactForm = document.getElementById("contactForm");

// Add an event listener for form submission
contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Collect input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate inputs
    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    // If validation passes, display success message
    alert("Form submitted successfully!");
    contactForm.reset(); // Clear the form
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}