<?php
    require_once('class.phpmailer.php');   
    require_once('class.smtp.php');  
    $mail = new PHPMailer()
    $mail->From = "portfolio2021md@gmail.com";//adres skrzynki nadawczej
    $mail->FromName = "Portfolio Mailer";   
    $mail->Host = "smtp.gmail.com";   
    $mail->Mailer = "smtp";
    $mail->SMTPAuth = true;
    $mail->Username = "portfolio2021md@gmail.com";//to samo co w $mail->From
    $mail->Password = "portfolio1234"; 
    $mail->Port = 587;
    $mail->Subject = $_POST["title"]
    $mail->Body = $_POST["text"];
    $mail->AddAddress ("miles.debinski@gmail.com","Name"); //Adres skrzynki na którą ma przyjść mail
    if($mail->Send())
    {                      
        echo 'E-mail został wysłany';
    }            
    else    
    {           
        echo 'E-mail nie mógł zostać wysłany';   
    }
?>