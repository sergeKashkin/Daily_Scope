(this.webpackJsonphoroscope=this.webpackJsonphoroscope||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Serge_Desktop_programming_Horoscope_horoscope_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_Serge_Desktop_programming_Horoscope_horoscope_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_Serge_Desktop_programming_Horoscope_horoscope_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),C_Users_Serge_Desktop_programming_Horoscope_horoscope_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Card_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(14),_Card_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_Card_css__WEBPACK_IMPORTED_MODULE_5__),signs=__webpack_require__(15),Card=function(_Component){Object(C_Users_Serge_Desktop_programming_Horoscope_horoscope_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Card,_Component);var _super=Object(C_Users_Serge_Desktop_programming_Horoscope_horoscope_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Card);function Card(e){var t;return Object(C_Users_Serge_Desktop_programming_Horoscope_horoscope_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Card),(t=_super.call(this,e)).dict={yesterday:"yesterday_horo",today:"today_horo",tomorrow:"tomorrow_horo"},t.state={title:signs[e.currentSign].title,sign:signs[e.currentSign].sign,text:signs[e.currentSign].text,currentSign:signs[e.currentSign].currentSign,yesterday:!1,today:!1,tomorrow:!1,change:!1,yesterday_horo:"",today_horo:"",tomorrow_horo:""},t}return Object(C_Users_Serge_Desktop_programming_Horoscope_horoscope_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Card,[{key:"loadHoroscopes",value:function(){var e=this;fetch("https://aztro.sameerkumar.website?sign=".concat(this.state.sign.toLowerCase(),"&day=yesterday"),{method:"POST"}).then((function(e){return e.json()})).then((function(t){return e.setState({yesterday_horo:t})})),fetch("https://aztro.sameerkumar.website?sign=".concat(this.state.sign.toLowerCase(),"&day=today"),{method:"POST"}).then((function(e){return e.json()})).then((function(t){return e.setState({today_horo:t})})),fetch("https://aztro.sameerkumar.website?sign=".concat(this.state.sign.toLowerCase(),"&day=tomorrow"),{method:"POST"}).then((function(e){return e.json()})).then((function(t){return e.setState({tomorrow_horo:t})}))}},{key:"componentWillMount",value:function(){this.loadHoroscopes()}},{key:"toggle",value:function(){document.getElementById("yesterday").classList.remove("clicked"),document.getElementById("today").classList.remove("clicked"),document.getElementById("tomorrow").classList.remove("clicked"),document.getElementById("change").classList.remove("clicked")}},{key:"clicked",value:function clicked(e){var _this3=this,clicked=e.currentTarget;!0===eval("this.state.".concat(clicked.id))?(document.getElementById("text").textContent=this.state.text,document.getElementById("date").textContent="",eval("this.setState({".concat(clicked.id,":!this.state.").concat(clicked.id,'}, () => clicked.classList.toggle("clicked"))'))):this.setState({yesterday:!1,today:!1,tomorrow:!1,change:!1},(function(){_this3.toggle(),document.getElementById("date").textContent=_this3.state[_this3.dict[clicked.id]].current_date,document.getElementById("text").textContent=_this3.state[_this3.dict[clicked.id]].description,eval("this.setState({".concat(clicked.id,':true}, () => clicked.classList.toggle("clicked"))'))}))}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"card",id:"card"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"card-image"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"overlay"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img",{id:"sign_img",src:__webpack_require__(16)("./".concat(this.state.sign.toLowerCase(),"-stars.png")),alt:""}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"card-text"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span",{className:"date"},"".concat(this.state.title)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2",{id:"card_sign"},"".concat(this.state.sign)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p",{id:"date"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p",{id:"text"},"".concat(this.state.text))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"change_sign",id:"change",onClick:function(t){return e.props.changeSign("change")}},"Change sign"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"card-stats"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"stat",id:"yesterday",onClick:function(t){return e.clicked(t)}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"value"},"Yesterday's"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"type"},"Horoscope")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"stat border",id:"today",onClick:function(t){return e.clicked(t)}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"value"},"Today's"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"type"},"Horoscope")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"stat",id:"tomorrow",onClick:function(t){return e.clicked(t)}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"value"},"Tomorrow's"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"type"},"Horoscope"))))}}]),Card}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Card},function(e,t,n){e.exports=n(45)},,,,,function(e,t,n){},function(e,t,n){},function(e){e.exports=JSON.parse('{"sagittarius":{"title":"The one who seeks","sign":"Sagittarius","text":"Sagittarius is a free spirit, always open to new experiences. He does not like being tied down by anyone, and actively seeks exciting experiences. Even though he seems like a lone wolf, nothing makes him happier than sharing his experiences and happiness with the people he loves."},"aries":{"title":"The one who rules","sign":"Aries","text":"His ability to be admired by everyone without it going straight to his head makes him a staple in anyone\u2019s life. He knows how to be a leader and a friend, finding that perfect balance between the two roles."},"taurus":{"title":"The one who strikes your heart","sign":"Taurus","text":"There\u2019s something about the deliberateness in his actions that touch the hearts of many. Whether it\u2019s through romance or just by letting you know that he\'s your friend \u2018til the end, Taurus knows how to make anyone feel special and loved."},"gemini":{"title":"The one who shines bright","sign":"Gemini","text":"Gemini might be too intense for some people at first, but there is something about him that intrigues everyone who meets him.He brightens up a room whenever he walks in and when he leaves, you always find yourself missing him."},"cancer":{"title":"The one who is full of moons","sign":"Cancer","text":"\u201cA gentle, but fearless leader\u201d is the perfect way to describe Cancer because, just like the moon, he is both soft and romantic, yet bold and a trailblazer.But even if he\u2019s ever-changing (like the moon), he is still as reliable as ever."},"leo":{"title":"The one who is made of sunshine","sign":"Leo","text":"Leo acts like the world revolves around him because if people were stars and planets, he would definitely be the Sun.He tends to bring light wherever he goes, making it easy to see why people are so attracted to him."},"virgo":{"title":"The one who stands for themselves","sign":"Virgo","text":"Virgo knows that the most reliable person you can trust is yourself, which is why he doesn\u2019t often take the advice of others.Virgo is like an all-knowing person who stands strong and tall because he knows that others look to him as a leader."},"libra":{"title":"The one who is filled with love","sign":"Libra","text":"All Libra wants is to make sure everyone in his life is well-loved.He will often go out of his way to take care of and please others, which not only makes him incredibly selfless, but also an amazing friend and partner."},"scorpio":{"title":"The one who wins your heart","sign":"Scorpio","text":"Scorpio can be considered erratic and intense to some, but when you really get to know him, he\u2019s nothing but a big softie.Scorpio\u2019s main goal in life is to make sure his friends and family know that they are tremendously important to him."},"capricorn":{"title":"The one who climbs higher than anyone else","sign":"Capricorn","text":"Capricorn is always reaching new heights, constantly wanting to learn more and expand his mind.He loves being the person with a wealth of knowledge and, more than that, someone who can share this newfound knowledge with others."},"aquarius":{"title":"The one who is made with color","sign":"Aquarius","text":"Aquarius is totally unique and loves it that way. He lives for himself and doesn\u2019t care what anyone thinks of him, which intrigues everyone who knows him."},"pisces":{"title":"The one who dreams of the unimaginable","sign":"Pisces","text":"So many people criticize Pisces for always having his head in the clouds, but in reality, he\u2019s only dreaming of bigger things in this life.He sees life through rose-colored glasses and is always looking for ways to make a difference."},"change":{"title":"Change","sign":"Change","text":"Change"}}')},function(e,t,n){var a={"./aquarius-stars.png":17,"./aries-stars.png":18,"./cancer-stars.png":19,"./capricorn-stars.png":20,"./gemini-stars.png":21,"./leo-stars.png":22,"./libra-stars.png":23,"./pisces-stars.png":24,"./sagittarius-stars.png":25,"./scorpio-stars.png":26,"./taurus-stars.png":27,"./virgo-stars.png":28};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=16},function(e,t,n){e.exports=n.p+"static/media/aquarius-stars.8bf1576e.png"},function(e,t,n){e.exports=n.p+"static/media/aries-stars.df303ba1.png"},function(e,t,n){e.exports=n.p+"static/media/cancer-stars.649eb518.png"},function(e,t,n){e.exports=n.p+"static/media/capricorn-stars.eaca6b36.png"},function(e,t,n){e.exports=n.p+"static/media/gemini-stars.8281d432.png"},function(e,t,n){e.exports=n.p+"static/media/leo-stars.6dfaefd6.png"},function(e,t,n){e.exports=n.p+"static/media/libra-stars.92b21043.png"},function(e,t,n){e.exports=n.p+"static/media/pisces-stars.dcd0df17.png"},function(e,t,n){e.exports=n.p+"static/media/sagittarius-stars.b3a2c659.png"},function(e,t,n){e.exports=n.p+"static/media/scorpio-stars.f2fac247.png"},function(e,t,n){e.exports=n.p+"static/media/taurus-stars.c08b68ee.png"},function(e,t,n){e.exports=n.p+"static/media/virgo-stars.25abe70c.png"},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/aquarius.2d55417b.png"},function(e,t,n){e.exports=n.p+"static/media/aries.e678008a.png"},function(e,t,n){e.exports=n.p+"static/media/cancer.87e2202e.png"},function(e,t,n){e.exports=n.p+"static/media/capricorn.f25b19eb.png"},function(e,t,n){e.exports=n.p+"static/media/gemini.5eff4fe2.png"},function(e,t,n){e.exports=n.p+"static/media/leo.d4174cb5.png"},function(e,t,n){e.exports=n.p+"static/media/libra.a4bd9e02.png"},function(e,t,n){e.exports=n.p+"static/media/pisces.77736bdc.png"},function(e,t,n){e.exports=n.p+"static/media/sagittarius.0d0d6a97.png"},function(e,t,n){e.exports=n.p+"static/media/scorpio.37661270.png"},function(e,t,n){e.exports=n.p+"static/media/taurus.6f576a03.png"},function(e,t,n){e.exports=n.p+"static/media/virgo.fdee23e4.png"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),o=n.n(s),i=(n(13),n(1)),c=n(2),_=n(4),l=n(3),u=n(7),d=(n(29),function(e){var t=e.changeSign,a=function(e){var t=e.target.src.split("/")[5].split(".")[0];document.getElementById("cur_sign").textContent=t.charAt(0).toUpperCase()+t.slice(1)},s=function(){document.getElementById("cur_sign").textContent=""},o=function(e){var n=e.target.src.split("/")[5].split(".")[0];t(n)};return r.a.createElement("div",{className:"card2"},r.a.createElement("div",{className:"title"},r.a.createElement("p",null,"Choose Your Sign")),r.a.createElement("div",{className:"flex",id:"first"},r.a.createElement("img",{className:"sign",src:n(30),onMouseEnter:function(e){return a(e)},onMouseOut:function(){return s()},onClick:function(e){return o(e)}}),r.a.createElement("img",{className:"sign",src:n(31),onMouseEnter:function(e){return a(e)},onMouseOut:function(){return s()},onClick:function(e){return o(e)}}),r.a.createElement("img",{className:"sign",src:n(32),onMouseEnter:function(e){return a(e)},onMouseOut:function(){return s()},onClick:function(e){return o(e)}}),r.a.createElement("img",{className:"sign",src:n(33),onMouseEnter:function(e){return a(e)},onMouseOut:function(){return s()},onClick:function(e){return o(e)}}),r.a.createElement("img",{className:"sign",src:n(34),onMouseEnter:function(e){return a(e)},onMouseOut:function(){return s()},onClick:function(e){return o(e)}}),r.a.createElement("img",{className:"sign",src:n(35),onMouseEnter:function(e){return a(e)},onMouseOut:function(){return s()},onClick:function(e){return o(e)}})),r.a.createElement("div",{id:"cur_sign"}),r.a.createElement("div",{className:"flex",id:"second"},r.a.createElement("img",{className:"sign",src:n(36),onMouseEnter:function(e){return a(e)},onMouseOut:function(){return s()},onClick:function(e){return o(e)}}),r.a.createElement("img",{className:"sign",src:n(37),onMouseEnter:function(e){return a(e)},onMouseOut:function(){return s()},onClick:function(e){return o(e)}}),r.a.createElement("img",{className:"sign",src:n(38),onMouseEnter:function(e){return a(e)},onMouseOut:function(){return s()},onClick:function(e){return o(e)}}),r.a.createElement("img",{className:"sign",src:n(39),onMouseEnter:function(e){return a(e)},onMouseOut:function(){return s()},onClick:function(e){return o(e)}}),r.a.createElement("img",{className:"sign",src:n(40),onMouseEnter:function(e){return a(e)},onMouseOut:function(){return s()},onClick:function(e){return o(e)}}),r.a.createElement("img",{className:"sign",src:n(41),onMouseEnter:function(e){return a(e)},onMouseOut:function(){return s()},onClick:function(e){return o(e)}})),r.a.createElement("div",null))}),m=(n(42),function(e){Object(_.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).changeSign=function(e){a.setState({currentSign:e})},a.state={currentSign:"change"},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid-container"},"change"===this.state.currentSign?r.a.createElement(d,{changeSign:this.changeSign}):r.a.createElement("span",null,r.a.createElement(u.a,{currentSign:this.state.currentSign,changeSign:this.changeSign})))}}]),n}(a.Component)),h=(n(43),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"Your Daily Horoscope"))}),p=(n(44),function(e){Object(_.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={currentSign:"sagittarius"},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(m,{currentSign:this.state.currentSign}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ae30db7e.chunk.js.map