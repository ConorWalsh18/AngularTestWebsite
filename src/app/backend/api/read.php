<?php

/**
 * Returns the list of notes
 */

require 'database.php';

$notes = [];
$sql = "SELECT id, borderColor, mainColor, note, noteOrder, icon FROM notes";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $notes[$i]['id']    = $row['id'];
    $notes[$i]['borderColor'] = $row['borderColor'];
    $notes[$i]['mainColor'] = $row['mainColor'];
    $notes[$i]['note'] = $row['note'];
    $notes[$i]['noteOrder'] = $row['noteOrder'];
    $notes[$i]['icon'] = $row['icon'];
    $i++;
  }

  echo json_encode($notes);
}
else
{
  http_response_code(404);
}

?>
