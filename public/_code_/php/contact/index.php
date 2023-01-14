<?php

// error_reporting(0);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$recipient = $_POST['r-email'];

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions

try {
  //Server settings
  // $mail->SMTPDebug = 1;                              // Enable verbose debug output
  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'smtp.ipage.com';                       // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = 'website@alola-eg.com';      // SMTP username
  $mail->Password = 'AlOla@246337264';                       // SMTP password
  $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
  $mail->Port = 465;                                    // TCP port to connect to

  if($email != ""){
    $mail->setFrom($email, $name);
    $mail->addReplyTo($email, $name);

    $mail->addAddress($recipient, "Smile Art Modern Systems");

    //Content
    $mail->isHTML(false); // Set email format to HTML
    $mail->Subject = $name . ' | A message from alola-eg.com';
    $mail->Body = "Name: $name \n Phone: $phone \n E-Mail: $email \n Message: $message \n";

    $mail->send();

    echo "
    <script>
      setTimeout(function(e){
        $('.submit-message i').attr('class', 'far fa-check');
        $('.submit-message i').removeClass('fa-spin');
        $('.submit-message').addClass('sent');
        setTimeout(function(e){
          $('.submit-message i').attr('class', 'fas fa-paper-plane');
          $('.submit-message').removeClass('sending sent');
        }, 2000)  
      }, 2000)  
    </script>
    ";
  }
} catch (Exception $e) {
  echo "
  <script>
    setTimeout(function(e){
      $('.submit-message i').attr('class', 'far fa-times');
      $('.submit-message').addClass('error'); 
    }, 2000)  
  </script>
  ";
}