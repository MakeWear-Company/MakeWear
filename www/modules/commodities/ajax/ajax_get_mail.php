<?php

namespace Modules;

require_once('../../../vendor/autoload.php');
require_once('../../../settings/conf.php');
require_once('../../../settings/connect.php');
require_once('../../../settings/functions.php');
require_once('../../../settings/main.php');

bd_session_start();

$db = MySQLi::getInstance()->getConnect();

// if(isset($_POST["id"])){
// 	$id=$_POST["id"];

// 	$result=$db -> query(<<<QUERY1
// 				SELECT `id`,`sent_mail_save` FROM `shop_orders` WHERE `id`='{$id}';
// QUERY1
// 		);

// 	$row = $result->fetch_assoc();
// 	echo $row["sent_mail_save"];
// }
if(isset($_POST["client"])){
	$id=$_POST["id"];

	$result=$db -> query(<<<QUERY1
				SELECT `id`,`sent_mail_client` FROM `shop_orders` WHERE `id`='{$id}';
QUERY1
		);

	$row = $result->fetch_assoc();
	echo $row["sent_mail_client"];
}

?>