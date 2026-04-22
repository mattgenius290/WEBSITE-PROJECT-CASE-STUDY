<?php
$host = "sql103.infinityfree.com"; // This looks correct based on your screenshot
$user = "if0_40647732";            // This looks correct
$pass = "moviezone2025";           // IMPORTANT: This must be your vPanel password
$db   = "if0_40647732_moviezone_db"; // <--- CHANGE THIS LINE

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>