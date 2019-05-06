(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),s=a.n(r),l=a(12),o=a(6),i=a(7),m=a(9),d=a(8),u=a(10),h=a(17),g=a(18),p=a(22),v=a.n(p),f=v.a.create({baseURL:"http://localhost:5000"}),E=function(e,t,a,n){return f({method:e,url:t,data:a,headers:{Authorization:"Bearer ".concat(n)}})},b=c.a.createContext(),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={user:{isAdmin:!1},products:[],list:[],isAuthenticated:!1,orderValidated:!1,error:null,isLoading:!1},a.login=function(e){a.setState({isLoading:!0}),a.setState({error:null}),E("post","/login",{badge:e}).then(function(e){localStorage.setItem("payToken",e.data.token),localStorage.setItem("userId",e.data.user._id),a.setState({user:e.data.user,isAuthenticated:!0,isLoading:!1})}).catch(function(e){var t=new Error("Impossible de vous connecter...");t.statusCode=401,a.setState({error:t,isLoading:!1})})},a.checkLogin=function(){var e=localStorage.getItem("userId");if(e&&null==a.state.username){var t=localStorage.getItem("payToken");E("get","/users/".concat(e),null,t).then(function(e){a.setState({user:e.data.user,isAuthenticated:!0})})}},a.logout=function(){a.setState({isAuthenticated:!1,list:[],user:{},orderValidated:!1}),localStorage.removeItem("payToken"),localStorage.removeItem("userId")},a.getProducts=function(){var e=localStorage.getItem("payToken");E("get","/products",null,e).then(function(e){var t=[];e.data.products.forEach(function(e){t.push(e)}),a.setState({products:t})})},a.clickProduct=function(e){a.setState({list:a.state.list.concat(e),user:Object(g.a)({},a.state.user,{solde:a.state.user.solde-e.price})})},a.removeItem=function(e){var t=a.state.list,n=t[e].price;t.splice(e,1),a.setState({list:t,user:Object(g.a)({},a.state.user,{solde:a.state.user.solde+n})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(b.Provider,{value:{state:this.state,login:this.login,checkLogin:this.checkLogin,logout:this.logout,getProducts:this.getProducts,clickProduct:this.clickProduct,removeItem:this.removeItem,validate:this.validate}},this.props.children)}}]),t}(n.Component),C=(a(78),function(e){return c.a.createElement("div",{className:"row mt-3 listItem"},c.a.createElement("div",{className:"col-md-5"},c.a.createElement("strong",null,e.item.name)),c.a.createElement("div",{className:"col-md-5"},e.item.price," \u20ac"),c.a.createElement("div",{className:"col-md-2 trash",onClick:function(){return e.removeItem(e.index)}},c.a.createElement("i",{className:"fas fa-trash-alt"})))}),k=(a(79),function(e){var t=e.list.map(function(t,a){return c.a.createElement(C,{key:a,item:t,index:a,removeItem:e.removeItem})});return c.a.createElement("div",{className:"d-flex flex-column align-items-center list"},t)}),y=(a(80),function(e){return c.a.createElement("div",{className:"infos"},c.a.createElement("h3",null,"Bonjour ",e.user.username?e.user.username:""," !"),c.a.createElement("h4",null,"Solde:  ",e.user.solde?e.user.solde.toFixed(2):0," \u20ac"))}),S=a(34),w=a.n(S),j=(a(81),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={orderValidated:!1},a.validate=function(){var e=localStorage.getItem("payToken");E("post","orders",{list:a.context.state.list,userId:a.context.state.user._id},e).then(function(e){a.setState({orderValidated:!0})}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"sidebar d-flex flex-column"},this.state.orderValidated?c.a.createElement(h.a,{to:"/logout"}):null,c.a.createElement(l.b,{to:"/logout"},c.a.createElement(w.a,{variant:"sidebar"},c.a.createElement("h3",null,"Deconnexion"))),c.a.createElement(y,{user:this.context.state.user}),c.a.createElement(k,{list:this.context.state.list,removeItem:this.context.removeItem}),c.a.createElement(w.a,{variant:"sidebar",className:"mt-auto",onClick:this.validate},c.a.createElement("h3",null,"Valider")))}}]),t}(n.Component));j.contextType=b;var O=j,x=(a(94),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"admin d-flex justify-content-stretch"},c.a.createElement(l.c,{to:"/shop/reload",className:"btn btn-sidebar"},"Recharger"),c.a.createElement(l.c,{to:"/shop/users",className:"btn btn-sidebar"},"Utilisateurs"),c.a.createElement(l.c,{to:"/shop/products",className:"btn btn-sidebar"},"Produits"),c.a.createElement(l.c,{to:"/shop",className:"btn btn-sidebar"},"Retour"))}}]),t}(n.Component)),I=a(116),A=(a(95),function(e){var t="productCard text-center";return e.solde<e.product.price&&(t="productCard productCardDisabled text-center"),c.a.createElement(I.a,{className:t,onClick:e.solde>=e.product.price?function(){return e.clickProduct(e.product)}:null},c.a.createElement(I.a.Header,null,c.a.createElement("strong",null,e.product.name)),c.a.createElement(I.a.Body,null,c.a.createElement("img",{src:e.product.img,alt:"produit",className:"productImage"})),c.a.createElement(I.a.Footer,null,e.product.price," \u20ac"))}),T=(a(96),function(e){var t=e.products.map(function(t){return c.a.createElement(A,{key:t._id,product:t,clickProduct:e.clickProduct,solde:e.solde})});return c.a.createElement("div",{className:"products d-flex flex-wrap"},t)}),B=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(T,{products:this.context.state.products,clickProduct:this.context.clickProduct,solde:this.context.state.user.solde})}}]),t}(n.Component);B.contextType=b;var P=B,D=a(114),L=a(113),V=(a(97),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={users:[],newName:"",newBadge:"",hasChanged:!1,isAdmin:!1},a.handleChangeName=function(e){var t=e.target.id,n=a.state.users;n[t].username=e.target.value,n[t].hasChanged=!0,a.setState({users:n})},a.handleChangeBadge=function(e){var t=e.target.id,n=a.state.users;n[t].badge=e.target.value,n[t].hasChanged=!0,a.setState({users:n})},a.handleChangeAdmin=function(e){var t=e.currentTarget.id,n=a.state.users;n[t].isAdmin=!n[t].isAdmin,n[t].hasChanged=!0,a.setState({users:n})},a.handleSubmit=function(e){var t=e.currentTarget.id,n=a.state.users[t]._id,c=localStorage.getItem("payToken");E("put","/users/".concat(n),a.state.users[t],c).then(function(e){var n=a.state.users;n[t].hasChanged=!1,a.setState({users:n})}).catch(function(e){console.log(e)})},a.handleDelete=function(e){var t=e.currentTarget.id,n=a.state.users[t]._id,c=localStorage.getItem("payToken");E("delete","/users/".concat(n),null,c).then(function(e){var n=a.state.users;n.splice(t,1),a.setState({users:n})}).catch(function(e){console.log(e)})},a.handleNewName=function(e){a.setState({newName:e.target.value,hasChanged:!0})},a.handleNewBadge=function(e){a.setState({newBadge:e.target.value,hasChanged:!0})},a.handleNewAdmin=function(e){a.setState({isAdmin:!a.state.isAdmin,hasChanged:!0})},a.handleNew=function(e){var t={username:a.state.newName,badge:a.state.newBadge,isAdmin:a.state.isAdmin},n=localStorage.getItem("payToken");E("put","signup",t,n).then(function(e){var n=a.state.users.concat(t);a.setState({newName:"",newBadge:"",hasChanged:!1,users:n})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("payToken");E("get","/users",null,t).then(function(t){var a=t.data.users.map(function(e){return Object(g.a)({},e,{hasChanged:!1})});e.setState({users:a})})}},{key:"render",value:function(){var e=this,t=this.state.users.map(function(t,a){return c.a.createElement("div",{className:"row text-center mb-3",key:a},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",id:a,value:t.username,onChange:e.handleChangeName})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",id:a,value:t.badge,onChange:e.handleChangeBadge})),c.a.createElement("div",{className:"col-md-2"},c.a.createElement(D.a.Check,{id:a,checked:t.isAdmin,onChange:e.handleChangeAdmin})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(L.a,{className:"mr-2",variant:"success",id:a,onClick:e.handleSubmit,disabled:!t.hasChanged},c.a.createElement("i",{className:"fas fa-check"})),c.a.createElement(L.a,{variant:"danger",id:a,onClick:e.handleDelete},c.a.createElement("i",{className:"fas fa-trash-alt"}))))});return c.a.createElement("div",{className:"m-5"},c.a.createElement("div",{className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-3"},"Nom"),c.a.createElement("div",{className:"col-md-3"},"Badge"),c.a.createElement("div",{className:"col-md-2"},"Administrateur"),c.a.createElement("div",{className:"col-md-4"})),t,c.a.createElement("div",{className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",value:this.state.newName,onChange:this.handleNewName})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",value:this.state.newBadge,onChange:this.handleNewBadge})),c.a.createElement("div",{className:"col-md-2"},c.a.createElement(D.a.Check,{value:this.state.isAdmin,onChange:this.handleNewAdmin})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(L.a,{className:"mr-2",variant:"success",onClick:this.handleNew,disabled:!this.state.hasChanged},"Cr\xe9er"))))}}]),t}(n.Component)),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={badge:"",value:0},a.handleChangeBadge=function(e){a.setState({badge:e.target.value})},a.handleChangeValue=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){var t={badge:a.state.badge,solde:a.state.value},n=localStorage.getItem("payToken");E("post","users",t,n).then(function(e){a.setState({badge:"",value:""})}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"m-5"},c.a.createElement("div",{className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-3"},"Badge"),c.a.createElement("div",{className:"col-md-3"},"Montant"),c.a.createElement("div",{className:"col-md-4"})),c.a.createElement("div",{className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{type:"password",className:"form-control",value:this.state.badge,onChange:this.handleChangeBadge})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",value:this.state.value,onChange:this.handleChangeValue})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(L.a,{className:"mr-2",variant:"success",onClick:this.handleSubmit},"Recharger"))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={products:[],name:"",price:"",img:"",hasChanged:!1},a.handleChangeName=function(e){var t=e.target.id,n=a.state.products;n[t].name=e.target.value,n[t].hasChanged=!0,a.setState({products:n})},a.handleChangePrice=function(e){var t=e.target.id,n=a.state.products;n[t].price=e.target.value,n[t].hasChanged=!0,a.setState({products:n})},a.handleChangeImg=function(e){var t=e.target.id,n=a.state.products;n[t].img=e.target.value,n[t].hasChanged=!0,a.setState({products:n})},a.handleSubmit=function(e){var t=e.currentTarget.id,n=a.state.products[t]._id,c=localStorage.getItem("payToken");E("put","/products/".concat(n),a.state.products[t],c).then(function(e){var n=a.state.products;n[t].hasChanged=!1,a.setState({products:n})}).catch(function(e){console.log(e)})},a.handleNewName=function(e){a.setState({name:e.target.value,hasChanged:!0})},a.handleNewPrice=function(e){a.setState({price:e.target.value,hasChanged:!0})},a.handleNewImg=function(e){a.setState({img:e.target.value,hasChanged:!0})},a.handleNew=function(e){var t={name:a.state.name,price:a.state.price,img:a.state.img},n=localStorage.getItem("payToken");E("post","/products",t,n).then(function(e){a.setState({name:"",price:"",img:"",hasChanged:!1,products:a.state.products.concat(t)})}).catch(function(e){console.log(e)})},a.handleDelete=function(e){var t=e.currentTarget.id,n=a.state.products[t]._id,c=localStorage.getItem("payToken");E("delete","/products/".concat(n),null,c).then(function(e){var n=a.state.products;n.splice(t,1),a.setState({products:n})}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("payToken");E("get","/products",null,t).then(function(t){var a=t.data.products.map(function(e){return Object(g.a)({},e,{hasChanged:!1})});e.setState({products:a})})}},{key:"render",value:function(){var e=this,t=this.state.products.map(function(t,a){return c.a.createElement("div",{key:a,className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",id:a,value:t.name,onChange:e.handleChangeName})),c.a.createElement("div",{className:"col-md-2"},c.a.createElement("input",{type:"number",className:"form-control",id:a,value:t.price,onChange:e.handleChangePrice})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",id:a,value:t.img,onChange:e.handleChangeImg})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(L.a,{className:"mr-2",variant:"success",id:a,onClick:e.handleSubmit,disabled:!t.hasChanged},c.a.createElement("i",{className:"fas fa-check"})),c.a.createElement(L.a,{variant:"danger",id:a,onClick:e.handleDelete},c.a.createElement("i",{className:"fas fa-trash-alt"}))))});return c.a.createElement("div",{className:"m-5"},c.a.createElement("div",{className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-3"},"Nom"),c.a.createElement("div",{className:"col-md-2"},"Prix"),c.a.createElement("div",{className:"col-md-3"},"Image"),c.a.createElement("div",{className:"col-md-4"})),t,c.a.createElement("div",{className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",value:this.state.name,onChange:this.handleNewName})),c.a.createElement("div",{className:"col-md-2"},c.a.createElement("input",{type:"number",className:"form-control",value:this.state.price,onChange:this.handleNewPrice})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",value:this.state.img,onChange:this.handleNewImg})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(L.a,{className:"mr-2",variant:"success",onClick:this.handleNew,disabled:!this.state.hasChanged},"Cr\xe9er"))))}}]),t}(n.Component);M.contextType=b;var R=M,F=(a(98),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={redirect:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.context.getProducts(),this.context.checkLogin()}},{key:"render",value:function(){var e=c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 no-padding"},c.a.createElement(x,null))),t=c.a.createElement(h.d,null,c.a.createElement(h.b,{path:this.props.match.path+"/reload",component:_}),c.a.createElement(h.b,{path:this.props.match.path+"/users",component:V}),c.a.createElement(h.b,{path:this.props.match.path+"/products",component:R}),c.a.createElement(h.b,{exact:!0,path:"/shop",component:P})),a=c.a.createElement(h.d,null,c.a.createElement(h.b,{exact:!0,path:"/shop",component:P}));return c.a.createElement("div",{className:"container-fluid background"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},this.context.state.user.isAdmin?e:null,this.context.state.user.isAdmin?t:a),c.a.createElement("div",{className:"col-md-3  no-padding"},c.a.createElement(O,null))))}}]),t}(n.Component));F.contextType=b;var U=F,z=a(115),J=(a(99),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={badge:""},a.handleChange=function(e){a.setState({badge:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.context.login(a.state.badge)},a.handleErase=function(e){a.setState({badge:""})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;this.context.state.isAuthenticated&&(e=c.a.createElement(h.a,{to:"/shop"}));var t=null;null!=this.context.state.error&&(t=c.a.createElement(z.a,{variant:"warning"},this.context.state.error.message));var a=null;return this.context.state.isLoading&&(a=c.a.createElement("div",{class:"lds-ellipsis"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))),c.a.createElement("div",{className:"container-fluid background pt-5"},e,c.a.createElement("div",{className:"text-center"},t,c.a.createElement("div",{className:"card mx-auto"},c.a.createElement("div",{className:"card-header bg-dark text-white"},c.a.createElement("h2",null,"Connexion")),c.a.createElement("div",{className:"text-center"},a),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement("form",{className:"form-group mt-3",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"password",value:this.state.badge,onChange:this.handleChange,placeholder:"Badge",className:"form-control",required:!0,autoFocus:!0})),c.a.createElement("button",{className:"btn btn-primary mt-2",onClick:this.handleErase},"Effacer"))))))}}]),t}(n.Component));J.contextType=b;var W=J,q=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.context.logout()}},{key:"render",value:function(){return c.a.createElement(h.a,{to:"/login"})}}]),t}(n.Component);q.contextType=b;var H=q,$=(a(110),a(111),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(N,null,c.a.createElement(h.d,null,c.a.createElement(h.b,{exact:!0,path:"/login",component:W}),c.a.createElement(h.b,{exact:!0,path:"/logout",component:H}),c.a.createElement(h.b,{path:"/shop",component:U}),c.a.createElement(h.a,{exact:!0,from:"/",to:"/logout"})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=localStorage.getItem("payToken");v.a.defaults.baseURL="http://localhost:5000",v.a.defaults.headers.common.Authorization="Bearer ".concat(G),s.a.render(c.a.createElement(l.a,null,c.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,t,a){e.exports=a(112)},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.240e47d6.chunk.js.map