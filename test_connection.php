<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "abonyozz_manga_haven";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "<h1>Database Connected Successfully!</h1>";
echo "<p>Connected to: " . $dbname . "</p>";

?>