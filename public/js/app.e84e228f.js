(function(t){function e(e){for(var a,r,n=e[0],c=e[1],l=e[2],u=0,h=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);_&&_(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},o=[];function r(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a9cdd35e"}[t]+".js"}function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=r(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,s[1](l)}i[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var _=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._m(0),s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark py-lg-4",attrs:{id:"mainNav"}},[s("div",{staticClass:"container"},[t._m(1),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[s("ul",{staticClass:"navbar-nav mx-auto"},[s("li",{staticClass:"nav-item px-lg-4"},[s("router-link",{staticClass:"nav-link text-uppercase text-expanded",attrs:{to:"/movies"}},[t._v("Liked Movies")])],1),s("li",{staticClass:"nav-item px-lg-4"},[s("router-link",{staticClass:"nav-link text-uppercase text-expanded",attrs:{to:"/searches"}},[t._v("Search")])],1),s("li",{staticClass:"nav-item px-lg-4"},[s("router-link",{staticClass:"nav-link text-uppercase text-expanded",attrs:{to:"/about"}},[t._v("About")])],1)])])])]),s("router-view"),t._m(2)],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"site-heading text-center text-white d-none d-lg-block"},[s("span",{staticClass:"site-heading-upper text-primary mb-3"},[t._v("A movie search app")]),s("span",{staticClass:"site-heading-lower"},[t._v("Film Buff")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer text-faded text-center py-5"},[s("div",{staticClass:"container"},[s("p",{staticClass:"m-0 small"},[t._v("Copyright © Your Website 2020")])])])}],r=(s("034f"),s("2877")),n={},c=Object(r["a"])(n,i,o,!1,null,null,null),l=c.exports,u=(s("d3b7"),s("8c4f")),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"movies-index"},[t._m(0),s("h1",{staticStyle:{color:"white"}},[t._v(" Rated Movies ")]),t._l(t.movies,(function(e){return s("div",[s("img",{attrs:{src:e.img_url}}),s("h1",{staticStyle:{color:"white"}},[t._v(t._s(e.title))]),s("h2",{staticStyle:{color:"white"}},[t._v(" Directed by "+t._s(e.director))]),s("h2",{staticStyle:{color:"white"}},[t._v(" Released ("+t._s(e.release_year)+")")]),s("h3",{staticStyle:{color:"white"}},[t._v(" "+t._s(e.runtime)+" runtime")]),s("p",{staticStyle:{color:"white"}},[t._v(" Plot: "+t._s(e.description)+" ")]),s("h3",{staticStyle:{color:"white"}},[t._v(" Thumbs Up: "+t._s(e.thumbs_up)+" ")]),s("h3",{staticStyle:{color:"white"}},[t._v(" Thumbs Down: "+t._s(e.thumbs_down)+" ")]),s("p",{staticStyle:{color:"white"}},[t._v(" ________________________________ ")]),s("br")])}))],2)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page-section clearfix"},[s("div",{staticClass:"container"},[s("div",{staticClass:"intro"},[s("img",{staticClass:"intro-img img-fluid mb-3 mb-lg-0 rounded",attrs:{src:"img/godfather.jpg",alt:""}}),s("div",{staticClass:"intro-text left-0 text-center bg-faded p-5 rounded"},[s("h2",{staticClass:"section-heading mb-4"},[s("span",{staticClass:"section-heading-lower"},[t._v("Welcome to Film Buff!")])]),s("p",{staticClass:"mb-3"},[t._v("Head over to the search page to rate your favorites or check out what's been rated below! ")]),s("div",{staticClass:"intro-button mx-auto"},[s("a",{staticClass:"btn btn-primary btn-xl",attrs:{href:"/searches"}},[t._v("Search To Like Movies!")])])])])])])}],v=s("bc3a"),m=s.n(v),d={data:function(){return{movies:{}}},created:function(){var t=this;console.log(this.$route),m.a.get("/api/movies").then((function(e){console.log("show me ALL the movies",e),console.log(t.$route),t.movies=e.data}))},methods:{}},p=d,f=Object(r["a"])(p,_,h,!1,null,null,null),b=f.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"movies-index"},[t._m(0),s("h1",{staticStyle:{color:"white"}},[t._v(" Rated Movies ")]),t._l(t.movies,(function(e){return s("div",[s("img",{attrs:{src:e.img_url}}),s("h1",{staticStyle:{color:"white"}},[t._v(t._s(e.title))]),s("h2",{staticStyle:{color:"white"}},[t._v(" Directed by "+t._s(e.director))]),s("h2",{staticStyle:{color:"white"}},[t._v(" Released ("+t._s(e.release_year)+")")]),s("h3",{staticStyle:{color:"white"}},[t._v(" "+t._s(e.runtime)+" runtime")]),s("p",{staticStyle:{color:"white"}},[t._v(" Plot: "+t._s(e.description)+" ")]),s("h3",{staticStyle:{color:"white"}},[t._v(" Thumbs Up: "+t._s(e.thumbs_up)+" ")]),s("h3",{staticStyle:{color:"white"}},[t._v(" Thumbs Down: "+t._s(e.thumbs_down)+" ")]),s("p",{staticStyle:{color:"white"}},[t._v(" ________________________________ ")]),s("br")])}))],2)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page-section clearfix"},[s("div",{staticClass:"container"},[s("div",{staticClass:"intro"},[s("img",{staticClass:"intro-img img-fluid mb-3 mb-lg-0 rounded",attrs:{src:"img/godfather.jpg",alt:""}}),s("div",{staticClass:"intro-text left-0 text-center bg-faded p-5 rounded"},[s("h2",{staticClass:"section-heading mb-4"},[s("span",{staticClass:"section-heading-lower"},[t._v("Welcome to Film Buff!")])]),s("p",{staticClass:"mb-3"},[t._v("Head over to the search page to rate your favorites or check out what's been rated below! ")]),s("div",{staticClass:"intro-button mx-auto"},[s("a",{staticClass:"btn btn-primary btn-xl",attrs:{href:"/searches"}},[t._v("Search To Like Movies!")])])])])])])}],y={data:function(){return{movies:{}}},created:function(){var t=this;console.log(this.$route),m.a.get("/api/movies").then((function(e){console.log("show me ALL the movies",e),console.log(t.$route),t.movies=e.data}))},methods:{}},C=y,x=Object(r["a"])(C,g,w,!1,null,null,null),S=x.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.movie?s("div",{staticClass:"movies-show"},[s("img",{attrs:{src:t.movie.img_url}}),s("h1",{staticStyle:{color:"white"}},[t._v(t._s(t.movie.title))]),s("h2",{staticStyle:{color:"white"}},[t._v(" Directed by "+t._s(t.movie.director))]),s("h2",{staticStyle:{color:"white"}},[t._v(" Released ("+t._s(t.movie.release_year)+")")]),s("p",{staticStyle:{color:"white"}},[t._v(" Plot: "+t._s(t.movie.description))]),s("div",{staticClass:"container"},[s("svg",{staticClass:"bi bi-hand-thumbs-up",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",fill:"white",viewBox:"0 0 16 16"},on:{click:function(e){return t.thumbsUp()}}},[s("path",{attrs:{d:"M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"}})]),s("h2",{staticStyle:{color:"white"}},[t._v(" "+t._s(t.movie.thumbs_up)+" ")])]),s("br"),s("div",{staticClass:"container"},[s("svg",{staticClass:"bi bi-hand-thumbs-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",fill:"white",viewBox:"0 0 16 16"},on:{click:function(e){return t.thumbsDown()}}},[s("path",{attrs:{d:"M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"}})]),s("h2",{staticStyle:{color:"white"}},[t._v(" "+t._s(t.movie.thumbs_down)+" ")])]),s("br"),s("br")]):t._e()},M=[],T={data:function(){return{message:"This is the show page!!!",movie:null,upVote:[],downVote:[]}},created:function(){this.movieSearch()},methods:{movieSearch:function(){var t=this;m.a.get("/api/searches/"+this.$route.params.id).then((function(e){console.log("movie data from searches please!!"),t.movie=e.data,console.log(t.movie)}))},thumbsUp:function(){var t=this;this.upVote=this.movie.thumbs_up+1,console.log("thumbs up!!!"),m.a.patch("/api/movies/"+this.$route.params.id+"?thumb=up").then((function(e){t.movie.thumbs_up=e.data["thumbs_up"],console.log(t.movie.thumbs_up)}))},thumbsDown:function(){var t=this;this.downVote=this.movie.thumbs_down+1,m.a.patch("/api/movies/"+this.$route.params.id+"?thumb=down").then((function(e){t.movie.thumbs_down=e.data["thumbs_down"]}))}}},j=T,$=Object(r["a"])(j,k,M,!1,null,null,null),O=$.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("h1",{staticStyle:{color:"white"}},[t._v(t._s(t.message))]),s("div",{staticClass:"container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"form-group col-xs-12 floating-label-form-group controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.movieTitle,expression:"movieTitle"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Movie",id:"movie",required:"","data-validation-required-message":"Please enter a movie."},domProps:{value:t.movieTitle},on:{input:function(e){e.target.composing||(t.movieTitle=e.target.value)}}}),s("p",{staticClass:"help-block text-danger"})])])])])])])])]),s("div",{attrs:{id:"success"}}),s("button",{staticClass:"btn btn-primary",attrs:{id:"sendMessageButton"},on:{click:t.searchMovies}},[t._v("Search Movies")]),s("br"),s("br"),t._l(t.movies,(function(e){return s("div",[s("img",{attrs:{src:e.img_url}}),s("h1",{staticStyle:{color:"white"}},[t._v(" "+t._s(e.title)+" ")]),s("h3",{staticStyle:{color:"white"}},[t._v(" Released ("+t._s(e.release_year)+")")]),s("router-link",{attrs:{to:"/movies/"+e.id}},[t._v("More details")]),s("p",[t._v(" __________________________________________________ ")])],1)}))],2)},P=[],L={data:function(){return{message:"Enter the movie to search!",movies:[],movieTitle:""}},created:function(){},methods:{searchMovies:function(t){var e=this,s={title:this.movieTitle};m.a.post("/api/searches",s).then((function(t){e.movies=t.data,console.log(e.movies)})).catch((function(t){e.errors=t.response.data.errors}))}}},R=L,A=Object(r["a"])(R,E,P,!1,null,null,null),D=A.exports;a["a"].use(u["a"]);var V=[{path:"/movies/:id",name:"ShowMovies",component:O},{path:"/movies",name:"IndexMovies",component:S},{path:"/searches",name:"IndexSearches",component:D},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/",name:"Home",component:b}],B=new u["a"]({mode:"history",base:"/",routes:V}),H=B;m.a.defaults.baseURL="/",a["a"].config.productionTip=!1,new a["a"]({router:H,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.e84e228f.js.map