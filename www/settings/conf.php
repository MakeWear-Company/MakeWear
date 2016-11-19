<?php

define('MODE', getenv('MODE'));
$envOn = 'dev' === MODE ? 'On' : 'Off';

ini_set("display_errors", $envOn);
ini_set('session.bug_compat_warn', 0);
ini_set('session.bug_compat_42', 0);
ini_set('magic_quotes_gpc', 'on');

error_reporting(E_ERROR | E_WARNING | E_PARSE);

$_SESSION["s_id"] = 0;
$host_name        = parse_url($_SERVER['HTTP_REFERER']);
$request_url      = substr_count($_SERVER['REQUEST_URI'], "?prin") > 0 ?
    current(explode("?print", $_SERVER['REQUEST_URI'])) :
    $_SERVER['REQUEST_URI'];

$parrent_dir     = "";
$dostavka_defcur = 1;
$session_id      = session_id();

$glb = array();

//ключ для почтового сервісу SendGrid
define('SEND_GRID_KEY', getenv('SEND_GRID_KEY'));

//ключ к новой почте
define('NOVA_POSHTA_KEY', getenv('NOVA_POSHTA_KEY'));

//ключ к google
define('GOOGLE_API_KEY', getenv('GOOGLE_API_KEY'));

//blob storage key
define('BLOB_STORAGE', getenv('BLOB_STORAGE'));

//фото домен
define('PHOTO_DOMAIN', getenv('PHOTO_DOMAIN'));
    //cdn     - http://makewear-images.azureedge.net/
    //storage - https://makewear.blob.core.windows.net/ 

define('EXIST_ACTION_BRANDS', '');

//caching time
define('CACHE_TIME_PRODUCT', 60*60*3);
define('CACHE_TIME_SLIDER', 60*60*1);
define('CACHE_TIME_MENU', 60*60*2);

//$connArray = explode(";", getenv('MYSQLCONNSTR_MyClientDB'));

//$glb["db_host"]         = "13.94.255.147";
$glb["db_host"]         = getenv('DB_HOST');
$glb["db_basename"]     = getenv('DB_NAME');
$glb["db_user"]         = getenv('USER_NAME');
$glb["db_password"]     = getenv('DB_PASSWORD');
    
$glb["session_id"]          = $session_id;
$glb["teg_robots"]          = false;
$glb["sys_mail"]            = $global_meil              = "sales@makewear.com.ua";
$glb["mail_host"]           = str_replace("www.", "", $_SERVER['HTTP_HOST']);
$glb["request_url_encode"]  = urldecode($request_url);
$glb["request_url"]         = urldecode($request_url);
$glb["domain"]             = $glb["gallery_domen"]      = $gallery_domen             = $_SERVER['HTTP_HOST'];
$glb["dom_mail"]            = str_replace("www.", "", $_SERVER['HTTP_HOST']);

echo '<title>' . $glb["db_host"] . '</title>'; 
/*   
  $dbcnx = mysql_connect($dblocation, $dbuser, $dbpasswd);    
  if (!$dbcnx)    
  {    
    echo "<p>К сожалению, не доступен сервер mySQL</p>";    
    exit();    
  }    
  if (!mysql_select_db($dbname,$dbcnx) )    
  {    
    echo "<p>К сожалению, не доступна база данных</p>";    
    exit();    
  }    
  $ver = mysql_query("SELECT VERSION()");    
  if(!$ver)    
  {    
    echo "<p>Ошибка в запросе</p>";    
    exit();    
  }    
  echo mysql_result($ver, 0); 
  */  
