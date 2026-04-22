<?php
session_start();
session_destroy(); // Destroys the user session
header("Location: index.php"); // Redirects back to the main page
exit;
?>