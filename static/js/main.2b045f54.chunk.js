(this.webpackJsonpamift=this.webpackJsonpamift||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(18),r=a.n(i),o=(a(76),a(77),a(78),a(15)),s=a.n(o),c=a(8),u=a(58),m=a.n(u),g=a(108),p=a(109),d=a(33),f=a(23),h=a(24),E=a(27),b=a(25),_=a(42),v=a.n(_),k=function(e){return l.a.createElement("span",null,e.isAuth?l.a.createElement("span",null,l.a.createElement("img",{src:"https://res.cloudinary.com/teepublic/image/private/s--6vDtUIZ---/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1570281377/production/designs/6215195_0.jpg",alt:"Rasm Yuklab olishda Xatolik!!!",className:v.a.imgSize})," ",l.a.createElement("br",null),l.a.createElement("span",{className:v.a.loginStyle},e.login)):l.a.createElement(c.b,{to:"/SignIn",className:"nav-link"},l.a.createElement("button",{type:"button",className:"btn btn-danger"},"Sign In")))},y=a(12),C=a(4),w=a(40).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b8164b60-5a15-4aa7-b434-635f58faebf6"}}),T=function(e,t){return w.get("users?page=".concat(e,"&count=").concat(t),{}).then((function(e){return e.data}))},S=function(e){return w.post("follow/".concat(e),{},{}).then((function(e){return e.data}))},N=function(e){return w.delete("follow/".concat(e),{}).then((function(e){return e.data}))},O=function(){return w.get("auth/me",{})},x=function(e){return w.get("profile/".concat(e),{})},P={id:null,email:null,login:null,isAuth:!1},I=function(e,t,a){return{type:"SET_USER_DATA",data:{id:e,email:t,login:a}}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(C.a)(Object(C.a)(Object(C.a)({},e),t.data),{},{isAuth:!0});default:return e}},F=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.setMe()}},{key:"render",value:function(){return l.a.createElement(k,this.props)}}]),a}(l.a.Component),z=Object(y.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{setUserData:I,setMe:function(){return function(e){O().then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,l=a.login,i=a.email;e(I(n,i,l))}}))}}})(F),A=function(){return l.a.createElement("div",{className:s.a.backImage},l.a.createElement(d.a,{collapseOnSelect:!0,expand:"md"},l.a.createElement(d.a.Brand,{href:"#"},l.a.createElement("img",{src:m.a,className:s.a.image,alt:"aa"})),l.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(g.a,{className:"text-center"},l.a.createElement(c.b,{to:"/yangiliklar",style:{fontSize:"20px",color:"#9C9B9C"},className:"text-decoration-none font-weight-bold nav-link "+"".concat(s.a.animationTarget)},"yangiliklar"),l.a.createElement(c.b,{to:"/UstozlarJamoasi",style:{fontSize:"20px",color:"#9C9B9C"},className:"text-decoration-none font-weight-bold nav-link "+"".concat(s.a.animationTarget1)},"UstozlarJamoasi"),l.a.createElement(c.b,{to:"/Kutubxona",style:{fontSize:"20px",color:"#9C9B9C"},className:"text-decoration-none font-weight-bold nav-link "+"".concat(s.a.animationTarget2)},"Kutubxona"),l.a.createElement(c.b,{to:"/OnlainDarslar",style:{fontSize:"20px",color:"#9C9B9C"},className:"text-decoration-none font-weight-bold nav-link "+"".concat(s.a.animationTarget3)},"OnlainDarslar"),l.a.createElement(c.b,{to:"/IshJoylari",style:{fontSize:"20px",color:"#9C9B9C"},className:"text-decoration-none font-weight-bold nav-link "+"".concat(s.a.animationTarget4)},"IshJoylari"),l.a.createElement(c.b,{to:"/dialogs",style:{fontSize:"20px",color:"#9C9B9C"},className:"text-decoration-none font-weight-bold nav-link "+"".concat(s.a.animationTarget5)},"dialogs"),l.a.createElement(c.b,{to:"/profile",style:{fontSize:"20px",color:"#9C9B9C"},className:"text-decoration-none font-weight-bold nav-link "+"".concat(s.a.animationTarget6)},"profile")),l.a.createElement(g.a,{className:"text-center ml-auto"},l.a.createElement(z,null)))),l.a.createElement(p.a,null,l.a.createElement(p.a.Item,null,l.a.createElement("div",{className:"",style:{height:"300px"}}),l.a.createElement(p.a.Caption,null,l.a.createElement("h2",{className:"text-center pt-4"},"Xush Kelibsiz ",l.a.createElement("br",null)," Amaliy Matematika va Intekektual Texnoligiyalar ",l.a.createElement("br",null)," fakultetining rasmiy saytiga"),l.a.createElement("h3",null,"First slide label"),l.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),l.a.createElement(p.a.Item,null,l.a.createElement("div",{className:"",style:{height:"300px"}}),l.a.createElement(p.a.Caption,null,l.a.createElement("h2",{className:"text-center pt-4"},"Xush Kelibsiz ",l.a.createElement("br",null)," Amaliy Matematika va Intekektual Texnoligiyalar ",l.a.createElement("br",null)," fakultetining rasmiy saytiga"),l.a.createElement("h3",null,"Second slide label"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement(p.a.Item,null,l.a.createElement("div",{className:"",style:{height:"300px"}}),l.a.createElement(p.a.Caption,null,l.a.createElement("h2",{className:"text-center pt-4"},"Xush Kelibsiz ",l.a.createElement("br",null)," Amaliy Matematika va Intekektual Texnoligiyalar ",l.a.createElement("br",null)," fakultetining rasmiy saytiga"),l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))," ",l.a.createElement(p.a.Item,null,l.a.createElement("div",{className:"",style:{height:"300px"}}),l.a.createElement(p.a.Caption,null,l.a.createElement("h2",{className:"text-center pt-4"},"Xush Kelibsiz ",l.a.createElement("br",null)," Amaliy Matematika va Intekektual Texnoligiyalar ",l.a.createElement("br",null)," fakultetining rasmiy saytiga"),l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))))},D=a(6),U=a(38),L={mainContaint:[],totalCount:0,PageSize:10,currentPage:1,isFetching:!1,isFollowFetchingProgress:[]},M=function(e){return{type:"IS_FETCHING",bool:e}},B=function(e,t){return{type:"IS_FOLLOW_FETCHING",FollowBool:e,userId:t}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(t.type){case"FOLLOW":var a=Object(C.a)(Object(C.a)({},e),{},{mainContaint:e.mainContaint.map((function(e){return e.id==t.id?Object(C.a)(Object(C.a)({},e),{},{followed:!0}):e}))});return a;case"UN_FOLLOW":var n=Object(C.a)(Object(C.a)({},e),{},{mainContaint:e.mainContaint.map((function(e){return e.id==t.id?Object(C.a)(Object(C.a)({},e),{},{followed:!1}):e}))});return n;case"SET_USER":var l=Object(C.a)(Object(C.a)({},e),{},{mainContaint:t.users});return l;case"SET_USER_TOTAL_COUNT":return e.totalCount=t.totalCount,e;case"SET_CURRENT_PAGE":return e.currentPage=t.page,e;case"IS_FETCHING":return e.isFetching=t.bool,e;case"IS_FOLLOW_FETCHING":return Object(C.a)(Object(C.a)({},e),{},{isFollowFetchingProgress:t.FollowBool?[].concat(Object(U.a)(e.isFollowFetchingProgress),[t.userId]):e.isFollowFetchingProgress.filter((function(e){return e!=t.userId}))});default:return e}},Y=a(14),G=a.n(Y),W=a(65),J=a.n(W),q=function(){return l.a.createElement("div",null,l.a.createElement("img",{src:J.a,alt:"Tarmoqda hatolik Enternetga bog'langaningizni teshirib qaytadan urinib ko'ring!!!"}))},H=function(e){for(var t=Math.ceil(e.totalCount/e.PageSize),a=[],n=1;n<=t;n++)a.push(n);return l.a.createElement("div",{className:G.a.Yangiliklar},l.a.createElement("div",{className:G.a.fontSize},"Postlar"),l.a.createElement("div",{className:"col-md-8"},a.map((function(t){if(t<=10)return l.a.createElement("span",{className:t==e.currentPage?G.a.activPage:"px-1",onClick:function(){e.onChangePage(t)}},t)})),1!=e.isFetching?l.a.createElement(q,null):null,e.yangiliklar.mainContaint.map((function(t){return l.a.createElement("div",{className:"col-md-12 mb-5"},l.a.createElement("div",{className:G.a.postCard},l.a.createElement("div",{className:"pl-2"},l.a.createElement("div",null,l.a.createElement("span",{className:G.a.userTextColor},"User:"),t.name),l.a.createElement("div",null,l.a.createElement("span",{className:G.a.dateTextColor},"Date:")),l.a.createElement("div",{className:"mt-4"},l.a.createElement(c.b,{to:"/profile/"+t.id},l.a.createElement("img",{src:null!=t.photos.small?t.photos.small:"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",className:G.a.imageSize})))),l.a.createElement("div",{className:G.a.postTextSize})),l.a.createElement("div",{className:"mt-3"},t.followed?l.a.createElement("button",{type:"button",disabled:e.IsFollowFetchingProgress.some((function(e){return e==t.id})),className:"btn btn-danger",onClick:function(){e.Unfollow(t.id)}},"UnFollow"):l.a.createElement("button",{type:"button",className:"btn btn-success",disabled:e.IsFollowFetchingProgress.some((function(e){return e==t.id})),onClick:function(){e.follow(t.id)}},"Follow"),l.a.createElement("span",{className:"float-right"},l.a.createElement("img",{src:"https://marvel-live.freetls.fastly.net/canvas/2020/8/9b1c6680c6fd4e2fad7ea497baac16aa?quality=95&fake=.png&width=54",alt:"",className:G.a.iconSize})," like ",t.likesCount),l.a.createElement("span",{className:"float-right px-5"},l.a.createElement("img",{src:"https://marvel-live.freetls.fastly.net/canvas/2020/8/23d042048fc74e69a945443872677f36?quality=95&fake=.png&width=54",alt:"",className:G.a.iconSize})," comment ",t.commentCount)))}))))},X=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).onChangePage=function(t){e.props.setCurrentPage(t),e.props.getUserThunk(t,e.props.PageSize)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.getUserThunk(this.props.currentPage,this.props.PageSize)}},{key:"render",value:function(){return console.log(this.props),l.a.createElement(H,{onChangePage:this.onChangePage,totalCount:this.props.totalCount,PageSize:this.props.PageSize,currentPage:this.props.currentPage,yangiliklar:this.props.yangiliklar,Unfollow:this.props.Unfollow,follow:this.props.follow,isFetching:this.props.isFetching,IsFollowFetchingProgress:this.props.IsFollowFetchingProgress})}}]),a}(l.a.Component),K=Object(y.b)((function(e){return{yangiliklar:e.yangiliklar,totalCount:e.yangiliklar.totalCount,PageSize:e.yangiliklar.PageSize,currentPage:e.yangiliklar.currentPage,isFetching:e.yangiliklar.isFetching,IsFollowFetchingProgress:e.yangiliklar.isFollowFetchingProgress}}),{follow:function(e){return function(t){t(B(!0,e)),S(e).then((function(a){0==a.resultCode&&t({type:"FOLLOW",id:e}),t(B(!1,e))}))}},Unfollow:function(e){return function(t){t(B(!0,e)),N(e).then((function(a){0==a.resultCode&&t({type:"UN_FOLLOW",id:e}),t(B(!1,e))}))}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",page:e}},IsFollowFetchingToggle:B,getUserThunk:function(e,t){return function(a){a(M(!1)),T(e,t).then((function(e){a(M(!0)),a({type:"SET_USER",users:e.items}),a({type:"SET_USER_TOTAL_COUNT",totalCount:e.totalCount})}))}}})(X),Z={dialogs:[{id:1,name:"Sardor"},{id:2,name:"Dilshod"},{id:3,name:"Sanjar"},{id:4,name:"Avaz"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}],newMessage:""},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,a=Object(C.a)({},e);return"EDIT-DIOLOGS"===t.type&&(a.newMessage=t.text),"ADD-DIOLOGS"===t.type&&(a.messages.push({id:6,message:e.newMessage}),a.newMessage=""),a},V=a(17),$=a.n(V),ee=function(e){var t="/dialogs/"+e.id;return l.a.createElement("div",{className:$.a.dialog+" "+$.a.active},l.a.createElement(c.b,{to:t},e.name))},te=function(e){return l.a.createElement("div",{className:$.a.dialog},e.message)},ae=function(e){var t=e.state.dialogs.map((function(e){return l.a.createElement(ee,{name:e.name,id:e.id})})),a=e.state.messages.map((function(e){return l.a.createElement(te,{message:e.message})}));return e.isAuth?l.a.createElement("div",{className:$.a.dialogs},l.a.createElement("div",{className:$.a.dialogsItems},t),l.a.createElement("div",{className:$.a.messages},a),l.a.createElement("div",null,l.a.createElement("textarea",{onChange:function(t){e.onChangeMessage(t.target.value)},value:e.state.newMessage})),l.a.createElement("div",null,l.a.createElement("button",{type:"button",onClick:function(){e.addMessage()}},"add"))):l.a.createElement(D.a,{to:"/SignIn"})},ne=Object(y.b)((function(e){return{state:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{addMessage:function(){return e({type:"ADD-DIOLOGS"})},onChangeMessage:function(t){return e({type:"EDIT-DIOLOGS",text:t})}}}))(ae),le=a(66),ie=a.n(le),re=function(){return l.a.createElement("div",{className:ie.a.Users},"blabla")},oe=(a(104),a(67)),se=a.n(oe),ce=function(e){return e.profile?l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"})),l.a.createElement("div",{className:se.a.descriptionBlock},l.a.createElement("img",{src:e.profile.photos.large,alt:""}),"ava + description")):l.a.createElement(q,null)},ue={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],newPostText:"Abdulaziz",profile:null},me=function(e){return{type:"SET_USER_PROFILE",profile:e}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var a={id:5,message:e.newPostText,likesCount:0},n=Object(C.a)({},e);return n.posts=Object(U.a)(e.posts),n.newPostText="",n.posts.push(a),n;case"EDIT-TEXT":var l=Object(C.a)({},e);return l.newPostText=t.newText,l;case"SET_USER_PROFILE":return Object(C.a)(Object(C.a)({},e),{},{profile:t.profile});default:return e}},pe=a(46),de=a.n(pe),fe=a(68),he=a.n(fe),Ee=function(e){return l.a.createElement("div",{className:he.a.item},l.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,l.a.createElement("div",null,l.a.createElement("span",null,"like")," ",e.likesCount))},be=function(e){var t=e.posts.map((function(e){return l.a.createElement(Ee,{message:e.message,likesCount:e.likesCount})})),a=l.a.createRef();return l.a.createElement("div",{className:de.a.postsBlock},l.a.createElement("h3",null,"My posts"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("textarea",{ref:a,onChange:function(){var t=a.current.value;e.onChangeClick(t)},value:e.newPostText})),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){e.newPost()}},"Add post"))),l.a.createElement("div",{className:de.a.posts},t))},_e=Object(y.b)((function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts}}),(function(e){return{newPost:function(){e({type:"ADD-MESSAGE"})},onChangeClick:function(t){e({type:"EDIT-TEXT",newText:t})}}}))(be),ve=function(e){return l.a.createElement("div",null,l.a.createElement(ce,{profile:e.profile}),l.a.createElement(_e,null))},ke=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=2),this.props.getProfie(e)}},{key:"render",value:function(){return this.props.isAuth?l.a.createElement(ve,Object.assign({},this.props,{profile:this.props.profile})):l.a.createElement(D.a,{to:"/SignIn"})}}]),a}(l.a.Component),ye=Object(D.f)(ke),Ce=Object(y.b)((function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth}}),{setUserProfile:me,getProfie:function(e){return function(t){x(e).then((function(e){t(me(e.data))}))}}})(ye),we=function(){return l.a.createElement("h1",null,"Login ")};var Te=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"mainFon container-fluid"},l.a.createElement("div",{className:"container px-0"},l.a.createElement(A,null),l.a.createElement(D.b,{path:"/yangiliklar",render:function(){return l.a.createElement(K,null)}}),l.a.createElement(D.b,{path:"/dialogs",render:function(){return l.a.createElement(ne,null)}}),l.a.createElement(D.b,{path:"/profile/:userId?",render:function(){return l.a.createElement(Ce,null)}}),l.a.createElement(D.b,{path:"/SignIn",render:function(){return l.a.createElement(we,null)}}),l.a.createElement(D.b,{path:"/SignUp",component:re})),l.a.createElement("div",{style:{height:"700px"}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=a(29),Ne=a(69),Oe=Object(Se.c)({profilePage:ge,dialogsPage:Q,yangiliklar:R,auth:j}),xe=Object(Se.d)(Oe,Object(Se.a)(Ne.a));window.store=xe;var Pe=xe;r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y.a,{store:Pe},l.a.createElement(Te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},14:function(e,t,a){e.exports={Yangiliklar:"Yangiliklar_Yangiliklar__37bXK",postCard:"Yangiliklar_postCard__2GMwZ",postTextSize:"Yangiliklar_postTextSize__3D375",fontSize:"Yangiliklar_fontSize__3PwCa",imageSize:"Yangiliklar_imageSize__f0foL",activPage:"Yangiliklar_activPage__fcmbI",userTextColor:"Yangiliklar_userTextColor__2OtsO",dateTextColor:"Yangiliklar_dateTextColor__1oJZ-",iconSize:"Yangiliklar_iconSize__1H4w1"}},15:function(e,t,a){e.exports={image:"Navbar_image__Jzwyt",iconLogin:"Navbar_iconLogin__3WSig",backImage:"Navbar_backImage__sNvhp",animationTarget:"Navbar_animationTarget__2Pjmu",animation:"Navbar_animation__1ABph",animationTarget1:"Navbar_animationTarget1__1rJuM",animationTarget2:"Navbar_animationTarget2__2OJle",animationTarget3:"Navbar_animationTarget3__2_BBY",animationTarget4:"Navbar_animationTarget4__gdggA",animationTarget5:"Navbar_animationTarget5__3q3jW",animationTarget6:"Navbar_animationTarget6__e4tM4"}},17:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2hAqk",dialogsItems:"Dialogs_dialogsItems__3Efkh",active:"Dialogs_active__39xUr",messages:"Dialogs_messages__2ddXi",message:"Dialogs_message__1y2bb"}},42:function(e,t,a){e.exports={imgSize:"SignIn_imgSize__13mhj",loginStyle:"SignIn_loginStyle__4H4w7"}},46:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1vVI8",posts:"MyPosts_posts__D0RRb"}},58:function(e,t,a){e.exports=a.p+"static/media/amiftIcon.b1c68a6b.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/Loading.104f6142.gif"},66:function(e,t,a){e.exports={Users:"SignUp_Users__2W_0A"}},67:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__39Q-r"}},68:function(e,t,a){e.exports={item:"Post_item__2CziL"}},71:function(e,t,a){e.exports=a(105)},76:function(e,t,a){},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.2b045f54.chunk.js.map