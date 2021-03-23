<!-- Config file for mail -->

<?php 

use PHPMailer\PHPMailer\PHPMailer;

require ('mail/phpmailer/src/Exception.php');
require ('mail/phpmailer/src/PHPMailer.php');
require ('mail/phpmailer/src/SMTP.php');

if(isset($_POST['button']))
{

 // Posted Inputs
    $fname = $_POST['fname'];
    $fngaysinh = $_POST['fngaysinh'];
    $fphone = $_POST['fphone'];
    $femail = $_POST['femail'];
    $fsubject = $_POST['fsubject'];


//init data
$mail = new PHPMailer;
$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->Username = "hai.lemanh.1310@gmail.com"; // Replace with your mail id
$mail->Password = "fyyiajokqsznyogg"; //Replace with your mail pass
$mail->SMTPAuth = true;  // authentication enabled
$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
$mail->SMTPAutoTLS = false;
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   


//Recipients
$mail->setFrom('no-replay@email.com', 'Kỳ thi đánh giá CNTT 2021');
$mail->addAddress('hai.lemanh.1310@gmail.com', 'Saiarlen');  //add to email
$mail->addAddress('aptech1@aprotrain.com');               //Name is optional
$mail->addReplyTo('receive@gmail.com', 'saiarlen');  //add replay to email



// Content
$mail->isHTML(true);  // Set email format to HTML
$mail->Subject = $fsubject;
$mail->Body    = 'Họ và Tên: ' . $fname .'<br>Email: ' . $femail . '<br>Số điện thoại: ' . $fphone . '<br>Ngày tháng năm sinh: ' . $fngaysinh . '<br>';

//Info Message
if (!$mail->send()) {
$error = "Mailer Error: " . $mail->ErrorInfo;
echo '<p id="res">'.$error.'</p>';
}
else {
echo '<p id="res">Thanks! Message Sent Successfully.</p>';
}
}
else{
echo '<p id="res">Please enter valid Inputs</p>';
}

?>