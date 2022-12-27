<?php
/*  $action = $_GET['action'];
	  
  if($action == 'getBooks'){
	  echo getBooks();
  }

function getBooks(){
	//return 'okey';
	$arrayName = array('1'=>'book1','2'=>'book2','3'=>'book3');
	return json_encode($arrayName);
}*/



$login = trim($_GET['login']);
$pass = trim($_GET['pass']);

if($login == '' || $pass == ''){
	echo 'Помилка. Заповніть всі поля';
	return;
}

if($login != 'login' || $pass != '123'){
	echo 'Такий користувач не знайдено';
	return;
}else{
	echo 'Вітаю Вас';
}
?>