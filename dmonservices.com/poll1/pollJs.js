var idPollUI = "#pollUI";

$(function() {
    getPollUI();
});

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
        var chkClickEvent = " onclick=\" incrementCounter(this); \"";
        cont += "<table id='pollBox'>";
        cont += "<th style='text-align: left'>Category</th><th style='text-align: left'>Polls(count)</th>";
        $.each(myArr, function(key, valueObj) {
            var randomCount = Math.floor(1000 + Math.random() * 500000);
            cont += "<tr>";
            if (valueObj["enabled"] === "true") {
                cont += "<td><input type=\"checkbox\" name='dmon' id=\"id" + key + "\" value=\"" + valueObj["name"] + "\" " + chkClickEvent + " />" + valueObj["name"] + "</td>";
                cont += "<td><span class=\"lblCounter\" id=\"id" + key + "Cnt\">" + randomCount + "</span></td>";
            }
            if (valueObj["enabled"] === "false") {
                cont += "<td><input type=\"checkbox\" name='dmon' disabled id=\"id" + key + "\" value=\"" + valueObj["name"] + "\" " + chkClickEvent + " /><span style='color:gray;'>" + valueObj["name"] + "</span></td>";
                cont += "<td><span class=\"lblCounter\" id=\"id" + key + "Cnt\"><span style='color:gray;'>stay tuned</span></span></td>";
            }
            cont += "</tr>";
        });
        cont += "<tr><td colspan=2><label>Please provide below details to complete voting...</label><input type='text' id='tName' placeholder='*Name' size=60 /></td></tr>";
        cont += "<tr><td colspan=2><input type='text' id='tEmail' placeholder='*Email' size=60 /></td></tr>";
        cont += "<tr><td colspan=2><input type='text' id='tMobile' placeholder='*Mobile' size=60 /></td></tr>";
        cont += "<tr><td colspan=2><textarea id='tComment' rows='6' cols='50' placeholder='Comments'></textarea></td></tr>";

        cont += "<tr><td colspan=2>\n\
            <button id='idSubmit' data-icon='check' onClick=\"submitPoll();\">Submit</button>\n\
            <button id='idReset'>Reset</button>\n\
        </td></tr>";
        cont += "</table>";
        $(idPollUI).html(cont);
    });
}

function incrementCounter(chkId) {
    // $(idStatus).html(chkId.id);
    var chk = "#" + chkId.id;
    var bChecked = $(chk).is(":checked");
    var myCntId = "#" + chkId.id + "Cnt";
    var cntr = parseFloat($(myCntId).html());
    if (bChecked === true) {
        cntr = cntr + 1;
        $(myCntId).css({"font-weight": "bold"});
    } else {
        cntr = cntr - 1;
        $(myCntId).css({"font-weight": "normal"});
    }
    $(myCntId).html(cntr);
}

function submitPoll() {
// $('input[type=checkbox]').each(function() {
// if (this.checked) {
// alert($(this).val());
// }
// });

// check validation before submitting
    if ($("#lStatus").length == 0)
        $("#idReset").after("<p id='lStatus' style='color:red; font-weight: bold;'></p>");

    $("#lStatus").html("");
//	 //var re =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//	 if ($("#tName").val() == "" || $("#tEmail").val() == "" ||
//	 $("#tMobile").val() == "") {
//	 $("#lStatus").html("Please fill in mandatory fields(Name, Email, Mobile)");
//	 return;
//	 }
////	 if (re.test($("#tEmail").val())==false) {
////	 $("#lStatus").html("Please correct email");
////	 return;
////	 }


    var checked = $("#pollBox :checkbox[name=dmon]:checked");
    var arrChoice=[];
    for (i = 0; i < checked.length; i++) {
        arrChoice.push($(checked[i]).val());
    }
    // submit data to php rest api and from there to database for permanent save
    // get success or error message in return from rest api
    var sUrl = getdmonBaseUrl() + "poll1/?id=savePoll1";
	var dataArr=[];
	dataArr.push({name: $("#tName").val()}
	,{email: $("#tEmail").val()}
	,{mobile: $("#tMobile").val()}
	,{comment: $("#tComment").val()}
	,{choices: arrChoice});
	//var objJson=JSON.stringify(dataArr);
    $.post(sUrl,{arr : dataArr},function(res,st){
    	var msg=res.jsonArr["msg"];
    	var err=res.jsonArr["err"];
	if(err!="")
		$("#lStatus").html(err);
	else
		$("#lStatus").html(msg);
	//$("#lStatus").html(res.jsonArr["data"]);
	});
	reset();
}

function reset(){
	$("#tName").val("");
	$("#tEmail").val("");
	$("#tMobile").val("");
	$("#tComment").val("");
}


