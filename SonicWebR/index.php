<?php
$root = dirname(__FILE__);
require_once 'service.php';
$obj = new mainServiceClass();
if (isset($_REQUEST["id"]))
    $compName = $_REQUEST["id"];
$dirPath = "./" . $compName;
?>

<!DOCTYPE HTML>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>SonicAgeIndia-Web Report Panel</title>
        <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="js/jCommon.js"></script>
        <script type="text/javascript" src="js/pickaday.js"></script>
        <link href="js/main.css" rel="stylesheet" type="text/css" />

        <script type="text/javascript">
            function getFilesList() {
                var sel = BranchSel.options[BranchSel.selectedIndex].value;
                if (sel == "")
                    return;
                var url = "service.php?id=<?php echo $compName; ?>&branch=" + sel;
                datapanel.innerHtml = "";
                $('#report').load(url);
            }
            function runReport() {
                setText();
                var br = BranchSel.options[BranchSel.selectedIndex].value;
                var sel = report.options[report.selectedIndex].value;
                var runDate1 = document.getElementById('runDate').value;
                if (runDate1 != "") {
                    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    runDate1 = runDate1.substring(0, 2) + "-" + months[runDate1.substring(3, 5) - 1] + "-" + runDate1.substring(8, 10);
                    sel = "SaleReport_" + runDate1 + ".xml";
                }
                var prn = 0;
                if (chkTotal.checked == true)
                    prn = 1;
                if (sel == "")
                    return;
                var url = "service.php?id=<?php echo $compName; ?>&branch=" + br + "&report=" + sel + "&printTotalOnly=" + prn;
                $('#datapanel').load(url);
            }
        </script>
    </head>
    <body>
        <header>
            <h2>Welcome to <span class="companyName"><?php echo $compName; ?></span></h2>
            <table border="0" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td colspan="2">
                            <select name="BranchSel" id="BranchSel" class="sel"  onChange="getFilesList();">
                                <option selected>Select</option>
                                <?php
                                $obj->readBranchDir($dirPath);
                                ?>
                            </select>
                            <select id="report" class="sel" name="report" onChange="runReport();"></select>
                            <input type="checkbox" name="chkTotal" id="chkTotal" value="1" checked="true">Print Total Only</input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            RUN DATE: <input id="runDate" name="runDate" type="text" size="15" onClick="showCalendar('runDate')" /><input type="button" name="cmdGo" value="RUN" onClick="runReport();" />
                            <div id="divstatus" style="display: none;"><img src="img/loading.gif" style="width:200px; height: 50px"/></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr/>
        </header>

        <section id="mainPanel">
            <article id="datapanel">
            </article>
        </section>

        <footer>
            <p><a href="http://SonicAgeIndia.co.in">(c)SonicAgeIndia.co.in</a></p>
        </footer>
    </body>

</html>