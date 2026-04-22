<?php
session_start();
require "config.php";

$input = trim($_POST['username']);
$password = $_POST['password'];

// Check if users exist at all
$totalUsersResult = $conn->query("SELECT COUNT(*) as total FROM users");
$totalUsersRow = $totalUsersResult->fetch_assoc();

if ($totalUsersRow['total'] == 0) {
    // UPDATED: Redirect to index.php
    header("Location: index.php?login_error=no_users");
    exit;
}

// Check if the username/email exists
$sql = "SELECT * FROM users WHERE username=? OR email=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $input, $input);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        header("Location: home.php");
        exit;
    } else {
        // Incorrect Password - Pass username back so user doesn't retype it
        $userParam = urlencode($input);
        
        // UPDATED: Redirect to index.php
        header("Location: index.php?login_error=password&u=$userParam");
        exit;
    }
} else {
    // User Not Found
    // UPDATED: Redirect to index.php
    header("Location: index.php?login_error=user");
    exit;
}
?>