(this["webpackJsonpproject-11"]=this["webpackJsonpproject-11"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(20),c=n.n(s),r=(n(29),n(30),n(2)),o=n(3),l=n(5),u=n(4),d=n(11),j=n(6),b=(n(31),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"getIsActive",value:function(e){return this.props.location.pathname===e?"active":""}},{key:"render",value:function(){return Object(b.jsxs)("header",{className:"Header",children:[Object(b.jsx)("h1",{className:"Header_logo",children:"Kasa"}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:"Header_mainNav",children:[Object(b.jsx)("li",{className:"Header_navItem "+this.getIsActive(ne.INDEX),children:Object(b.jsx)(d.b,{to:ne.INDEX,children:"Accueil"})}),Object(b.jsx)("li",{className:"Header_navItem "+this.getIsActive(ne.ABOUT),children:Object(b.jsx)(d.b,{to:ne.ABOUT,children:"A propos"})})]})})]})}}]),n}(i.a.Component),O=Object(j.h)(h),p=n.p+"static/media/logoKasaWhite.ee689fd9.svg",m=(n(41),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("footer",{className:"Footer",children:[Object(b.jsx)("img",{src:p,alt:"",width:122}),Object(b.jsx)("p",{className:"Footer_text",children:"\xa9 2020 Kasa. All rights reserved"})]})}}]),n}(i.a.Component)),g=(n(42),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Layout",children:[Object(b.jsx)(O,{}),Object(b.jsx)("main",{className:"Layout_children",children:this.props.children}),Object(b.jsx)(m,{})]})}}]),n}(i.a.Component)),v=n.p+"static/media/Loader.8ba6ce7a.svg",x=(n(43),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(g,{children:Object(b.jsx)("div",{className:"Loading",children:Object(b.jsx)("img",{src:v,alt:"",className:"Loading_loader"})})})}}]),n}(i.a.Component)),f=n(15),N=n(24),y=(n(44),["className","onClick","icon","iconProps"]),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.onClick,a=e.icon,i=e.iconProps,s=Object(N.a)(e,y);return Object(b.jsx)("button",Object(f.a)(Object(f.a)({onClick:n,className:"IconButton ".concat(t),type:"button"},s),{},{children:Object(b.jsx)("img",Object(f.a)({src:a,alt:"","aria-hidden":!0},i))}))}}]),n}(i.a.Component);_.defaultProps={onClick:function(){},iconProps:{},className:""};var k=_,C=n.p+"static/media/ChevronTop.ecf14888.svg",L=n.p+"static/media/ChevronBottom.b052dd29.svg",I=(n(45),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isOpen:!1},a}return Object(o.a)(n,[{key:"handleClick",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.summary,a=t.details,i=t.uniqueId,s=t.TitleComponent,c=Array.isArray(a);return Object(b.jsxs)("div",{className:"Accordion",children:[Object(b.jsxs)("button",{className:"Accordion_summary",onClick:function(){return e.handleClick()},"aria-expanded":this.state.isOpen,"aria-controls":"accordionDetails".concat(i),id:"accordionSummary".concat(i),children:[Object(b.jsx)(s,{className:"Accordion_summary_title",children:n}),Object(b.jsx)("img",{src:this.state.isOpen?C:L,alt:"",className:"Accordion_summary_icon"})]}),Object(b.jsx)("div",{className:"Accordion_details".concat(this.state.isOpen?" isOpen":""),role:"region",id:"accordionDetails".concat(i),"aria-labelledby":"accordionSummary".concat(i),children:c?Object(b.jsx)("ul",{children:a.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))}):Object(b.jsx)("p",{children:a})})]})}}]),n}(i.a.Component));I.defaultProps={TitleComponent:"p"};var D=I,S=(n(46),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.background,n=e.textOverlay;return Object(b.jsx)("div",{className:"Hero",children:Object(b.jsxs)("div",{className:"Hero_wrapper",children:[t&&Object(b.jsx)("img",{src:t,alt:""}),Object(b.jsx)("div",{className:"Hero_overlay",children:n&&n.map((function(e){return Object(b.jsxs)("span",{className:"Hero_overlay_line",children:[e,"\xa0"]},e)}))})]})})}}]),n}(i.a.Component));S.defaultProps={background:null,textOverlay:null};var A=S,T=n(13),q=n.p+"static/media/ChevronLeft.19918a16.svg",E=n.p+"static/media/ChevronRight.88153a5d.svg",P=(n(47),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={imageIndex:0},a.handlePrevious=a.handlePrevious.bind(Object(T.a)(a)),a.handleNext=a.handleNext.bind(Object(T.a)(a)),a.handleKeyUp=a.handleKeyUp.bind(Object(T.a)(a)),a}return Object(o.a)(n,[{key:"goToImage",value:function(e){var t=this.props.imagesUrl.length-1;e<0?this.setState({imageIndex:t}):e>t?this.setState({imageIndex:0}):this.setState({imageIndex:e})}},{key:"handlePrevious",value:function(){this.goToImage(this.state.imageIndex-1)}},{key:"handleNext",value:function(){this.goToImage(this.state.imageIndex+1)}},{key:"handleKeyUp",value:function(e){var t={default:function(){},ArrowRight:this.handleNext,ArrowLeft:this.handlePrevious};t[e.key]?t[e.key]():t.default()}},{key:"render",value:function(){var e=this.props.imagesUrl,t=this.state.imageIndex+1,n=e.length;return Object(b.jsx)("div",{className:"Slider",onKeyUp:this.handleKeyUp,tabIndex:0,children:Object(b.jsxs)("div",{className:"Slider_wrapper",children:[Object(b.jsx)("img",{src:e[this.state.imageIndex],alt:""}),n>1&&Object(b.jsxs)("div",{className:"Slider_navigation",children:[Object(b.jsx)(k,{icon:q,onClick:this.handlePrevious,"aria-label":"Image pr\xe9c\xe9dente",className:"Slider_navigation_previous"}),Object(b.jsx)("div",{className:"Slider_navigation_position",children:"".concat(t,"/").concat(n)}),Object(b.jsx)(k,{icon:E,onClick:this.handleNext,"aria-label":"Image suivante",className:"Slider_navigation_next"})]})]})})}}]),n}(i.a.Component)),R=n(19),U=n.n(R),F=n(23),H=function(e){var t=function(t){Object(l.a)(a,t);var n=Object(u.a)(a);function a(e){var t;return Object(r.a)(this,a),(t=n.call(this,e)).state={lodgingsData:null,isLoading:!0},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(F.a)(U.a.mark((function e(){var t,n,a,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.lodgingsData){e.next=10;break}return e.next=3,fetch("/DouglasMeunier_11_10072021/data/lodgingsData.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=this.props.lodgingId,i=a?n.filter((function(e){return e.id===a})):n,this.setState({lodgingsData:i,isLoading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsx)(e,{lodgingsData:this.state.lodgingsData,isLoading:this.state.isLoading})}}]),a}(i.a.Component);return t.displayName="WithLodgingsData(".concat(e.displayName||e.name,")"),t.defaultProps={lodgingId:null},t},K=n.p+"static/media/StarFull.6430150c.svg",w=n.p+"static/media/StarEmpty.7e4ba603.svg",B=(n(49),{0:[w,w,w,w,w],1:[K,w,w,w,w],2:[K,K,w,w,w],3:[K,K,K,w,w],4:[K,K,K,K,w],5:[K,K,K,K,K]}),X=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.lodgingsData;if(e.isLoading)return Object(b.jsx)(x,{});var n=t[0];if(!n)return Object(b.jsx)(j.a,{to:ne.ERROR.NOT_FOUND});var a=B[n.rating];return Object(b.jsx)(g,{children:Object(b.jsxs)("div",{className:"Lodging",children:[Object(b.jsx)(P,{imagesUrl:n.pictures}),Object(b.jsxs)("div",{className:"Lodging_grid",children:[Object(b.jsxs)("div",{className:"Lodging_grid_meta",children:[Object(b.jsx)("h2",{className:"Lodging_title",children:n.title}),Object(b.jsx)("p",{className:"Lodging-location",children:n.location}),Object(b.jsx)("div",{className:"Lodging_tagsCloud",children:n.tags.map((function(e,t){return Object(b.jsx)("div",{className:"Lodging_tag",children:e},t)}))})]}),Object(b.jsxs)("div",{className:"Lodging_grid_host",children:[Object(b.jsxs)("div",{className:"Lodging_host",children:[Object(b.jsx)("p",{className:"Lodging_host_name",children:n.host.name}),Object(b.jsx)("img",{src:n.host.picture,alt:"",className:"Lodging_host_picture"})]}),Object(b.jsx)("div",{className:"Lodging_rating",children:a.map((function(e,t){return Object(b.jsx)("img",{src:e,alt:"",className:"Lodging_rating_star"},t)}))})]}),Object(b.jsxs)("div",{className:"Lodging_grid_accordions",children:[Object(b.jsx)(D,{summary:"Description",details:n.description,uniqueId:"Description",TitleComponent:"h3"}),Object(b.jsx)(D,{summary:"Equipements",details:n.equipments,uniqueId:"Equipments",TitleComponent:"h3"})]})]})]})})}}]),n}(i.a.Component);X.defaultProps={lodgingsData:null,isLoading:!1};var z=H(X),M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.match.params.id;return Object(b.jsx)(z,{lodgingId:e})}}]),n}(i.a.Component),G=Object(j.h)(M),W=(n(50),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.lodgingId,n=e.cover,a=e.title,i=Object(j.f)(ne.SINGLE,{id:t});return Object(b.jsx)(d.b,{to:i,children:Object(b.jsxs)("div",{className:"LodgingCard",children:[n&&Object(b.jsx)("img",{src:n,alt:""}),Object(b.jsx)("div",{className:"LodgingCard_overlay",children:Object(b.jsx)("h2",{className:"LodgingCard_title",children:a})})]})})}}]),n}(i.a.Component));W.defaultProps={cover:null};var J=W,Q=n.p+"static/media/hero-background.024f945a.png",V=(n(51),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.lodgingsData;return e.isLoading?Object(b.jsx)(x,{}):Object(b.jsx)(g,{children:Object(b.jsxs)("div",{className:"Home",children:[Object(b.jsx)(A,{background:Q,textOverlay:["Chez vous,","partout et ailleurs"]}),Object(b.jsx)("div",{className:"Home_gallery",children:t?t.map((function(e){return Object(b.jsx)(J,{title:e.title,cover:e.cover,lodgingId:e.id},e.id)})):"Aucun logement trouv\xe9"})]})})}}]),n}(i.a.Component));V.defaultProps={lodgingsData:null,isLoading:!1};var Y=H(V),Z=n.p+"static/media/HeroBackground.cc7a05da.png",$=(n(52),[{summary:"Fiabilit\xe9",details:"Les annonces post\xe9es sur Kasa garantissent une fiabilit\xe9 totale. Les photos sont conformes aux logements, et toutes les informations sont r\xe9guli\xe8rement v\xe9rifi\xe9es  par nos \xe9quipes."},{summary:"Respect",details:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entra\xeenera une exclusion de notre plateforme."},{summary:"Service",details:"Nos \xe9quipes se tiennent \xe0 votre disposition pour vous fournir une exp\xe9rience parfaite. N'h\xe9sitez pas \xe0 nous contacter si vous avez la moindre question."},{summary:"S\xe9curit\xe9",details:"La s\xe9curit\xe9 est la priorit\xe9 de Kasa. Aussi bien pour nos h\xf4tes que pour les voyageurs, chaque logement correspond aux crit\xe8res de s\xe9curit\xe9 \xe9tablis par nos services. En laissant une note aussi bien \xe0 l'h\xf4te qu'au locataire, cela permet \xe0 nos \xe9quipes de v\xe9rifier que les standards sont bien respect\xe9s. Nous organisons \xe9galement des ateliers sur la s\xe9curit\xe9 domestique pour nos h\xf4tes."}]),ee=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(g,{children:Object(b.jsxs)("div",{className:"About",children:[Object(b.jsx)(A,{background:Z}),Object(b.jsx)("div",{className:"About_accordionsWrapper",children:$.map((function(e,t){return Object(b.jsx)(D,{summary:e.summary,details:e.details,uniqueId:t,TitleComponent:"h2"},e.summary)}))})]})})}}]),n}(i.a.Component),te=(n(53),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(g,{children:Object(b.jsxs)("div",{className:"NotFoundScreen",children:[Object(b.jsx)("p",{className:"NotFoundScreen_errorCode",children:"404"}),Object(b.jsx)("p",{className:"NotFoundScreen_errorMessage",children:"Oups! La page que vous demandez n'existe pas."}),Object(b.jsx)(d.b,{to:ne.INDEX,children:"Retourner sur la page d'accueil"})]})})}}]),n}(i.a.Component)),ne={INDEX:"/",SINGLE:"/logements/:id",ABOUT:"/a-propos",ERROR:{NOT_FOUND:"/erreur-404"}},ae=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(d.a,{children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{exact:!0,path:ne.INDEX,children:Object(b.jsx)(Y,{})}),Object(b.jsx)(j.b,{exact:!0,path:ne.SINGLE,children:Object(b.jsx)(G,{})}),Object(b.jsx)(j.b,{exact:!0,path:ne.ABOUT,children:Object(b.jsx)(ee,{})}),Object(b.jsx)(j.b,{exact:!0,path:ne.ERROR.NOT_FOUND,children:Object(b.jsx)(te,{})}),Object(b.jsx)(j.b,{path:"*",children:Object(b.jsx)(j.a,{to:ne.ERROR.NOT_FOUND})})]})})}}]),n}(i.a.Component);var ie=function(){return Object(b.jsx)(ae,{})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(ie,{})}),document.getElementById("root")),se()}},[[54,1,2]]]);
//# sourceMappingURL=main.ef4cea66.chunk.js.map