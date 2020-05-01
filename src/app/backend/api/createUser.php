<?php

require 'database.php';

//Get the posted data
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  //Extract the data
  $request = json_decode($postdata);

  //Validate
  //if(trim($request->number) === '' || (float)$request->amount < 0)
  //{
  //  return http_response_code(400);
  //}

  $firstName = mysqli_real_escape_string($con, (string)$request->firstName);
  $lastName = mysqli_real_escape_string($con, (string)$request->lastName);
  $userName = mysqli_real_escape_string($con, (string)$request->userName);
  $password = mysqli_real_escape_string($con, (string)$request->password);

  //Create
  $sql = "INSERT INTO `users`
          (
            `id`,
            `firstName`,
            `lastName`,
            `userName`,
            `password`
          )
          VALUES
          (
            null,
            '{$firstName}',
            '{$lastName}',
            '{$userName}', 
            '{$password}'
          )";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $newUser = [
      'id'    => mysqli_insert_id($con),
      'firstName' => $firstName,
      'lastName' => $lastName,
      'userName' => $userName,
      'password' => $password
    ];
    echo json_encode($newUser);
  }
  else
  {
    http_response_code(422);
  }
}

?>
