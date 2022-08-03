<?php
	$email = filter_var(trim($_POST['email']),
	FILTER_SANITIZE_STRING);
	$userpass = filter_var(trim($_POST['userpass']),
	FILTER_SANITIZE_STRING);
	$fphoto = filter_var(trim($_POST['fphoto']),
	FILTER_SANITIZE_STRING);

	if(mb_strlen($email) < 5 || mb_strlen($email) > 90) {
		echo "Не допкстимая длина электронной почты";
		exit();
	} else if(mb_strlen($userpass) < 3 || mb_strlen($userpass) > 12) {
		echo "Не допкстимая длина пароля";
		exit();
	} else if(mb_strlen($userphone) < 11 || mb_strlen($userphone) > 14) {
		echo "Не допкстимая длина номера телефона";
		exit();
	}

	$mysql = new mysqli('localhost', 'root', '', 'esqrow-register');
	$mysql->query("INSERT INTO `users` (`name`, `email`, `password`, `phonenumber`, `typeprofile`, `photoprofile`)
	VALUES('$name', '$email', '$userpass', '$userphone', '$type', '$fphoto')");

	$mysql0->close();
?>