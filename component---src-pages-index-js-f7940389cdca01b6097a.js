(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),o=a(49),c=a.n(o),s=a(0),r=a.n(s),l=a(161),m=a.n(l),u=a(158),p=a(4),h=a.n(p),d=a(168),g=a.n(d),b=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(c()(c()(t))),t.gotoNext=t.gotoNext.bind(c()(c()(t))),t.gotoPrevious=t.gotoPrevious.bind(c()(c()(t))),t.gotoImage=t.gotoImage.bind(c()(c()(t))),t.handleClickImage=t.handleClickImage.bind(c()(c()(t))),t.openLightbox=t.openLightbox.bind(c()(c()(t))),t}i()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.gotoImage=function(e){this.setState({currentImage:e})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.renderGallery=function(){var e=this,t=this.props.images;if(t){var a=t.map(function(t,a){return r.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:a},r.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(a,t)}},r.a.createElement("img",{src:t.thumbnail})),r.a.createElement("h3",null,t.caption),r.a.createElement("p",null,t.description))});return r.a.createElement("div",{className:"row"},a)}},a.render=function(){return r.a.createElement("div",null,this.renderGallery(),r.a.createElement(g.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},t}(s.Component);b.displayName="Gallery",b.propTypes={images:h.a.array};var f=b,x=a(212),I=a.n(x),v=a(213),E=a.n(v),N=a(214),k=a.n(N),C=a(215),S=a.n(C),w=a(216),A=a.n(w),L=a(217),y=a.n(L),P=a(218),T=a.n(P),O=a(219),G=a.n(O),R=a(220),D=a.n(R),M=a(221),F=a.n(M),j=a(222),B=a.n(j),J=a(223),W=a.n(J),$=[{id:"1",src:T.a,thumbnail:I.a,caption:"Podcast Faces",description:"A React-based web app to see the faces behind your favorite podcast voices."},{id:"2",src:G.a,thumbnail:E.a,caption:"Native Mountains",description:"A small Chrome Extension to change Western Mountain Names to Native ones written in Javascript."},{id:"3",src:D.a,thumbnail:k.a,caption:"Civic Apps",description:"A mock-up for a mobile app focused on organizing public civic data sets made in Sketch."},{id:"4",src:F.a,thumbnail:S.a,caption:"Gear Shed",description:"A Mongo, Express, React, Node, and D3.js web app to create, store, and share gear lists for outdoor adventures. Still in development."},{id:"5",src:B.a,thumbnail:A.a,caption:"Alphabet",description:"A screenshot of a client portal I built for Alphabet. I was only the developer, not the designer on this one."},{id:"6",src:W.a,thumbnail:y.a,caption:"Bikeshare",description:"A poster for the nearly-autnomous bikeshare system I designed and built leveraging smart locks and Google Scripts."}],z=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(c()(c()(t))),t.gotoNext=t.gotoNext.bind(c()(c()(t))),t.gotoPrevious=t.gotoPrevious.bind(c()(c()(t))),t.openLightbox=t.openLightbox.bind(c()(c()(t))),t.handleClickImage=t.handleClickImage.bind(c()(c()(t))),t}i()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.render=function(){return r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement("title",null,"Tom Rodrigues - Developer"),r.a.createElement("meta",{name:"description",content:"Tom Rodrigues Portfolio"})),r.a.createElement("div",{id:"main"},r.a.createElement("section",{id:"one"},r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"Hi there, I'm a Front End Developer")),r.a.createElement("p",null,"I'm a React nerd, and I'm familiar with most of the contextual technologies. Self-taught with a non-traditional background. Not afraid of light design work in Sketch or backend work in Node, either.")),r.a.createElement("section",{id:"two"},r.a.createElement("h2",null,"Recent Work"),r.a.createElement(f,{images:$.map(function(e){e.id;return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description}})})),r.a.createElement("section",{id:"three"},r.a.createElement("h2",null,"Get In Touch"),r.a.createElement("p",null,"Questions, comments, business opportunities, and freelance gigs:"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"4u 12u$(small)"},r.a.createElement("ul",{className:"labeled-icons"},r.a.createElement("li",null,r.a.createElement("h3",{className:"icon fa-home"},r.a.createElement("span",{className:"label"},"Address")),"SE Portland, OR",r.a.createElement("br",null),"United States"),r.a.createElement("li",null,r.a.createElement("h3",{className:"icon fa-envelope-o"},r.a.createElement("span",{className:"label"},"Email")),r.a.createElement("a",{href:"#"},"tomjrodrigues@gmail.com"))))))))},t}(r.a.Component);t.default=z},212:function(e,t,a){e.exports=a.p+"static/PodcastFacesThumb-b478a1aecc5d513d2e36e631ec767d0a.png"},213:function(e,t,a){e.exports=a.p+"static/NativeMountainsThumb-fefeb9e29d06a270f2c9613ca44e37cf.png"},214:function(e,t,a){e.exports=a.p+"static/CivicAppsThumb-0cfffa9bfa76b698bac1f3b3ca6b65e9.png"},215:function(e,t,a){e.exports=a.p+"static/GearShedThumb-ea17ffcb6952b037e041e7150ba546ec.png"},216:function(e,t,a){e.exports=a.p+"static/AlphabetThumb-843555d8e83c47334744278d945d4abf.png"},217:function(e,t,a){e.exports=a.p+"static/BikeshareThumb-218d641211cc55954ecfa21f1b81cfcc.png"},218:function(e,t,a){e.exports=a.p+"static/PodcastFaces-d411b1048c115ae05608a3019d7d01d1.png"},219:function(e,t,a){e.exports=a.p+"static/NativeMountains-6ab50ad711cd493984a18dde2b85db58.png"},220:function(e,t,a){e.exports=a.p+"static/CivicApps-08ac2324e41de2402c11f1b1367a9413.png"},221:function(e,t,a){e.exports=a.p+"static/GearShed-62e9144efb6f142b0d29d10a4cfd617e.png"},222:function(e,t,a){e.exports=a.p+"static/Alphabet-702b590d4296e82d618e74c3e112b6ab.png"},223:function(e,t,a){e.exports=a.p+"static/Bikeshare-a4845ee9f07fea75bc2ce81dcea21c46.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-f7940389cdca01b6097a.js.map