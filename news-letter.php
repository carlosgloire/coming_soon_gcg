<?php
require_once('mail/database.php');

if(isset($_POST['send-NewsLetter'])){
    $email = $_POST['mail-newsLetter'];
    if(empty($_POST['mail-newsLetter'])){
        $error ="Please complete your email";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error ="Your email is incorrect";
    }else {
        $req = $mysqli->prepare('SELECT * FROM subscribe_emails WHERE email = ?');
        $req->bind_param('s', $email);
        $req->execute();
        $result = $req->get_result();

        if ($result->num_rows > 0) {
            $error = "This email already exists";
   
        } else {
            $query = $mysqli->prepare('INSERT INTO subscribe_emails (email) VALUES (?)');
            $query->bind_param('s', $email);
            $query->execute();
            $success = "Your email has been registered to receive <br> updates about General consulting group" ;
           
        }
    }
}
?>
