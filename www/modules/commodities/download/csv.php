<?php

include "commodity.class.php";

	$today = date("d-m-Y"); 
	header( 'Content-Type: text/csv' );
    header('Content-Disposition: attachment;filename="commodities'.$today.'.csv"');
    $fp = fopen('php://output', 'w');

	$tab=array("ID","Артикул","Категория","Название","Розница","Опт","Размер","Опис","Ссылка на товар","Источник","Фото");
	fputcsv($fp, $tab);	


	$shop=commodity::getCommodity();
	foreach ($shop as $k => $v) {
		$img=commodity::getPhoto($v['id']);
		$putImg='';
		for($i=0; $i<count($img); $i++){
				$putImg.="http://makewear-images.azureedge.net/{$v['id']}/{$img[$i]}.jpg;";
		}

		fputcsv($fp, array(
				$v['id'],
				$v['art'],
				$v['cat_name'],
				$v['name'],
				$v['price'],
				$v['opt'],
				$v['size'],
				strip_tags($v['desc']),
				"http://makewear.com.ua/product/{$v['id']}/{$v['alias']}.html",
				$v['from_url'],
				$putImg
				));	
	}

	fclose($fp);


?>
