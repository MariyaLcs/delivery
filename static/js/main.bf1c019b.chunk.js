(this["webpackJsonprainbowhaven-react-frontend1"]=this["webpackJsonprainbowhaven-react-frontend1"]||[]).push([[0],{157:function(e,a,t){e.exports=t(368)},162:function(e,a,t){},164:function(e,a,t){},366:function(e,a,t){},367:function(e,a,t){},368:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(64),m=t.n(n),r=t(13),o=(t(162),t(163),t(164),t(3)),s=t(96),i=t(2),d=t(37),u=t.n(d);var p=function(e){var a=Object(o.f)();return c.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4"},c.a.createElement("div",{className:"Item__card card text-center m-2"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"".concat(e.completed?"text-muted complete":"Item__card-title"," card-title")},"Name: ",e.full_name),c.a.createElement("h4",{className:"".concat(e.completed?"text-muted complete":"Item__card-title"," card-title")},"Email: ",e.email),c.a.createElement("h4",{className:"".concat(e.completed?"text-muted complete":"Item__card-title"," card-title")},"Phone: ",e.phone),c.a.createElement("h4",{className:"".concat(e.completed?"text-muted complete":"Item__card-title"," card-title")},"Address: ",e.address),c.a.createElement("h4",{className:"".concat(e.completed?"text-muted complete":"Item__card-title"," card-title")},"Postcode: ",e.postcode),c.a.createElement("h4",{className:"".concat(e.completed?"text-muted complete":"Item__card-title"," card-title")},"Zone: ",e.zone)),c.a.createElement("div",{className:"card-footer text-muted bg-light"},e.completed?c.a.createElement("h4",{className:"text-muted complete"},"Status: Delivered"):c.a.createElement("div",null,c.a.createElement("h4",{className:"Item__card-title"},"Status: Awaiting delivery"),c.a.createElement("small",null,"Created ",u()(e.createDate).calendar()))),c.a.createElement("div",{className:"card-footer text-muted bg-light"},!e.completed&&c.a.createElement("button",{className:"btn btn-sm mr-3 Item__button",type:"button",onClick:function(){console.log("The complete button has been clicked!"),e.completeDelivery(e.id)}},c.a.createElement("i",{className:"fa fa-thumbs-up"})),!e.completed&&c.a.createElement("button",{className:"btn btn-sm mr-3 Item__button",type:"button",onClick:function(e){e.preventDefault(),a.push("/pickUp-Volunteer")}},c.a.createElement("i",{className:"fa fa-truck"})),c.a.createElement("button",{className:"btn btn-sm Item__button",type:"button",onClick:function(){console.log("The delete button has been clicked!"),e.deleteClient(e.id)}},c.a.createElement("i",{className:"fa fa-trash"})))))};var E=function(e){return c.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4"},c.a.createElement("div",{className:"Volunteer__card card text-center m-2"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",null,"Name: ",e.full_name),c.a.createElement("h4",null,"Email: ",e.email),c.a.createElement("h4",null,"Phone: ",e.phone),c.a.createElement("h4",null,"Address: ",e.address),c.a.createElement("h4",null,"Postcode: ",e.postcode),c.a.createElement("h4",null,"Password: ",e.password),c.a.createElement("h4",null,"Zone: ",e.zone)),c.a.createElement("div",{className:"card-footer text-muted bg-light"},c.a.createElement("button",{className:"btn btn-sm Item__button",type:"button",onClick:function(){e.deleteVolunteer(e.volunteer_Id)}},c.a.createElement("i",{className:"fa fa-trash"})))))};var v=function(e){var a=Object(l.useState)(""),t=Object(i.a)(a,2),n=t[0],m=t[1],r=Object(l.useState)(""),o=Object(i.a)(r,2),s=o[0],d=o[1],u=Object(l.useState)(""),p=Object(i.a)(u,2),E=p[0],v=p[1],N=Object(l.useState)(""),f=Object(i.a)(N,2),h=f[0],b=f[1],g=Object(l.useState)(""),_=Object(i.a)(g,2),y=_[0],x=_[1],w=Object(l.useState)(""),j=Object(i.a)(w,2),O=j[0],k=j[1];return c.a.createElement(l.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card p4"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"text-center"},"Register new client"),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",onChange:function(e){m(e.target.value)},value:n}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",onChange:function(e){d(e.target.value)},value:s}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Phone",onChange:function(e){v(e.target.value)},value:E}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Address",onChange:function(e){b(e.target.value)},value:h}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Postcode",onChange:function(e){x(e.target.value)},value:y}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"email",className:"form-control",placeholder:"Zone",onChange:function(e){k(e.target.value)},value:O})))),c.a.createElement("br",null),c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-outline-danger btn-block",onClick:function(a){a.preventDefault(),e.addClient(n,s,E,h,y,O),m(""),d(""),v(""),b(""),x(""),k("")}})))))))))};var N=function(e){return c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"form-group"},c.a.createElement("ul",{className:"list-group "},c.a.createElement("div",{className:"custom-control custom-radio"},c.a.createElement("input",{type:"radio",id:e.volunteer_Id,name:"customRadio",className:"custom-control-input"}),c.a.createElement("label",{className:"custom-control-label ",for:e.volunteer_Id},e.full_name)))))},f=t(369);var h=function(){var e=Object(l.useState)([{volunteer_Id:Object(f.a)(),full_name:"Volunteer Name1",email:"volunteer1@gmail.com",phone:"0161 555 5555",address:"1 woodsley terrace",postcode:"SK5 1BZ",password:"12345",zone:"1"},{volunteer_Id:Object(f.a)(),full_name:"Volunteer Name2",email:"volunteer2@gmail.com",phone:"0161 555 5555",address:"M4 4EW",postcode:"SK5 1BZ",password:"12345",zone:"2"}]),a=Object(i.a)(e,2),t=a[0],n=(a[1],Object(o.f)());return c.a.createElement("div",{className:"pickUpVolunteer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h3",{className:"text-center"},"The Existing Volunteers are:"),t.map((function(e){return c.a.createElement(N,{key:e.volunteer_Id,volunteer_Id:e.volunteer_Id,full_name:e.full_name})})),c.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block btn-login",onClick:function(e){e.preventDefault(),n.push("/manager")}},"Deliver"),c.a.createElement("p",{className:"text-right mt-2"},c.a.createElement("a",{href:"/manager"},"Back"))))))};var b=function(){return c.a.createElement(r.a,null,c.a.createElement("nav",{className:"d-flex flex-row-reverse p-3"},c.a.createElement(r.b,{to:"/",className:"nav-link"},"Log Out"),c.a.createElement(r.b,{to:"/pickUp-Volunteer",className:"nav-link"},"Pick Up Volunteer"),c.a.createElement(r.b,{to:"/",className:"nav-link "},c.a.createElement("i",{className:"fas fa-user mr-2"}),"Welcome Kate")),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/pickUp-Volunteer",component:h})))};var g=function(e){var a=Object(l.useState)(""),t=Object(i.a)(a,2),n=t[0],m=t[1],r=Object(l.useState)(""),o=Object(i.a)(r,2),s=o[0],d=o[1],u=Object(l.useState)(""),p=Object(i.a)(u,2),E=p[0],v=p[1],N=Object(l.useState)(""),f=Object(i.a)(N,2),h=f[0],b=f[1],g=Object(l.useState)(""),_=Object(i.a)(g,2),y=_[0],x=_[1],w=Object(l.useState)(""),j=Object(i.a)(w,2),O=j[0],k=j[1],I=Object(l.useState)(""),C=Object(i.a)(I,2),S=C[0],z=C[1];return c.a.createElement(l.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card p4"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"text-center"},"Register new volunteer"),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Full Name",onChange:function(e){m(e.target.value)},value:n}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",onChange:function(e){d(e.target.value)},value:s}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"phone",className:"form-control",placeholder:"Phone",onChange:function(e){v(e.target.value)},value:E}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Address",onChange:function(e){x(e.target.value)},value:y}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Postcode",onChange:function(e){k(e.target.value)},value:O}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",onChange:function(e){b(e.target.value)},value:h}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Zone",onChange:function(e){z(e.target.value)},value:S}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"mt-2",type:"checkbox"}),c.a.createElement("label",{className:"ml-2"},"Send a Welcome Email"))),c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-outline-danger btn-block",onClick:function(a){a.preventDefault(),e.addVolunteer(n,s,E,y,O,h,S),m(""),d(""),x(""),b(""),k(""),z(""),v("")}}))))))))))},_=t(25);t(364);var y=Object(_.withScriptjs)(Object(_.withGoogleMap)((function(){return c.a.createElement(_.GoogleMap,{defaultZoom:12,defaultCenter:{lat:53.483959,lng:-2.244644}},c.a.createElement(_.Marker,{icon:{url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png"},position:{lat:53.45395,lng:-2.29939},label:{fontSize:"15px",text:"Maryia",color:"white",fontWeight:"bold"}}),c.a.createElement(_.Marker,{icon:{url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png"},position:{lat:53.45719,lng:-2.16283},label:{fontSize:"15px",text:"Sam",color:"white",fontWeight:"bold"}}),c.a.createElement(_.Marker,{icon:{url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"},position:{lat:53.44167,lng:-2.27612},label:{fontSize:"15px",text:"John",color:"white",fontWeight:"bold"}}),c.a.createElement(_.Marker,{icon:{url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"},position:{lat:53.46771,lng:-2.17517},label:{fontSize:"15px",text:"Hannah",color:"white",fontWeight:"bold"}}))})));var x=function(){return c.a.createElement("div",null,c.a.createElement(y,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:c.a.createElement("div",{style:{height:"150%"}}),containerElement:c.a.createElement("div",{style:{height:"600px"}}),mapElement:c.a.createElement("div",{style:{height:"90%"}})}))};t(366);var w=function(){var e=Object(l.useState)([{client_id:Object(f.a)(),full_name:"Client Name1",email:"client1@gmail.com",phone:"0161 555 5555",address:" 1 hyde terrace",postcode:"M4 4EW",completed:!1,deleted:!1,date:"2020-05-05",zone:"2"},{client_id:Object(f.a)(),full_name:"Client Name2",email:"client2@gmail.com",address:"3 woodhay street",postcode:"M4 4EW",phone:"0161 555 5555",completed:!1,deleted:!1,date:"2020-05-05",zone:"1"},{client_id:Object(f.a)(),full_name:"Client Name3",email:"client3@gmail.com",address:"2 woodlane",postcode:"M4 4EW",phone:"0161 555 5555",completed:!0,deleted:!1,date:"2020-05-05",zone:"2"}]),a=Object(i.a)(e,2),t=a[0],n=a[1],m=Object(l.useState)([{volunteer_Id:Object(f.a)(),full_name:"Volunteer Name1",email:"volunteer1@gmail.com",phone:"0161 555 5555",address:"1 woodsley terrace",postcode:"SK5 1BZ",password:"12345",zone:"1"},{volunteer_Id:Object(f.a)(),full_name:"Volunteer Name2",email:"volunteer2@gmail.com",phone:"0161 555 5555",address:"M4 4EW",postcode:"SK5 1BZ",password:"12345",zone:"2"}]),r=Object(i.a)(m,2),o=r[0],d=r[1],N=t&&t.filter((function(e){return!e.completed})),h=t&&t.filter((function(e){return e.completed}));function _(e){var a=t.filter((function(a){return a.client_id!==e}));n(a)}function y(e){var a=t.map((function(a){return a.client_id===e&&(a.completed=!0),a}));n(a)}function w(e){var a=o.filter((function(a){return a.volunteer_Id!==e}));d(a)}return c.a.createElement("div",{className:"home_body"},c.a.createElement(b,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"text-center"},"Existing clients"),c.a.createElement("div",{className:"row"},N.map((function(e){return c.a.createElement(p,{key:e.client_id,id:e.client_id,full_name:e.full_name,email:e.email,phone:e.phone,address:e.address,postcode:e.postcode,zone:e.zone,deleteClient:_,completeDelivery:y,createDate:e.date})}))))))),c.a.createElement("div",{className:"Item__border"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"text-center"},"Existing clients - completed deliveries"),c.a.createElement("div",{className:"row"},h.map((function(e){return c.a.createElement(p,{key:e.client_id,id:e.client_id,full_name:e.full_name,email:e.email,phone:e.phone,address:e.address,postcode:e.postcode,zone:e.zone,completed:e.completed,deleteClient:_,createDate:e.date})}))))))),c.a.createElement("div",{className:"Item__border"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement(v,{addClient:function(e,a,l,c,m,r){var o={full_name:e,email:a,phone:l,address:c,postcode:m,completed:!1,zone:r,date:u()()},i=[].concat(Object(s.a)(t),[o]);n(i)}})),c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement(g,{addVolunteer:function(e,a,t,l,c,n,m){var r={full_name:e,email:a,phone:t,address:l,postcode:c,password:n,zone:m},i=[].concat(Object(s.a)(o),[r]);d(i)}}))),c.a.createElement("div",{className:"Item__border"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"text-center"},"Existing volunteers"),c.a.createElement("div",{className:"row"},o.map((function(e){return c.a.createElement(E,{key:e.volunteer_Id,volunteer_Id:e.volunteer_Id,full_name:e.full_name,email:e.email,phone:e.phone,address:e.address,postcode:e.postcode,password:e.password,zone:e.zone,deleteVolunteer:w})}))))))),c.a.createElement("div",{className:"Item__border"})),c.a.createElement("div",{className:"col"},c.a.createElement(x,null)))};var j=function(e){return c.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4"},c.a.createElement("div",{className:"Item__card card text-center m-2"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"Item__card-title"},"Name: ",e.full_name),c.a.createElement("h4",{className:"Item__card-title"},"Email: ",e.email),c.a.createElement("h4",{className:"Item__card-title"},"Phone: ",e.phone),c.a.createElement("h4",{className:"Item__card-title"},"Address: ",e.address),c.a.createElement("h4",{className:"Item__card-title"},"Postcode: ",e.postcode),c.a.createElement("h4",{className:"Item__card-title"},"Zone: ",e.zone)),c.a.createElement("div",{className:"card-footer text-muted bg-light"},c.a.createElement("h4",{className:"Item__card-title"},"Status: Awaiting delivery"),c.a.createElement("small",null,"Created ",u()(e.createDate).calendar())),c.a.createElement("div",{className:"card-footer text-muted bg-light"},c.a.createElement("button",{className:"btn btn-sm mr-3 Item__button",type:"button",onClick:function(){console.log("The complete button has been clicked!"),e.completeDelivery(e.id)}},c.a.createElement("i",{className:"fa fa-thumbs-up"})))))};var O=function(){return c.a.createElement("nav",{className:"d-flex flex-row-reverse p-3"},c.a.createElement(r.b,{to:"/sign-in",className:"nav-link"},"Log Out"),c.a.createElement("a",{href:"#",className:"nav-link "},c.a.createElement("i",{className:"fas fa-user mr-2"}),"Welcome John"))};t(367);var k=function(){var e=Object(l.useState)([{client_id:Object(f.a)(),full_name:"Client Name1",email:"client1@gmail.com",phone:"0161 555 5555",address:" 1 hyde terrace",postcode:"M4 4EW",completed:!1,deleted:!1,date:"2020-05-05",zone:"2"},{client_id:Object(f.a)(),full_name:"Client Name2",email:"client2@gmail.com",address:"3 woodhay street",postcode:"M4 4EW",phone:"0161 555 5555",completed:!1,deleted:!1,date:"2020-05-05",zone:"1"},{client_id:Object(f.a)(),full_name:"Client Name3",email:"client3@gmail.com",address:"2 woodlane",postcode:"M4 4EW",phone:"0161 555 5555",completed:!0,deleted:!1,date:"2020-05-05",zone:"2"}]),a=Object(i.a)(e,2),t=a[0],n=a[1],m=t&&t.filter((function(e){return!e.completed}));function r(e){var a=t.map((function(a){return a.client_id===e&&(a.completed=!0),a}));n(a)}return c.a.createElement("div",{className:"volonteer_home"},c.a.createElement(O,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"text-center"},"Existing clients"),c.a.createElement("div",{className:"row"},m.map((function(e){return c.a.createElement(j,{key:e.client_id,id:e.client_id,full_name:e.full_name,email:e.email,phone:e.phone,address:e.address,postcode:e.postcode,zone:e.zone,completeDelivery:r,createDate:e.date})})),c.a.createElement("div",{className:"Item__border"}))))))))};var I=function(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"nav navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{className:"nav-link",to:"/manager"},"For Manager")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{className:"nav-link",to:"/volunteer"},"For Volunteer"))))),c.a.createElement("div",{className:"auth-inner mt-2"},c.a.createElement("h3",{className:"text-center mb-2"},"What is the essence of life? To serve others and to do good."),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/manager",component:w}),c.a.createElement(o.a,{exact:!0,path:"/volunteer",component:k})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(c.a.createElement(r.a,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[157,1,2]]]);
//# sourceMappingURL=main.bf1c019b.chunk.js.map