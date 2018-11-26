<?php
require_once './emailer.php';
$objMail = new Mailer();
//$objSer = new clsGetServiceDetails();

//echo "<script>forEmail=[]; forEmailComp=[]; </script>";
Class genericObjects
{
    public function getIP()
    {
        return $_SERVER['REMOTE_ADDR'];
    }

    public function writeToFile($filename, $strData)
    {
        $f = fopen($filename, "a+");
        fwrite($f, $strData . "\n");
        fclose($f);
    }

}

//
//class clsGetServiceDetails{
//    public function getServiceDetails($path)
//    {
//        $data = "";
//        $configPath = "config.xml";
//        $data = $this->readConfig($configPath);
//        return $data;
//    }
//}

//**************************************************************
if (isset($_REQUEST['test'])) {
    $content = "config_gmail";
//    foreach ($_SERVER as $key => $value) {
//        $content .= "<tr><td style='font-weight: bolder'>$key</td><td>$value</td></tr>";
//    }
    $host="http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
    $content.="->".$host;
    if (strpos($host,'localhost')<=0) {
        $content.="test.....";
        $content .= "config.xml";
    }
    echo "$content";
} else if (isset($_REQUEST['mail'])) {
    $content = "";
    $content .= "<div style='background-color:#28a745; text-align: center; font-size: 14pt;font-weight: bolder'>Query From Web</div>";
    $content .= "<table width='100%' cellpadding='2' cellspacing='2'>";
    foreach ($_REQUEST as $key => $value) {
        if ($key != 'mail')
            $content .= "<tr><td style='font-weight: bolder'>$key</td><td>$value</td></tr>";
    }
    $content .= "</table>";
    $objMail->emailData = $content;
    $msg = $objMail->sendMail();
    echo "$msg";
}

?>

