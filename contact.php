<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Send an email (for example)
    mail("your-email@example.com", "New Message from Contact Form", $message, "From: $email");

    echo "Thank you for reaching out! I'll get back to you soon.";
}
?>
