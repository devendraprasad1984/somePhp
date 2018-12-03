var app = angular.module("myAjs", []);

var hide = "hide"
var show = "show"
var bgColor = "bg-white"
var backcolor = "red"
var textColor = "text-dark"
var textWhite = "white"
var btn="btn-outline-dark"
var successColor = btn+" text-white"
var anchorHeadColor = btn
var darkColor = anchorHeadColor+" " + bgColor + " " + textColor
var runtimeContent = "<div $id class='$p1'></div>"
var loadOnClickMode = false
var loadAllTogether = true
var menuObject = {}
var allDataLoad=[]
var curHtmlPage = ""

$(function () {
    createMenuAndContents()
    // $("img.lazy").lazyload();
})

function loadAllDataAtOnce(){
    $.get("services/menu.json", function (res) {
        menuObject = res["menu"]
        var allDataLoad=[]
        $.each(menuObject, function (i, v) {
            allDataLoad.push({jsid:v.loadIn, uri:v.uri, jsdata:"",func:v.func})
        })
        $.post('services/ServiceDetails.php',{loadAll:1,alldata:allDataLoad},function(res){
            allDataLoad=JSON.parse(res)
            // console.log(allDataLoad)
            $.each(allDataLoad,function(i,v){
                $("#"+v.jsid).html(v.jsdata)
                execFunc(v.func,v.jsdata)
            })
        })
    })
}


function createMenuAndContents() {
    // var topMenu = $("#topMenu")
    // var topMenuSelect = $("#idTopMenuSelect")
    var counter = 0
    var elm = "<span id='$p1' class='$c1' onclick=\"displayData(this.id,'$p2');\">$p3</span>"
    $.get("services/menu.json", function (res) {
        menuObject = res["menu"]
        $.each(menuObject, function (i, v) {
            v.loaded = 0
            v.mydata = ""
            counter += 1
            newElm = elm
            newElm = newElm.replace("$p1", "id" + v["id"])
            newElm = newElm.replace("$p2", v["name"])
            newElm = newElm.replace("$p3", v["desc"])
            if (counter == 1) {
                newElm = newElm.replace("$c1", "btn " + darkColor)
            } else {
                newElm = newElm.replace("$c1", "btn " + successColor)
            }
            var div1 = runtimeContent
            var newUrl = "templates/" + v["name"] + ".html"
            var newId = "id" + v["name"] + ""
            div1 = div1.replace("$id", "id='" + newId + "'")
            div1 = div1.replace("$p1", v["defaultLoad"])

            if (v.id != "0") {
                $("#topMenu").append(newElm)
                $("#idTopMenuSelect").append("<option value='" + v["name"] + "'>" + v["desc"] + "</option>")
            }
            if (!loadOnClickMode) {
                if(!loadAllTogether){
                    if (v.id != "0" || (v.id == "0" && v.loadIn != "")) {
                        $("#mainContentSection").append(div1)
                        $("#" + newId).load(newUrl, function (loadedData) {
                            $("#" + v.loadIn).load(v.uri,function(res){
                                execFunc(v.func,res)
                            });
                        })
                    } else if (v.id == "0" && v.loadIn == "") {
                        $.get(v.uri,function(res){
                            execFunc(v.func,res)
                        });
                    }
                }else{
                    if (v.id != "0" || (v.id == "0" && v.loadIn != "")) {
                        $("#mainContentSection").append(div1)
                        $("#" + newId).load(newUrl)
                    }
                }
            }
        })
        if(loadAllTogether && !loadOnClickMode)
            loadAllDataAtOnce()
    })
}

function execFunc(fnName, res) {
    if (typeof fnName != 'undefined') {
        addColorsAndStoreHtml(res)
        if(fnName=="slider"){
            displaySlider(res.join(";"), 'sliderLine');
        }else if(fnName=="slider"){
            displayData('id1', fnName);
        }
    }
}

function addColorsAndStoreHtml(htmlData) {
    $("span a, a.btn").addClass(anchorHeadColor)
    $("#top1 div").removeClass('box');
    $("#top1 div").removeClass('ltqt');
    $("#top1 div, #top1 pre, #top1 span").css({'color': textWhite});
    $("h1 h2 h3 h4").css({'background-color': backcolor});

    if (loadOnClickMode) {
        $.each(menuObject, function (i, v) {
            if (v["name"] == curHtmlPage) {
                // v.mydata=htmlData
                var hdata = $("#mainContentSection").html()
                hdata = hdata.substr(0, hdata.indexOf("<script>"))
                v.mydata = hdata
                return
            }
        })
        // console.log(menuObject)
    }
}

function displayData(cur, tagId) {
    addColorsAndStoreHtml(undefined)
    $("#topMenu span.btn").removeClass(darkColor).addClass(successColor)
    $("#" + cur).removeClass(successColor).addClass(darkColor)

    if (loadOnClickMode) {
        newUrl = "templates/" + tagId + ".html"
        curHtmlPage = tagId
        // $("#mainContentSection").load(newUrl)
        $.each(menuObject, function (i, v) {
            if (v["name"] == tagId) {
                if (v["loaded"] == 0) {
                    v.loaded = 1
                    $("#mainContentSection").load(newUrl)
                } else {
                    $("#mainContentSection").html(v.mydata)
                    // $("#mainContentSection").load(newUrl) //temporary
                }
                return
            }
        })
    } else {
        tagId = "#id" + tagId
        $("#mainContentSection div").each(function (i, elm) {
            if (elm.id.substr(0, 2) == "id") {
                $("#" + elm.id).removeClass(show).addClass(hide)
            }
        });
        $(tagId).removeClass(hide).addClass(show)
    }
}

var forEmail = new Array;
var forEmailComp = new Array;
var sessionFlag = 0;

function mydate() {
    var dt = new Date();
    dt = dt.toLocaleDateString() + " " + dt.toLocaleTimeString();
    return dt
}

function loopFormGetValues(id) {
    var strValues = $("#" + id).serialize();
    strValues = "&" + strValues;
    return strValues;
}

function getServerData(url, div2LoadIn, label) {
    // console.log(url)
    $.get(url, function (res) {
        // toastr.info("please wait...")
    }).success(function (res) {
        var newData = ""
        if (typeof label != 'undefined') {
            // newData = "<div class='btn " + anchorHeadColor + " font-weight-bold' style='width: 100%; font-size: 14pt;'>" + label + "</div>";
            newData += "<fieldset><legend style='width: auto;' class='btn " + anchorHeadColor + "'>" + label + "</legend><div class='box ltqt'>" + res + "</div></fieldset>"
        }
        else {
            newData += "<div class='box ltqt'>" + res + "</div>";
        }
        $("#" + div2LoadIn).html(newData);
    })
}

function getContactEmailQueryURI(id, msgId) {
    var myIds = loopFormGetValues(id)
    var sPage = "services/ServiceDetails.php?mail=mail_1" + myIds;
    // $('#message').load(sPage);
    var oldText = $("#" + msgId).html()
    $("#" + msgId).html("please wait, do not refresh")
    $("#" + msgId).addClass("bg-success")
    $.get(sPage, function (res) {
        // toastr.info("sending, please wait...",sPage)
        // console.log(sPage,res)
    }).success(function (msg) {
        if (msg.indexOf("err") != -1)
            console.log(msg)
        else
            toastr.success("msg: " + msg)
        clearForm(id)
    }).error(function (er) {
        toastr.error("error, please contact admin: " + er)
        console.log("error, please contact admin: ", er)
    }).complete(function () {
        $("#" + msgId).html(oldText)
        $("#" + msgId).removeClass("bg-success")
    })
}

function listMultipleUploadFile() {
    //get the input and UL list
    var input = document.getElementById('uploadArr');
    var list = document.getElementById('fileList');
    var myFileList = "";
    for (var x = 0; x < input.files.length; x++) {
        myFileList = myFileList + 'File ' + (x + 1) + ':  ' + input.files[x].name + "<br/>";
    }
    list.innerHTML = myFileList;
}

function clearForm(id) {
    $("#" + id + " input").val("")
    $("#" + id + " textarea").val("")
}

var slideIndex = 1

function displaySlider(imgStr, idDiv) {
    var imgArr = imgStr.split(";")
    var loadInto = "#" + idDiv
    for (i = 0; i < imgArr.length; i++) {
        imgSrc = imgArr[i].substr(3)
        imgTag = "<a href='" + imgSrc + "' target='_blank'><img src='" + imgSrc + "' class='sliderImg mySlides' /></a>"
        $(loadInto).append(imgTag)
    }
    showDivs(slideIndex);
    setInterval(function () {
        plusDivs(+1)
    }, 10000)
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";

    // setInterval(function() {
    //     $('#slideshow > div:first')
    //         .fadeOut(1000)
    //         .next()
    //         .fadeIn(1000)
    //         .end()
    //         .appendTo('#slideshow');
    // }, 3000);
}


function saveTestimonial() {
    var strTagName = $("#txtTestimonialName").val().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-') + "_"
    var mdate = mydate().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-')
    var tag = "/testimonials/" + strTagName + mdate + ".txt"
    var dataInHtmlString = $("#txtTestimonalUI").val()
    sParam = {tag: tag, data: dataInHtmlString}
    $.ajax({
        type: "POST",
        url: 'services/ServiceDetails.php?saveData=2'
        , data: $.param(sParam)
        , success: function (res) {
            toastr.success("data save successfully")
            if (res.indexOf("err") != -1) {
                console.log("error", res)
            }
        }
        , error: function (err) {
            toastr.error("there is some save error, please check log")
            console.log("save error", err)
        }
        , complete: function (res) {
            $("#statusMessage").html(res)
        }
    });
}