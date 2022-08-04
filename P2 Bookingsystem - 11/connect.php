<?php

$navn = filter_input(INPUT_POST, 'Navn');
$email = filter_input(INPUT_POST, 'Email');
$telefon = filter_input(INPUT_POST, 'Telefon');

if (!empty($navn)){
if (!empty($email)){
if (!empty($telefon)){
    $host = "localhost8080";
    $dbUsername = "Root";
    $dbPassword = "";
    $dbName ="";

$conn = new mysqli ($host, $dbUsername, $dbPassword, $dbName);
if(mysqli_connect_error()){
    die('Connect Error('. mysqli_connect_errno() . ') '
    . mysqli_connect_error());
}
//Insert into account skal nok ændres
else{
    $sql = "INSERT INTO account (navn, email, telefon)
    values ($navn, $email, $telefon)";
    if ($conn->query($sql)){
        echo "Connection Successful";
    }
else{
    echo"Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();

}
}
else{
    echo "Telefon skal udfyldes";
    die();
}
}
else{
    echo "Email skal udfyldes";
    die();
}
}
else{
    echo "Navn skal udfyldes";
    die();
}


?>