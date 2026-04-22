<?php
include "db.php";

$token = $_POST['token'];
$newpass = password_hash($_POST['password'], PASSWORD_DEFAULT);

$sql = "SELECT * FROM users WHERE reset_token='$token' 
        AND token_expiry > NOW()";

$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) == 1){
    $update = "UPDATE users 
               SET password='$newpass', reset_token=NULL 
               WHERE reset_token='$token'";
    
    mysqli_query($conn, $update);
    echo "success";
} else {
    echo "invalid_or_expired";
}
?>
