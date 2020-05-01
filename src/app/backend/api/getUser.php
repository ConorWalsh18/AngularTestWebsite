<?php

require 'database.php';

$userName = $_GET['userName'];
$password = $_GET['pw'];
$sql = "SELECT id, firstName, lastName, userName, `password`
        FROM users
        WHERE userName = '{$userName}' and `password` = '{$password}'
        LIMIT 1";

if($result = mysqli_query($con,$sql))
{    
    echo json_encode(mysqli_fetch_assoc($result));
}
else
{
  http_response_code(404);
}

?>
