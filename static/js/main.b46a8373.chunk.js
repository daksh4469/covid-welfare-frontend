(this["webpackJsonpcovid-welfare-frontend"]=this["webpackJsonpcovid-welfare-frontend"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(18),l=a.n(s),r=(a(50),a(5)),c=a(6),i=a(8),u=a(7),m=(a(51),a(52),a(16)),h=a(1),d=(a(53),a(28)),p="641145669737-r3r370rcf0o8tg0el2ip8tohq7lo559v.apps.googleusercontent.com",g=(n.Component,a(3)),f=a.n(g),b=o.a.createContext(),k=b.Provider,v=(b.Consumer,a(4)),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleUsnmChange=function(e){n.setState({User:Object(m.a)(Object(m.a)({},n.state.User),{},{userName:e.target.value})})},n.handleEmailChange=function(e){n.setState({User:Object(m.a)(Object(m.a)({},n.state.User),{},{emailId:e.target.value})})},n.handlePasswordChange=function(e){n.setState({User:Object(m.a)(Object(m.a)({},n.state.User),{},{password:e.target.value})})},n.handlePassword2Change=function(e){n.setState({User:Object(m.a)(Object(m.a)({},n.state.User),{},{password2:e.target.value})})},n.state={User:{userName:"",emailId:"",password:"",password2:""},Username:"",pass:"",loginError:""},n.handleSignUp=n.handleSignUp.bind(Object(h.a)(n)),n.handleUsnmChange=n.handleUsnmChange.bind(Object(h.a)(n)),n.handleEmailChange=n.handleEmailChange.bind(Object(h.a)(n)),n.handlePasswordChange=n.handlePasswordChange.bind(Object(h.a)(n)),n.handlePassword2Change=n.handlePassword2Change.bind(Object(h.a)(n)),n.handleLoginchange=n.handleLoginchange.bind(Object(h.a)(n)),n.handleLoginpass=n.handleLoginpass.bind(Object(h.a)(n)),n.handleLogin=n.handleLogin.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("token")&&this.props.history.push("/MyProfile/".concat(localStorage.getItem("username")))}},{key:"handleLoginchange",value:function(e){this.setState({Username:e.target.value})}},{key:"handleLoginpass",value:function(e){this.setState({pass:e.target.value})}},{key:"handleSignUp",value:function(){var e=this;console.log(this.state.User),""!=this.state.User.userName&&""!=this.state.User.emailId&&""!=this.state.User.password&&""!=this.state.User.password2&&(this.state.User.password===this.state.User.password2?f.a.post("https://hidden-reef-87983.herokuapp.com/api/user/register/",{username:this.state.User.userName,email:this.state.User.emailId,password:this.state.User.password,password2:this.state.User.password2}).then((function(t){console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("username",e.state.User.userName),e.props.history.push("/EditProfile/".concat(e.state.User.userName))})).catch((function(e){console.log(e)})):alert("Passwords do not match"))}},{key:"handleLogin",value:function(){var e=this;f.a.post("https://hidden-reef-87983.herokuapp.com/api/user/login/",{username:this.state.Username,password:this.state.pass}).then((function(t){console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("username",e.state.Username),e.props.history.push("/MyProfile/".concat(localStorage.getItem("username")))})).catch((function(t){e.setState({loginError:"Incorrect Username or Password. Please Try Again...."}),console.log(t)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"signup"},o.a.createElement("h1",null,"JOIN US"),o.a.createElement("form",{onSubmit:this.handleSignUp},o.a.createElement("label",null,"Username"),o.a.createElement("br",null),o.a.createElement("input",{className:"inputs",ref:function(t){return e.mainInput=t},type:"text",value:this.state.User.userName,onChange:this.handleUsnmChange,required:!0}),o.a.createElement("br",null),o.a.createElement("label",null,"Email id"),o.a.createElement("br",null),o.a.createElement("input",{className:"inputs",ref:function(t){return e.mainInput=t},type:"text",value:this.state.User.emailId,onChange:this.handleEmailChange,required:!0}),o.a.createElement("br",null),o.a.createElement("label",null,"Password"),o.a.createElement("br",null),o.a.createElement("input",{className:"inputs",ref:function(t){return e.mainInput=t},type:"password",value:this.state.User.password,onChange:this.handlePasswordChange,required:!0}),o.a.createElement("br",null),o.a.createElement("label",null,"Confirm password"),o.a.createElement("br",null),o.a.createElement("input",{className:"inputs",ref:function(t){return e.mainInput=t},type:"password",value:this.state.User.password2,onChange:this.handlePassword2Change,required:!0}),o.a.createElement("br",null)),o.a.createElement("button",{onClick:this.handleSignUp,className:"b1"},"SIGN UP")),o.a.createElement("div",{className:"login"},o.a.createElement("h1",null,"LOG IN"),o.a.createElement("form",null,o.a.createElement("label",null,"Username"),o.a.createElement("br",null),o.a.createElement("input",{className:"inputs",type:"text",value:this.state.Username,onChange:this.handleLoginchange}),o.a.createElement("br",null),o.a.createElement("label",null,"Password"),o.a.createElement("br",null),o.a.createElement("input",{className:"inputs",type:"password",value:this.state.pass,onChange:this.handleLoginpass}),o.a.createElement("br",null),o.a.createElement("h4",{className:"login-error"},this.state.loginError)),o.a.createElement("button",{onClick:this.handleLogin,className:"b3"},"LOG IN"))))}}]),a}(n.Component),C=Object(v.f)(E),S=a(15),y=(a(74),a(44)),N=a.n(y),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"left"},o.a.createElement("h1",null,"Covid WelFare"),o.a.createElement("p",{className:"intro-desp"},"As the nation is gripped in a crippling pandemic, our fellow countrymen are facing various problems every day. CovidWelfare is a social platform where people with needs and people with means to provide can interact so that we can stay strong in these trying times."),o.a.createElement(S.b,{to:"/GetStarted"},o.a.createElement("button",{className:"getstartedButton"},"Get Started"))),o.a.createElement("div",{className:"rightsvg"},o.a.createElement("img",{src:N.a}))))}}]),a}(n.Component),w=(a(75),a(76),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={username:n.props.username,token:n.props.token},n.handleClick=n.handleClick.bind(Object(h.a)(n)),n.handleLogout=n.handleLogout.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({username:this.props.username,token:this.props.token})}},{key:"handleClick",value:function(e){this.props.history.push("/".concat(e.target.value,"/").concat(localStorage.getItem("username"),"/"))}},{key:"handleLogout",value:function(){localStorage.removeItem("username"),localStorage.removeItem("token"),this.props.history.push("/")}},{key:"render",value:function(){return o.a.createElement("div",{className:"Navbar-prnt"},o.a.createElement("div",{className:"Navbar-cntr"},o.a.createElement("button",{className:"nav-button one",value:"MyProfile",onClick:this.handleClick},"My Profile"),o.a.createElement("button",{className:"nav-button",value:"Seek",onClick:this.handleClick},"Seek"),o.a.createElement("button",{className:"nav-button",value:"Provide",onClick:this.handleClick},"Provide"),o.a.createElement("button",{className:"nav-button",value:"Notifications",onClick:this.handleClick},"Notifications"),o.a.createElement("button",{className:"nav-button-logout",value:"Logout",onClick:this.handleLogout},"Logout")))}}]),a}(n.Component)),j=Object(v.f)(w),U=a(21),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).authors=["Marie Curie","Anonymous","Swami Vivekanand","Thich Nhat Hanh","Etienne de Grellet"],n.quotes=["Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.   -Marie Curie","Those who have an enthusiasm and interest in life, stay young - no matter how 'old' they get. It is these people who often stay the healthiest and live the longest too.  -Anonymous","The cheerful mind perseveres, and the strong mind hews its way through a thousand difficulties.....  -Swami Vivekanand","Keeping your body healthy is an expression of gratitude to the whole cosmos- the trees, the clouds, everything.  -Thich Nhat Hanh","I shall pass this way but once; any good that I can do or any kindness I can show to any human being; let me do it now...  -Etienne de Grellet"],n.state={User:"",username:"",token:""},n.handleEdit=n.handleEdit.bind(Object(h.a)(n)),n.checkLogin=n.checkLogin.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.checkLogin()?f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(localStorage.getItem("username")),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){e.setState({User:t.data}),console.log(e.state.User)})).catch((function(e){console.log(e)})):(console.log("unauthenticated"),this.props.history.push("/GetStarted"))}},{key:"checkLogin",value:function(){return null!==localStorage.getItem("username")}},{key:"handleEdit",value:function(){this.props.history.push("/EditProfile/".concat(localStorage.getItem("username")))}},{key:"render",value:function(){return o.a.createElement("div",{className:"MyProfile-prnt"},o.a.createElement("div",{className:"MyProfile-cntr"},o.a.createElement("div",{className:"MyProfile-left"},o.a.createElement(j,null)),o.a.createElement("div",{className:"MyProfile-center"},o.a.createElement("div",{className:"picture-editbutton"},o.a.createElement("div",{className:"MyProfile-picture"},localStorage.getItem("username")[0].toUpperCase()),o.a.createElement(U.a,{icon:"user-edit",onClick:this.handleEdit,className:"useredit",title:"Edit Details"})),o.a.createElement("div",{className:"MyProfile-details"},o.a.createElement("p",{className:"attribute-para"},o.a.createElement("span",{className:"profile-atrribute"},"Name:  "),o.a.createElement("br",null),localStorage.getItem("username")[0].toUpperCase()+localStorage.getItem("username").slice(1)),o.a.createElement("p",{className:"attribute-para"},o.a.createElement("span",{className:"profile-atrribute"},"Contact:  "),o.a.createElement("br",null),this.state.User.contact),o.a.createElement("p",{className:"attribute-para"},o.a.createElement("span",{className:"profile-atrribute"},"Blood Group:  "),o.a.createElement("br",null),this.state.User.blood_group),o.a.createElement("p",{className:"attribute-para"},o.a.createElement("span",{className:"profile-atrribute"},"Address:  "),o.a.createElement("br",null),this.state.User.address),o.a.createElement("p",{className:"attribute-para"},o.a.createElement("span",{className:"profile-atrribute"},"Occupation:  "),o.a.createElement("br",null),this.state.User.occupation)),o.a.createElement("div",null)),o.a.createElement("div",{className:"MyProfile-right"},o.a.createElement("div",{className:"MyProfile-motivation"},o.a.createElement("p",{className:"motivational-para"},this.quotes[Math.floor(5*Math.random())])))))}}]),a}(n.Component),q=Object(v.f)(I),P=(a(42),a(79),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={provideReqs:[],seekReqs:[],othersReqs:[],clickedUser:[],seektext:""},n.getProvideReqs=n.getProvideReqs.bind(Object(h.a)(n)),n.getSeekReqs=n.getSeekReqs.bind(Object(h.a)(n)),n.getothersReqs=n.getothersReqs.bind(Object(h.a)(n)),n.showDetails=n.showDetails.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getProvideReqs(),this.getSeekReqs(),this.getothersReqs()}},{key:"getProvideReqs",value:function(){var e=this;f.a.get("https://hidden-reef-87983.herokuapp.com/notification/providereq/",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){e.setState({provideReqs:t.data.users}),console.log(e.state.provideReqs)})).catch((function(e){console.log(e)}))}},{key:"getSeekReqs",value:function(){var e=this;f.a.get("https://hidden-reef-87983.herokuapp.com/notification/seekreq/",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){e.setState({seekReqs:t.data.users}),console.log(e.state.seekReqs)})).catch((function(e){console.log(e)}))}},{key:"getothersReqs",value:function(){var e=this;f.a.get("https://hidden-reef-87983.herokuapp.com/notification/",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){e.setState({othersReqs:t.data.notifications}),console.log(t)})).catch((function(e){console.log(e)}))}},{key:"showDetails",value:function(e){var t=this;f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(e),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){t.setState({clickedUser:e.data}),console.log(t.state.clickedUser)})).catch((function(e){console.log(e)})),f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(e,"/seek"),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){t.setState({seektext:e.data.seek_text})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"notification-prnt"},o.a.createElement("div",{className:"notification-cntr"},o.a.createElement("div",{className:"notification-left"},o.a.createElement(j,null)),o.a.createElement("div",{className:"notification-center"},o.a.createElement("div",{className:"nofis"},o.a.createElement("div",{className:"nofis-card"},o.a.createElement("h4",null,"Your provide requests"),o.a.createElement("div",null,this.state.provideReqs.map((function(t){return o.a.createElement("div",null,o.a.createElement("text",null,"You have requested to help")," ",o.a.createElement("text",{value:t,className:"req-name",onClick:function(){return e.showDetails(t)}}," ",t))})))),o.a.createElement("div",{className:"nofis-card"},o.a.createElement("h4",null,"Your seek requests"),o.a.createElement("div",null,this.state.seekReqs.map((function(t){return o.a.createElement("div",null,o.a.createElement("p",null,"You have requested to get help from")," ",o.a.createElement("p",{value:t,className:"req-name",onClick:function(){return e.showDetails(t)}}," ",t))})))),o.a.createElement("div",{className:"nofis-card"},o.a.createElement("h4",null,"People who have requested from you"),o.a.createElement("div",null,this.state.othersReqs.map((function(t){return o.a.createElement("div",null,o.a.createElement("p",{value:t,className:"req-name",onClick:function(){return e.showDetails(t.text.split(" ")[0])}},t.text),o.a.createElement("p",null,t.time.slice(0,10)))})))))),o.a.createElement("div",{className:"notification-right"},Object.keys(this.state.clickedUser).length>0?o.a.createElement("div",{className:"details"},o.a.createElement("div",{className:"detail-heading"},"Username"),o.a.createElement("div",{className:"detail-text"}," ",this.state.clickedUser.username),o.a.createElement("div",{className:"detail-heading"},"Adrress"),o.a.createElement("div",{className:"detail-text"}," ",this.state.clickedUser.address),o.a.createElement("div",{className:"detail-heading"},"Blood group"),o.a.createElement("div",{className:"detail-text"}," ",this.state.clickedUser.blood_group),o.a.createElement("div",{className:"detail-heading"},"Contact number"),o.a.createElement("div",{className:"detail-text"}," ",this.state.clickedUser.contact),o.a.createElement("div",{className:"detail-heading"},"Occupation"),o.a.createElement("div",{className:"detail-text"}," ",this.state.clickedUser.occupation),o.a.createElement("div",{className:"detail-heading"},"Seektext"),o.a.createElement("div",{className:"detail-text"}," ",this.state.seektext)):o.a.createElement("div",null,"Click on a notification to see its details"))))}}]),a}(n.Component)),x=a(22),M=a(24),L=(a(80),a(23)),A=a.n(L),z=a(31),B=a(13),R=(a(82),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).requestProviderDetails=function(e,t){n.setState({dist:t}),f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(e,"/"),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){n.setState({userClicked:e.data}),console.log(n.state.userClicked)})).catch((function(e){console.log(e)})),document.getElementsByClassName("invisible")[0].style.zIndex="1"},n.handleCloseButton=function(){n.setState({userclicked:{}}),document.getElementsByClassName("invisible")[0].style.zIndex="-1"},n.handleRequestButton=function(){f.a.post("/notification/seekreq/",{user:n.state.userClicked.username},{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}),n.setState({userclicked:{}}),alert("Request Succesfully SENT...."),document.getElementsByClassName("invisible")[0].style.zIndex="-1"},n.state={mylat:1,mylon:1,Users:[],userClicked:[],dist:""},n.requestProviderDetails=n.requestProviderDetails.bind(Object(h.a)(n)),n.showMyLocation=n.showMyLocation.bind(Object(h.a)(n)),n.showProviders=n.showProviders.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.showMyLocation()}},{key:"showMyLocation",value:function(){var e=Object(z.a)(A.a.mark((function e(){var t=this;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(localStorage.getItem("username"),"/"),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){t.setState({mylat:e.data.lat,mylon:e.data.lon}),console.log(t.state.mylat+" "+t.state.mylon),t.showProviders()})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"showProviders",value:function(){var e=Object(z.a)(A.a.mark((function e(){var t=this;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("showProviders"),f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(localStorage.getItem("username"),"/seeklist"),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){console.log("aa"),t.setState({Users:e.data.data}),console.log(t.state.Users)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.mylat,a=this.state.mylon;return o.a.createElement("div",{className:"Smap-cntr"},o.a.createElement("h1",{className:"invisible"},o.a.createElement("div",{className:"MyProfile-details"},o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"Name:  "),o.a.createElement("br",null),this.state.userClicked.username),o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"Contact:  "),o.a.createElement("br",null),this.state.userClicked.contact),o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"Blood Group:  "),o.a.createElement("br",null),this.state.userClicked.blood_group),o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"Address:  "),o.a.createElement("br",null),this.state.userClicked.address),o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"Occupation:  "),o.a.createElement("br",null),this.state.userClicked.occupation),o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"Distance form you:  "),o.a.createElement("br",null),this.state.dist," Kms"),o.a.createElement("button",{onClick:this.handleRequestButton},"Request"),o.a.createElement("br",null),o.a.createElement("button",{className:"closebutton",onClick:this.handleCloseButton},"Close"))),o.a.createElement(B.Map,{google:this.props.google,containerStyle:{position:"relative",width:"100%",height:"100%"},center:{lat:t,lng:a},zoom:15,onClick:this.onMapClicked,className:"Smap-map"},o.a.createElement(B.Marker,{title:localStorage.getItem("username"),name:"SOMA",position:{lat:t,lng:a},icon:{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/585px-Map_marker.svg.png",scaledSize:new this.props.google.maps.Size(35,50)}}),this.state.Users.map((function(t){return o.a.createElement(B.Marker,{onClick:function(){e.requestProviderDetails(t.username,t.dist)},title:"".concat(t.username," | ").concat(t.dist," Kms "),name:t.username,position:{lat:t.lat,lng:t.lon}})})),o.a.createElement(B.InfoWindow,{onClose:this.onInfoWindowClose},o.a.createElement("div",null,o.a.createElement("h1",null)))))}}]),a}(n.Component)),D=Object(B.GoogleApiWrapper)({apiKey:"AIzaSyBXNlWEKkk2l9Yalt5F0Do4hVcMTYWePGE"})(R),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={Users:[],seektext:""},n.handleSeekChange=n.handleSeekChange.bind(Object(h.a)(n)),n.requestHelp=n.requestHelp.bind(Object(h.a)(n)),n.checkLogin=n.checkLogin.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.checkLogin()||(console.log("unauthenticated"),this.props.history.push("/GetStarted"))}},{key:"checkLogin",value:function(){return null!==localStorage.getItem("username")}},{key:"handleSeekChange",value:function(e){e.target.value.length<=300?this.setState({seektext:e.target.value}):alert("Limit Exceeded...")}},{key:"requestHelp",value:function(e){f.a.post("https://hidden-reef-87983.herokuapp.com/api/".concat(localStorage.getItem("username"),"/seek/"),{seek_text:this.state.seektext},{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){alert("successful"),console.log(e)})).catch((function(e){console.log(e)})),this.setState({seektext:""})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Seek-prnt"},o.a.createElement("div",{className:"Seek-cntr"},o.a.createElement("div",{className:"Seek-left"},o.a.createElement(j,null)),o.a.createElement("div",{className:"Seek-center"},o.a.createElement("h2",null,"How can we help you?"),o.a.createElement("textarea",{placeholder:"Enter your request.......",type:"text",value:this.state.seektext,onChange:this.handleSeekChange,style:{resize:"none",width:"80%",height:"70%",fontSize:"27px"}}),o.a.createElement("button",{className:"seek-button",onClick:this.requestHelp},"Confirm")),o.a.createElement("div",{className:"Seek-right"},o.a.createElement(D,{type:"seek"}))))}}]),a}(n.Component),G=(a(98),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={mylat:1,mylon:1,Users:[]},n.showMyLocation=n.showMyLocation.bind(Object(h.a)(n)),n.showSeekers=n.showSeekers.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.showMyLocation()}},{key:"showMyLocation",value:function(){var e=this;f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(localStorage.getItem("username"),"/"),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){e.setState({mylat:t.data.lat,mylon:t.data.lon}),console.log(e.state.mylat+" "+e.state.mylon),e.showSeekers()})).catch((function(e){console.log(e)}))}},{key:"showSeekers",value:function(){var e=this;f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(localStorage.getItem("username"),"/").concat(this.props.type,"list"),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){e.setState({Users:t.data.data}),console.log(e.state.Users)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.mylat,a=this.state.mylon;return o.a.createElement("div",{className:"Pmap-cntr"},o.a.createElement("h1",{className:"invisible"},o.a.createElement("div",{className:"MyProfile-details"},o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"Name:  "),o.a.createElement("br",null),this.props.userClicked.username),o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"Contact:  "),o.a.createElement("br",null),this.props.userClicked.contact),o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"Distance from you:  "),o.a.createElement("br",null),this.props.dist," Kms"),o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"Blood Group:  "),o.a.createElement("br",null),this.props.userClicked.blood_group),o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"Address:  "),o.a.createElement("br",null),this.props.userClicked.address),o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"Occupation:  "),o.a.createElement("br",null),this.props.userClicked.occupation),o.a.createElement("p",{className:"attribute-para-map"},o.a.createElement("span",{className:"profile-atrribute-map"},"In need of:  "),o.a.createElement("br",null),this.props.seektext),o.a.createElement("button",{onClick:this.props.handleRequestButton},"Request"),o.a.createElement("br",null),o.a.createElement("button",{className:"closebutton",onClick:this.props.handleCloseButton},"Close"))),o.a.createElement(B.Map,{google:this.props.google,containerStyle:{position:"relative",width:"100%",height:"100%"},center:{lat:t,lng:a},zoom:15,onClick:this.onMapClicked,className:"Pmap-map"},o.a.createElement(B.Marker,{title:localStorage.getItem("username"),position:{lat:t,lng:a},icon:{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/585px-Map_marker.svg.png",scaledSize:new this.props.google.maps.Size(35,50)}}),this.state.Users.map((function(t){return o.a.createElement(B.Marker,{onClick:function(){e.props.requestSeekerDetails(t.username,t.dist)},title:"".concat(t.username," | ").concat(t.dist," Kms "),name:t.username,position:{lat:t.lat,lng:t.lon}})})),o.a.createElement(B.InfoWindow,{onClose:this.onInfoWindowClose},o.a.createElement("div",null,o.a.createElement("h1",null)))))}}]),a}(n.Component)),_=Object(B.GoogleApiWrapper)({apiKey:"AIzaSyBXNlWEKkk2l9Yalt5F0Do4hVcMTYWePGE"})(G),W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).requestSeekerDetails=function(e,t){n.setState({dist:t}),f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(e,"/"),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){n.setState({userClicked:e.data}),console.log(n.state.userClicked)})).catch((function(e){console.log(e)})),f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(e,"/seek/"),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){n.setState({seektext:e.data.seek_text}),console.log(e)})).catch((function(e){console.log(e)})),document.getElementsByClassName("invisible")[0].style.zIndex="1"},n.handleRequestButton=function(){f.a.post("https://hidden-reef-87983.herokuapp.com/notification/providereq/",{user:n.state.userClicked.username},{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),f.a.get("https://hidden-reef-87983.herokuapp.com/notification/providereq/",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),f.a.get("https://hidden-reef-87983.herokuapp.com/notification/seekreq/",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),document.getElementsByClassName("invisible")[0].style.zIndex="-1"},n.state={User:[],provide:"",Seekers:[],userClicked:[],dist:"",seektext:""},n.toggleProvide=n.toggleProvide.bind(Object(h.a)(n)),n.requestSeekerDetails=n.requestSeekerDetails.bind(Object(h.a)(n)),n.handleRequestButton=n.handleRequestButton.bind(Object(h.a)(n)),n.checkLogin=n.checkLogin.bind(Object(h.a)(n)),n.handleCloseButton=n.handleCloseButton.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.checkLogin()?(f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(localStorage.getItem("username")),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){e.setState({User:t.data,provide:t.data.provide}),console.log(e.state.User)})).catch((function(e){console.log(e)})),f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(localStorage.getItem("username"),"/providelist"),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){e.setState({Seekers:t.data.data}),console.log("hi"),console.log(e.state.Seekers)})).catch((function(e){console.log(e)}))):(console.log("unauthenticated"),this.props.history.push("/GetStarted"))}},{key:"checkLogin",value:function(){return null!==localStorage.getItem("username")}},{key:"toggleProvide",value:function(e){var t=this;f.a.post("https://hidden-reef-87983.herokuapp.com/api/".concat(localStorage.getItem("username"),"/"),{contact:this.state.User.contact,occupation:this.state.User.occupation,address:this.state.User.address,lat:this.state.User.lat,lon:this.state.User.lon,blood_group:this.state.User.blood_group,provide:e.target.checked,username:localStorage.getItem("username")},{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e),t.setState({provide:e.data.provide})})).catch((function(e){console.log(e)}))}},{key:"handleCloseButton",value:function(){document.getElementsByClassName("invisible")[0].style.zIndex="-1"}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Provide-prnt"},o.a.createElement("div",{className:"Provide-cntr"},o.a.createElement("div",{className:"Provide-left"},o.a.createElement(j,null)),o.a.createElement("div",{className:"Provide-center"},o.a.createElement("div",{className:"Provide-input"},o.a.createElement("label",null,"Provide"),o.a.createElement("input",{type:"checkbox",checked:this.state.provide,onClick:this.toggleProvide})),o.a.createElement("div",null,o.a.createElement("h2",{className:"peopleNeed"},"People in need"),o.a.createElement("div",{className:"seekList"},this.state.Seekers.map((function(t){return o.a.createElement("div",{className:"seekers",onClick:function(){return e.requestSeekerDetails(t.username,t.dist)}},o.a.createElement("strong",null,"Name: "),t.username,o.a.createElement("br",null),o.a.createElement("strong",null,"Distance: "),t.dist.toFixed(4)," Kms",o.a.createElement("br",null),o.a.createElement("br",null))}))))),o.a.createElement("div",{className:"Provide-right"},o.a.createElement(_,{type:"provide",handleCloseButton:this.handleCloseButton,handleRequestButton:this.handleRequestButton,requestSeekerDetails:this.requestSeekerDetails,userClicked:this.state.userClicked,dist:this.state.dist,seektext:this.state.seektext}))))}}]),a}(n.Component),K=(a(99),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getCoords=function(e){navigator.geolocation&&navigator.geolocation.getCurrentPosition(n.getCoordinates)},n.getCoordinates=function(e){n.setState({lat:e.coords.latitude,lon:e.coords.longitude}),console.log(n.state.lat,n.state.lon)},n.handleUsnmChange=function(e){n.setState({username:e.target.value})},n.handleCnChange=function(e){n.setState({contactnum:e.target.value})},n.handleBgChange=function(e){n.setState({bloodgroup:e.target.value})},n.handleOcChange=function(e){n.setState({occupation:e.target.value})},n.handleAdChange=function(e){n.setState({address:e.target.value})},n.handlePrChange=function(e){n.setState({provide:e.target.checked})},n.handleLcChange=function(e){n.setState({changelocation:e.target.checked})},n.state={User:"",username:"",contactnum:"",bloodgroup:"",occupation:"",address:"",lat:"",lon:"",changelocation:!1},n.handleAdChange=n.handleAdChange.bind(Object(h.a)(n)),n.handleUsnmChange=n.handleUsnmChange.bind(Object(h.a)(n)),n.handleOcChange=n.handleOcChange.bind(Object(h.a)(n)),n.handleCnChange=n.handleCnChange.bind(Object(h.a)(n)),n.handleBgChange=n.handleBgChange.bind(Object(h.a)(n)),n.handlePrChange=n.handlePrChange.bind(Object(h.a)(n)),n.getCoords=n.getCoords.bind(Object(h.a)(n)),n.getCoordinates=n.getCoordinates.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getCoords(),f.a.get("https://hidden-reef-87983.herokuapp.com/api/".concat(localStorage.getItem("username")),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){e.setState({User:t.data})})).catch((function(e){console.log(e)}))}},{key:"handleSubmit",value:function(){f.a.post("https://hidden-reef-87983.herokuapp.com/api/".concat(localStorage.getItem("username"),"/"),{contact:""!=this.state.contactnum?this.state.contactnum:this.state.User.contact,occupation:""!=this.state.occupation?this.state.occupation:this.state.User.occupation,address:""!=this.state.address?this.state.address:this.state.User.address,lat:this.state.changelocation?this.state.lat:this.state.User.lat,lon:this.state.changelocation?this.state.lon:this.state.User.lon,blood_group:""!=this.state.bloodgroup?this.state.bloodgroup:this.state.User.blood_group,provide:this.state.provide,username:localStorage.getItem("username")},{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),console.log("submit"),this.props.history.push("/MyProfile/".concat(localStorage.getItem("username")))}},{key:"render",value:function(){return o.a.createElement("div",{className:"EditProfile-container"},o.a.createElement("form",{onSubmit:this.handleSubmit,className:"EditProfile-form"},o.a.createElement("label",null,"Contact number"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",value:this.state.contactnum,onChange:this.handleCnChange,required:!0}),o.a.createElement("br",null),o.a.createElement("label",null,"Blood Group"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",value:this.state.bloodgroup,onChange:this.handleBgChange,required:!0}),o.a.createElement("br",null),o.a.createElement("label",null,"Address"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",value:this.state.address,onChange:this.handleAdChange,required:!0}),o.a.createElement("br",null),o.a.createElement("label",null,"Occupation"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",value:this.state.occupation,onChange:this.handleOcChange,required:!0}),o.a.createElement("br",null),o.a.createElement("label",null,"Set location to this location "),o.a.createElement("br",null),o.a.createElement("input",{type:"checkbox",checked:this.state.changelocation,onChange:this.handleLcChange}),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.handleSubmit},"Submit")))}}]),a}(n.Component)),Y=Object(v.f)(K);x.b.add(M.d,M.b,M.c,M.a);var H=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(k,{value:this.state},o.a.createElement(S.a,{basename:"/covid-welfare-frontend"},o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,path:"/"},o.a.createElement(O,null)),o.a.createElement(v.a,{exact:!0,path:"/GetStarted"},o.a.createElement(C,null)),o.a.createElement(v.a,{path:"/MyProfile/:username/"},o.a.createElement(q,null)),o.a.createElement(v.a,{exact:!0,path:"/Navbar/:username/"},o.a.createElement(j,null)),o.a.createElement(v.a,{exact:!0,path:"/Seek/:username/"},o.a.createElement(T,null)),o.a.createElement(v.a,{exact:!0,path:"/Provide/:username/"},o.a.createElement(W,null)),o.a.createElement(v.a,{exact:!0,path:"/Smap/:username/"},o.a.createElement(R,null)),o.a.createElement(v.a,{exact:!0,path:"/EditProfile/:username/"},o.a.createElement(Y,null)),o.a.createElement(v.a,{exact:!0,path:"/Notifications/:username/"},o.a.createElement(P,null))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/doctors.03884365.png"},45:function(e,t,a){e.exports=a(100)},50:function(e,t,a){},51:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},52:function(e,t,a){},53:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[45,1,2]]]);
//# sourceMappingURL=main.b46a8373.chunk.js.map