<?php
session_start();
require_once 'ServiceDetails.php';
$xml = new XML();
?>


<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <TITLE>Wedding House (All Wedding Query Resolution Under One Roof</TITLE>
    <meta name="keywords" content="sonicageindia.co.in,wedding,caterer,jeweller,gift,tent,planner,hotel,stay,hospitality,travel,guest" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="js/jQuery.js"></script>
    <script type="text/javascript" src="js/jCommon.js"></script>
    <link href="css/mainCSS.css" rel="stylesheet" type="text/css" />

    <script type="text/javascript">
        window.onkeyup = function(event) {
            if (event.keyCode == 27) {
                closePanel();
            }
        }

        function getSearch(e) {
            if (e.keyCode == 13) {
                searchText();
            }
        }
    </script>

<!--        <script>(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id))
return;
js = d.createElement(s);
js.id = id;
js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>-->

</head>
    <!--<div id="fb-root"></div>-->
<body  id="mainBox" onload="loadHome();loadVisitor();">
<div id="tempDiv" class="hide pagebox" style="position: fixed;top:0;left:0;width: 100%;height:100%;z-index:2; background-Color: black; opacity: 0.9;">
    <div class="subheading ra pt" onclick="closePanel();">CLOSE</div>
</div>
    <table style="float:top;">
        <tr><td colspan="3" class="top"><?php echo $xml->readXML("header");
        //print_r($_SESSION);
        if($_SESSION["ipFlag"]==0){
            $_SESSION["ipFlag"]=1;
            echo "<script>sessionFlag=1;</script>";
        }
        if(isset($_SESSION["loginId"])){
            $data="<script>document.getElementById('profileLink').style.display='block';";
            $data.="document.getElementById('companyId').innerHTML='".$_SESSION["loginId"]."';";
            $data.="document.getElementById('loginName').innerHTML='Wecome, ".$_SESSION["loginName"]."';";
            $data.="document.getElementById('tdLogin').className='hide';";
            $data.="document.getElementById('tdLogout').className='show';";
            $data.="</script>";
            echo $data;
        }
         
         ?></td></tr>
        <tr>
            <td id="myLeftBox" style='width:15%;' class="top"><?php echo $xml->readXML("left"); ?></td>
            <td style='width: 70%;'  class="top centerBox"><?php echo $xml->readXML("center"); ?></td>
            <td style='width: 15%;'  class="top"><?php echo $xml->readXML("right"); ?></td>
        </tr>
    </table>
    <table style="float:bottom;">
        <tr><td colspan="2"><?php echo $xml->readXML("footer"); ?></td></tr>
        <tr><td class="top"><?php new getCopyrightInfo(); ?></td></tr>
    </table>
</body>
</html>
