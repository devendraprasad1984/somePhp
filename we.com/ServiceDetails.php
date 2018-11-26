<?php
//session_start();
require_once 'database.php';
require_once 'js/emailer.php';
$objMail = new Mailer();
$cnt = new content();
$objSer = new clsGetServiceDetails();
//empty the array at any action other than submit at plan wed
echo "<script>forEmail=[]; forEmailComp=[]; </script>";



class XML {

    public function readXML($tag) {
        $content = "";
        $xmlFileName = "mainxml.xml";
        $xml = simplexml_load_file($xmlFileName);
        foreach ($xml->children() as $body => $tags) {
            if (strtolower($tag) == "header")
                $content = $tags->header;
            if (strtolower($tag) == "footer")
                $content = $tags->footer;
            if (strtolower($tag) == "left")
                $content = $tags->left;
                //call the mysql database and get the category list from the database
            if (strtolower($tag) == "center")
                $content = $tags->center;
            if (strtolower($tag) == "right")
                $content = $tags->right;
            break;
        }
    return $content;
    }

    public function readContent($id) {
        $content = "";
        $xmlFileName = "contents.xml";
        $xml = simplexml_load_file($xmlFileName);
        foreach ($xml as $tag) {
            if ($tag->attributes()->id == $id) {
                $content = $tag;
            }
        }
        return $content;
    }

}

Class genericObjects {
//    public function __construct() {
//        $filename = "doc/ip.txt";
//        //if(!isset($_SESSION["visit"])){
//        $ip_addr = $this->getIP();
//        $current_time = date('d-M-Y H:i:s');
//        $strData = "$ip_addr|$current_time";
//        file_put_contents($filename, $strData . "\n", FILE_APPEND);
//        $_SESSION["visit"] = count(file($filename));
//        //}
//        echo "<p class='ca subheading' style='font-size:28pt;'>Total Visits:" . $_SESSION["visit"] . " </p>";
//    }

    public function getIP() {
        return $_SERVER['REMOTE_ADDR'];
    }

    public function writeToFile($filename, $strData) {
        $f = fopen($filename, "a+");
        fwrite($f, $strData . "\n");
        fclose($f);
    }

}

Class getCopyrightInfo {
    public function __construct() {
        $var_company_name = "we.com";
        $var_copy_right = "(C) " . $var_company_name . "(" . date("Y") . "), All rights reserved.";
        $var_powered_by = "<a target=_blank href=\"http://www.SonicAgeIndia.co.in\">SonicAgeIndia.co.in</a>";
        $strInfo = $var_copy_right . ", " . $var_powered_by;
        echo "<p class='ra' style='font-size:7pt;'>$strInfo</p>";
    }
}

class content {

    public $xml;

    function __construct() {
        $xmlFileName = "contents.xml";
        $this->xml = simplexml_load_file($xmlFileName);
    }

    function page($id) {
        $cont = "";
        foreach ($this->xml as $tag) {
            if ($tag->attributes()->id == $id) {
                $cont = $tag;
                break;
            }
        }
        return $cont;
    }

}

class clsGetServiceDetails {

    public function getServiceDetails($path) {
        $data = "";
        $configPath = $path . "/config.xml";
        $data = $this->readConfig($configPath);
        return $data;
    }

    public function getRegistration($companyId) {
        //make the registration page and make sure it is written back to servicePanel.
        $data="";
        $categ=""; $mainIcon="services/wp";
        $db=new database();
        $rs=$db->runQur("select categName, folderAlias from category order by sortorder");
        $cols=mysql_num_fields($rs);
        while (($row = mysql_fetch_array($rs)) != null) {
        $categ.="<option id='$row[1]'>$row[0] [".$row[1]."]</option>";
        }
        $data.= "<form name='frmReg' id='frmReg' >";
        $data.= "<table>";
        $data.="<tr><td colspan=2 class='subheading la'>Your we.com Registration...</td></tr>";
        $data.="<tr class='hide'><td>CompanyId</td><td><input type=text width=50% id=tCompanyId name=tCompanyId value='".$companyId."' /></td></tr>";
        
        if($companyId>0){
            $sql="select id,name,displayName,repName,repPhone,startUpDate,category,userName,password,email,mainIcon from registration where id=".$companyId;
            $rs=$db->runQur($sql);
            if(mysql_numrows($rs)!=0){
                $row=mysql_fetch_assoc($rs);
                $mainIcon=$row["mainIcon"];
                $data.="<tr class='hide'><td>myPath</td> <td><input type=text width=50% id=tMyPath name=tMyPath value='".$mainIcon."' /></td></tr>";
                $data.="<tr><td class='label'>Company Name</td> <td><input type=text width=50% id=tName name=tName value='".$row["displayName"]."' /></td></tr>";
                $data.="<tr><td class='label'>Representative Name</td> <td><input type=text width=50% id=tRepName name=tRepName value='".$row["repName"]."' /></td></tr>";
                $data.="<tr><td class='label'>Representative Phone</td> <td><input type=text width=50% id=tRepPhone name=tRepPhone  value='".$row["repPhone"]."' /></td></tr>";
                $data.="<tr><td class='label'>Startup Date</td> <td><input type=date width=50% id=tStartupDate name=tStartupDate value='".$row["startUpDate"]."' /></td></tr>";
                $data.="<tr><td class='label'>Choose Category</td> <td><select id='categSel' name='categSel'><option selected>Miscellaneous Vendors [msc]</option>".$categ."</select></td></tr>";
                $data.="<tr><td class='label'>Email</td> <td><input type=email width=50% id=tEmail name=tEmail  value='".$row["email"]."'/></td></tr>";
                $data.="<tr><td class='label'>UserName</td> <td><input type=text width=50% id=tUserName name=tUserName  value='".$row["userName"]."'/></td></tr>";
                $data.="<tr><td class='label'>Password</td> <td><input type=password width=50% id=tPassword name=tPassword  value='".$row["password"]."'/></td></tr>";
            }
        }elseif($companyId==0){
            $data.="<tr><td class='label'>Company Name</td> <td><input type=text width=50% id=tName name=tName /></td></tr>";
            $data.="<tr><td class='label'>Representative Name</td> <td><input type=text width=50% id=tRepName name=tRepName /></td></tr>";
            $data.="<tr><td class='label'>Representative Phone</td> <td><input type=text width=50% id=tRepPhone name=tRepPhone /></td></tr>";
            $data.="<tr><td class='label'>Startup Date</td> <td><input type=date width=50% id=tStartupDate name=tStartupDate /></td></tr>";
            $data.="<tr><td class='label'>Choose Category</td> <td><select id='categSel' name='categSel'><option selected>Miscellaneous Vendors [msc]</option>".$categ."</select></td></tr>";
            $data.="<tr><td class='label'>Email</td> <td><input type=email width=50% id=tEmail name=tEmail /></td></tr>";
            $data.="<tr><td class='label'>UserName</td> <td><input type=text width=50% id=tUserName name=tUserName /></td></tr>";
            $data.="<tr><td class='label'>Password</td> <td><input type=password width=50% id=tPassword name=tPassword /></td></tr>";
            $mainIcon="services/wp";
        }
        $data.="<tr><td><input type='button' id='cmdSubmit' value='Submit' style='width: 60px;' onclick=\"submitRegForm('#frmReg');\"/>&nbsp;";
        $data.="</td> <td></td></tr>";
        $data.="</table>";
        $data.="</form>";
        //main icon upload
        $data.="<form id=\"frmUpload\" method=post action=\"uploadN.php\"  enctype=\"multipart/form-data\" style='display: block;' target='upload_target' >";
        $data.="<table>";
        $data.="<tr><td><input type=text id='profileBasepath' name='profileBasepath' value='".$mainIcon."' class='hide'  /></td></tr>";
        $data.="<tr><td><input type=file id='upload' name='upload[]' accept='.jpg;.png;.gif' required /> 
        <td><input type='submit' value='upload' /></td></tr>";
        $data.="<table>";
        $data.="</form>";
        $data.="<div id='regStatus' class='msg la'></div>";       
        $data.="<iframe id='upload_target' style=\"width:100%;height:30px;border:1px; overflow: auto; \"></iframe>";
        return $data;
    }
    
    public function getProfile($companyId) {
        //make the registration page and make sure it is written back to servicePanel.
        $data="";
        $data.= "<form name=frmProfile id=frmProfile>";
        $data.= "<table>";
        $data.="<tr><td colspan=2 class='subheading la'>Your we.com Profile Setup...</td></tr>";
        $data.="<tr class='hide'><td>CompanyId</td><td><input type=text width=50% id=tCompanyId name=tCompanyId value='".$companyId."' class='hide' /></td></tr>";
        
        $db=new database();
        $sql="Select id,website,facebookPage,twitterPage,linkedInPage,keywords,contactInfo,overallCost,displayData,mainIcon from registration where id=$companyId";
        $rs=$db->runQur($sql);
        if(mysql_numrows($rs)!=0){
            $row=mysql_fetch_assoc($rs);
            $data.="<tr><td class='label'>Website</td> <td><input type=text width=50% id='tWebsite' name='tWebsite' value='".$row["website"]."' /></td></tr>";
            $data.="<tr><td class='label'>Facebook Page</td> <td><input type=text width=50% id='tFacebookPage' name='tFacebookPage' value='".$row["facebookPage"]."' /></td></tr>";
            $data.="<tr><td class='label'>LinkedIn Page</td> <td><input type=text width=50% id='tLinkedInPage' name='tLinkedInPage' value='".$row["linkedInPage"]."'  /></td></tr>";
            $data.="<tr><td class='label'>Twitter Page</td> <td><input type=text width=50% id='tTwitterPage' name='tTwitterPage' value='".$row["twitterPage"]."'  /></td></tr>";
            $data.="<tr><td class='label'>Search Keywords</td> <td><input type=text width=50% id='tKeywords' name='tKeywords' value='".$row["keywords"]."'  /></td></tr>";
            $data.="<tr><td class='label'>Contact Info</td> <td><input type=text width=50% id='tContactInfo' name='tContactInfo' value='".$row["contactInfo"]."'  /></td></tr>";
            $data.="<tr><td class='label'>Various Info</td> <td><textarea rows=5 cols=50 id='tDisplayData' name=tDisplayData >".$row["displayData"]."</textarea></td></tr>";
            $data.="<tr><td class='label'>Your Overall Cost</td> <td><input type=text width=50% id='tOverallCost' name='tOverallCost' value='".$row["overallCost"]."'  /></td></tr>";
        }
        $data.="<tr><td><input type='button' id='cmdSubmit' value='Submit' style='width: 60px;' onclick=\"submitProfile('#frmProfile');\"/>&nbsp;";
        $data.="</table>";
        $data.="</form>";

        //multiple file uploads for image scroller in the detail box
        $data.="<form id=\"frmUpload\" method=post action=\"uploadN.php\"  enctype=\"multipart/form-data\" style='display: block;' target='upload_target' >";
        $data.="<table>";
        $data.="<tr><td><input type=text id='profileBasepath' name='profileBasepath' value='".$row["mainIcon"]."' class='hide'  /></td></tr>";
        $data.="<tr><td><input type='file' id='uploadArr' name='uploadArr[]' accept='.jpg;.png;.gif' required='true' multiple='true' onchange='listMultipleUploadFile();' /> 
        <td><input type='submit' value='upload' /></td></tr>";
        $data.="<table>";
        $data.="</form>";
        $data.="<div id='regStatus' class='msg la'></div>";
        $data.="<ul id='fileList'></ul>";
        $data.="<input type='button' value='Deactivate Me' id='deActiveProfile' onClick='deActivateMe(".$companyId.");' style='width: 150px;' >";
        $data.="<iframe id='upload_target' style=\"width:100%;height:30px;border:1px; overflow: auto; \"></iframe>";
        return $data;
    }
    
     public function getLogin() {
        //make the registration page and make sure it is written back to servicePanel.
        $data="";
        $data.="<form name=frmLogin id=frmLogin>";
        $data.="<table style='width: 300px;'>";
        $data.="<tr><td colspan=2 class='subheading la'>Your we.com Login...</td></tr>";

        $data.="<tr><td><input placeholder='UserName' type='text' id='tUserName' name='tUserName' /></td></tr>";
        $data.="<tr><td><input placeholder='Password'  type='password' id='tPassword' name='tPassword' /></td></tr>";
        $data.="<tr><td><input type='button' id='cmdLogin' value='Login' style='width: 60px;' onclick=\"submitLogin('#frmLogin');\"/>&nbsp;";
        $data.="<input type='reset' id='cmdReset' value='Reset' style='width: 60px;' />";
        $data.="</table>";
        $data.="</form>";
        $data.="<div id='regStatus' class='msg la'></div>";
        return $data;
    }
    
    public function getVisitor() {
        //make the page available to visitor only for the first time of the visit.
        $oIP=new genericObjects();
        $data="";
        $data.= "<form name='frmVisitor' id='frmVisitor'>";
        $data.= "<table style='width: 300px;'>";
        $data.="<tr><td colspan=2 class='subheading la'>Who Are You? Tell Us...</td></tr>";
        $data.="<tr><td>Your Unique ID is ".session_id()."</td></tr>";
        $data.="<tr><td><input type=text id=tIP name=tIP value='".$oIP->getIP()."' /></td></tr>";
        $data.="<tr><td><input type=text id=tName name=tName placeholder='Your Name' /></td></tr>";
        $data.="<tr><td><input type=text id=tMobile name=tMobile placeholder='Your Mobile Number' /></td></tr>";
        $data.="<tr><td><input type=text id=tEmail name=tEmail placeholder='Your Email ID'/></td></tr>";
        $data.="<tr><td><input type=text id=tCountry name=tCountry placeholder='Your City/Country' Value='Delhi/India'/></td></tr>";
        $data.="<tr><td><input type='button' id='cmdVisitSubmit' value='Next' style='width: 60px;' onclick=\"submitVisitorForm('#frmVisitor');\"/>&nbsp;";
        $data.="<input type='reset' id='cmdReset' value='Reset' style='width: 60px;' />&nbsp;";
        $data.="</table>";
        $data.="</form>";
        $data.="<div id='regStatus' class='msg la'></div>";
        $data.="<script>setTopPanel();showPanel('servicePanel');</script>";

        return $data;
    }
    
    public function getMyDetail($companyId) {
        $data = "";
        $data.="<table cellspacing=0 cellpadding=0 style='table-layout: fixed;' >";
        $db=new database();
        $sql="Select displayName, sliderImages, displayData, contactInfo, mainIcon from registration where id=$companyId";
        $rs=$db->runQur($sql);
        if(mysql_numrows($rs)!=0){
            $row=mysql_fetch_assoc($rs);
            $imgPath=$row["mainIcon"];
            $stl="style='width:100px; height: 100px;'";
            $sliders="<div class='myFixBox'>";
            $sliders.="<img src='".$imgPath."/0.jpg' $stl />&nbsp;";
            $sliders.="<img src='".$imgPath."/1.jpg' $stl />&nbsp;";
			$sliders.="<img src='".$imgPath."/2.jpg' $stl />&nbsp;";
			$sliders.="<img src='".$imgPath."/3.jpg' $stl />&nbsp;";
			$sliders.="<img src='".$imgPath."/4.jpg' $stl />&nbsp;";
            $sliders.="</div>";
            
            $data.="<tr><td class='heading pt bg' onClick=\"searchOverGoogle('".$row['displayName']."');\">".$row['displayName']."</td><tr>";
            $data.="<tr style='height: 5em;'><td width=30%>".$sliders."</td></tr>";
            $data.="<tr style='height: 20em;'><td class='serviceData'>".$row['displayData']."</td><tr>";
            $data.="<tr><td class='bg'>Contact Me: ".$row['contactInfo']."</td><tr>";
        }
        $data.="</table>";
        return $data;
    }
}

//**************************************************************
//request from the service ID would come here for inner display of that service
if (isset($_REQUEST['serPath'])) {
    try {
        $serPath = $_REQUEST['serPath'];
        $data = $objSer->getServiceDetails($serPath);
        echo $data;
    } catch (Exception $e) {
        echo "error: " . $e->getMessage() . "<br/>" . $e->getTraceAsString();
    }
} elseif (isset($_REQUEST['getReg'])) {
    try {
        $getReg = $_REQUEST['getReg'];
        $companyId = $_REQUEST['companyId'];
        $data = $objSer->getRegistration($companyId);
        echo $data;
    } catch (Exception $e) {
        echo "error: " . $e->getMessage() . "<br/>" . $e->getTraceAsString();
    }
} elseif (isset($_REQUEST['getProf'])) {
    try {
        $getReg = $_REQUEST['getProf'];
        $companyId = $_REQUEST['companyId'];
        $data = $objSer->getProfile($companyId);
        echo $data;
    } catch (Exception $e) {
        echo "error: " . $e->getMessage() . "<br/>" . $e->getTraceAsString();
    }
} elseif (isset($_REQUEST['getLogin'])) {
    try {
        $getReg = $_REQUEST['getLogin'];
        $data = $objSer->getLogin();
        echo $data;
    } catch (Exception $e) {
        echo "error: " . $e->getMessage() . "<br/>" . $e->getTraceAsString();        }
}  elseif (isset($_REQUEST['getVisitor'])) {
    try {
        if($_SESSION["ipFlag"]==1){
            $getVis = $_REQUEST['getVisitor'];
            $data = $objSer->getVisitor();
            echo $data;
        }else{
            echo "<script>closePanel();</script>";
        }
    } catch (Exception $e) {
        echo "error: " . $e->getMessage() . "<br/>" . $e->getTraceAsString();        }
} elseif (isset($_REQUEST['getLogout'])) {
    try {
        $_SESSION["loginId"]=null;
        $_SESSION["loginName"]=null;
        $data="<script>document.getElementById('profileLink').style.display='none';";
        $data.="document.getElementById('companyId').innerHTML='';";
        $data.="document.getElementById('tdLogin').className='show click';";
        $data.="document.getElementById('tdLogout').className='hide click';";
        $data.="document.getElementById('loginName').innerHTML='Welcome, Guest';</script>";
        echo $data;
    } catch (Exception $e) {
        echo "error: " . $e->getMessage() . "<br/>" . $e->getTraceAsString();
    }
}  elseif (isset($_REQUEST['myDetail'])) {
    try {
        $id = $_REQUEST['id'];
        $data = $objSer->getMyDetail($id);
        echo $data;
    } catch (Exception $e) {
        echo "error: " . $e->getMessage() . "<br/>" . $e->getTraceAsString();
    }
} elseif (isset($_REQUEST['srch']) && $_REQUEST['srch']==1 && isset($_REQUEST['data'])) {
    try {
        $searchData =$_REQUEST['data'];
        $data = $objSer->getSearchData($searchData);
        echo $data;
    } catch (Exception $e) {
        echo "error: " . $e->getMessage() . "<br/>" . $e->getTraceAsString();
    }
 }elseif (isset($_REQUEST['func'])) {
    try {
        $data="";
        $param=null;
        $func =$_REQUEST['func'];
        if (function_exists($func)){
            if(isset($param))
                $data=call_user_func($func,array($param));
            else
                $data=call_user_func($func);
        }
        echo $data;
    } catch (Exception $e) {
        echo "error: " . $e->getMessage() . "<br/>" . $e->getTraceAsString();
    }
}elseif (isset($_POST['planWedEmail'])) {
    try {
        //print_r($_POST);
        $objMail->toEmail = $_POST['emailPwGuest'];
        $objMail->replyEmail = $objMail->toEmail;
        $objMail->contact_name = "we.com";
        $objMail->contact_subject = "your we.com selection";
        $objMail->emailData=$_POST['emailContents'];
        //print_r($objMail);
        $content= $objMail->sendMail();
        echo $content;
    } catch (Exception $e) {
        echo "error: " . $e->getMessage() . "<br/>" . $e->getTraceAsString();
    }
}elseif (isset($_REQUEST['mail'])) {
    $content = "";
    $objMail->emailData = "";
    $objMail->contact_email = $_REQUEST['temail'];
    $objMail->contact_name = $_REQUEST['tname'];
    $objMail->contact_subject = $_REQUEST['tsub'];
    $objMail->emailData.="<table>";
    $objMail->emailData.="<tr><td>Name: " . $_REQUEST['tname'] . "</td></tr>";
    $objMail->emailData.="<tr><td>Email: " . $_REQUEST['temail'] . "</td></tr>";
    $objMail->emailData.="<tr><td>Mobile: " . $_REQUEST['tmob'] . "</td></tr>";
    $objMail->emailData.="<tr><td>Subject: " . $_REQUEST['tsub'] . "</td></tr>";
    $objMail->emailData.="<tr><td>Query: <pre style='font-size: 12pt;'>" . $_REQUEST['tmsg'] . "</pre></td></tr>";
    $objMail->emailData.="</table>";
    $content.= $objMail->sendMail();
    echo "$content";
}elseif(isset($_REQUEST['xmlLoad'])){
    try {
        $id = $_REQUEST['xmlLoad'];
        $content = $cnt->page($id);
        echo $content;
    } catch (Exception $e) {
    echo "error: " . $e->getMessage() . "<br/>" . $e->getTraceAsString();
}

}

echo "<script>unsetText();</script>";
?>

