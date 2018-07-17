<?php
if(isset($_POST['submit']))
{

$message=
'Namee:	'.$_POST['Name'].'<br />
Emaill:	'.$_POST['Email'].'<br />
Phonee:	'.$_POST['Mobile No.'].'<br />
Messagee:	'.$_POST['Message']
'
';
    require "phpmailer/class.phpmailer.php"; //include phpmailer class

    // Instantiate Class
    $mail = new PHPMailer();

    // Set up SMTP
    $mail->IsSMTP();                // Sets up a SMTP connection
    $mail->SMTPAuth = true;         // Connection with the SMTP does require authorization
    $mail->SMTPSecure = "ssl";      // Connect using a TLS connection
    $mail->Host = "smtp.gmail.com";  //Gmail SMTP server address
    $mail->Port = 465;  //Gmail SMTP port
    $mail->Encoding = '7bit';

    // Authentication
    $mail->Username   = "150303105167@paruluniversity.ac.in"; // Your full Gmail address
    $mail->Password   = "bhatana69"; // Your Gmail password

    // Compose
    $mail->SetFrom($_POST['Email'], $_POST['Name']);
    $mail->AddReplyTo($_POST['Email'], $_POST['Name']);
    $mail->Subject = "New Contact Form Enquiry";      // Subject (which isn't required)
    $mail->MsgHTML($message);

    // Send To
    $mail->AddAddress("parth.pur@gmail.com", "Recipient Name"); // Where to send it - Recipient
    $result = $mail->Send();		// Send!
	$message = $result ? 'Successfully Sent!' : 'Sending Failed!';
	unset($mail);

}
?>
