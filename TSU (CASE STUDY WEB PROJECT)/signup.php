<?php
require "config.php";

// 1. Initialize variables
$username = isset($_POST['username']) ? trim($_POST['username']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$password_confirm = isset($_POST['password-confirm']) ? $_POST['password-confirm'] : '';

// 2. CHECK: Are fields empty?
if (empty($username) || empty($email) || empty($password) || empty($password_confirm)) {
    header("Location: index.php?signup_error=empty");
    exit;
}

// 3. CHECK: Passwords match?
if ($password !== $password_confirm) {
    header("Location: index.php?signup_error=mismatch");
    exit;
}

// 4. CHECK: Password Strength (Min 6 chars)
if (strlen($password) < 6) {
    header("Location: index.php?signup_error=weak_pass");
    exit;
}

// 5. SMART CHECK: Common Passwords & Username Re-use
// (We can't check DB duplicates due to hashing, so we block obvious ones)
$common_passwords = ["123456", "12345678", "password", "moviezone", "qwerty", "111111"];
if (in_array(strtolower($password), $common_passwords)) {
    header("Location: index.php?signup_error=common_pass");
    exit;
}
if (stripos($password, $username) !== false) {
    header("Location: index.php?signup_error=pass_has_user");
    exit;
}

// 6. CHECK: Valid Email Format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: index.php?signup_error=invalid_email");
    exit;
}

// 7. STRICT CHECK: Must be a @gmail.com address
// We convert to lowercase to handle cases like "User@Gmail.COM"
if (substr(strtolower($email), -10) !== "@gmail.com") {
    header("Location: index.php?signup_error=not_gmail");
    exit;
}

// 8. CHECK: Username or Email already taken?
$checkSql = "SELECT id FROM users WHERE username = ? OR email = ?";
$checkStmt = $conn->prepare($checkSql);
$checkStmt->bind_param("ss", $username, $email);
$checkStmt->execute();
$checkStmt->store_result();

if ($checkStmt->num_rows > 0) {
    header("Location: index.php?signup_error=exists");
    exit;
}
$checkStmt->close();

// --- SUCCESS: INSERT USER ---
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $username, $email, $hashed_password);

if ($stmt->execute()) {
    header("Location: index.php?signup=success");
} else {
    header("Location: index.php?signup_error=db_error");
}
exit;
?>