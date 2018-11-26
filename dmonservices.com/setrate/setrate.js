var idPollUI = "#rateUI";

$(function() {
	setDate();
    getPollUI();
});

function setDate(){
	var options = {
		    weekday: "long", year: "numeric", month: "short",
		    day: "numeric", hour: "2-digit", minute: "2-digit"
		};
	var dt=new Date().toLocaleDateString("en-us",options);
	$("#dTime").html(dt);
}

function getdmonBaseUrl() {
    // set the variables depending upon prod or local settings
    if (document.URL.indexOf("localhost") < 0) {
        //return "http://dmonservices.com/dmonrestapi/";
        return "http://54.213.81.190/Dropbox/serverDeploy/dmonrestapi/";
    } else {
        return "http://localhost/dmonrestapi/";
    }
}

function getPollUI() {
    var sUrl = getdmonBaseUrl() + "dmonCom/?id=getDmonRates";
    // via rest api hosted on php server
    $.getJSON(sUrl, function(jsonData) {
        var myArr = jsonData.jsonArr;
        var cont = "";
        var dt=new Date().toISOString().slice(0, 10);
        var dt1=dt;
        var dt2=dt;
        var chkClickEvent = " ";
        cont += "<div><input type='text' id='tId' placeholder='*AgentId' style='width:50%;'/></div>";
        cont += "<table border=1 id='setRateBox' cellpadding=0 cellspacing=0>";
        cont += "<th></th>";
        cont += "<th>"+dt+"</th>";
        cont += "<th>"+dt+"</th>";
        cont += "<th>"+dt+"</th>";
        $.each(myArr, function(key, valueObj) {
            cont += "<tr>";
            cont += "<td><input type='text' value='"+valueObj["name"]+"' disabled /></td>";
            cont += "<td><input type='text' id='dt"+key+"1' /></td>";
            cont += "<td><input type='text' id='dt"+key+"2' /></td>";
            cont += "<td><input type='text' id='dt"+key+"3' /></td>";
            cont += "</tr>";
        });
        cont += "<tr><td colspan=4 style='text-align: right;'>"+
            "<button id='idSubmit' data-icon='check' onClick=\"submitRate();\">Submit</button>"+
            " <button id='idReset'>Reset</button>"+
            "</td></tr>";
        cont += "</table>";
        $(idPollUI).html(cont);
    });
}

function submitRate() {
// check validation before submitting
    if ($("#lStatus").length == 0)
        $("#idReset").after("<p id='lStatus' style='color:red; font-weight: bold;'></p>");
    
    if($("#tId").val()==""){
    	$("#lStatus").html("Please supply agent Id...");
    	return;
    }
    
    $("#lStatus").html("");
    // var checked = $("#pollBox :checkbox[name=dmon]:checked");
    var arrRates=[];
    $("#setRateBox tr").each(function(i,tr){
    	if(i>0){
    		var categ=$(tr).find('td input[type=text]').eq(0).val();
    		var rate1=parseFloat($(tr).find('td input[type=text]').eq(1).val());
    		var rate2=parseFloat($(tr).find('td input[type=text]').eq(2).val());
    		var rate3=parseFloat($(tr).find('td input[type=text]').eq(3).val());
    		rate1=(isNaN(rate1))? 0 : rate1;
    		rate2=(isNaN(rate2))? 0 : rate2;
    		rate3=(isNaN(rate3))? 0 : rate3;
    		if(rate1>0 || rate2>0 ||rate3>0){
				var fld=categ+",";
				fld+=rate1+",";
				fld+=rate2+",";
				fld+=rate3;
				arrRates.push(fld);
    		}
    	}
    });// each row
     // $("#lStatus").html(arrRates);

    var sUrl = getdmonBaseUrl() + "setrate/?id=saveRate";
	var dataArr=[];
	dataArr.push({name: $("#tId").val()});
    $.post(sUrl,{arr : arrRates},function(res,st){
    	var msg=res.jsonArr["msg"];
    	var err=res.jsonArr["err"];
	if(err!="")
		$("#lStatus").html(err);
	else
		$("#lStatus").html(msg);
	 $("#lStatus").html(res.jsonArr["data"]);
	});
    setTimeout(function(){
    	$("#lStatus").html("");
    	reset();
    },2000);
}

function reset(){
	$("#tId").val("");
	$("#setRateBox tr td input[type='text']:enabled").val("");
}

function getArrayFromTable(tableId){
	var array = [];
	var headers = [];
	$("#"+tableId+" th").each(function(index, item) {
	    headers[index] = $(item).html();
	});
	$("#"+tableId+" td").has('td').each(function() {
	    var arrayItem = {};
	    $('td', $(this)).each(function(index, item) {
	        arrayItem[headers[index]] = $(item).html();
	    });
	    array.push(arrayItem);
	});
	return array;
}
