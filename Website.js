const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all fields before sending the email.");
        return;
    }

    let params = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    emailjs.send("service_zoz5moa", "template_fjfe1f9", params)
        .then(() => {
            alert("Email Sent!");
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again later.");
        });
}
