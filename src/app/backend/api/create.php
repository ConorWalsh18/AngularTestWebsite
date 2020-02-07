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

  //Sanitize
  $borderColor = mysqli_real_escape_string($con, (string)$request->borderColor);
  $mainColor = mysqli_real_escape_string($con, (string)$request->mainColor);
  $note = mysqli_real_escape_string($con, (string)$request->note);
  $noteOrder = mysqli_real_escape_string($con, (string)$request->noteOrder);
  $icon = mysqli_real_escape_string($con, (string)$request->icon);

  //Create
  $sql = "INSERT INTO `notes`(`id`,`borderColor`,`mainColor`,`note`,`noteOrder`, `icon`)
          VALUES (null,'{$borderColor}','{$mainColor}','{$note}','{$noteOrder}', '{$icon}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $newNote = [
      'borderColor' => $borderColor,
      'mainColor' => $mainColor,
      'note' => $note,
      'noteOrder' => $noteOrder,
      'icon' => $icon,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($newNote);
  }
  else
  {
    http_response_code(422);
  }
}

?>
