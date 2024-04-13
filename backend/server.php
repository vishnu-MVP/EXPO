<?php
$host = "localhost";
$userName = "root";
$password = "viposa";
$dbName = "expo";
// Create database connection
$conn = new mysqli($host, $userName, $password, $dbName);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
else{
$yourName = $conn->real_escape_string($_POST['name']);
$yourEmail = $conn->real_escape_string($_POST['email']);
$yourPhone = $conn->real_escape_string($_POST['age']);

$sql="INSERT INTO user VALUES ('".$yourName."','".$yourEmail."', '".$yourPhone."')";
if(!$result = $conn->query($sql)){
die('There was an error running the query [' . $conn->error . ']');
}
else
{
echo "Thank you! We will contact you soon";
}
}
?>


