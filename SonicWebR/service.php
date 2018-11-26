<?php

$main = new mainServiceClass();
$id = $_REQUEST["id"];
$br = $_REQUEST["branch"];
$rep = $_REQUEST["report"];
$prn = $_REQUEST["printTotalOnly"];
if (isset($_REQUEST["id"]) && isset($_REQUEST["branch"]) && isset($_REQUEST["report"])) {
    $path = "./" . $id . "/" . $br . "/" . $rep;
    $content = $main->readXMLAsTable($path, $rep, $prn);
    echo $content;
} elseif (isset($_REQUEST["id"]) && isset($_REQUEST["branch"])) {
    $path = "./" . $id . "/" . $br;
    $content .= $main->readBranchDir($path);
    echo $content;
}

//***************************************************
Class mainServiceClass {

    public function readBranchDir($dir) {
        try {
            $dh = opendir($dir);
            while (false !== ($filename = readdir($dh))) {
                if ($filename != " " && $filename != "." && $filename != "..")
                    echo "<option>" . $filename . "</option>";
            }
            closedir($dh);
        } catch (Exception $e) {
            return "Err: " + $e->getMessage();
        }
    }

    public function readXMLAsTable($path, $report, $prnTot) {
        try {
            $content = "<table border=0 cellspacing='0' cellpadding='0' width='100%' class='display'>";
            $xmlFileName = $path;
            if (!file_exists($xmlFileName)) return "<H1 style='color: red;'>No Report on entered date.</H1>";
            $xml = simplexml_load_file($xmlFileName) or die("<script>hide('divstatus');fade('in');</script>");
            $totalRows = count($xml->children())-1;
            $content .= "<caption><label class='reportName'>" . str_replace(".xml", "", $report) . "(Found: " . ($totalRows - 1) . ")" . "</label></caption>";
            $content .= "<tbody>";
            for ($i = 0; $i < 1; $i++) {
                //this will run only once -print header
                if ($prnTot != 1) {
                    $content.="<thead>";
                    foreach ($xml->children()->children() as $name => $value) {
                        $content.="<th class='display'>" . $name . "</th>";
                    }
                    $content.="</thead>";
                }
            }

            $loop = 0;
            foreach ($xml->children() as $body => $tags) {
                $loop+=1;
                if ($prnTot == 1 && $loop != $totalRows)
                    continue;;
                //for all rows
                $content.="<tr>";
                if ($prnTot == 1) {
                    $content.="<td><table width=100% border=1 class='display' style='font-size: 15pt;'>";
                    foreach ($tags->children() as $name => $value) {
                        if ($name != "BILL")
                            $content.="<tr><td width=40%>" . $name . "</td><td width=60%>" . $value . "</td></tr>";
                    }
                    $content.="</table></td>";
                } else {
                    foreach ($tags->children() as $name => $value) {
                        $content.="<td class='display'>" . $value . "</td>";
                    }
                }
                $content.="</tr>";
            }
            $content .= "</tbody></table>";
            return $content;
        } catch (Exception $e) {
            return "Err: " + $e->getMessage();
        }
    }

}

echo "<script>hide('divstatus');fade('in');</script>";
?>

