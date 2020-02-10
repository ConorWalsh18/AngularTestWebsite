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
  $noteTitle = mysqli_real_escape_string($con, (string)$request->noteTitle);
  $note = mysqli_real_escape_string($con, (string)$request->note);
  $noteOrder = mysqli_real_escape_string($con, (string)$request->noteOrder);
  $icon = mysqli_real_escape_string($con, (string)$request->icon);
  $iconColor = mysqli_real_escape_string($con, (string)$request->iconColor);

  //Create
  $sql = "INSERT INTO `notes`(`id`, `borderColor`, `mainColor`, `noteTitle`, `note`, `noteOrder`, `icon`, `iconColor`)
          VALUES (null, '{$borderColor}', '{$mainColor}', '{$noteTitle}', '{$note}', '{$noteOrder}', '{$icon}', '{$iconColor}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $newNote = [
      'borderColor' => $borderColor,
      'mainColor' => $mainColor,
      'noteTitle' => $noteTitle,
      'note' => $note,
      'noteOrder' => $noteOrder,
      'icon' => $icon,
      'iconColor' => $iconColor,
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
