var rs='₹';
var product_img_base='imgs/products/';
var v_products={
    1:{name:'prod1', desc:'desc1', images:['1.jpeg'],price:10,discount:0,amzlink:'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'},
    2:{name:'prod2', desc:'desc2', images:['1.jpeg'],price:20,discount:10,amzlink:'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'},
    3:{name:'prod3', desc:'desc3', images:['1.jpeg'],price:30,discount:0,amzlink:'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'},
    4:{name:'prod4', desc:'desc4', images:['1.jpeg'],price:40,discount:20,amzlink:'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'},
    5:{name:'prod5', desc:'desc5', images:['1.jpeg'],price:50,discount:0,amzlink:'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'},
    6:{name:'prod6', desc:'desc6', images:['1.jpeg'],price:60,discount:30,amzlink:'https://www.amazon.in/Mammon-Womens-Leather-Handbag-3L-bib-Cream/dp/B07XKNS6FF/ref=lp_19079038031_1_1?s=shoes&ie=UTF8&qid=1574514565&sr=1-1'}
}
var mainContainer='#id_div_container';
$( document ).ready(function() {
    displayProducts();
});

var displayProducts=()=>{
    for(x in v_products){
        v_product=v_products[x];
        pname=v_product.name;
        desc=v_product.desc;
        images=v_product.images;
        price=v_product.price;
        discount=v_product.discount;
        finalAmount=Math.round(price-price*discount/100,0);
        savedAmount=price-finalAmount;
        amzLink=v_product.amzlink;

        elm1='<div><h1>'+pname+' <span class="btn btn-dark">+</span></h1></div>';
        elm2='<div><b id="id_prod_desc_"'+x+'>'+desc+'</b></div>';
        elm3='<div><span id="id_img_desc_"'+x+' class="productImages">'+display_product_images(x,images)+'</span></div>';
        elm4='<div><span id="id_price_"'+x+'>'+rs+price+'</span> ' +
            '<span id="id_discount_"'+x+'> - '+rs+discount+'%</span> ' +
            '<span id="id_finalPrice_"'+x+'> = '+rs+finalAmount+'</span> ' +
            '<span id="id_saving_"'+x+'>saving: '+rs+savedAmount+'</span> ' +
            '</div>';
        elm5='<div class="link_logo">' +
            ' <a target="_blank" id="id_amazon_"'+x+' href="'+amzLink+'">amazon</a>' +
            ' <a target="_blank"  id="id_flipkart_"'+x+' href="'+amzLink+'">flipkart</a>' +
            ' <a target="_blank"  id="id_paytm_"'+x+' href="'+amzLink+'">paytm</a>' +
            '</div>';
        shtml='<div class="col-lg-12">'+elm1+elm2+elm3+elm4+elm5+'</div><br/>';

        $(mainContainer).append(shtml);
    }
}

var display_product_images=(pid,imgs)=>{
    var sImages='<div class="row">';
    for (i in imgs){
        sImages+='<img class="col-lg-4" src="'+product_img_base+pid+'/'+imgs[i]+'" alt="'+imgs[i]+'" />';
    }
    sImages+='</div>';
    return sImages
}