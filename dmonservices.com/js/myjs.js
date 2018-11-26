    /*
    $.post( "test.php", { name: "John", time: "2pm" } );
    $.post( "test.php", { 'choices[]': [ "Jon", "Susan" ] } );
    $.post( "test.php", $( "#testform" ).serialize() );
    $.post( "test.php", function( data ) {
    alert( "Data Loaded: " + data );
    });

    $.post( "test.php", { name: "John", time: "2pm" })
    .done(function( data ) {
    alert( "Data Loaded: " + data );
    });

    $.post( "test.php", { func: "getNameAndTime" }, function( data ) {
    console.log( data.name ); // John
    console.log( data.time ); // 2pm
    }, "json");

    $.get( "test.php", { name: "John", time: "2pm" } );
    $.get( "test.php", { "choices[]": ["Jon", "Susan"] } );

    $.get( "test.php", function( data ) {
    alert( "Data Loaded: " + data );
    });

    $.get( "test.cgi", { name: "John", time: "2pm" } )
    .done(function( data ) {
    alert( "Data Loaded: " + data );
    });

    */

    var bgSuccess = "bg-green-gradient";
    var bgWarnnig = "bg-blue-gradient";
    var bgInfo = "bg-gray-light";
    var bgDanger = "bg-red-gradient";

    var objMainContainer = "#mainContainer";
    var objTempDiv = "#tempDiv";
    var objContent = "#mainContent";
    var objHeader = "#myHeader";
    var objFooter = "#myFooter";
    var objLeftMenu = "#leftMenu";
    var objRightMenu = "#rightMenu";
    var objHomeHeader = "#mHomeHeader";
    var objHomeHeader1 = "#mHomeHeader1";
    var objHeaderBar = "#idHeaderBar";
    var objHeaderGear = "#idHeaderGear";
    var ratesArr;


    // var dmonCateg = ["Petrol", "Diesel", "CNG", "LPG", "Potato", "Tomato",
    // "Mango", "Apple", "Gold", "Silver", "Iron", "Pulses", "Onion", "Peas"];
    // //var dmonCategColor = ["bg-aqua", "bg-red", "bg-green", "bg-warning",
    // "bg-info", "bg-teal", "bg-red", "bg-aqua", "bg-green", "bg-warning",
    // "bg-light-blue", "bg-olive", "bg-navy", "bg-warning", "bg-warning",
    // "bg-warning"];
    // var dmonCategMasterId = ["idPetrol", "idDiesel", "idCNG", "idLPG",
    // "idPotato", "idTomato", "idMango", "idApple", "idGold", "idSilver", "idIron",
    // "idPulses", "idOnion", "idPeas"];

    var iLeftMenuTimer, iRightMenuTimer, iHomeTimer, iOnboardCounter;
    var timerHome = 1000;

    $(function() {
    init();
    loadMyTw();
    });


    function init() {
    loadPager();
    var strIDs = objLeftMenu + ", " + objRightMenu;
    $(strIDs).hide();
    // home header link click refresh
    $(objHomeHeader).click(function() {
        setHomeContent();
    });
    // left menu item click, change the home header link
    $("Navigation li").click(function() {
        var strVal = "dmon - analysing rates over ";
        $(objHomeHeader).html(strVal);
    });

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

    function leftMenuToggle() {
    $(objLeftMenu).toggle();
    }

    function rightMenuToggle() {
    $(objRightMenu).toggle();
    //loadMyTw();
    }

    function remove_class(cl) {
    $(this).removeClass(cl);
    }

    function loadPager() {
    loadPageHeader();
    loadLeftMenu();
    loadRightMenu();
    loadPageFooter();
    // $(objContent).show();
    }

    function loadPageHeader() {
    var sPage = "modules/header.html";
    $(objHeader).load(sPage, setHomeContent);
    }
    function loadPageFooter() {
    var sPage = "modules/footer.html";
    $(objFooter).load(sPage, getOnboardCounter);
    }
    function loadLeftMenu() {
    var sPage = "modules/leftMenu.html";
    $(objLeftMenu).load(sPage, setLiActive);
    }
    function loadRightMenu() {
    var sPage = "modules/rightMenu.html";
    $(objRightMenu).load(sPage);
    }

    function loadPageDiv(divId) {
    if (iHomeTimer !== 0)
        clearInterval(iHomeTimer);
    goToByScroll(objMainContainer);
    $(objLeftMenu).hide();
    $(objRightMenu).hide();
    var sPage = "modules/contents.html #" + divId;
    $(objContent).html("");
    $(objContent).load(sPage);
    }

    function loadPageDivBox(divId,callBackFn) {
    if (iHomeTimer !== 0)
        clearInterval(iHomeTimer);
    goToByScroll(objMainContainer);
    var sPage = "modules/contents.html #" + divId;
    $(objContent).html("");
    if(callBackFn!=""){
        //this call makes sure that callBack function is run only after the load of segments are complete
        $(objContent).load(sPage, function(){
            window[callBackFn]();
        });
        }
    else
        $(objContent).load(sPage);
    }

    function loadReg(){
    loadPageDivBox('divRegForm', "setRegRate");
    }


    function goToByScroll(id) {
    return;// dont do anything, suppress functionality further....
    $('html,body').animate({
        scrollTop: $(id).offset().top}, 'fast');
    }

    function togg(obj) {
    $("#" + obj).toggle();
    }

    function setLiActive(divId) {
    var sVar = objLeftMenu + " .Navigation li";
    if ($(sVar).length > 0 && $(divId).length > 0) {
        $(sVar).click(function() {
            $(sVar).removeClass("current-left-menu");
            $(this).addClass("current-left-menu");
        });
    }
    }

    function setHomeContent() {
    if ($(objContent).length) {
        $(objHomeHeader).html("dmon Home");
        var sUrl = getdmonBaseUrl() + "dmonCom/?id=getDmonRates";
        // via rest api hosted on php server
        $.getJSON(sUrl, function(jsonData) {
            var homeContent = "";
            var myCategId = "";
            var myRateId = "";
            var name = "";
            var enabled = "false";
            var rngNum = 0;
            // alert(jsonData.length);
            ratesArr = jsonData.jsonArr;
            // loop over json object to get values
            $.each(ratesArr, function(key,valueObj) {
                // alert(key+":"+obj["name"]+", "+obj["count"]);
                // var myFun = "loadPageDiv('" + dmonCategMasterId[i] + "');";
                name = valueObj["name"];
                enabled = valueObj["enabled"];
                var fnClick = "goToByScroll('" + objMainContainer + "'); displayChartByCategory('" + name + "','" + key + "');";
                myCategId = "idTotalSMS_" + name;
                myRateId = "idTodayRate_" + name;
                homeContent += "<div class='col-lg-4 col-xs-12 divClick small-box1'";
                if (enabled === "true") {
                    homeContent += " onclick=\"" + fnClick + "\">";
                } else {
                    homeContent += "style='color:gray;'>"
                }
                homeContent += "<div><span class='textCateg'>" + name + "</span></div>";
                if (enabled === "true") {
                    rngNum = parseFloat(valueObj["count"]);
                    homeContent += "<p class='la-bottom clsCount' title='SMS Count' id=\"" + myCategId + "\">" + rngNum + "</p>";
                    rngNum = parseFloat(valueObj["rate"]);
                    homeContent += "<p class='ra-bottom clsRate' title='Rate' id=\"" + myRateId + "\">" + rngNum + "</p>";
                }
                homeContent += "</div>";
            });
            $(objContent).html(homeContent);
            if (iHomeTimer !== 0)
                clearInterval(iHomeTimer);
            setTimeout(updateRatesTimer, 0);
        });


    }
    }

    function updateRatesTimer() {
    var dynTimer = 1000 * (Math.floor((getTimerValue() / 1000)));
    iHomeTimer = setInterval(setHomeContent, dynTimer);
    $(objHomeHeader1).html("The dmon will refresh in next " + (dynTimer / 1000) + " seconds.");
    }

    function getTimerValue() {
    return Math.floor(2000 + Math.random() * 50000);
    }

    function stopInterval(interval) {
    clearInterval(interval);
    }

    function addDiv(parentDiv, childDiv, divContent, twId) {
    if ($(childDiv).length === 0) {
        $(parentDiv).append(divContent);
        getTwitterFeed(twId, "dmonservices");
    } else {
        $(parentDiv).stop();
    }
    }


    function closePanel() {
    $(objTempDiv).hide();
    }

    function getOnboardCounter() {
    // using ajax fetch the json object via url and display the result
    var sUrl = getdmonBaseUrl() + "dmonCom/?id=getOnboardCounter";
    $.getJSON(sUrl, function(jsonData) {
        var cntr = jsonData.jsonArr["data"];
        $("#onboardCounter").html(cntr); // dummy counter, ideally here you would have count all dmon onboards from database rest api
    });
    getPageViews();
    }
    function getPageViews() {
    // using ajax fetch the json object via url and display the result
    var sUrl = getdmonBaseUrl() + "dmonCom/?id=getPageViews";
    $.getJSON(sUrl, function(jsonData) {
        var cntr = jsonData.jsonArr["data"];
        $("#idPageViews").html(cntr); //this would be total page views so far
    });
    }

    function iterateJson(data) {
    $.each(data, function(i, obj) {
        $.each(obj, function(key, value) {
            alert(obj + "->" + key + ":" + value);
        });
    });
    }

    function getJSONVals(data) {
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        for (property in object) {
            var value = object[property];
            alert(property + "=" + value); // This alerts "id=1",
                                            // "created=2010-03-19", etc..
        }
    }
    }

    function setRegRate() {
    var sHtml = "";
    //	if ($("#tName").val() == "") {
        $.each(ratesArr,function(key,valueObj){
            if(valueObj["enabled"]=="true")
                sHtml += "<option value=\"" + valueObj["name"] + "\">" + valueObj["name"] + "</option>";
            else
                sHtml += "<option value=\"" + valueObj["name"] + "\" disabled>" + valueObj["name"] + "</option>";
        });
        $("#selRateReg").html(sHtml);
    //        alert($("#selRateReg").html());
    //    }
    }


    function saveUser() {
    // check validation before submitting
    if ($("#lStatus").length == 0)
        $("#idResetReg").after("<p id='lStatus' style='color:red; font-weight: bold;'></p>");

    $("#lStatus").html("");
    //var re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if ($("#tName").val() == "" || $("#tEmail").val() == "" ||
    $("#tMobile").val() == "") {
    $("#lStatus").html("Please fill in mandatory fields(Name, Email, Mobile)");
    return;
    }
    if (re.test($("#tEmail").val())==false) {
    $("#lStatus").html("Please correct email");
    return;
    }


    // submit data to php rest api and from there to database for permanent save
    // get success or error message in return from rest api
    var sUrl = getdmonBaseUrl() + "dmonCom/?id=saveUser";
    var dataArr=[];
    dataArr.push({name: $("#tName").val()}
    ,{email: $("#tEmail").val()}
    ,{mobile: $("#tMobile").val()}
    );
    // ,{choice: $("#selRateReg").val()});
    //var objJson=JSON.stringify(dataArr);
    $.post(sUrl,{arr : dataArr},function(res,st){
        var msg=res.jsonArr["msg"];
        var err=res.jsonArr["err"];
    if(err!="")
        $("#lStatus").html(err);
    else
        $("#lStatus").html(msg);
    // $("#lStatus").html(res.jsonArr["data"]);
    });
    reset();
    }

    function reset(){
    $("#tName").val("");
    $("#tEmail").val("");
    $("#tMobile").val("");
    }
    
    function loadMyTw(){
        var elm="<a class=\"twitter-timeline\" href=\"https://twitter.com/dmonservices\" data-widget-id=\"688647479928041473\">@dmonservices</a>";
        elm+="<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>";
        var itm=setInterval(function(){
            $(objRightMenu).html(elm);
            
            if($(objRightMenu).length)
                clearInterval(itm);
        },500);
    }