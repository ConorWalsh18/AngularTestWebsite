<?php

require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ((int)$request->id < 1) {
    return http_response_code(400);
  }

  // Sanitize.
  $id = mysqli_real_escape_string($con, (int)$request->id);
  $borderColor = mysqli_real_escape_string($con, (string)$request->borderColor);
  $mainColor = mysqli_real_escape_string($con, (string)$request->mainColor);
  $noteTitle = mysqli_real_escape_string($con, (string)$request->noteTitle);
  $note = mysqli_real_escape_string($con, (string)$request->note);
  $noteOrder = mysqli_real_escape_string($con, (string)$request->noteOrder);
  $icon = mysqli_real_escape_string($con, (string)$request->icon);
  $iconColor = mysqli_real_escape_string($con, (string)$request->iconColor);

  // Update.
  $sql = "UPDATE `notes`
          SET
            `borderColor`='$borderColor'
            ,`mainColor`='$mainColor'
            ,`noteTitle`='$noteTitle'
            ,`note`='$note'
            ,`noteOrder`='$noteOrder'
            ,`icon`='$icon'
            ,`iconColor`='$iconColor'
          WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}

?>
