(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},113:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),l=a.n(r),s=a(13),o=a(7),i=a(8),m=a(10),u=a(9),d=a(11),h=a(30),g=a(31),p=a(37),v=a.n(p),f=v.a.create({baseURL:"http://localhost:5000"}),E=function(e,t,a,n){return f({method:e,url:t,data:a,headers:{Authorization:"Bearer ".concat(n)}})},N=c.a.createContext(),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={user:{isAdmin:!1},products:[],list:[],isAuthenticated:!1,orderValidated:!1,error:null,isLoading:!1,category:null,categories:[]},a.getCategories=function(){var e=localStorage.getItem("payToken");E("get","/categories",null,e).then(function(e){a.setState({categories:e.data.categories})}).catch(function(e){console.log(e)})},a.login=function(e){a.setState({isLoading:!0}),a.setState({error:null}),E("post","/login",{badge:e}).then(function(e){localStorage.setItem("payToken",e.data.token),localStorage.setItem("userId",e.data.user._id),a.setState({user:e.data.user,isAuthenticated:!0,isLoading:!1})}).catch(function(e){var t=new Error("Impossible de vous connecter...");t.statusCode=401,a.setState({error:t,isLoading:!1})})},a.checkLogin=function(){var e=localStorage.getItem("userId");if(e&&null==a.state.username){var t=localStorage.getItem("payToken");E("get","/users/".concat(e),null,t).then(function(e){a.setState({user:e.data.user,isAuthenticated:!0})})}},a.logout=function(){a.setState({isAuthenticated:!1,list:[],user:{},orderValidated:!1}),localStorage.removeItem("payToken"),localStorage.removeItem("userId")},a.getProducts=function(){var e=localStorage.getItem("payToken");E("get","/products",null,e).then(function(e){var t=[];e.data.products.forEach(function(e){t.push(e)}),a.setState({products:t})})},a.clickProduct=function(e){a.setState({list:a.state.list.concat(e),user:Object(g.a)({},a.state.user,{solde:a.state.user.solde-e.price})})},a.removeItem=function(e){var t=a.state.list,n=t[e].price;t.splice(e,1),a.setState({list:t,user:Object(g.a)({},a.state.user,{solde:a.state.user.solde+n})})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(N.Provider,{value:{state:this.state,login:this.login,checkLogin:this.checkLogin,logout:this.logout,getProducts:this.getProducts,clickProduct:this.clickProduct,removeItem:this.removeItem,validate:this.validate,getCategories:this.getCategories}},this.props.children)}}]),t}(n.Component),C=(a(100),function(e){return c.a.createElement("div",{className:"row mt-3 listItem"},c.a.createElement("div",{className:"col-md-5"},c.a.createElement("strong",null,e.item.name)),c.a.createElement("div",{className:"col-md-5"},e.item.price," \u20ac"),c.a.createElement("div",{className:"col-md-2 trash",onClick:function(){return e.removeItem(e.index)}},c.a.createElement("i",{className:"fas fa-trash-alt"})))}),k=(a(101),function(e){var t=e.list.map(function(t,a){return c.a.createElement(C,{key:a,item:t,index:a,removeItem:e.removeItem})});return c.a.createElement("div",{className:"d-flex flex-column align-items-center list"},t)}),y=(a(102),function(e){return c.a.createElement("div",{className:"infos"},c.a.createElement("h3",null,"Bonjour ",e.user.username?e.user.username:""," !"),c.a.createElement("h4",null,"Solde:  ",e.user.solde?e.user.solde.toFixed(2):0," \u20ac"))}),S=a(35),w=a.n(S),O=(a(103),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={orderValidated:!1},a.validate=function(){var e=localStorage.getItem("payToken");E("post","orders",{list:a.context.state.list,userId:a.context.state.user._id},e).then(function(e){a.setState({orderValidated:!0})}).catch(function(e){console.log(e)})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"sidebar d-flex flex-column"},this.state.orderValidated?c.a.createElement(h.a,{to:"/logout"}):null,c.a.createElement(s.b,{to:"/logout"},c.a.createElement(w.a,{variant:"sidebar"},c.a.createElement("h3",null,"Deconnexion"))),c.a.createElement(y,{user:this.context.state.user}),c.a.createElement(k,{list:this.context.state.list,removeItem:this.context.removeItem}),c.a.createElement(w.a,{variant:"sidebar",className:"mt-auto",onClick:this.validate},c.a.createElement("h3",null,"Valider")))}}]),t}(n.Component));O.contextType=N;var j=O,x=a(145),I=a(147),A=a(146),T=(a(113),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(x.a,{className:"navbar",expand:"lg"},c.a.createElement(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(x.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(I.a,{className:"mr-auto nav"},c.a.createElement(s.c,{to:"/shop/reload",className:"navlink"},"Recharger"),c.a.createElement(A.a,{title:"Comptes",id:"basic-nav-dropdown",bsPrefix:"navlink"},c.a.createElement(A.a.Item,null,c.a.createElement(s.c,{to:"/shop/users",className:"dropdown-link"},"Utilisateurs")),c.a.createElement(A.a.Item,null,c.a.createElement(s.c,{to:"/shop/accounts",className:"dropdown-link"},"Autre"))),c.a.createElement(A.a,{title:"Produits",id:"basic-nav-dropdown",bsPrefix:"navlink"},c.a.createElement(A.a.Item,null,c.a.createElement(s.c,{to:"/shop/products",className:"dropdown-link"},"Liste des produits")),c.a.createElement(A.a.Item,null,c.a.createElement(s.c,{to:"/shop/categories",className:"dropdown-link"},"Cat\xe9gories"))),c.a.createElement(s.c,{to:"/shop/orders",className:"navlink"},"Commandes"),c.a.createElement(s.c,{to:"/shop",className:"navlink"},"Retour"))))}}]),t}(n.Component)),P=a(149),B=(a(132),function(e){var t="productCard text-center";return e.solde<e.product.price&&(t="productCard productCardDisabled text-center"),c.a.createElement(P.a,{className:t,onClick:e.solde>=e.product.price?function(){return e.clickProduct(e.product)}:null},c.a.createElement(P.a.Header,null,c.a.createElement("strong",null,e.product.name)),c.a.createElement(P.a.Body,null,c.a.createElement("img",{src:e.product.img,alt:"produit",className:"productImage"})),c.a.createElement(P.a.Footer,null,e.product.price," \u20ac"))}),D=(a(133),function(e){var t=e.products.map(function(t){if(e.search){if(t.category.name===e.search)return c.a.createElement(B,{key:t._id,product:t,clickProduct:e.clickProduct,solde:e.solde})}else if(t.starred)return c.a.createElement(B,{key:t._id,product:t,clickProduct:e.clickProduct,solde:e.solde});return null});return c.a.createElement("div",{className:"products d-flex flex-wrap"},t)}),L=(a(134),function(e){var t=e.categories.map(function(e,t){return c.a.createElement(s.b,{to:"/shop?category=".concat(e.name),key:t},c.a.createElement(w.a,{variant:"catbar",className:"mt-auto"},c.a.createElement("h3",null,e.name)))});return c.a.createElement("div",null,c.a.createElement(s.b,{to:"/shop"},c.a.createElement(w.a,{variant:"catbar",className:"mt-auto"},c.a.createElement("h3",null,"Accueil"))),t)}),_=(a(135),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row fullHeight"},c.a.createElement("div",{className:"col-md catbar"},c.a.createElement(L,{categories:this.context.state.categories})),c.a.createElement("div",{className:"col-md-10"},c.a.createElement(D,{products:this.context.state.products,clickProduct:this.context.clickProduct,solde:this.context.state.user.solde,search:this.props.location.search.split("=")[1]}))))}}]),t}(n.Component));_.contextType=N;var V=_,M=a(144),F=a(74),R=(a(136),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={users:[],newName:"",newBadge:"",hasChanged:!1,isAdmin:!1},a.handleChangeName=function(e){var t=e.target.id,n=a.state.users;n[t].username=e.target.value,n[t].hasChanged=!0,a.setState({users:n})},a.handleChangeBadge=function(e){var t=e.target.id,n=a.state.users;n[t].badge=e.target.value,n[t].hasChanged=!0,a.setState({users:n})},a.handleChangeAdmin=function(e){var t=e.currentTarget.id,n=a.state.users;n[t].isAdmin=!n[t].isAdmin,n[t].hasChanged=!0,a.setState({users:n})},a.handleSubmit=function(e){var t=e.currentTarget.id,n=a.state.users[t]._id,c=localStorage.getItem("payToken");E("put","/users/".concat(n),a.state.users[t],c).then(function(e){var n=a.state.users;n[t].hasChanged=!1,a.setState({users:n})}).catch(function(e){console.log(e)})},a.handleDelete=function(e){var t=e.currentTarget.id,n=a.state.users[t]._id,c=localStorage.getItem("payToken");E("delete","/users/".concat(n),null,c).then(function(e){var n=a.state.users;n.splice(t,1),a.setState({users:n})}).catch(function(e){console.log(e)})},a.handleNewName=function(e){a.setState({newName:e.target.value,hasChanged:!0})},a.handleNewBadge=function(e){a.setState({newBadge:e.target.value,hasChanged:!0})},a.handleNewAdmin=function(e){a.setState({isAdmin:!a.state.isAdmin,hasChanged:!0})},a.handleNew=function(e){var t={username:a.state.newName,badge:a.state.newBadge,isAdmin:a.state.isAdmin},n=localStorage.getItem("payToken");E("put","signup",t,n).then(function(e){var n=a.state.users.concat(t);a.setState({newName:"",newBadge:"",hasChanged:!1,users:n})})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("payToken");E("get","/users",null,t).then(function(t){var a=t.data.users.map(function(e){return Object(g.a)({},e,{hasChanged:!1})});e.setState({users:a})})}},{key:"render",value:function(){var e=this,t=this.state.users.map(function(t,a){return c.a.createElement("div",{className:"row text-center mb-3",key:a},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",id:a,value:t.username,onChange:e.handleChangeName})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",id:a,value:t.badge,onChange:e.handleChangeBadge})),c.a.createElement("div",{className:"col-md-2"},c.a.createElement(M.a.Check,{id:a,checked:t.isAdmin,onChange:e.handleChangeAdmin})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(F.a,{className:"mr-2",variant:"success",id:a,onClick:e.handleSubmit,disabled:!t.hasChanged},c.a.createElement("i",{className:"fas fa-check"})),c.a.createElement(F.a,{variant:"danger",id:a,onClick:e.handleDelete},c.a.createElement("i",{className:"fas fa-trash-alt"}))))});return c.a.createElement("div",{className:"m-5"},c.a.createElement("div",{className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-3"},"Nom"),c.a.createElement("div",{className:"col-md-3"},"Badge"),c.a.createElement("div",{className:"col-md-2"},"Administrateur"),c.a.createElement("div",{className:"col-md-4"})),t,c.a.createElement("div",{className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",value:this.state.newName,onChange:this.handleNewName})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",value:this.state.newBadge,onChange:this.handleNewBadge})),c.a.createElement("div",{className:"col-md-2"},c.a.createElement(M.a.Check,{value:this.state.isAdmin,onChange:this.handleNewAdmin})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(F.a,{className:"mr-2",variant:"success",onClick:this.handleNew,disabled:!this.state.hasChanged},"Cr\xe9er"))))}}]),t}(n.Component)),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={badge:"",value:0,accounts:[]},a.handleChangeBadge=function(e){a.setState({badge:e.target.value})},a.handleChangeValue=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){var t={badge:a.state.badge,solde:a.state.value},n=localStorage.getItem("payToken");E("post","users",t,n).then(function(e){var t=a.state.accounts.find(function(e){return"Caisse"===e.name}),c=parseFloat(t.value);c+=parseFloat(a.state.value),t.value=c,E("put","/accounts/".concat(t._id),t,n).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),a.setState({badge:"",value:""})}).catch(function(e){console.log(e)})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("payToken");E("get","/accounts",null,t).then(function(t){e.setState({accounts:t.data.accounts})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"m-5"},c.a.createElement("div",{className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-3"},"Badge"),c.a.createElement("div",{className:"col-md-3"},"Montant"),c.a.createElement("div",{className:"col-md-4"})),c.a.createElement("div",{className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{type:"password",className:"form-control",value:this.state.badge,onChange:this.handleChangeBadge})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{type:"number",className:"form-control",value:this.state.value,onChange:this.handleChangeValue})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(F.a,{className:"mr-2",variant:"success",onClick:this.handleSubmit},"Recharger"))))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={products:[],name:"",price:"",img:"",starred:!1,hasChanged:!1,selectedOption:"",categories:[]},a.handleChangeName=function(e){var t=e.target.id,n=a.state.products;n[t].name=e.target.value,n[t].hasChanged=!0,a.setState({products:n})},a.handleChangePrice=function(e){var t=e.target.id,n=a.state.products;n[t].price=e.target.value,n[t].hasChanged=!0,a.setState({products:n})},a.handleChangeImg=function(e){var t=e.target.id,n=a.state.products;n[t].img=e.target.value,n[t].hasChanged=!0,a.setState({products:n})},a.handleChangeStarred=function(e){var t=e.target.id,n=a.state.products;n[t].starred=e.target.checked,n[t].hasChanged=!0,a.setState({products:n})},a.handleChangeCategory=function(e){var t=e.target.id,n=a.state.products,c=a.state.categories.find(function(t){return t._id===e.target.value});n[t].category=c,n[t].hasChanged=!0,a.setState({products:n})},a.handleSubmit=function(e){var t=e.currentTarget.id,n=a.state.products[t]._id,c=localStorage.getItem("payToken");E("put","/products/".concat(n),a.state.products[t],c).then(function(e){var n=a.state.products;n[t].hasChanged=!1,a.setState({products:n})}).catch(function(e){console.log(e)})},a.handleNewName=function(e){a.setState({name:e.target.value,hasChanged:!0})},a.handleNewPrice=function(e){a.setState({price:e.target.value,hasChanged:!0})},a.handleNewImg=function(e){a.setState({img:e.target.value,hasChanged:!0})},a.handleNewCategory=function(e){a.setState({selectedOption:e.target.value,hasChanged:!0})},a.handleNewStarred=function(e){a.setState({starred:e.target.checked})},a.handleNew=function(e){var t={name:a.state.name,price:a.state.price,img:a.state.img,starred:a.state.starred,category:a.state.selectedOption},n=localStorage.getItem("payToken");E("post","/products",t,n).then(function(e){a.setState({name:"",price:"",img:"",starred:!1,selectedOption:"",hasChanged:!1,products:a.state.products.concat(t)})}).catch(function(e){console.log(e)})},a.handleDelete=function(e){var t=e.currentTarget.id,n=a.state.products[t]._id,c=localStorage.getItem("payToken");E("delete","/products/".concat(n),null,c).then(function(e){var n=a.state.products;n.splice(t,1),a.setState({products:n})}).catch(function(e){console.log(e)})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("payToken");E("get","/products",null,t).then(function(t){var a=t.data.products.map(function(e){return Object(g.a)({},e,{hasChanged:!1})});e.setState({products:a})}),E("get","/categories",null,t).then(function(t){e.setState({categories:t.data.categories})})}},{key:"render",value:function(){var e=this,t=this.state.categories.map(function(e,t){return c.a.createElement("option",{key:t,value:e._id},e.name)}),a=this.state.products.map(function(a,n){return c.a.createElement("div",{key:n,className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement("input",{className:"form-control",id:n,value:a.name,onChange:e.handleChangeName})),c.a.createElement("div",{className:"col-md-2"},c.a.createElement("input",{type:"number",className:"form-control",id:n,value:a.price,onChange:e.handleChangePrice})),c.a.createElement("div",{className:"col-md-2"},c.a.createElement("input",{className:"form-control",id:n,value:a.img,onChange:e.handleChangeImg})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("select",{id:n,value:a.category._id,onChange:e.handleChangeCategory,className:"form-control"},t)),c.a.createElement("div",{className:"col-md-1"},c.a.createElement("input",{id:n,className:"form-control",type:"checkbox",checked:a.starred,onChange:e.handleChangeStarred})),c.a.createElement("div",{className:"col-md-2"},c.a.createElement(F.a,{className:"mr-2",variant:"success",id:n,onClick:e.handleSubmit,disabled:!a.hasChanged},c.a.createElement("i",{className:"fas fa-check"})),c.a.createElement(F.a,{variant:"danger",id:n,onClick:e.handleDelete},c.a.createElement("i",{className:"fas fa-trash-alt"}))))});return c.a.createElement("div",{className:"m-5"},c.a.createElement("div",{className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-2"},"Nom"),c.a.createElement("div",{className:"col-md-2"},"Prix"),c.a.createElement("div",{className:"col-md-2"},"Image"),c.a.createElement("div",{className:"col-md-3"},"Cat\xe9gorie"),c.a.createElement("div",{className:"col-md-1"},"Starred"),c.a.createElement("div",{className:"col-md-2"})),a,c.a.createElement("div",{className:"row text-center mb-3"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement("input",{className:"form-control",value:this.state.name,onChange:this.handleNewName})),c.a.createElement("div",{className:"col-md-2"},c.a.createElement("input",{type:"number",className:"form-control",value:this.state.price,onChange:this.handleNewPrice})),c.a.createElement("div",{className:"col-md-2"},c.a.createElement("input",{className:"form-control",value:this.state.img,onChange:this.handleNewImg})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("select",{value:this.state.selectedOption,onChange:this.handleNewCategory,className:"form-control",required:!0},c.a.createElement("option",{value:""},"Choosir Cat\xe9gorie"),t)),c.a.createElement("div",{className:"col-md-1"},c.a.createElement("input",{type:"checkbox",className:"form-control",checked:this.state.starred,onChange:this.handleNewStarred})),c.a.createElement("div",{className:"col-md-2"},c.a.createElement(F.a,{className:"mr-2",variant:"success",onClick:this.handleNew,disabled:!this.state.hasChanged},"Cr\xe9er"))))}}]),t}(n.Component);q.contextType=N;var z=q,H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={categories:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("payToken");E("get","/categories",null,t).then(function(t){e.setState({categories:t.data.categories})})}},{key:"render",value:function(){var e=this.state.categories.map(function(e,t){return c.a.createElement("tr",{id:t},c.a.createElement("td",null,e.name),c.a.createElement("td",null))});return c.a.createElement("div",{className:"container mt-3"},c.a.createElement("div",{className:"text-center"},c.a.createElement("h2",null,"Liste des cat\xe9gories")),c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("th",null,c.a.createElement("td",null,"Nom"),c.a.createElement("td",null))),c.a.createElement("tbody",null,e)))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={accounts:[],name:"",value:0},a.handleChangeValue=function(e){e.preventDefault();var t=e.target.id,n=a.state.accounts;n[t].value=e.target.value,a.setState({accounts:n})},a.handleSubmit=function(e){var t=e.currentTarget.id,n=a.state.accounts[t]._id,c=localStorage.getItem("payToken");E("put","/accounts/".concat(n),a.state.accounts[t],c).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a.handleDelete=function(e){var t=e.currentTarget.id,n=a.state.accounts[t]._id,c=localStorage.getItem("payToken");E("delete","/accounts/".concat(n),null,c).then(function(e){var n=a.state.accounts;n.splice(t,1),a.setState({accounts:n})}).catch(function(e){console.log(e)})},a.handleChangeNewName=function(e){a.setState({name:e.target.value})},a.handleChangeNewValue=function(e){a.setState({value:e.target.value})},a.handleNew=function(e){e.preventDefault();var t={name:a.state.name,value:a.state.value};E("post","/accounts",t).then(function(e){a.setState({accounts:a.state.accounts.concat(t),name:"",value:0})})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("payToken");E("get","/accounts",null,t).then(function(t){e.setState({accounts:t.data.accounts})})}},{key:"render",value:function(){var e=this,t=this.state.accounts.map(function(t,a){return c.a.createElement("tr",{className:"text-center",key:a},c.a.createElement("td",null,t.name),c.a.createElement("td",null,c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",id:a,value:t.value,onChange:e.handleChangeValue})))),c.a.createElement("td",null,c.a.createElement(F.a,{className:"mr-2",variant:"success",id:a,onClick:e.handleSubmit},c.a.createElement("i",{className:"fas fa-check"})),c.a.createElement(F.a,{variant:"danger",id:a,onClick:e.handleDelete},c.a.createElement("i",{className:"fas fa-trash-alt"}))))});return c.a.createElement("div",{className:"container mt-3 text-center"},c.a.createElement("h2",null,"Liste des comptes non-utilisateurs"),c.a.createElement("table",{className:"table table-striped mt-3"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"text-center"},c.a.createElement("th",null,"Nom"),c.a.createElement("th",null,"Montant"),c.a.createElement("th",null))),c.a.createElement("tbody",null,t,c.a.createElement("tr",{className:"text-center"},c.a.createElement("td",null,c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",value:this.state.name,onChange:this.handleChangeNewName})))),c.a.createElement("td",null,c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("input",{className:"form-control",value:this.state.value,onChange:this.handleChangeNewValue})))),c.a.createElement("td",null,c.a.createElement(F.a,{className:"mr-2",variant:"success",onClick:this.handleNew},c.a.createElement("i",{className:"fas fa-check"})))))))}}]),t}(n.Component),W=(a(137),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={orders:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("payToken");E("get","/orders",null,t).then(function(t){e.setState({orders:t.data.orders})})}},{key:"render",value:function(){var e=this.state.orders.map(function(e,t){return c.a.createElement("tr",{className:"text-center",key:t},c.a.createElement("td",null,e.userId.username),c.a.createElement("td",null,e.price))});return c.a.createElement("div",{className:"container mt-3 text-center"},c.a.createElement("h2",null,"Liste des commandes"),c.a.createElement("table",{className:"table table-striped mt-3"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"text-center"},c.a.createElement("th",null,"Utilisateur"),c.a.createElement("th",null,"Prix"))),c.a.createElement("tbody",null,e)))}}]),t}(n.Component)),$=(a(138),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={redirect:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.context.checkLogin(),this.context.getProducts(),this.context.getCategories()}},{key:"render",value:function(){var e=c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 no-padding"},c.a.createElement(T,null))),t=c.a.createElement(h.d,null,c.a.createElement(h.b,{path:this.props.match.path+"/reload",component:U}),c.a.createElement(h.b,{path:this.props.match.path+"/users",component:R}),c.a.createElement(h.b,{path:this.props.match.path+"/products",component:z}),c.a.createElement(h.b,{path:this.props.match.path+"/categories",component:H}),c.a.createElement(h.b,{path:this.props.match.path+"/accounts",component:J}),c.a.createElement(h.b,{path:this.props.match.path+"/orders",component:W}),c.a.createElement(h.b,{exact:!0,path:"/shop",component:V})),a=c.a.createElement(h.d,null,c.a.createElement(h.b,{exact:!0,path:"/shop",component:V}));return c.a.createElement("div",{className:"container-fluid background "},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9 no-padding"},this.context.state.user.isAdmin?e:null,this.context.state.user.isAdmin?t:a),c.a.createElement("div",{className:"col-md-3  no-padding"},c.a.createElement(j,null))))}}]),t}(n.Component));$.contextType=N;var G=$,K=a(148),Q=(a(139),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={badge:""},a.handleChange=function(e){a.setState({badge:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.context.login(a.state.badge)},a.handleErase=function(e){a.setState({badge:""})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;this.context.state.isAuthenticated&&(e=c.a.createElement(h.a,{to:"/shop"}));var t=null;null!=this.context.state.error&&(t=c.a.createElement(K.a,{variant:"warning"},this.context.state.error.message));var a=c.a.createElement("button",{className:"btn btn-primary mt-2",onClick:this.handleErase},"Effacer");return this.context.state.isLoading&&(a=c.a.createElement("div",{class:"lds-ellipsis"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))),c.a.createElement("div",{className:"container-fluid background pt-5"},e,c.a.createElement("div",{className:"text-center"},t,c.a.createElement("div",{className:"card mx-auto"},c.a.createElement("div",{className:"card-header bg-dark text-white"},c.a.createElement("h2",null,"Connexion")),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement("form",{className:"form-group mt-3",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"password",value:this.state.badge,onChange:this.handleChange,placeholder:"Badge",className:"form-control",required:!0,autoFocus:!0})),a)))))}}]),t}(n.Component));Q.contextType=N;var X=Q,Y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.context.logout()}},{key:"render",value:function(){return c.a.createElement(h.a,{to:"/login"})}}]),t}(n.Component);Y.contextType=N;var Z=Y,ee=(a(140),a(141),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(b,null,c.a.createElement(h.d,null,c.a.createElement(h.b,{exact:!0,path:"/login",component:X}),c.a.createElement(h.b,{exact:!0,path:"/logout",component:Z}),c.a.createElement(h.b,{path:"/shop",component:G}),c.a.createElement(h.a,{exact:!0,from:"/",to:"/logout"})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=localStorage.getItem("payToken");v.a.defaults.baseURL="http://localhost:5000",v.a.defaults.headers.common.Authorization="Bearer ".concat(te),l.a.render(c.a.createElement(s.a,null,c.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e,t,a){e.exports=a(142)}},[[76,1,2]]]);
//# sourceMappingURL=main.c746fa07.chunk.js.map