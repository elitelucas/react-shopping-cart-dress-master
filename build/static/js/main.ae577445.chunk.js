(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"products":[{"_id":"dress1","image":"/images/dress1.jfif","title":"Floral Dress","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","L","XL","XXL"],"price":658},{"_id":"dress2","image":"/images/dress2.jfif","title":"Yellow Track Suit","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","M","L"],"price":1235},{"_id":"dress3","image":"/images/dress3.jfif","title":"Red Dots Dress","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","M","L"],"price":963},{"_id":"dress4","image":"/images/dress4.jfif","title":"White Blouse","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["XL"],"price":856},{"_id":"dress5","image":"/images/dress5.jfif","title":"Striped Sweater","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","L","XL"],"price":1090},{"_id":"dress6","image":"/images/dress6.jfif","title":"Midi tea dress in blue and red spot","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["XL","XXL"],"price":1203},{"_id":"dress7","image":"/images/dress7.jfif","title":"Camo Down Vest","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["X","L","XL"],"price":1009},{"_id":"dress8","image":"/images/dress8.jfif","title":"Burgundy T-shirt","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["XL","XXL"],"price":532},{"_id":"dress9","image":"/images/dress9.jfif","title":"Jean Long Sleeve","description":"This is for all the latest trends, no matter who you are, where you\u2019re from and what you\u2019re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.","availableSizes":["XL","XXL"],"price":686}]}')},35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(21),i=a.n(s),l=(a(40),a(15)),o=a.n(l),c=a(22),u=a(16),m=a(9),d=a(10),p=a(12),h=a(11),f=a(17);function y(e){return"\u20b9"+e.toFixed(1)}var b=a(14),v=a(32),E=a.n(v),g=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).openModal=function(e){r.setState({product:e})},r.closeModal=function(){r.setState({product:null})},r.state={product:null},r}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.products,a=e.addToCart,r=this.state.product,s=this.openModal,i=this.closeModal;return n.a.createElement("div",null,n.a.createElement(b.Fade,{bottom:!0,cascade:!0},n.a.createElement("ul",{className:"products"},t.map((function(e){return n.a.createElement("li",{key:e._id},n.a.createElement("div",{className:"product"},n.a.createElement("a",{href:"#"+e._id,onClick:function(){return s(e)}},n.a.createElement("img",{src:e.image,alt:""}),n.a.createElement("p",{className:"product-title"},e.title)),n.a.createElement("div",{className:"product-price"},n.a.createElement("div",null,y(e.price)),n.a.createElement("button",{className:"button primary",onClick:function(){return a(e)}},"Add To Cart"))))})))),r&&n.a.createElement(E.a,{isOpen:!0,onRequestClose:i},n.a.createElement(b.Zoom,null,n.a.createElement("button",{className:"close-modal",onClick:i},"X"),n.a.createElement("div",{className:"product-details"},n.a.createElement("img",{src:r.image,alt:r.title}),n.a.createElement("div",{className:"product-details-description"},n.a.createElement("h3",null,n.a.createElement("strong",null,r.title)),n.a.createElement("h4",null,r.description),n.a.createElement("p",{className:"product-size"},"Avaiable Sizes",n.a.createElement("ul",null,r.availableSizes.map((function(e){return n.a.createElement("li",null,n.a.createElement("button",{className:"button"},e))})))),n.a.createElement("div",{className:"product-price"},n.a.createElement("div",null,y(r.price)),n.a.createElement("button",{className:"button primary",onClick:function(){a(r,i())}},"Add To Cart")))))))}}]),a}(r.Component),S=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.count,a=e.sort,r=e.size,s=e.sortProducts,i=e.filterProducts;return n.a.createElement("div",{className:"filter"},n.a.createElement("div",{className:"filter-result"},t," Products"),n.a.createElement("div",{className:"filter-sort"},"Order "," ",n.a.createElement("select",{value:a,onChange:s},n.a.createElement("option",{value:""},"Latest"),n.a.createElement("option",{value:"lowest"},"Lowest"),n.a.createElement("option",{value:"heighest"},"Highest"))),n.a.createElement("div",{className:"filter-size"},"Filter "," ",n.a.createElement("select",{value:r,onChange:i},n.a.createElement("option",{value:""},"ALL"),n.a.createElement("option",{value:"XS"},"XS"),n.a.createElement("option",{value:"S"},"S"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L"),n.a.createElement("option",{value:"XL"},"XL"),n.a.createElement("option",{value:"XXL"},"XXL"))))}}]),a}(r.Component),C=a(18),O=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).handleInput=function(e){r.setState(Object(C.a)({},e.target.name,e.target.value))},r.createOrder=function(e){e.preventDefault();var t={email:r.state.email,name:r.state.name,address:r.state.address,cartItems:r.props.cartItems};r.props.createOrder(t)},r.state={showCheckout:!1,email:"",name:"",address:""},r}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.cartItems,r=t.removeFromCart,s=this.state.showCheckout,i=this.handleInput,l=this.createOrder;return n.a.createElement("div",null,n.a.createElement("div",null,0===a.length?n.a.createElement("div",{className:"cart cart-header"},"Cart is empty"):n.a.createElement("div",{className:"cart cart-header"},"You have ",a.length," in the cart "," ")),n.a.createElement("div",{className:"cart"},n.a.createElement(b.Fade,{left:!0,cascade:!0},n.a.createElement("ul",{className:"cart-items"},a.map((function(e){return n.a.createElement("li",{key:e._id},n.a.createElement("div",null,n.a.createElement("img",{src:e.image,alt:""})),n.a.createElement("div",null,n.a.createElement("div",null,e.title),n.a.createElement("div",{className:"right"},y(e.price)," x ",e.count," ",n.a.createElement("button",{className:"button",onClick:function(){return r(e)}},"Remove"))))}))))),0!==a.length&&n.a.createElement("div",{className:"cart"},n.a.createElement("div",{className:"total"},n.a.createElement("div",null,"Total:"," ",y(a.reduce((function(e,t){return t.price*t.count+e}),0))),n.a.createElement("button",{className:"button primary",onClick:function(){return e.setState({showCheckout:!0})}},"Proceed"))),s&&n.a.createElement("div",{className:"cart"},n.a.createElement("form",{onSubmit:l},n.a.createElement(b.Fade,{cascade:!0,right:!0},n.a.createElement("ul",{className:"form-container"},n.a.createElement("li",null,n.a.createElement("label",null,"Email"),n.a.createElement("input",{name:"email",type:"email",required:!0,onChange:i})),n.a.createElement("li",null,n.a.createElement("label",null,"Name"),n.a.createElement("input",{name:"name",type:"text",required:!0,onChange:i})),n.a.createElement("li",null,n.a.createElement("label",null,"Address"),n.a.createElement("input",{name:"address",type:"text",required:!0,onChange:i})),n.a.createElement("li",null,n.a.createElement("button",{className:"button primary",type:"submit"},"Checkout")))))))}}]),a}(r.Component),A=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).sortProducts=function(t){var a=t.target.value;e.setState({sort:a,products:f.products.slice().sort((function(e,t){return"lowest"===a?e.price>t.price?1:-1:"heighest"===a?e.price<t.price?1:-1:e._id>t._id?1:-1}))})},e.filterProducts=function(t){""!==t.target.value?e.setState({size:t.target.value,products:f.products.filter((function(e){return e.availableSizes.indexOf(t.target.value)>=0}))}):e.setState({size:t.target.value,products:f.products})},e.addToCart=function(t){var a=e.state.cartItems.slice(),r=!1;a.forEach((function(e){e._id===t._id&&(e.count++,r=!0)})),r||a.push(Object(u.a)(Object(u.a)({},t),{},{count:1})),e.setState({cartItems:a}),localStorage.setItem("cartItems",JSON.stringify(a))},e.removeFromCart=function(t){var a=e.state.cartItems.slice();e.setState({cartItems:a.filter((function(e){return e._id!==t._id}))}),localStorage.setItem("cartItems",JSON.stringify(a.filter((function(e){return e._id!==t._id}))))},e.createOrder=function(){var t=Object(c.a)(o.a.mark((function t(a){var r,n,s,i,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(a),0!=(r=a.cartItems.reduce((function(e,t){return t.price*t.count+e}),0))&&""!=a.email&&""!=a.address&&""!=a.name){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,fetch("/recharge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(Object(u.a)(Object(u.a)({money:r},a),{},{status:0}))});case 6:return n=t.sent,t.next=9,n.json();case 9:s=t.sent,200==n.status?((i=document.createElement("form")).setAttribute("method","post"),i.setAttribute("action",s.url),(l=document.createElement("script")).setAttribute("src","https://checkout.razorpay.com/v1/checkout.js"),l.setAttribute("data-key",s.key),l.setAttribute("data-amount",s.order.amount),l.setAttribute("data-currency",s.order.currency),l.setAttribute("data-order_id",s.order.id),l.setAttribute("data-name","Google Club"),l.setAttribute("data-description","Transaction"),l.setAttribute("data-image",""),l.setAttribute("data-prefill.name",s.email.substr(0,s.email.indexOf("@")-1)),l.setAttribute("data-prefill.email",s.email),l.setAttribute("data-theme.color","#F37254"),i.appendChild(l),(l=document.createElement("input")).setAttribute("type","hidden"),l.setAttribute("custom","Hidden Element"),l.setAttribute("name","hidden"),i.appendChild(l),e.myRef.current.hasChildNodes()&&e.myRef.current.removeChild(e.myRef.current.firstChild),e.myRef.current.appendChild(i),setTimeout((function(){console.log(document.getElementsByClassName("razorpay-payment-button")),document.getElementsByClassName("razorpay-payment-button")[0].click()}),3e3)):alert(s.error);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={products:f.products,cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],size:"",sort:"",visible:!0},e.myRef=n.a.createRef(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.recharge&&this.props.match.params.user&&this.props.match.params.email&&this.props.match.params.money?(this.setState({visible:!1}),Object(c.a)(o.a.mark((function t(){var a,r,n,s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a={}).money=e.props.match.params.money,a.name=e.props.match.params.user,a.email=e.props.match.params.email,a.address=e.props.match.params.recharge,a.status=1,t.next=8,fetch("/recharge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)});case 8:return r=t.sent,t.next=11,r.json();case 11:n=t.sent,200==r.status&&((s=document.createElement("form")).setAttribute("method","post"),s.setAttribute("action",n.url),(i=document.createElement("script")).setAttribute("src","https://checkout.razorpay.com/v1/checkout.js"),i.setAttribute("data-key",n.key),i.setAttribute("data-amount",n.order.amount),i.setAttribute("data-currency",n.order.currency),i.setAttribute("data-order_id",n.order.id),i.setAttribute("data-name","Google Club"),i.setAttribute("data-description","Transaction"),i.setAttribute("data-image",""),i.setAttribute("data-prefill.name",n.email.substr(0,n.email.indexOf("@")-1)),i.setAttribute("data-prefill.email",n.email),i.setAttribute("data-theme.color","#F37254"),s.appendChild(i),(i=document.createElement("input")).setAttribute("type","hidden"),i.setAttribute("custom","Hidden Element"),i.setAttribute("name","hidden"),s.appendChild(i),e.myRef.current.hasChildNodes()&&e.myRef.current.removeChild(e.myRef.current.firstChild),e.myRef.current.appendChild(s),setTimeout((function(){console.log(document.getElementsByClassName("razorpay-payment-button")),document.getElementsByClassName("razorpay-payment-button")[0].click()}),3e3));case 13:case"end":return t.stop()}}),t)})))()):this.props.match.params.recharge&&"success"==this.props.match.params.recharge?alert("Deposit Successfully"):this.props.match.params.recharge&&"failed"==this.props.match.params.recharge&&alert("Deposit Failed")}},{key:"render",value:function(){var e=this.state,t=e.products,a=e.size,r=e.sort,s=e.cartItems,i=e.visible,l=this.sortProducts,o=this.filterProducts,c=this.addToCart,u=this.removeFromCart,m=this.createOrder;return n.a.createElement("div",{className:"grid-container"},n.a.createElement("header",null,n.a.createElement("a",{href:"/"},"Shanti shop")),n.a.createElement("main",null,n.a.createElement("div",{className:"content"},i?n.a.createElement("div",{className:"main"},n.a.createElement(S,{count:t.length,size:a,sort:r,sortProducts:l,filterProducts:o}),n.a.createElement(g,{products:t,addToCart:c})):"",n.a.createElement("div",{className:"sidebar"},i?n.a.createElement(O,{cartItems:s,removeFromCart:u,createOrder:m}):"",n.a.createElement("div",{ref:this.myRef,style:{textAlign:"center"}})))),n.a.createElement("footer",null,n.a.createElement("a",{href:"/about_us.htm",target:"about"},"About US")," \xa0 \xa0 \xa0",n.a.createElement("a",{href:"/contact_us.htm",target:"contact_us"},"Contact US")," \xa0 \xa0 \xa0",n.a.createElement("a",{href:"/shippping_Policy.htm",target:"shipping_Policy"},"Shipping Policy")," \xa0 \xa0 \xa0",n.a.createElement("a",{href:"/privacy_Policy.htm",target:"privacy_Policy"},"Privacy Policy")," \xa0 \xa0 \xa0",n.a.createElement("a",{href:"/Refund_Policy.htm",target:"Refund_Policy"},"Refund Policy")," \xa0 \xa0 \xa0",n.a.createElement("a",{href:"/Terms_and_Conditions.htm",target:"Terms_and_Conditions"},"Terms and Conditions")))}}]),a}(n.a.Component),N=a(33),w=a(1);i.a.render(n.a.createElement(N.a,null,n.a.createElement(w.c,null,n.a.createElement(w.a,{path:"/:recharge?/:user?/:email?/:money?",component:A}))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ae577445.chunk.js.map