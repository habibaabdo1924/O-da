<?php


$email=$_REQUEST['email'];
$password=$_REQUEST['psw'];


if(isset($_POST['btn'])){


    $host="localhost";
    $user="root";
    $password="";
    $db="product";

    $conn = mysqli_connect($host,$user,$password,$db);
    $insert = "insert into users values('$email','$password')";

    $mysqli_query($conn,$insert);
    if($conn){
        echo("<h1 style= 'color :green;'>your Registration is Done!</h1>");
    }
    else{
        echo("<h1 style= 'color :red;'>your Registration is Done!</h1>");
    }

    
}