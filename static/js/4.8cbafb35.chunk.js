(this["webpackJsonpcoffeeroasters-react"]=this["webpackJsonpcoffeeroasters-react"]||[]).push([[4],{50:function(e,r,o){e.exports={orderSummaryModalContainer:"_order-modal_orderSummaryModalContainer__3gKY8",orderSummaryModalBox:"_order-modal_orderSummaryModalBox__1js12",orderModalTitleContainer:"_order-modal_orderModalTitleContainer__1zClt",orderModalTitleBox:"_order-modal_orderModalTitleBox__lgVXI",orderModalTitle:"_order-modal_orderModalTitle__2hiHc",orderModalTextBox:"_order-modal_orderModalTextBox__1ffuf",confirmTextBox:"_order-modal_confirmTextBox__1adr9",confirmText:"_order-modal_confirmText__1om6m",submitOrderBtnMobile:"_order-modal_submitOrderBtnMobile__3HjM0",submitOrderBtnLg:"_order-modal_submitOrderBtnLg__XWSY4",orderText:"_order-modal_orderText__1YJ3B",showOrderModal:"_order-modal_showOrderModal__1n0ZK",orderModalText:"_order-modal_orderModalText__9yzRl",total:"_order-modal_total__3oZqS",checkoutTotalContainerLg:"_order-modal_checkoutTotalContainerLg__2l_Ds"}},52:function(e,r,o){"use strict";o.r(r);var t=o(1),a=o(30),d=o.n(a),n=o(4),s=o(16),c=o(23),l=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),i=function(e,r){var o=null;return"Every week"===r&&"250g"===e?(o=42.8,l.format(o).toString()):"Every 2 weeks"===r&&"250g"===e?(o=36.45,l.format(o).toString()):"Every month"===r&&"250g"===e?(o=34.5,l.format(o).toString()):"Every week"===r&&"500g"===e?(o=66,l.format(o).toString()):"Every 2 weeks"===r&&"500g"===e?(o=52.25,l.format(o).toString()):"Every month"===r&&"500g"===e?(o=44.5,l.format(o).toString()):"Every week"===r&&"1000g"===e?(o=102,l.format(o).toString()):"Every 2 weeks"===r&&"1000g"===e?(o=81.25,l.format(o).toString()):"Every month"===r&&"1000g"===e?(o=64.5,l.format(o).toString()):void 0},m=o(50),u=o.n(m),_=o(0);r.default=Object(n.g)((function(e){var r=e.history,o=Object(t.useRef)(),a=Object(t.useContext)(s.a),n=a.orderData,l=a.setOrderData,m=Object(t.useContext)(c.a),x=m.showOrderModal,f=m.setShowOrderModal,j=x?u.a.showOrderModal:"";Object(t.useEffect)((function(){"Capsule"===n.drinkType?o.current.style.display="none":o.current.style.display="initial"}),[n.drinkType]);var y="Capsule"===n.drinkType?"".concat(n.drinkType,"s"):n.drinkType,h="Capsule"===n.drinkType?Object(_.jsx)("span",{style:{color:"#83888f"},children:"using"}):Object(_.jsx)("span",{style:{color:"#83888f"},children:"as"}),T=function(){r.push("/"),f(!1),l({drinkType:"",coffeeType:"",coffeeAmount:"",grindType:"",deliveryType:""})};return d.a.createPortal(Object(_.jsx)("div",{className:"".concat(u.a.orderSummaryModalContainer," ").concat(j),"aria-modal":"true",children:Object(_.jsxs)("div",{className:u.a.orderSummaryModalBox,children:[Object(_.jsx)("div",{className:u.a.orderModalTitleContainer,children:Object(_.jsx)("div",{className:u.a.orderModalTitleBox,children:Object(_.jsx)("h1",{className:u.a.orderModalTitle,children:"order summary"})})}),Object(_.jsx)("div",{className:u.a.orderModalTextBox,children:Object(_.jsxs)("p",{className:u.a.orderModalText,children:["\u201cI drink my coffee"," ",Object(_.jsxs)("span",{className:u.a.orderText,children:[" ",h," ",y]}),", with a"," ",Object(_.jsxs)("span",{className:u.a.orderText,children:[" ",n.coffeeType]})," ","type of bean."," ",Object(_.jsxs)("span",{className:u.a.orderText,children:[" ",n.coffeeAmount]})," ",Object(_.jsxs)("span",{ref:o,children:["ground ala"," ",Object(_.jsxs)("span",{className:u.a.orderText,children:[" ",n.grindType]}),","," "]}),"sent to me"," ",Object(_.jsxs)("span",{className:u.a.orderText,children:[" ",n.deliveryType]}),".\u201d"]})}),Object(_.jsx)("div",{className:u.a.confirmTextBox,children:Object(_.jsx)("p",{className:u.a.confirmText,children:"Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout."})}),Object(_.jsxs)("button",{className:u.a.submitOrderBtnMobile,onClick:function(){return T()},children:["Checkout -",Object(_.jsx)("span",{className:u.a.total,children:i(n.coffeeAmount,n.deliveryType)})," ","/ mo"]}),Object(_.jsxs)("div",{className:u.a.checkoutTotalContainerLg,children:[Object(_.jsxs)("span",{className:u.a.total,children:[i(n.coffeeAmount,n.deliveryType)," / mo"]})," ",Object(_.jsx)("button",{className:u.a.submitOrderBtnLg,onClick:function(){return T()},children:"Checkout"})]})]})}),document.getElementById("order-modal"))}))}}]);
//# sourceMappingURL=4.8cbafb35.chunk.js.map