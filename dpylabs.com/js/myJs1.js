var app = angular.module("myAjs", []);
var timerId;
var screenWidth;

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        // escape key maps to keycode `27`
        // closeNav();
        // clearInterval(timerId);
    }
    if (e.keyCode == 13) {
        // escape key maps to keycode `27`
        startLoad();
    }
});

$(function () {
    //	startLoad();
    //getVisitCounter();
    initVars();
});

function initVars(){
    screenWidth=screen.width;
}

function startLoad() {
    // timerId = setInterval(function () {
    //     changeBg();
    // }, 5000);
}

// function changeBg() {
//     var imgNum = Math.round(1 + Math.random() * 15);
//     var imgUrl = "./images/cover/" + imgNum + ".jpg";
//     $("html").css({
//         "background-image": "url(" + imgUrl + ")",
//         "background-position": "center",
//         "background-repeat": "no-repeat",
//         "background-size": "cover"
//     });
// }

app.controller("Contents", function ($scope, $timeout, $http) {
    $scope.getContentsById = function (idTag) {
        //clear the cur selection
        for(i=1;i<15;i++){
            $("#id"+i).css({"background-color": ""});
        }
        var tagName = "";
        var content = "";
        var imgs = "";
        curId="#"+document.activeElement.parentElement.id;
        $(curId).css({"background-color": "#111"});
        var allServices="<h1>Pioneer IT Services in</h1>";
        $http.get("./resources/services.json").then(function (res) {
            var data = res.data.services;
            var images = {};
            var vRed, vGreen, vBlue;
            for (i = 0; i < data.length; i++) {
                if(screenWidth<680 && idTag == "" && data[i].key != "contactus")
                    allServices+="<h2 class='w3-blue'>" + data[i].name + "</h2><div style='color: black;'>" + data[i].desc + "</div>";

                if (data[i].key == idTag) {
                    tagName = "<div style='color: white;'>" + data[i].name + "</div>";
                    content = "<div style='color: black;'>" + data[i].desc + "</div>";
                    images = data[i].images;
                    imgs += "<table>";
                    for (j = 0; j < images.length; j++) {
                        imgs += "<tr>";
                        imgs += "<td><img src='" + images[j] + "' class='imgs' /></td>";
                        imgs += "</tr>";
                    }
                    imgs += "</table>";
                    // break;
                }
            }
            $("#mAllServices").html(allServices);
            $("#mTag").html(tagName);
            $("#mContent").html(content);
            $("#mImages").html(imgs);
        });
        // document.getElementById("myNav").style.width = "100%";
    };
});
//
// app.controller("pageVisits", function ($scope, $http) {
//     var visitCounter = 0;
//     $http.get("../services/counter.php?id=getVisitCounter").then(function (res) {
//         // console.log(res.data);
//         visitCounter = res.data;
//         $scope.pageVisitCounter = visitCounter;
//     });
// });
//
// app.controller("serverCallLog", function ($scope, $http) {
//     var logData = null;
//     $http.get("../services/server.php?id=getServerLog").then(function (res) {
//         // console.log(res.data);
//         logData = res.data;
//         $scope.serverLog = logData;
//     });
// });
//
// app.controller("ITSummary", function ($scope, $http) {
//     var ratingData = "";
//     $http.get("../resources/IT.json").then(function (res) {
//         $scope.ratingData = res.data.skills;
//     });
// });

function hide(id) {
    $("#" + id).hide();
}

function show(id) {
    $(id).show();
}

function setHref(id, url) {
    var content = "";
    if (url.indexOf(".pdf") > 0) {
        content = "<div classs='pdfView'><object data='" + url + "' type='application/pdf' class='pdfView'></object></div>";
    } else if (url.indexOf(".mp4") > 0 || url.indexOf("youtube") > 0) {
        content = "<iframe class='pdfView' src='" + url + "' frameborder=0></iframe>";
    } else {
        content = "<iframe class='pdfView' src='" + url + "' style='background-color:white;' frameborder=0></iframe>";
    }
    $("#mTag").html("");
    $("#mContent").html(content);
    $("#mImages").html("");
    // document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    // document.getElementById("myNav").style.width = "0%";
}
