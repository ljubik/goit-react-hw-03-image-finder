(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),r=a(7),c=a.n(r),i=a(10),s=a(3),l=a(4),u=a(6),h=a(5),d=(a(24),a(0)),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.handleInputChange=function(t){var a=t.currentTarget.value;e.setState({value:a})},e.handleSubmit=function(t){t.preventDefault(),e.state.value&&e.props.onSubmit(e.state.value),e.reset()},e.reset=function(){e.setState({value:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.value,onChange:this.handleInputChange})]})})}}]),a}(n.Component),g=(a(26),function(e){var t=e.children;return Object(d.jsx)("ul",{className:"ImageGallery",children:t})}),p=(a(27),function(e){var t=e.id,a=e.largeImageURL,n=e.onClick,o=e.image;return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:o.webformatURL,alt:o.tags,className:"ImageGalleryItem-image",onClick:n,"data-source":a})},t)}),j=(a(28),function(e){var t=e.onLoadMore;return Object(d.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}),b=a(9),f=a.n(b),v=document.querySelector("#modal-root"),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).hendleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.hendleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hendleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hendleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(d.jsx)("div",{className:f.a.overlay,onClick:this.hendleBackdropClick,children:Object(d.jsx)("div",{className:f.a.modal,children:Object(d.jsx)("img",{src:this.props.url,alt:""})})}),v)}}]),a}(n.Component),O=a(19),x=a.n(O),S="19834065-125c9af840da0921b3970040a",w="https://pixabay.com/api/";function k(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;return x.a.get("".concat(w,"?q=").concat(e,"&page=").concat(t,"&key=").concat(S,"&image_type=photo&orientation=horizontal&per_page=").concat(a)).then((function(e){return e.data.hits}))}var I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={images:[],query:"moto",page:1,showModal:!1,largeImage:null},e.handleSubmit=function(t){e.setState({images:[],query:t,page:1})},e.getImages=function(){k(e.state.query,e.state.page,5).then((function(t){return e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1}}))}))},e.detectModalImage=function(t){console.log(t),e.setState({largeImage:t}),console.log(e.state.largeImage),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;k(this.state.query,this.state.page).then((function(t){return e.setState({images:t})}))}},{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.getImages()}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.images,n=e.isLoading,o=a.length>0&&!n;return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{onSubmit:this.handleSubmit}),Object(d.jsx)(g,{children:this.state.images.map((function(e){return Object(d.jsx)(p,{image:e},e.id)}))}),o&&Object(d.jsx)(j,{onLoadMore:this.getImages}),t&&Object(d.jsx)(y,{onClose:this.toggleModal,url:this.state.largeImage})]})}}]),a}(n.Component);a(47),a(48);c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}}},[[49,1,2]]]);
//# sourceMappingURL=main.d6f7cd96.chunk.js.map