<?php
// Variables
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$company = trim($_POST['company']);
$subject = trim($_POST['subject']);
$message = trim($_POST['message']);


if( isset($name) && isset($email) && isset($message) ) {

	// Avoid Email Injection and Mail Form Script Hijacking
	$pattern = "/(content-type|bcc:|cc:|to:)/i";
	if( preg_match($pattern, $name) || preg_match($pattern, $email) || preg_match($pattern, $message) ) {
		exit;
	}

	$to = "mironenkoalexey@gmail.com";
	$sub = "$subject (from my site)";

	$body = <<<EOD
	<strong>Name:</strong> $name <br>
	<strong>Email:</strong> <a href="mailto:$email?subject=feedback" "email me">$email</a> <br> <br>
	<strong>Company:</strong> $company <br>
	<strong>Message:</strong> $message <br>
EOD;
//Must end on first column

	$headers = "From: $name <$email>\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// PHP email sender
	mail($to, $sub, $body, $headers);
}


?>
