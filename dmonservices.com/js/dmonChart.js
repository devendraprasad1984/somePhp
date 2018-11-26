var curCategName = "";
var chartIntervalId = 0;
function displayChartByCategory(categName, categId) {
    loadPageDiv(categId);
    curCategName = categName;
    var curChartId = categId + "_chart";
    var curTwFeedId = categId + "_tw";
    var dmonFeedId = categId + "_dmonFeed";
    //create a chart div at run time under each categ. this is how it will be generic in nature
    //class=col-xs-6, 'col-lg-6
    var divChart = "";
    divChart += "<div class='wrapper' style='margin: 2px;'>";
    divChart += "<div id=\"" + curChartId + "\" class='col-lg-12' style='width:100%; height: 600;'></div>";
    divChart += "<div id=\"" + curTwFeedId + "\" class='feedBox col-lg-6 wrapper' onclick=\"getTwitterFeed('" + curTwFeedId + "','dmonservices');\">we would have running twitter feed from indstury experts</div>";
    divChart += "<div id=\"" + dmonFeedId + "\" class='feedBox col-lg-6 wrapper'>dmon expert analysis</div>";
    divChart += "</div>";
    //alert(divChart);
    setInterval(addDiv, 1000, "#" + categId, "#" + curChartId, divChart, curTwFeedId);
    $(objHomeHeader).html("dmon - analysing rates over " + curCategName);
    chartIntervalId = setInterval(getLineChart, 500, curChartId);
}

function getLineChart(divId) {
    if ($("#" + divId).length) {
        var data = new google.visualization.DataTable();
        //***************************************************
        //this part will replace the actual server side code but will require data in 2d array form only
        data.addColumn('number', 'Day');
        data.addColumn('number', 'Rate');
        data.addColumn('number', 'dmon Rate');
        var arrData = new Array(20);
        for (i = 0; i < arrData.length; i++) {
            arrData[i] = new Array(3);
            arrData[i][0] = i + 1;
            arrData[i][1] = Math.floor(Math.random() * 200);
            arrData[i][2] = arrData[i][1] + Math.floor(Math.random() * 50);
        }
//***************************************************
        data.addRows(arrData);
        var title = curCategName + " - dmon rates";

        var subtitle = "Rates(INR)";
        var options = {chart: {title: title, subtitle: subtitle}
           , width: 800, height: 500
        };
        var chart = new google.charts.Line(document.getElementById(divId));
        chart.draw(data, options);
        clearInterval(chartIntervalId);
    }
}