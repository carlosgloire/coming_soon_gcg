<?php

$host = "localhost:3306";
$dbname = "general_consulting_group";
$username = "gloire";
$password = "Pat102030@@#";

$mysqli = new mysqli(hostname: $host,
                     username: $username,
                     password: $password,
                    database: $dbname);
                     
if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
}

return $mysqli;