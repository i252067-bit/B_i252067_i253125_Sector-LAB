console.log("Contact page loaded."); // Log #1

const sendBtn = document.getElementById("sendBtn");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const subjectField = document.getElementById("subject");
const messageField = document.getElementById("message");

sendBtn.addEventListener("click", function () {

    console.log("Send button clicked.");  // Log 2

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const subject = subjectField.value.trim();
    const message = messageField.value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields.");   // Alert 1
        return;
    }

    alert("Your message has been sent!");       // Alert 2

    console.log("Form submitted by:", email);   // Log 3

    nameField.value = "";
    emailField.value = "";
    subjectField.value = "";
    messageField.value = "";
});

function resetForm() {
    const confirmReset = confirm("Are you sure you want to clear the form?"); // Alert 3
    if (confirmReset) {
        nameField.value = "";
        emailField.value = "";
        subjectField.value = "";
        messageField.value = "";
    }
}
