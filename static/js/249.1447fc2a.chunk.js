"use strict";(self.webpackChunkTest01=self.webpackChunkTest01||[]).push([[249],{576:function(e,s,i){i.d(s,{Z:function(){return h}});var n=i(439),a=i(434),l=i(791),c=i(304),r=i(617),t=i(93),d=i(275),o=i(164),m=i(820),u=i(184),j=document.querySelector("#modal-root");var x=function(e){var s=e.onClose,i=e.data;return(0,l.useEffect)((function(){var e=function(e){"Escape"===e.code&&s()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[s]),(0,o.createPortal)((0,u.jsx)("div",{onClick:function(e){e.target===e.currentTarget&&s()},children:(0,u.jsx)("div",{className:"overlay",children:(0,u.jsxs)("div",{className:"modal",children:[(0,u.jsx)("button",{onClick:s,type:"button",className:"btnClose",children:(0,u.jsx)(m.oHP,{className:"svgClose"})}),(0,u.jsx)("img",{className:"imgModal",src:i.img,alt:i.model}),(0,u.jsxs)("div",{className:"containerTitleModal",children:[(0,u.jsxs)("ul",{className:"titleModal",children:[(0,u.jsx)("li",{className:"marka",children:i.make}),(0,u.jsx)("li",{className:"modal_m",children:i.model}),(0,u.jsx)("li",{children:i.year})]}),(0,u.jsxs)("div",{className:"infoModal",children:[(0,u.jsx)("div",{className:"infoCarModal",children:(0,u.jsxs)("ul",{className:"containerInfoCar",children:[(0,u.jsx)("li",{children:i.address.split(",")[1]}),(0,u.jsx)("li",{children:i.address.split(",")[2]}),(0,u.jsx)("li",{className:"infoCar",children:i.city}),(0,u.jsx)("li",{className:"infoCar",children:i.address}),(0,u.jsxs)("li",{className:"infoCar",children:["id: ",i.id]}),(0,u.jsxs)("li",{className:"infoCar",children:["year: ",i.year]}),(0,u.jsxs)("li",{className:"infoCar",children:["type: ",i.type]}),(0,u.jsxs)("li",{className:"infoCar",children:["Fuel Consumption: ",i.fuelConsumption]}),(0,u.jsxs)("li",{className:"infoCar",children:["Engine Size: ",i.engineSize]})]})}),(0,u.jsx)("div",{className:"description",children:i.description}),(0,u.jsx)("p",{className:"Accessories",children:"Accessories and functionalities:"}),(0,u.jsxs)("ul",{className:"AccessoriesInfo",children:[i.accessories.map((function(e,s){return(0,u.jsx)("li",{className:"accessoriesInfoList",children:e},s)})),i.functionalities.map((function(e,s){return(0,u.jsx)("li",{className:"accessoriesInfoList",children:e},s)}))]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{className:"rentalCredition",children:"Rental Conditions:"}),(0,u.jsxs)("ul",{className:"list_item",children:[(0,u.jsxs)("li",{className:"item",children:["Minimum age:"," ",(0,u.jsx)("span",{className:"item_span",children:(new Date).getFullYear()-i.year})]}),(0,u.jsx)("li",{className:"item",children:i.rentalConditions.split("\n")[1]}),(0,u.jsx)("li",{className:"item",children:i.rentalConditions.split("\n")[2]}),(0,u.jsxs)("li",{className:"item",children:["Mileage:"," ",(0,u.jsx)("span",{className:"item_span",children:i.mileage.toLocaleString("en-US")})]}),(0,u.jsxs)("li",{className:"item",children:["Price: ",(0,u.jsx)("span",{className:"item_span",children:i.rentalPrice})]})]})]})]})]}),(0,u.jsx)("a",{href:"tel:+380730000000",className:"RentalCar",children:(0,u.jsx)("span",{children:"Rental car"})})]})})}),j)},h=function(e){var s=e.model,i=e.make,o=e.id,m=e.img,j=e.year,h=e.address,f=e.rentalPrice,N=e.rentalCompany,p=e.type,C=e.functionalities,v=e.fuelConsumption,y=e.engineSize,g=e.description,k=e.accessories,b=e.rentalConditions,w=e.mileage,_=e.city,S=(0,l.useState)(!1),M=(0,n.Z)(S,2),L=M[0],P=M[1],z=(0,a.I0)(),E=(0,a.v9)(t.W7).some((function(e){return e.id===o}));return(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)("ul",{className:"card_ul",children:(0,u.jsxs)("li",{className:"card",children:[(0,u.jsxs)("div",{className:"image",children:[(0,u.jsx)("img",{className:"image_car",src:m,alt:"car"}),(0,u.jsx)("button",{onClick:function(){!function(e){z((0,d.j)({id:e}))}(o)},className:"buttonHeart",children:E?(0,u.jsx)(r.wkn,{className:"icon",style:{fill:"blue",color:"blue"}}):(0,u.jsx)(r.wkn,{className:"icon"})})]}),(0,u.jsxs)("div",{className:"wrapper",children:[(0,u.jsxs)("p",{className:"type_car",children:[i," ",(0,u.jsx)("span",{style:{color:"#3470FF"},children:s}),", ",j]}),(0,u.jsx)("p",{className:"type_car",children:f})]}),(0,u.jsxs)("ul",{className:"address_car",children:[(0,u.jsx)("li",{children:h.split(",")[1]}),(0,u.jsx)("li",{children:h.split(",")[2]}),(0,u.jsx)("li",{children:N}),(0,u.jsx)("li",{children:p}),(0,u.jsx)("li",{children:s}),(0,u.jsx)("li",{children:w}),(0,u.jsx)("li",{children:k[0]})]}),(0,u.jsx)("button",{className:"btn",type:"button",onClick:function(){P(!0),z((0,c.Z)(o))},children:"Learn more"})]},o)}),L&&(0,u.jsx)(x,{onClose:function(){P(!1)},data:{make:i,year:j,rentalPrice:f,address:h,rentalCompany:N,type:p,accessories:k,mileage:w,model:s,id:o,fuelConsumption:v,engineSize:y,description:g,functionalities:C,img:m,rentalConditions:b,city:_}})]})}},249:function(e,s,i){i.r(s);var n=i(413),a=i(434),l=i(93),c=i(576),r=i(184);s.default=function(){var e=(0,a.v9)(l.Rn),s=(0,a.v9)((function(e){return e.favorite}));return(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"container_cards",children:s.length>0?function(e,s){return e.filter((function(e){return s.some((function(s){return e.id===s.id}))}))}(e,s).map((function(e){return(0,r.jsx)(c.Z,(0,n.Z)({},e),e.id)})):(0,r.jsxs)("h2",{style:{display:"flex",justifyContent:"center",fontWeight:"700",fontSize:"36px"},children:[" ","No cards"," "]})})})}}}]);
//# sourceMappingURL=249.1447fc2a.chunk.js.map