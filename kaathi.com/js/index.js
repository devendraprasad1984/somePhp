let rs = '₹';
let product_img_base = 'imgs/products/';
let qty = 0;
let priceTag = "#priceTag";
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
    ,line6:'send form goes here'
    ,line5:'map info'
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
let rightContainer="#id_div_right_container";
let cartObj = {}
let checkOutPayment=0;

$(document).ready(function () {
    // toastr.options = {
    //     "closeButton": true,
    //     "debug": false,
    //     "newestOnTop": false,
    //     "progressBar": true,
    //     "preventDuplicates": true,
    //     "onclick": null,
    //     "showDuration": "100",
    //     "hideDuration": "500",
    //     "timeOut": "2000",
    //     "extendedTimeOut": "5000",
    //     "showEasing": "swing",
    //     "hideEasing": "linear",
    //     "showMethod": "show",
    //     "hideMethod": "hide"
    // };
    displayProducts();
    prepareViewMobileReady();
});

let prepareViewMobileReady=()=>{
    if(isMobileDevice()){
        $("header").removeClass("fixed-top");
        $("body").css({'margin-top':'-90px'});
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
        v_product["qty"] = 0;

        let elm1 = '<div style="padding: 2px;">' +
            '<h2>' + pname + ' ' +
            '<span class="btn btn-danger pull-right" onclick="handleProductClick(\'' + x + '\',\'' + pname + '\',-1)"><i class="fa fa-lg fa-minus"></i></span>' +
            '<span class="btn btn-success pull-right" onclick="handleProductClick(\'' + x + '\',\'' + pname + '\',1)"><i class="fa fa-lg fa-plus"></i></span>' +
            '</h2>' +
            '</div>';
        let elm2 = '<div><b id="id_prod_desc_' + x + '">' + desc + '</b></div>';
        let elm3 = '<div><span id="id_img_desc_' + x + '" class="productImages">' + display_product_images(x, images) + '</span></div>';
        // elm3_1 = '<div><span id="id_basePrice_"' + x + ' >Base Price: ' +rs+price + '</span></div>';
        let elm4 = '<div id="priceTag_' + x + '" class="priceline color1">' + getPriceLine(v_product, qty) + '</div>';
        let elm5 = '<div class="link_logo">' +
            ' <a target="_blank" id="id_amazon_"' + x + ' href="' + amzLink + '">amazon</a>' +
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
        '<span class="btn btn-light" onclick="add2cart(\'' + prod.code + '\');">add to cart <i class="fa fa-check-square" ></i></span></div>';
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
    let elm1='<div id="id_contact_page"><h2 onclick="closeRightPanel()">Contact Us</h2>';
    let shtml=elm1;
    for(let i in v_contact_page){
        let line=v_contact_page[i];
        let sline=(typeof line===Array?line.join(' '):line);
        shtml+='<div id="contact_page_"'+i+'>'+sline+'</div>'
    }
    $(rightContainer).html(shtml);
    showRightPanel();
}

let makeProductPage=()=>{
    let elm1='<div id="id_product_page"><h2 onclick="closeRightPanel()">Our Products</h2>';
    let shtml=elm1;
    for(let i in v_product_categories){
        let line=v_product_categories[i];
        shtml+='<div id="id_product_page_'+i+'"><span class="btn btn-outline-dark" title="'+line.type+' - '+line.details+'" onclick="clickOnProductCategory(\''+i+'\')">'+line.name+'</span></div>'
    }
    $(rightContainer).html(shtml);
    showRightPanel();
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
    if($(rightContainer).is(":visible")){
        displayCart(cartObj);
    }
}

let initCart=()=>{
    $(rightContainer).empty();
    let elm0="<h2 onclick='closeRightPanel()'>Cart has 0 item of <span class='badge badge-light text-danger'>"+rs+0+"</span></h2>";
    let elm0_1="<span class='btn btn-light font-weight-bold disabled'>Pay</span>";
    let elm0_2=" <span class='btn btn-light font-weight-bold disabled' onclick='clearAll()'>Clear</span>";
    let elm0_4="<h4>Thanks for using kaathi.com</h4>";
    $(rightContainer).append(elm0+elm0_1+elm0_2+elm0_4);
}

var displayCart = () => {
    $(rightContainer).empty();
    let count=0;
    let Amount=0;
    for (o in cartObj) {
        let prod = cartObj[o];
        let elm1='<div class="xcard">';
        let elm3='<h3>'+prod.code+' <a href="#" class="btn btn-primary pull-right" onclick="removeFromCart(\''+prod.code+'\')">Remove</a></h3>';
        let elm4='<span>'+prod.desc+prod.calci+'</span>';
        let elm5='</div>';
        $(rightContainer).append(elm1+elm3+elm4);

        count+=1;
        Amount+=prod.finalAmount;
    }
    let elm0="<h2 onclick='closeRightPanel()'>Cart has "+count+" item of <span class='badge badge-light text-danger'>"+rs+Amount+"</span></h2>";
    let elm0_1="<a target='_blank' href='#' class='btn btn-light font-weight-bold'>Pay</a>";
    let elm0_2=" <span class='btn btn-light font-weight-bold' onclick='clearAll()'>Clear</span>";
    let elm0_4="<h4>Thanks for using kaathi.com</h4>";
    $(rightContainer).prepend(elm0+elm0_1+elm0_2+elm0_4);
    $(".cart_bg div span.btn").remove();
    showRightPanel();
    checkOutPayment=Amount; //checkout amount that we may want to charge
}

let showRightPanel=()=>{
    if(!$(rightContainer).is(":visible")) {
        $(rightContainer).css({display: 'block'});
    }
}
let closeRightPanel=()=>{
    $(rightContainer).css({display:'none'});
}

let removeFromCart=(pid)=>{
    delete cartObj[pid];
    displayCart();
}

let clearAll=()=>{
    checkOutPayment=0;
    $(rightContainer).empty();
    displayProducts();
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

let handleProductClick = (pid, pname, qty) => {
    selectedProduct = v_products[pid];
    if (selectedProduct.qty == undefined) selectedProduct.qty = 0;
    selectedProduct.qty += qty;
    if (selectedProduct.qty <= 0) selectedProduct.qty = 0;
    let sUpdatedPrice = getPriceLine(selectedProduct, selectedProduct.qty);
    selectedProduct.calci = sUpdatedPrice;
    $(priceTag + '_' + pid).html(sUpdatedPrice);
}

let move2top=()=>{
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

