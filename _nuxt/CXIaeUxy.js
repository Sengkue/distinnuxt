import{_ as d,u as p,r as v,e as g,c as o,a as t,t as e,d as l,F as m,f as c,g as _,o as i}from"./fmsncFvJ.js";const y={class:"product-detail"},w={key:0,class:"container"},f={class:"product-header"},k={class:"product-title"},x={class:"product-rating"},S={class:"product-content"},D={class:"product-image-container"},P=["src"],R={class:"product-info"},h={class:"product-description"},B={class:"product-details"},I={key:0,class:"reviews"},N={class:"review-header"},b={class:"reviewer-name"},C={class:"review-rating"},L={class:"review-comment"},V={class:"review-date"},j={key:1,class:"loading"},F={__name:"[id]",setup(M){const u=p(),n=v(null);return g(async()=>{const{id:a}=u.params,s=await fetch(`https://dummyjson.com/products/${a}`);n.value=await s.json()}),(a,s)=>(i(),o("div",y,[n.value?(i(),o("div",w,[t("div",f,[t("h1",k,e(n.value.title),1),t("p",x,"Rating: "+e(n.value.rating)+" / 5",1)]),t("div",S,[t("div",D,[t("img",{src:n.value.images[0],alt:"Product Image",class:"product-image"},null,8,P)]),t("div",R,[t("p",h,e(n.value.description),1),t("div",B,[t("p",null,[s[0]||(s[0]=t("strong",null,"Category:",-1)),l(" "+e(n.value.category),1)]),t("p",null,[s[1]||(s[1]=t("strong",null,"Price:",-1)),l(" $"+e(n.value.price),1)]),t("p",null,[s[2]||(s[2]=t("strong",null,"Discount:",-1)),l(" "+e(n.value.discountPercentage)+"%",1)]),t("p",null,[s[3]||(s[3]=t("strong",null,"Stock:",-1)),l(" "+e(n.value.stock),1)]),t("p",null,[s[4]||(s[4]=t("strong",null,"Brand:",-1)),l(" "+e(n.value.brand),1)]),t("p",null,[s[5]||(s[5]=t("strong",null,"SKU:",-1)),l(" "+e(n.value.sku),1)]),t("p",null,[s[6]||(s[6]=t("strong",null,"Weight:",-1)),l(" "+e(n.value.weight)+" g",1)]),t("p",null,[s[7]||(s[7]=t("strong",null,"Dimensions:",-1)),l(" "+e(n.value.dimensions.width)+" x "+e(n.value.dimensions.height)+" x "+e(n.value.dimensions.depth)+" mm",1)]),t("p",null,[s[8]||(s[8]=t("strong",null,"Warranty:",-1)),l(" "+e(n.value.warrantyInformation),1)]),t("p",null,[s[9]||(s[9]=t("strong",null,"Shipping:",-1)),l(" "+e(n.value.shippingInformation),1)]),t("p",null,[s[10]||(s[10]=t("strong",null,"Availability:",-1)),l(" "+e(n.value.availabilityStatus),1)]),t("p",null,[s[11]||(s[11]=t("strong",null,"Return Policy:",-1)),l(" "+e(n.value.returnPolicy),1)]),t("p",null,[s[12]||(s[12]=t("strong",null,"Minimum Order:",-1)),l(" "+e(n.value.minimumOrderQuantity),1)])])])]),n.value.reviews.length?(i(),o("div",I,[s[13]||(s[13]=t("h2",null,"Customer Reviews",-1)),(i(!0),o(m,null,c(n.value.reviews,r=>(i(),o("div",{key:r.date,class:"review-card"},[t("div",N,[t("p",b,e(r.reviewerName),1),t("p",C,"Rating: "+e(r.rating)+" / 5",1)]),t("p",L,e(r.comment),1),t("p",V,e(new Date(r.date).toLocaleDateString()),1)]))),128))])):_("",!0)])):(i(),o("div",j,s[14]||(s[14]=[t("p",null,"Loading product details...",-1)])))]))}},W=d(F,[["__scopeId","data-v-9e402ce9"]]);export{W as default};
