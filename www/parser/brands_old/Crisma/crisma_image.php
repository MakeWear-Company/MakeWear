<?php
//==============================================================================
//			Crisma  	29-87         		
//==============================================================================
$existIm      = FALSE;
$srcProdArray = array('mainSrcImg' => "", 'dopSrcImg' => "");
$photoIdArray = array();
//--------------------------------Image-------------------------------------8---
$arrayImage   = checkEmptyOrChangeSelector($_SESSION['img'], $saw,
    'img - главная картинка');

$srcProd = "";
if (isset($arrayImage)) {
    $lowSrc                     = str_replace("m.jpg", ".jpg",
        $arrayImage[0]['src']);
    $srcProd                    = filterUrlImage($lowSrc, $curLink);
    $srcProdArray['mainSrcImg'] = $srcProd;
    $existIm                    = TRUE;
}
//var_dump($srcProd);
//--------------------------------DopImage----------------------------------9---
$arrayDopImage = checkEmptyOrChangeSelector($_SESSION["dopimg"], $saw,
    'dopimg - дополнительны картинки');

$srcDopIm = "";
if (isset($arrayDopImage)) {
    if ($verify == "verify") {
        deleteDopImgFromDB($commodityID, $mysqli);
    }
    foreach ($arrayDopImage as $value) {
        $wovels   = array("m.jpg", "s.jpg");
        $srcDopIm = filterUrlImage(str_replace($wovels, ".jpg", $value['src']),
            $curLink);
        $srcDopIm = str_replace("s_", "_", $srcDopIm);

        if ($srcProdArray['mainSrcImg'] !== $srcDopIm) {
            $srcProdArray['dopSrcImg'][] = $srcDopIm;
            $existIm                     = TRUE;
            $photoIdArray[]              = insertInShopImBd($commodityID,
                $mysqli);
        }
    }
}
//var_dump($srcProdArray);
//----------------------------CropandWrite images----------------------------10-
if ($existIm == TRUE) {
    if (!empty($srcProdArray['dopSrcImg'])) {
        $srcProdArray['dopSrcImg'] = array_values(array_unique($srcProdArray['dopSrcImg']));
    }
    $nameImArray = array('title', 's_title', $photoIdArray);
    $brendName   = "crisma_images/";
    cropAndWriteImageBegin($srcProdArray, $commodityID, $nameImArray,
        $brendName, $idBrand);
}
