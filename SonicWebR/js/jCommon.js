function load() {
    $(document).ready(function() {
        //setTR("#slide",200,200);
    });
}

function mydate() {
    var dt = new Date();
    dt = dt.toLocaleDateString() + " " + dt.toLocaleTimeString();
    document.getElementById("divDate").innerHTML = dt;
}

function setTR(id, h, w) {
    $(id).jqFancyTransitions({width: w, height: h});
}

function getPage(pageid)
{
    //document.getElementById("divMainContentPanel").innerHTML = "<p class='text'><?php echo page("+pageid+"); ?></p>";
    //alert(document.getElementById("divMainContentPanel").innerHTML);
}

function HideSideMenu() {
    //hide('aboutus');
}

function setText() {
    fade('out');
    showLoad('divstatus');
}

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

function hide(id) {
    var e = document.getElementById(id);
    e.style.display = 'none';
}
function show(id) {
    HideSideMenu();
    var e = document.getElementById(id);
    e.style.display = 'block';
}
function showLoad(id) {
    var e = document.getElementById(id);
    e.style.display = 'block';
}

function DisplayContents(div, div1) {
    //var w = window.open();
    var w = myWin = window.open("", null, "location=0,toolbar=0,menubar=0,scrollbars=1,left=30px,top=40px,height=400px,width=400px");
    var html = $(div).html();
    if (div1 != null) {
        html = html + "\n" + $(div1).html();
    }
    w.document.writeln('<link href="css/mainCSS.css" rel="stylesheet" type="text/css" />');
    html.replace("read more +", " ");
    w.document.writeln(html);
    scrolllock();
}


function makeTabContentsVisibleFalse() {
    var tab = document.getElementById("tabcontents");
    var items = tab.getElementsByTagName("div");
    for (var i = 0; i < items.length; ++i) {
        // do something with items[i], which is a <li> element
        items[i].style.display = 'none';
    }
}

function loopFormGetValues(id) {
    var strValues = $(id).serialize();
    strValues = "&" + strValues;
    return strValues;
}

function change(el, dv) {
    var par = el.parentNode;
    if (par.id == "tablist")
        changeTabList(el, dv);
    if (par.id == "basictab")
        changeBasicTab(el, dv);
}

function setMe(el) {
    setText();
    var tr = document.getElementById("topmenu");
    var items = tr.getElementsByTagName("td");
    for (var i = 0; i < items.length; ++i) {
        items[i].id = "";
    }
    el.id = "current";
    setAllSideMenuNULL(1);
}

function setAllSideMenuNULL(def) {
    //setNULL('side1',def);
}
function setNULL(tab, def) {
    var tr = document.getElementById(tab);
    var items = tr.getElementsByTagName("td");
    for (var i = 0; i < items.length; ++i) {
        items[i].id = "";
    }
    if (def == 1)
        items[1].id = "current";
}
function sideMe(el) {
    setText();
    setAllSideMenuNULL(0);
    el.id = "current";
}

function changeTabList(el, dv) {
    var ul = document.getElementById("tablist");
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
        items[i].id = "empty";
    }
    el.id = "current";
    makeTabContentsVisibleFalse();
    var mydiv = document.getElementById(dv);
    mydiv.style.display = 'block';

}


function changeBasicTab(el, dv) {

    var ul = document.getElementById("basictab");
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
        items[i].id = "empty";
    }
    el.id = "current";
    makeTabContentsVisibleFalse();
    var mydiv = document.getElementById(dv);
    mydiv.style.display = 'block';
}

function goto(page) {
    location.href = page;
}

function getContactEmailQueryURI(id) {
    var sPage = "service.php?mail=mail_1" + loopFormGetValues(id);
    document.getElementById('mail_1').innerHTML = "sending mail...";
    $('#mail_1').load(sPage);
    document.getElementById('tname').value = "";
    document.getElementById('temail').value = "";
    document.getElementById('tmob').value = "";
    document.getElementById('tsub').value = "";
    document.getElementById('tmsg').value = "";
}



function fade(type)
{
    if (type == 'out')
        document.getElementById("datapanel").style.opacity = 0.2;
    if (type == 'in')
        document.getElementById("datapanel").style.opacity = 1;
}


function getFormattedDate(input){
    var pattern=/(.*?)\/(.*?)\/(.*?)$/;
    var result = input.replace(pattern,function(match,p1,p2,p3){
        var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return (p2<10?"0"+p2:p2)+" "+months[(p1-1)]+" "+p3;
    });
}