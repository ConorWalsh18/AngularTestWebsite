<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('DB_HOST', 'DEN0285L');
define('DB_USER', '');
define('DB_PASS', '');
define('DB_NAME', 'ConorsTestDB');

function connect()
{
  $connect = mysqli_connect('DEN0285L' ,'root' ,'' ,'ConorsTestDB');

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();

?>
