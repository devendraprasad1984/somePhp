<?php
//session_start();
require_once 'emailer.php';
$objMail = new Mailer();
$objSer = new genericObjects();
$users = json_decode('[
{"username":"user1","password":"pwd1"}
,{"username":"user2","password":"pwd2"}
,{"username":"user3","password":"pwd3"}
,{"username":"root","password":"admin"}
]', true);

// A user-defined error handler function

//function myErrorHandler($exception) {
//    $objSer->writeLog("error:".$exception->getMessage().", trace: ".$exception->getTraceAsString().", line: ".$exception->getLine());
//}
// Set user-defined error handler function
//set_error_handler("myErrorHandler");

Class genericObjects
{
    public $div2LoadIn = "";
    public $counter = 0;
    public $baseDataPath = '../data/';


    public function __construct()
    {
        @set_exception_handler(array($this, 'myErrorHandler'));
    }

    public function myErrorHandler($exception)
    {
        $this->writeLog($exception->getMessage() . ", trace: " . $exception->getTraceAsString() . ", line: " . $exception->getLine());
//        exit(-1);
    }

    public function getIP()
    {
        return $_SERVER['REMOTE_ADDR'];
    }

    public function writeLog($someData)
    {
        $host = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $host .= ", host IP: " . $_SERVER['HTTP_CLIENT_IP'] . ", " . $_SERVER['HTTP_X_FORWARDED_FOR'];
//        $host.= explode(',', $_SERVER[$header]);
        $filename = $this->baseDataPath . "logging.log";
        $strData = "User: " . $host . ' - ' . date("F j, Y, g:i a") . PHP_EOL .
            "info: " . $someData . PHP_EOL .
            "-------------------------" . PHP_EOL;
        $f = fopen($filename, "a");
        fwrite($f, $strData . "\n");
        fclose($f);
    }

    public function readLog()
    {
        return $this->readFileContents($this->baseDataPath, "logging.log");
    }

    public function writeToFile($filename, $strData)
    {
        $sName = $this->baseDataPath . $filename;
        $f = fopen($sName, "w");
        fwrite($f, $strData . "\n");
        fclose($f);
    }

    public function deleteFile($filename)
    {
        $sName = $this->baseDataPath . $filename;
        $newName = str_replace(".txt", ".del", $sName);
        $check = rename("$sName", "$newName");
        $msg = "resource deleted successfully";
        if ($check === false)
            $msg = "there is some error,please contact admin";
        return $msg;
    }

    public function readFolders($folderPath, $withFileContent)
    {
        $sName = $this->baseDataPath . $folderPath;
        $searchString = "";
        if (isset($_REQUEST['getDataFile']))
            $spath = $_REQUEST['getDataFile'];
        if (isset($_REQUEST['search']))
            $searchString = $_REQUEST['search'];
        $host = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'];
//        $dirs = array_slice(preg_grep('~\.(txt)$~', scandir($folderPath)), 2);
        $dirs = array_slice(scandir($sName), 2);
//        print_r($dirs);
        $data = "";
        $allData = "";
        $this->counter += 1;
        $myCurId = "myCurSelect" . $this->counter;
        if ($withFileContent === "option") {
            $allData = "<select id='$myCurId' onchange=\"getServerData(this.value,'$this->div2LoadIn')\">";
            $allData .= "<option value='$host?fileRead=none'>Choose.....</option>";
        }
        foreach ($dirs as $key => $value) {
            $xPath = $folderPath . "/" . $value;
//            echo "<br/>path: ".$xPath;
            if ((strpos($value, ".txt") === false && $spath !== "data") || (strpos($value, ".log") > 0 || $value === "slider")) {
//                echo "skipping: $value";
                continue;
            }
            $label = str_replace(".txt", "", $value);

            if ($withFileContent === "yes") {
                $data = "<div class='box' style='margin-top: 4px;'>";
                if ($this->div2LoadIn != "")
                    $data .= "<div style='font-weight: bolder; font-size: 15pt;'>$label</div>";
                $data .= "<div>" . $this->readFileContents($folderPath, $value) . "</div>";
                $data .= "</div>";
            } elseif ($withFileContent === "anchor") {
                $data = "<span><a class='btn' href='#' onclick=\"getServerData('$host?fileRead=$xPath','$this->div2LoadIn','$label')\">$label</a></span>";
            } elseif ($withFileContent === "option") {
                if ($spath === "data") {
                    $data = "<option value='$host?fileRead=$xPath' class='font-weight-bold bg-info text-white' style='font-size: 13pt;'><div>$label</div></option>";
                } else {
                    $data = "<option value='$host?fileRead=$xPath' class='font-weight-bold' style='font-size: 11pt;'><div>$label</div></option>";
                }
                $xPath = str_replace("//", "/", $xPath);
                $files = array_slice(scandir($this->baseDataPath . $value), 2);
//                print_r($files);
                foreach ($files as $k1 => $v1) {
                    if (strpos(strtolower($v1), ".txt") > 0 && $spath === "data") {
                        if ($searchString !== "") {
                            if (strpos(strtolower("*$v1"), $searchString) > 0)
                                $data .= "<option value='$host?fileRead=$xPath/$v1' style='font-size: 9pt;'>*" . str_replace(".txt", "", $v1) . "</option>";
                        } else {
                            $data .= "<option value='$host?fileRead=$xPath/$v1' style='font-size: 9pt;'>*" . str_replace(".txt", "", $v1) . "</option>";
                        }
                    }
                }
            }
            $allData .= $data;
        }
        if ($withFileContent === "option") {
            $allData .= "</select>";
        }
        echo html_entity_decode($allData);
        return html_entity_decode($allData);
    }

    public function readFileContents($filePath, $fileName)
    {
        $context = stream_context_create(
            array(
                "http" => array(
                    "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
                )
            )
        );
        $sName = $this->baseDataPath . $filePath;
        if (strpos($sName, ".txt") > 0) {
            $absPath = $sName;
        } else {
            $absPath = $sName . "/" . $fileName;
        }
        $data = file_get_contents("$absPath", false, $context);
//        $data="";
//        foreach(glob("$absPath") as $file) {
//            foreach(file($file) as $line) {
//                $data.=$line;
//            }
//        }
        return $data;
    }

    public function getSliderInfo()
    {
        $arr = array();
        $sliderPath = $this->baseDataPath . "slider/";
        $imgArr = array_slice(scandir($sliderPath), 2);
        foreach ($imgArr as $key => $value) {
            array_push($arr, $sliderPath . $value);
        }
        return $arr;
    }

}

//**************************************************************
if (isset($_REQUEST['getDataFile']) && isset($_REQUEST['getType'])) {
    try {
        $objSer->div2LoadIn = $_REQUEST['toload'];
        $sPath = $_REQUEST['getDataFile'];
        if (strtolower($_REQUEST['getDataFile']) !== "none") {
            if ($sPath === "data") {
                $sPath = "";
                $objSer->readFolders($sPath, $_REQUEST['getType']);
                exit();
            }
            $objSer->readFolders($sPath, $_REQUEST['getType']);
        }
    } catch (Exception $ex) {
        throw new Exception($ex);
    }
} else if (isset($_REQUEST['saveData'])) {
    try {
        $data = "";
//    $data.=$_POST['tag']."->".$_POST['data'];
        $fileName = $_POST['tag'];
        $data2Save = $_POST['data'];
        if ($data2Save === 2) {
            $data2Save = strip_tags($data2Save);
        }
        $data = $objSer->writeToFile($fileName, $data2Save);
        $objSer->writeLog($fileName . " - has been saved");
        echo $data;
    } catch (Exception $ex) {
        throw new Exception($ex);
    }
} else if (isset($_REQUEST['fileRead'])) {
    try {
        $filePath = $_REQUEST['fileRead'];
        $data = $objSer->readFileContents($filePath, '');
        $data = "<pre>$data</pre>";
        echo $data;
    } catch (Exception $ex) {
        throw new Exception($ex);
    }
} else if (isset($_REQUEST['fileDelete'])) {
    try {
        $filePath = $_REQUEST['fileDelete'];
        $data = $objSer->deleteFile($filePath);
        $data = "<pre>$data</pre>";
        $objSer->writeLog($filePath . " - has been deleted");
        echo $data;
    } catch (Exception $ex) {
        throw new Exception($ex);
    }
} else if (isset($_REQUEST['mail'])) {
    try {
        $content = "";
        $content .= "<div style='background-color:#28a745; text-align: center; font-size: 12pt;font-weight: bolder'>Query From Web</div>";
        $content .= "<table width='100%' cellpadding='2' cellspacing='2'>";
        foreach ($_REQUEST as $key => $value) {
            if ($key != 'mail')
                $content .= "<tr><td style='font-weight: bolder'>$key</td><td>$value</td></tr>";
        }
        $content .= "</table>";
        $objMail->emailData = $content;
        $msg = $objMail->sendMail();
        echo $msg;
        throw new Exception("mail: " . $msg);
    } catch (Exception $ex) {
        throw new Exception($ex);
    }
} else if (isset($_REQUEST['login'])) {
    try {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $content = 0;
        foreach ($users as $key => $value) {
            if ($value["username"] === $username && $value["password"] === $password) {
                $content = 1;
                session_start();
                $_SESSION['lol'] = 1;
                break;
            }
        }
        echo $content;
    } catch (Exception $ex) {
        throw new Exception($ex);
    }
} else if (isset($_REQUEST['logout'])) {
    try {
        $content = 0;
        $_SESSION['lol'] = 0;
        session_unset();
        session_destroy();
        echo $content;
    } catch (Exception $ex) {
        throw new Exception($ex);
    }
} else if (isset($_REQUEST['forgotPassword'])) {
    try {
        $content = "";
        $content .= "<div style='background-color:#28a745; text-align: center; font-size: 14pt;font-weight: bolder'>Your login details</div>";
        foreach ($users as $key => $value) {
            $content .= "<div style='font-weight: bolder'>" . $value["username"] . "<span style='color: #1c7430'>->" . $value["password"] . "</span></div>";
        }
        $objMail->emailData = $content;
        $msg = $objMail->sendMail();
        if (strpos($msg, "err:") > 0) {
            echo $msg;
            throw new Exception($msg);
        } else {
            echo "forgot password mail has been sent to your registered email id";
            throw new Exception($msg);
        }
    } catch (Exception $ex) {
        throw new Exception($ex);
    }
} else if (isset($_REQUEST['slider'])) {
    try {
        $content = $objSer->getSliderInfo();
        echo implode(";", $content);
    } catch (Exception $ex) {
        throw new Exception($ex);
    }
} else if (isset($_REQUEST['manageSlider'])) {
    try {
        if ($_REQUEST['manageSlider'] === "1") {
            $content = $objSer->getSliderInfo();
            echo implode(";", $content);
        } else if ($_REQUEST['manageSlider'] === "add") {
            $baseFileName = basename($_FILES["file2upload"]["name"]);
            $tmpFileName = $_FILES["file2upload"]["tmp_name"];
            $savePath = $objSer->baseDataPath . "slider/$baseFileName";
            $imageFileType = strtolower(pathinfo($savePath, PATHINFO_EXTENSION));
            $check = getimagesize($tmpFileName);
            $msg = "some info: $check,  $baseFileName , $tmpFileName , $savePath , $imageFileType ";
            if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
                $msg .= "$imageFileType - Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                $uploadOk = 0;
            }
            if ($check !== false) {
                $msg .= "File is an image - " . $check["mime"] . ".";
                $msg .= "<br/>saved slider - $baseFileName - $tmpFileName";
                if (move_uploaded_file($tmpFileName, $savePath)) {
                    $msg = "The file " . $baseFileName . " has been uploaded.";
                    $uploadOk = 1;
                } else {
                    $msg .= "Sorry, there was an error uploading your file.";
                    $uploadOk = 0;
                }
            } else {
                $msg .= "File is not an image.";
                $uploadOk = 0;
            }
            echo $msg;
        } else if ($_REQUEST['manageSlider'] === "del") {
            $fn=$_REQUEST['filename'];
            $delFile=$objSer->baseDataPath."slider/".$fn;
            if(unlink($delFile)){
                $msg = "$fn is deleted";
            }else{
                $msg = "error deleting file - $fn";
            }
            echo $msg;
        }
    } catch (Exception $ex) {
        throw new Exception($ex);
    }
} else if (isset($_REQUEST['logging'])) {
    try {
        echo "<pre>" . $objSer->readLog() . "</pre>";
    } catch (Exception $ex) {
        throw new Exception($ex);
    }
} else if (isset($_REQUEST['sessionCheck'])) {
    try {
        echo "error in check";
    } catch (Exception $ex) {
        throw new Exception($ex);
    }
}
ob_implicit_flush(true);
die();
exit();

?>


