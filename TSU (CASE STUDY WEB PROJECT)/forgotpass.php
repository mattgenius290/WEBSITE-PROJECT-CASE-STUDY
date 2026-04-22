<?php
require "config.php";

$identifier = trim($_POST['forgot-email']); // username or email

$sql = "SELECT * FROM users WHERE username=? OR email=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $identifier, $identifier);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    echo "Password reset link sent! (Simulation)";
    // TODO: implement actual email sending with token
} else {
    echo "User not found";
}
?>
