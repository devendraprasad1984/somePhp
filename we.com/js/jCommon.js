
var forEmail=new Array;
var forEmailComp=new Array;
var sessionFlag=0;

function setTopPanel() {
    fade('out');
    showLoad('divstatus');
    document.getElementById("tempDiv").style.display = 'block';
}

function hideTopPanel() {
    fade('in');
    hide('divstatus');
    document.getElementById("tempDiv").style.display = 'none';
}

function closePanel() {
    var el=document.getElementById('tempDiv');
    el.style.display = 'none';
    el=document.getElementById('servicePanel');
    el.innerHTML="";
    el.style.display = 'none';
}

function searchText(){
    var searchData=document.getElementById('tSearch').value;
    if(searchData=="") return;
    setText();
    $.post("database.php",{id: "db", func: "getSearchResultSet", qur: searchData},
    function(data){
        $("#mainContentPanel").html(data);
    }
);
}


function mydate() {
    var dt = new Date();
    dt = dt.toLocaleDateString() + " " + dt.toLocaleTimeString();
    document.getElementById("divDate").innerHTML = dt;
}
function myslider()
{
    $('.fadein :first-child').fadeOut()
            .next('img').fadeIn()
            .end().appendTo('.fadein');
}

function setTR(id, h, w) {
    $(id).jqFancyTransitions({width: w, height: h});
}

function loadHome() {
    setText();
    $('#services').load('database.php?id=getCategories');
    //$('#mainContentPanel').load('database.php?id=wp&qur=srv');
}

function loadVisitor() {
    //make sure it only runs once per session
    if(sessionFlag==0){
        $('#servicePanel').load('ServiceDetails.php?getVisitor=1');
    }
}

function HideSideMenu() {
    hide('aboutus');
    hide('services');
    hide('contactus');
}

function setText() {
    fade('out');
    showLoad('divstatus');
}
function unsetText() {
    fade('in');
    hide('divstatus');
}

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

function showLoad(id) {
    var e = document.getElementById(id);
    e.style.display = 'block';
}
function hide(id) {
    //document.getElementById('servicePanel').innerHTML="";
    var e = document.getElementById(id);
    e.style.display = 'none';
}
function show(id) {
    HideSideMenu();
    document.getElementById('myLeftBox').style.display = 'block';
    var e = document.getElementById(id);
    e.style.display = 'block';
}

function showPanel(id) {
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
    setNULL('sideBar1', 1);
}

function setNULL(tab, def) {
    var tr = document.getElementById(tab);
    var items = tr.getElementsByTagName("td");
    for (var i = 0; i < items.length; ++i) {
        items[i].id = "";
    }
    if (def == 1)
        items[0].id = "current";
}
function sideMe(el) {
    setText();
    setNULL('sideBar1', 0);
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


//Page Dynamic URIs
function getEmailQueryURI(id) {
    var sPage = "ServiceDetails.php?mail=cb" + loopFormGetValues(id);
    document.getElementById('mail').innerHTML = "sending mail...";
    $('#mail').load(sPage);
    document.getElementById('txtemail').value = "";
    document.getElementById('txtmsg').value = "";
}


function getContactEmailQueryURI(id) {
    var sPage = "ServiceDetails.php?mail=mail_1" + loopFormGetValues(id);
    document.getElementById('mail_1').innerHTML = "sending mail...";
    $('#mail_1').load(sPage);
    document.getElementById('tname').value = "";
    document.getElementById('temail').value = "";
    document.getElementById('tmob').value = "";
    document.getElementById('tsub').value = "";
    document.getElementById('tmsg').value = "";
}


function submitRegForm(id) {
    var sPage = "database.php?id=regForm" + loopFormGetValues(id);
    if(document.getElementById('tName').value=="") alert("Name Cannot be empty");
    else if(document.getElementById('tEmail').value=="") alert("Email Cannot be empty");
    else if(document.getElementById('tUserName').value=="") alert("UserName Cannot be empty");
    else if(document.getElementById('tPassword').value=="") alert("Password Cannot be empty");
    else {
        document.getElementById('regStatus').innerHTML = "please wait while registration...";
        $('#regStatus').load(sPage);
        //var frmData=$("#regForm").serializeArray();
//        frmData.push({name: "id", value:"regForm"});
//        $.post("database.php",frmData,
//        function(data){
//            $("#regStatus").html(data);
//        }
//        );
    }
}

function submitProfile(id) {
    var sPage = "database.php?id=profile" + loopFormGetValues(id);
    document.getElementById('regStatus').innerHTML = "please wait while updating profile...";
    $('#regStatus').load(sPage);
}
function submitVisitorForm(id) {
    var sPage = "database.php?id=saveVisitor" + loopFormGetValues(id);
    document.getElementById('regStatus').innerHTML = "please wait...";
    $('#regStatus').load(sPage);
}
function submitLogin(id) {
    var sPage = "database.php?id=loginForm" + loopFormGetValues(id);
    if(document.getElementById('tUserName').value=="") alert("UserName Cannot be empty");
    else if(document.getElementById('tPassword').value=="") alert("Password Cannot be empty");
    else {
        document.getElementById('regStatus').innerHTML = "please wait while checking login...";
        $('#regStatus').load(sPage);
    }
}

function deActivateMe(compId){
    var sPage = "database.php?id=deActivateProfile&companyId="+compId;
    document.getElementById('regStatus').innerHTML = "please wait while deactivating...";
    $('#regStatus').load(sPage);
}


function fade(type)
{
    if (type == 'out')
    {
        document.getElementById("mainContentPanel").style.opacity = 0.2;
    }
    if (type == 'in')
    {
        document.getElementById("mainContentPanel").style.opacity = 1;
    }
}


function reviewClickAction(id){
    setTopPanel();
    $("#servicePanel").load("database.php?id=reviewCorner&companyId="+id);
    showPanel('servicePanel');
}
function submitReview(id){
    //sending as POST object to php file
    var msg=document.getElementById("tMyReviewBox_"+id).value;
    if(msg!=""){
        $.post("database.php",{id: "submitReview", companyId: id, msg: msg},
            function(data){
                $("#servicePanel").html(data);
            }
        );
    }
}

function displayMessage(msg){
    alert("Message: "+msg);
}

function searchOverGoogle(msg){
    window.open("http://www.google.co.in/#q="+msg,"_blank");
}
function redirectPage(msg){
    if(msg!="")
        if (msg.indexOf("http:")<0)
            window.open("http://"+msg,"_blank");
        else
            window.open(msg,"_blank");
    else
        alert("No Page to Display");
}


function check(fId) {
  var ext = fId.value;
  ext = ext.substring(ext.length-3,ext.length);
  ext = ext.toLowerCase();
  if(ext!='jpg' && ext!='png' && ext!='gif') {
    alert('You selected a .'+ext+' file; please select a .jpg, .png or .gif file instead!');
    return false; 
    }
  else
    return true; 
}

function clickProfileLink(){
    var companyId=document.getElementById('companyId').innerHTML;
    if (companyId!="")
        $('#servicePanel').load('ServiceDetails.php?getProf=1&companyId='+companyId);
    else
        $('#servicePanel').load('ServiceDetails.php?getProf=1&companyId=0');
}

function clickRegisterLink(){
    var companyId=document.getElementById('companyId').innerHTML;
    if (companyId!="")
        $('#servicePanel').load('ServiceDetails.php?getReg=1&companyId='+companyId);
    else
        $('#servicePanel').load('ServiceDetails.php?getReg=1&companyId=0');
}

function incrementHits(id){
    var val=document.getElementById("hit"+id).innerHTML;
    if(val=="") val=0;
    $("#hitCounter").load("database.php?id=hitCounter&companyId="+id); 
    document.getElementById("hit"+id).innerHTML=parseFloat(val) + 1;
}
function incrementLikes(id){
    var val=document.getElementById("like"+id).innerHTML;
    if(val=="") val=0;
    document.getElementById("like"+id).innerHTML=parseFloat(val) + 1;
    $("#hitCounter").load("database.php?id=likeCounter&feedbackId="+id); 
}

function loadMyDetails(id){
    $('#servicePanel').load('ServiceDetails.php?id='+id+'&myDetail=1');
}


function toggleColor(cell, compId)
{
    var myCellId="forMail"+compId;
    var pos=forEmailComp.indexOf(compId);
if (cell.style.backgroundColor=="white" || cell.style.backgroundColor==""){
    cell.style.backgroundColor = 'lightgray';
    //make a js array to have a list of all selected cells for emailing
    var elm=document.getElementById(myCellId).innerHTML;
    if(pos<=0){
        forEmailComp.push(compId); //adding company id ref for checks
        forEmail.push(elm); //adding actual data corresponding to the ref company
        //get the cost of company and add it to the overall cost
        var cost=document.getElementById("myCost"+compId).innerHTML;
        var costA=document.getElementById("mySelectCost").innerHTML;
        document.getElementById("mySelectCost").innerHTML=parseFloat(costA)+parseFloat(cost);
    }
}
else{
    cell.style.backgroundColor = 'white';
    forEmail.splice(pos,1);
    forEmailComp.splice(pos,1);
    //remove cost from overall cost
        var cost=document.getElementById("myCost"+compId).innerHTML;
        var costA=document.getElementById("mySelectCost").innerHTML;
        document.getElementById("mySelectCost").innerHTML=parseFloat(costA)-parseFloat(cost);
}

}

function sendPlanWedEmailToGuest(id){
    //loop over forEmail and display and send all the data in Guess email tracked by Guess planWdGuess ID
    var emailId=document.getElementById(id).value;
    var emailStatusTag=document.getElementById("emailStatus");
    emailStatusTag.innerHTML="Please wait while sending mail...";
    var emailData="";
    if(emailId!="" && forEmail.length>0){
        for (var i = 0; i < forEmail.length; i++) {
           emailData=emailData+forEmail[i]+"<br/>";
        }
        $.post("serviceDetails.php",{planWedEmail: "1", emailContents: emailData, emailPwGuest: emailId},
        function(data){
            //alert(data);
            $("#emailStatus").html(data);
        }
        );

        forEmail=[];
        forEmailComp=[];
        emailStatusTag.innerHTML="mail sent successfully.";
        //loadHome();
    }else{
        emailStatusTag.innerHTML="Please Enter your email Id and click 'Done' to finish your selection";
        //alert("Please Enter your email Id and click 'Done' to finish your selection");
    }
}

function planWed(orderBy) {
    setText();
    var sPage = "database.php?id=planWed&orderBy="+orderBy;
    $('#mainContentPanel').load(sPage);
}


function listMultipleUploadFile(){
    //get the input and UL list
    var input = document.getElementById('uploadArr');
    var list = document.getElementById('fileList');
    var myFileList="";
    for (var x = 0; x < input.files.length; x++) {
    	myFileList=myFileList+'File ' + (x + 1) + ':  ' + input.files[x].name+"<br/>";
    }
    list.innerHTML=myFileList;
}

function mainContainerBgImage(img){
    var el=document.getElementById("myImageContentPanel");
    el.style.backgroundImage="url('"+img+"')";
    el.style.backgroundRepeat= "no-repeat";
    //el.style.backgroundAttachment="fixed";
    el.style.backgroundPosition= "center center"; 
    el.style.backgroundSize= "100% 100%";
    //el.style.opacity=0.6; 
}