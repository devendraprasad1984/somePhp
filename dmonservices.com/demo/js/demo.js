var status = "Right Click Disabled";
$(function () {
    document.onmousedown = disableclick;
//    if (document.URL.indexOf("localhost") > 0) {
//        $("#txtCode").val("dmonAdm!n");
//    }
//    var video = document.getElementById('vd');
//    video.addEventListener('click', function () {
//        video.play();
//    }, false);
    $('#txtCode').bind('keypress', function (e) {
        if (e.keyCode==13 || e.which==13)
            displayFundingDemo('demo/dmonServices.mp4');
    });
});

function disableclick(event) {
    if (event.button == 2) {
        alert(status);
        return false;
    }
}
function getBaseUrl() {
    // set the variables depending upon prod or local settings
    if (document.URL.indexOf("localhost") < 0) {
        //return "http://dmonservices.com/dmonrestapi/";
        return "http://54.213.81.190/Dropbox/serverDeploy/dmonrestapi/";
    } else {
        return "http://localhost/dmonrestapi/";
    }
}
function displayFundingDemo(srcVid) {
    $("#divTheater").hide();
    $("#dSt").html("Please wait until demo is loading...");
    var valueFromUI = $("#txtCode"); // "8123h123u1273";
    if (valueFromUI.val() == "") {
        $("#dSt").html("Please enter the view code given by dmonService.com");
        return;
    }
    var viewCounter = 0;
    var sUrl = getBaseUrl() + "dmonCom/?id=getDemoKeyCount&key=" + valueFromUI.val();
    // $("#dSt").html(sUrl);
    $.post(sUrl, function (res) {
        // $("#dSt").html(res.jsonArr["viewCounter"]);
        // return;
        viewCounter = res.jsonArr["viewCounter"]; // view
        if (viewCounter < 0) {
            $("#dSt").html("You have not entered correct code or not authorise to view.  Please Contact me for more views @ +919582797772");
            return;
        }
        var vidSrc = document.getElementById("vd1");
        var srcTag = "";// "<source id='vidSource' src='" + srcVid + "' controls>";
        srcTag = "<iframe id='vd1' class='vidPixel' src='" + srcVid + "' frameborder='0' allowfullscreen></iframe>";
        //vidSrc.innerHTML = srcTag;
        vidSrc.src = srcVid;
        if (viewCounter == 0)
            $("#dSt").html("This is your last view. Please Contact me for more views @ +919582797772");
        else
            $("#dSt").html("You have " + viewCounter + " more views left. Please Contact me for more views @ +919582797772");
        $("#divTheater").show();

//        var intr = setInterval(function () {
//            if (vidSrc.readyState != 0) {
//                clearInterval(intr);
//                if (viewCounter == 0)
//                    $("#dSt").html("This is your last view. Please Contact me for more views @ +919582797772");
//                else
//                    $("#dSt").html("You have " + viewCounter + " more views left. Please Contact me for more views @ +919582797772");
//                $("#divTheater").show();
//            }
//        }, 200);
    });
}
