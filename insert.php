
<?php

$server = "sql209.unaux.com";
$username = "root";
$password = "";

$con = mysqli_connect($server, $username, $password);
if (!$con) {
    echo"hoy nai";
}

$name = $_POST ['name'];
$email = $_POST ['email'];
$message = $_POST ['message'];

$sql = INSERT INTO `unaux_28622142_localhost`.`message` (`name`, `email`, `message`) VALUES ('$name', '$email', '$message');;
echo $sql;

if ($con->query($sql) == true) {
    echo "inserted";
}else{
    echo "error";
}

?>