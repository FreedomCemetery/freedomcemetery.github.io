<?php 
	header("Content-type: application/json");
    echo json_encode($_POST);
    
 
    $my_address = 'kevindeedavis@gmail.com';
    $Name = trim($_POST['Name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $reason = trim($_POST['reason']);
    $message = trim($_POST['message']);
    //$subject = trim($_POST['sub']);
    //email address settings
    $headers = "From: ".$email;
    $msg = "Contact name: $Name\nContact Email: $email\nContact Phone: $phone\nContact Message: $message";
    $to = $my_address;
    
    {
        mail($to, 'Contact from freedomcemetery.org', $msg, $headers);
        
    }
?>