let rs = '₹';
let product_img_base = 'imgs/products/';
let priceTag = '#priceTag';
let v_bottom_cart_icon='#id_bottom_cart_icon';
let isDesktop=false;
let cart_final_amt='cart_final_amt';
let cart_final_qty='cart_final_qty';
let v_products = {
    1: {
        category:'category1',
        code: 'prod1',
        desc: 'desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1',
        images: ['1.jpeg'],
        price: 10,
        discount: 0,
        amzlink: 'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'
    },
    2: {
        category:'category1',
        code: 'prod2',
        desc: 'desc2',
        images: ['1.jpeg'],
        price: 20,
        discount: 10,
        amzlink: 'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'
    },
    3: {
        category:'category2',
        code: 'prod3',
        desc: 'desc3',
        images: ['1.jpeg'],
        price: 30,
        discount: 0,
        amzlink: 'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'
    },
    4: {
        category:'category4',
        code: 'prod4',
        desc: 'desc4',
        images: ['1.jpeg'],
        price: 40,
        discount: 20,
        amzlink: 'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'
    },
    5: {
        category:'category2',
        code: 'prod5',
        desc: 'desc5',
        images: ['1.jpeg'],
        price: 50,
        discount: 0,
        amzlink: 'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'
    },
    6: {
        category:'category4',
        code: 'prod6',
        desc: 'desc6',
        images: ['1.jpeg'],
        price: 60,
        discount: 30,
        amzlink: 'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'
    }
}
let v_contact_page={
    line1:['D155 sector8']
    ,line2:['Bagdola']
    ,line3:['new delhi - 110077']
    ,line4:['near dwarka sector 8 metro station']
    ,line6:'<div><textarea placeholder="Message" class="form-control" type="textarea" id="message" name="message" maxlength="6000" rows="7"></textarea>' +
        '<input type="text" placeholder="Name" class="form-control" id="name" name="name" required>' +
        '<input type="email" placeholder="Email" class="form-control" id="email" name="email" required>' +
        '<button type="submit" class="btn btn-primary pull-right" onClick="sendMessage()" >Send</button>' +
        '</div>'
    ,line5:'<div>' +
        '<span class="btn btn-warning" onclick="addressOnMap(51.508742,-0.120850)">View on Map</span>' +
        '<div id="addressMap"></div>' +
        '</div>'
}
let v_product_categories={
    category1:{name:'category1',type:'type1',details:'detail1'},
    category2:{name:'category2',type:'type1',details:'detail1'},
    category3:{name:'category3',type:'type1',details:'detail1'},
    category4:{name:'category4',type:'type1',details:'detail1'},
    category5:{name:'category5',type:'type1',details:'detail1'},
    category6:{name:'category6',type:'type1',details:'detail1'},
    category7:{name:'category7',type:'type1',details:'detail1'},
    category8:{name:'category8',type:'type1',details:'detail1'},
    category9:{name:'category9',type:'type1',details:'detail1'},
    category10:{name:'category10',type:'type1',details:'detail1'}
}
let mainContainer = '#id_div_container';
let selectedProduct = {}
let rightContainer='#id_div_right_container';
let cartObj = {}
let checkOutPayment=0;

$(document).ready(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "50",
        "hideDuration": "50",
        "timeOut": "1000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "show",
        "hideMethod": "hide"
    };
    displayProducts();
    prepareViewMobileReady();
});

let prepareViewMobileReady=()=>{
    isDesktop=isMobileDevice();
    if(isDesktop){
        $("header").removeClass("fixed-top");
        $("body").css({'margin-top':'-90px'});
    }else{
    }
}

let displayProducts = () => {
    checkOutPayment=0;
    $(mainContainer).empty();
    for (x in v_products) {
        let v_product = v_products[x];
        let pname = v_product.code;
        let desc = v_product.desc;
        let images = v_product.images;
        let price = v_product.price;
        let amzLink = v_product.amzlink;
        // if(v_product["qty"]===undefined)
        v_product["qty"] = 0;

        let elm1 = '<div style="padding: 2px;">' +
            '<h2>' + pname + ' ' +
            '<span class="btn btn-light pull-right" onclick="handleProductClick(\'' + pname + '\',-1)"><i class="fa fa-lg fa-minus"></i></span>' +
            '<span class="btn btn-light pull-right" onclick="handleProductClick(\'' + pname + '\',1)"><i class="fa fa-lg fa-plus"></i></span>' +
            '</h2>' +
            '</div>';
        let elm2 = '<div><b id="id_prod_desc_' + pname + '">' + desc + '</b></div>';
        let elm3 = '<div><span id="id_img_desc_' + pname + '" class="productImages">' + display_product_images(x, images) + '</span></div>';
        // elm3_1 = '<div><span id="id_basePrice_"' + x + ' >Base Price: ' +rs+price + '</span></div>';
        let elm4 = '<div id="priceTag_' + pname + '" class="priceline color1">' + getPriceLine(v_product, v_product["qty"]) + '</div>';
        let elm5 = '<div class="link_logo">' +
            ' <a target="_blank" id="id_amazon_"' + pname + ' href="' + amzLink + '">amazon</a>' +
            '</div>';
        let shtml = '<div class="col-lg-12 cenAlign product_box">' + elm1 + elm4 + elm2 + elm3 + elm5 + '</div><br/>';
        $(mainContainer).append(shtml);
        initCart();
        // closeRightPanel();
    }
}

let getCalci = (prod, qty) => {
    let discount = prod.discount;
    let price = prod.price * qty;
    let finalAmount = Math.round(price - price * discount / 100, 0);
    let savedAmount = price - finalAmount;
    let objCalc = {price, discount, finalAmount, savedAmount, qty};
    prod.finalAmount = finalAmount;
    return objCalc;
}
let getPriceLine = (prod, qty) => {
    let x = getCalci(prod, qty);
    let shtml = '<div><span>' + rs + prod.price + '*' + qty + '</span> ' +
        '<span> - ' + rs + x.savedAmount + '(' + x.discount + '%)</span> ' +
        '<span> = ' + rs + x.finalAmount + '</span> ' +
        '<span class="btn btn-light pull-right" title="'+x.qty+' qty selected" onclick="add2cart(\'' + prod.code + '\');"><i class="fa fa-shopping-cart" ></i> <i class="fa fa-check-square" ></i> </span></div>';
    return shtml;
}

let display_product_images = (pid, imgs) => {
    var sImages = '<div class="row">';
    for (i in imgs) {
        sImages += '<img class="col-lg-4" src="' + product_img_base + pid + '/' + imgs[i] + '" alt="' + imgs[i] + '" />';
    }
    sImages += '</div>';
    return sImages
}

let makeContactPage=()=>{
    let elm1='<div id="id_contact_page"><h2>Contact Us</h2>';
    let shtml=elm1;
    for(let i in v_contact_page){
        let line=v_contact_page[i];
        let sline=(typeof line===Array?line.join(' '):line);
        shtml+='<div id="contact_page_"'+i+'>'+sline+'</div>'
    }
    shtml+='</div>';
    $(rightContainer).html(shtml);
    showRightPanel();
    move2top();
}

let makeProductPage=()=>{
    let elm1='<div id="id_product_page"><h2>Our Products</h2>';
    let shtml=elm1;
    for(let i in v_product_categories){
        let line=v_product_categories[i];
        shtml+='<div id="id_product_page_'+i+'"><span class="btn btn-outline-dark" title="'+line.type+' - '+line.details+'" onclick="clickOnProductCategory(\''+i+'\')">'+line.name+'</span></div>'
    }
    shtml+='</div>';
    $(rightContainer).html(shtml);
    showRightPanel();
    move2top();
}

let clickOnProductCategory=(category)=>{
    console.log(category +" is clicked");
    closeRightPanel();
}


let add2cart = (xid) => {
    let prods = getProductByCode(xid);
    if (prods.qty === undefined || prods.qty <= 0 || prods.finalAmount <= 0) {
        toastr.error("choose min 1 qty");
        return;
    }
    if (cartObj.hasOwnProperty(xid)) {
        if (cartObj[xid].qty == prods.qty) {
            toastr.error(xid + " is already present. no qty changed");
            return;
        }
    }
    cartObj[xid] = JSON.parse(JSON.stringify(prods)); //deep copy of object
    toastr.success(xid + "-" + cartObj[xid].qty + " unit(s) added");
    manage_bottom_cart_icon_count();
    if($(rightContainer).is(":visible")){
        displayCart(cartObj);
    }
}

let initCart=()=>{
    $(rightContainer).empty();
    let elm0="<h4>Cart has 0 item of <span class='badge badge-light text-danger'>"+rs+0+"</span></h4>";
    $(rightContainer).append(elm0);
    if(isDesktop)
        showRightPanel();
}

var displayCart = () => {
    $(rightContainer).empty();
    let count=0;
    let Amount=0;
    for (o in cartObj) {
        let prod = cartObj[o];
        let elm1='<div class="xcard" id="id_cart_'+prod.code+'">';
        let elm3='<h3>'+prod.code+' <a href="#" class="btn btn-primary pull-right" onclick="removeFromCart(\''+prod.code+'\')">Remove</a></h3>';
        let elm4='<span>'+prod.desc+prod.calci+'</span>';
        let elm5='</div>';
        $(rightContainer).append(elm1+elm3+elm4);
        count+=1;
        Amount+=prod.finalAmount;
    }
    let elm0="<h4>Cart has <span id='"+cart_final_qty+"'>"+count+"</span> item of "+rs+"<span id='"+cart_final_amt+"' class='badge badge-light text-danger'>"+Amount+"</span></h4>";
    let elm0_1="<a target='_blank' href='#' class='btn btn-light font-weight-bold'>Pay</a>";
    let elm0_2=" <span class='btn btn-light font-weight-bold' onclick='clearAll()'>Clear</span>";
    let elm0_4="<h4>Thanks for using kaathi.com</h4>";
    $(rightContainer).prepend(elm0+elm0_1+elm0_2+elm0_4);
    manage_bottom_cart_icon_count();
    $(".cart_bg div span.btn").remove();
    checkOutPayment=Amount; //checkout amount that we may want to charge
    showRightPanel();
    move2top();
}

let getCloseText=()=>{
    let elm='<span class="btn btn-danger pull-right" onclick="closeRightPanel();">Close</span>';
    return elm;
}

let showRightPanel=()=>{
    $(rightContainer).prepend(getCloseText());
    if(!$(rightContainer).is(":visible")) {
        $(rightContainer).css({display: 'block'});
    }
}
let closeRightPanel=()=>{
    $(rightContainer).css({display:'none'});
}

let clickCartBadge=()=>{
    move2top();
    if(!$(rightContainer).is(":visible")) {
        displayCart();
    }
}


let removeFromCart=(code)=>{
    let curcart=cartObj[code];
    let prod=getProductByCode(code);
    // displayCart();
    prod.qty=0;
    //trying to boost performance by not reloading cart object from scratch
    $("#id_cart_"+code).remove();
    $(priceTag+'_'+code).html(getPriceLine(prod,0));

    let amtid='#'+cart_final_amt;
    let qtyid='#'+cart_final_qty;
    $(qtyid).html(parseFloat($(qtyid).html())-1);
    $(amtid).html(parseFloat($(amtid).html())-curcart.finalAmount);
    manage_bottom_cart_icon_count();

    delete cartObj[code];
}

let manage_bottom_cart_icon_count=()=>{
    let iconid=v_bottom_cart_icon+" span.badge-danger";
    // $(iconid).html(parseInt($(iconid).html())+qty);
    $(iconid).html(Object.keys(cartObj).length);
}

let clearAll=()=>{
    checkOutPayment=0;
    cartObj={};
    $(rightContainer).empty();
    displayProducts();
    closeRightPanel();
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


let getProductByCode = (code) => {
    let pr = {}
    for (i in v_products) {
        if (v_products[i].code == code) {
            pr = v_products[i];
            break;
        }
    }
    return pr;
}

let handleProductClick = (pname, qty) => {
    selectedProduct = getProductByCode(pname);
    if (selectedProduct.qty == undefined) selectedProduct.qty = 0;
    selectedProduct.qty += qty;
    if (selectedProduct.qty <= 0) selectedProduct.qty = 0;
    // console.log(selectedProduct)
    let sUpdatedPrice = getPriceLine(selectedProduct, selectedProduct.qty);
    selectedProduct.calci = sUpdatedPrice;
    $(priceTag + '_' + pname).html(sUpdatedPrice);
}

let move2top=()=>{
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    // window.scroll(0, -100);
    // $('html,body').scrollTop(-500);
    // document.location.href="#top";
}

let addressOnMap=(lat,lang)=> {
    // var mapProp= {
    //     center:new google.maps.LatLng(lat,lang),
    //     zoom:5,
    // };
    // var map = new google.maps.Map(document.getElementById('addressMap'),mapProp);
    toastr.info("in progress");
}

let sendMessage=()=>{
    toastr.success("message has been sent");
}
