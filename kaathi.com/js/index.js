let rs = '₹';
let product_img_base = 'imgs/products/';
let qty = 0;
let priceTag = "#priceTag";
let v_products = {
    1: {
        code: 'prod1',
        desc: 'desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1',
        images: ['1.jpeg'],
        price: 10,
        discount: 0,
        amzlink: 'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'
    },
    2: {
        code: 'prod2',
        desc: 'desc2',
        images: ['1.jpeg'],
        price: 20,
        discount: 10,
        amzlink: 'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'
    },
    3: {
        code: 'prod3',
        desc: 'desc3',
        images: ['1.jpeg'],
        price: 30,
        discount: 0,
        amzlink: 'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'
    },
    4: {
        code: 'prod4',
        desc: 'desc4',
        images: ['1.jpeg'],
        price: 40,
        discount: 20,
        amzlink: 'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'
    },
    5: {
        code: 'prod5',
        desc: 'desc5',
        images: ['1.jpeg'],
        price: 50,
        discount: 0,
        amzlink: 'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'
    },
    6: {
        code: 'prod6',
        desc: 'desc6',
        images: ['1.jpeg'],
        price: 60,
        discount: 30,
        amzlink: 'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'
    }
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
});

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

        let elm1 = '<div>' +
            '<h2>' + pname + ' ' +
            '<span class="btn btn-success" onclick="handleProductClick(\'' + x + '\',\'' + pname + '\',1)"><i class="fa fa-lg fa-plus"></i></span>' +
            ' <span class="btn btn-danger" onclick="handleProductClick(\'' + x + '\',\'' + pname + '\',-1)"><i class="fa fa-lg fa-minus"></i></span>' +
            '</h2>' +
            '</div>';
        let elm2 = '<div><b id="id_prod_desc_"' + x + '>' + desc + '</b></div>';
        let elm3 = '<div><span id="id_img_desc_"' + x + ' class="productImages">' + display_product_images(x, images) + '</span></div>';
        // elm3_1 = '<div><span id="id_basePrice_"' + x + ' >Base Price: ' +rs+price + '</span></div>';
        let elm4 = '<div id="priceTag_' + x + '" class="priceline color1">' + getPriceLine(v_product, qty) + '</div>';
        let elm5 = '<div class="link_logo">' +
            ' <a target="_blank" id="id_amazon_"' + x + ' href="' + amzLink + '">amazon</a>' +
            '</div>';
        let shtml = '<div class="col-lg-12 cenAlign product_box">' + elm1 + elm4 + elm2 + elm3 + elm5 + '</div><br/>';

        $(mainContainer).append(shtml);

        initCart();
        closeRightPanel();
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
        '<i class="fa fa-2x fa-check-square click" onclick="add2cart(\'' + prod.code + '\');"></i></div>';
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
    let elm0="<h2>Cart has 0 item of <span class='badge badge-light text-danger'>"+rs+0+"</span> <span style='cursor: pointer;' class='btn btn-dark' onclick='closeRightPanel()'>Close</span></h2>";
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
        let elm3='<h3>'+prod.code+' <a href="#" class="btn btn-danger" onclick="removeFromCart(\''+prod.code+'\')">X</a></h3>';
        let elm4='<span>'+prod.desc+prod.calci+'</span>';
        let elm5='</div>';
        $(rightContainer).append(elm1+elm3+elm4);

        count+=1;
        Amount+=prod.finalAmount;
    }
    let elm0="<h2>Cart has "+count+" item of <span class='badge badge-light text-danger'>"+rs+Amount+"</span> <span style='cursor: pointer;' class='btn btn-dark' onclick='closeRightPanel()'>Close</span></h2>";
    let elm0_1="<a target='_blank' href='#' class='btn btn-light font-weight-bold'>Pay</a>";
    let elm0_2=" <span class='btn btn-light font-weight-bold' onclick='clearAll()'>Clear</span>";
    let elm0_4="<h4>Thanks for using kaathi.com</h4>";
    $(rightContainer).prepend(elm0+elm0_1+elm0_2+elm0_4);
    $(".cart_bg div i.fa.fa-2x.fa-check-square.click").remove();
    showRightPanel();
    checkOutPayment=Amount; //checkout amount that we may want to charge
}

let showRightPanel=()=>{
    $(rightContainer).css({display:'block'});
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



