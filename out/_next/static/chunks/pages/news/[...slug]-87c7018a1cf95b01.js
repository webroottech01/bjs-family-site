(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[555],{8322:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/[...slug]",function(){return e(4709)}])},9855:function(n,t,e){"use strict";e.d(t,{vc:function(){return c},tR:function(){return a},gq:function(){return u},ri:function(){return d},SY:function(){return l}});var r=e(4201);function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function o(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"===typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=function(n){return(0,r.Z)(new Date(n),"MM/dd/yy")},a=function(n,t,e){var r=[],i=o(t);switch(i=i.sort((function(n,t){return Date.parse(t.date)-Date.parse(n.date)})),"oldest"===e&&(i=i.reverse()),n){case"videos":r=i.filter((function(n){return"video"===n.article_type[0].type.toLowerCase()}));break;case"articles":r=i.filter((function(n){return"article"===n.article_type[0].type.toLowerCase()}));break;default:r=i}return r},u=function(n,t,e){var r=t||1,i=e||10,o=(r-1)*i,c=n.slice(o).slice(0,e),a=Math.ceil(n.length/i);return{page:r,perPageItems:i,prePage:r-1?r-1:null,nextPage:a>r?r+1:null,total:n.length,totalPages:a,data:c}},d=function(n,t){var e=n.findIndex((function(n){return n===t}));return{preSlugIndex:e>0?e-1:null,nextSlugIndex:e<n.length-1?e+1:null}},l=function(n){return"video"===(null===n||void 0===n?void 0:n.type)?"".concat(n.view_time," min watch"):"".concat(null===n||void 0===n?void 0:n.read_time," min read")}},1338:function(n,t,e){"use strict";e.d(t,{vt:function(){return o}});var r=e(2804),i=(0,r.cn)({key:"selected_subsidiary",default:"home delivery"});function o(){return(0,r.sJ)(i)}},4709:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSP:function(){return kn},default:function(){return _n}});var r=e(7997),i=e(2918),o=e(186),c=e(7729),a=e(279),u=e(1338),d=e(4698),l=e(7814),f=e(2825),p=e(9855),s=e(4051),g=e.n(s),x=e(8687),h=e(5522);function m(n,t,e,r,o,c,a){try{var u=n[c](a),d=u.value}catch(i){return void e(i)}u.done?t(d):Promise.resolve(d).then(r,o)}var b=function(){var n,t=(n=g().mark((function n(t){var e;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,x.request)("".concat("https://cms.bjshomedelivery.com","/graphql"),t);case 2:return e=n.sent,n.abrupt("return",e.articles.map((function(n){return n.slug})));case 4:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,i){var o=n.apply(t,e);function c(n){m(o,r,i,c,a,"next",n)}function a(n){m(o,r,i,c,a,"throw",n)}c(void 0)}))});return function(n){return t.apply(this,arguments)}}();var w=function(){var n=(0,h.ZP)("{\n      articles {\n          slug\n      }\n    }",b);return{data:n.data,error:n.error}},v=e(1163),y=e(6658),I=e(3176);function C(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function k(){var n=C(["\n  background: transparent linear-gradient(359deg, #f5f0ea 0%, #e2e0dd 100%) 0%\n    0% no-repeat padding-box;\n  height: 100px;\n  padding: 40px 90px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  position: sticky;\n  top: 85px;\n  "," {\n    top: unset;\n    height: 57px;\n    padding: 40px;\n    bottom: 0px;\n    position: fixed;\n    width: 100%;\n  }\n  "," {\n    height: 57px;\n    padding: 20px;\n    top: unset;\n    padding: unset;\n    bottom: 0px;\n    position: fixed;\n    width: 100%;\n  }\n"]);return k=function(){return n},n}function _(){var n=C(["\n  height: 16px;\n  width: 6px;\n  font-size: 16px;\n"]);return _=function(){return n},n}function Z(){var n=C(["\n  background: transparent linear-gradient(359deg, #f5f0ea 0%, #e2e0dd 100%) 0%\n    0% no-repeat padding-box;\n  border: 1px solid rgba(58, 54, 48, 0.4);\n  height: 44px;\n  border-radius: 22px;\n  padding: 0px 25px;\n  gap: 10px;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  cursor: pointer;\n  "," {\n    border: unset;\n    background: unset;\n    font-size: 16px;\n    padding: 0px 20px;\n  }\n  "," {\n    border: unset;\n    background: unset;\n    font-size: 16px;\n    padding: 0px 20px;\n  }\n  :hover{\n    background: #ffffff 0% 0% no-repeat padding-box;\n  }\n"]);return Z=function(){return n},n}function z(){var n=C([""]);return z=function(){return n},n}function S(){var n=C(["\n    font-size: 20px;\n    color: #3a3630;\n    margin:0px;\n    font-weight:400;\n  "]);return S=function(){return n},n}var P=o.default.div.withConfig({componentId:"sc-a344ad4e-0"})(k(),(0,d.down)("md"),(0,d.down)("sm")),X=(0,o.default)(l.G).withConfig({componentId:"sc-a344ad4e-1"})(_()),j=o.default.button.withConfig({componentId:"sc-a344ad4e-2"})(Z(),(0,d.down)("md"),(0,d.down)("sm")),B=(0,o.default)(j).withConfig({componentId:"sc-a344ad4e-3"})(z()),O=o.default.h1.withConfig({componentId:"sc-a344ad4e-4"})(S()),A=function(n){var t=n.news,e=((0,y.Z)(),w()),i=e.data;if(e.error||!i)return null;var o=(0,p.ri)(i,t.slug);return(0,r.BX)(P,{children:[(0,r.BX)(j,{id:"full-news-go-to-article-list",disabled:null===o.preSlugIndex,onClick:function(){return v.default.push("/news/all")},children:[(0,r.tZ)(X,{icon:f.EyR}),"Article List"]}),!(0,I.ZP)()&&(0,r.tZ)(O,{children:t.title}),(0,r.BX)(B,{id:"full-news-go-to-next-article",disabled:null===o.nextSlugIndex,onClick:function(){null!==o.nextSlugIndex&&v.default.push("/news/".concat(i[o.nextSlugIndex]))},children:["Next Article",(0,r.tZ)(X,{icon:f.yOZ})]})]})},E=e(7857),N=e(9008);function M(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function G(){var n=M(["\n  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%\n    0% no-repeat padding-box;\n  z-index: 1;\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  position: fixed;\n  top: 72px;\n  left: 0px;\n  right: 0px;\n  "," {\n    position: sticky;\n    padding: 20px;\n    top: 70px;\n  }\n"]);return G=function(){return n},n}function L(){var n=M(["\n  font-size: 18px;\n  text-align: center;\n  font-weight: bold;\n  color: #3a3630;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  "," {\n    font-size: 13px;\n  }\n"]);return L=function(){return n},n}function T(){var n=M(["\n  height: 26px;\n  width: 26px;\n  font-size: 26px;\n"]);return T=function(){return n},n}function Y(){var n=M(["\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  "," {\n    margin-top: 70px;\n  }\n  "," {\n    margin-top: 12px;\n  }\n"]);return Y=function(){return n},n}function q(){var n=M(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-self: center;\n  max-width: 1200px;\n  padding: 40px;\n  "," {\n    padding: 40px;\n  }\n  "," {\n    padding: 0px;\n  }\n"]);return q=function(){return n},n}function D(){var n=M(["\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n"]);return D=function(){return n},n}function R(){var n=M(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n"]);return R=function(){return n},n}function U(){var n=M(["\n  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%\n    0% no-repeat padding-box;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 20px;\n"]);return U=function(){return n},n}function $(){var n=M(['\n  text-align: left;\n  font-family: "Eveleth";\n  letter-spacing: 0px;\n  font-weight: 950;\n  color: #3a3630;\n  text-transform: uppercase;\n  font-size: 34px;\n  padding-top: 55px;\n  text-align: center;\n  '," {\n    font-size: 26px;\n    margin-bottom: 40px;\n  }\n  "," {\n    font-size: 26px;\n    margin-bottom: unset;\n    padding-top: unset;\n    margin: 14px 0px;\n  }\n"]);return $=function(){return n},n}function H(){var n=M(["\n  height: 16px;\n  width: 10px;\n"]);return H=function(){return n},n}function F(){var n=M(["\n  font-size: 26px !important;\n"]);return F=function(){return n},n}function J(){var n=M(["\n  font-size: 14px;\n  letter-spacing: 0px;\n  color: #888075;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"]);return J=function(){return n},n}function K(){var n=M(["\n  font-size: 14px;\n  color: rgba(58, 54, 48, 0.5);\n"]);return K=function(){return n},n}function Q(){var n=M(["\n  width: 100%;\n  max-width: 1200px;\n  height: 600px;\n  background-size: cover;\n  background-position: top center;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  margin-top: 35px;\n  border: unset;\n  "," {\n    width: 100%;\n    height: 472px;\n  }\n  "," {\n    height: 282px;\n    width: 100%;\n    margin-top: unset;\n    border-top-left-radius: unset;\n    border-top-right-radius: unset;\n    background-position: center center;\n  }\n"]);return Q=function(){return n},n}function V(){var n=M(['\n  width: 100%;\n  max-width: 1200px;\n  height: 600px;\n  background: transparent url("','") 0% 0% no-repeat padding-box;\n  background-size: cover;\n  background-position: top center;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  background-position: center;\n  margin-top: 35px;\n  '," {\n    width: 100%;\n    height: 472px;\n  }\n  "," {\n    height: 230px;\n    width: 100%;\n    margin-top: unset;\n    border-top-left-radius: unset;\n    border-top-right-radius: unset;\n    background-position: center center;\n  }\n"]);return V=function(){return n},n}function W(){var n=M(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 55px;\n  margin-bottom: 55px;\n  "," {\n    margin-top: unset;\n  }\n"]);return W=function(){return n},n}function nn(){var n=M(["\n  display: flex;\n  flex-direction: column;\n  /* max-width: 80%; */\n  "," {\n    max-width: unset;\n  }\n  "," {\n    padding: 20px;\n    max-width: 100%;\n\n    a {\n      max-width: 100%;\n    }\n  }\n"]);return nn=function(){return n},n}function tn(){var n=M(["\n  font-size: 20px;\n  color: ",";\n  "," {\n    font-size: 16px;\n  }\n"]);return tn=function(){return n},n}function en(){var n=M(["\n  font-size: 16px;\n  color: ",";\n  margin-top: 37px;\n"]);return en=function(){return n},n}var rn=o.default.div.withConfig({componentId:"sc-bb91c343-0"})(G(),(0,d.down)("sm")),on=o.default.div.withConfig({componentId:"sc-bb91c343-1"})(L(),(0,d.down)("sm")),cn=(0,o.default)(l.G).withConfig({componentId:"sc-bb91c343-2"})(T()),an=o.default.div.withConfig({componentId:"sc-bb91c343-3"})(Y(),(0,d.down)("md"),(0,d.down)("sm")),un=o.default.div.withConfig({componentId:"sc-bb91c343-4"})(q(),(0,d.down)("md"),(0,d.down)("sm")),dn=(o.default.div.withConfig({componentId:"sc-bb91c343-5"})(D()),o.default.div.withConfig({componentId:"sc-bb91c343-6"})(R()),o.default.div.withConfig({componentId:"sc-bb91c343-7"})(U()),o.default.div.withConfig({componentId:"sc-bb91c343-8"})($(),(0,d.down)("md"),(0,d.down)("sm")),(0,o.default)(l.G).withConfig({componentId:"sc-bb91c343-9"})(H())),ln=((0,o.default)(l.G).withConfig({componentId:"sc-bb91c343-10"})(F()),o.default.div.withConfig({componentId:"sc-bb91c343-11"})(J())),fn=o.default.div.withConfig({componentId:"sc-bb91c343-12"})(K()),pn=o.default.iframe.withConfig({componentId:"sc-bb91c343-13"})(Q(),(0,d.down)("md"),(0,d.down)("sm")),sn=o.default.div.withConfig({componentId:"sc-bb91c343-14"})(V(),(function(n){return n.url}),(0,d.down)("md"),(0,d.down)("sm")),gn=o.default.div.withConfig({componentId:"sc-bb91c343-15"})(W(),(0,d.down)("sm")),xn=o.default.div.withConfig({componentId:"sc-bb91c343-16"})(nn(),(0,d.down)("md"),(0,d.down)("sm")),hn=o.default.div.withConfig({componentId:"sc-bb91c343-17"})(tn(),E.colours.black,(0,d.down)("sm")),mn=o.default.div.withConfig({componentId:"sc-bb91c343-18"})(en(),E.colours.black),bn=function(n){var t,e,i=(0,I.ZP)(),o=(0,y.Z)(),c=n.news;return(0,r.BX)(un,{children:[(0,r.tZ)(N.default,{children:(0,r.tZ)("meta",{property:"og:image:url",content:c.header_image.url})}),i&&(0,r.BX)(rn,{children:[(0,r.tZ)(cn,{onClick:function(){return v.default.push("/news/all")},icon:f.EyR}),(0,r.BX)(on,{children:[c.title,o&&(0,r.BX)(an,{children:[(0,r.BX)(fn,{children:["Posted: ",(0,p.vc)(c.created_at)]}),(0,r.BX)(ln,{children:[(0,r.tZ)(dn,{icon:f.U$5}),(0,p.SY)(c.article_type[0])]})]})]})]}),!o&&(0,r.BX)(an,{children:[(0,r.BX)(fn,{children:["Posted: ",(0,p.vc)(c.created_at)]}),(0,r.BX)(ln,{children:[(0,r.tZ)(dn,{icon:f.U$5}),(0,p.SY)(c.article_type[0])]})]}),"article"===c.article_type[0].type&&(0,r.tZ)(sn,{url:null!==(e=null===(t=c.header_image)||void 0===t?void 0:t.url)&&void 0!==e?e:""}),"video"===c.article_type[0].type&&(0,r.tZ)(pn,{width:"100%",height:"100%",src:c.article_type[0].video_link,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.tZ)(gn,{children:(0,r.BX)(xn,{children:[(0,r.tZ)(hn,{children:c.excerpt}),(0,r.tZ)(mn,{dangerouslySetInnerHTML:{__html:c.content}})]})})]})};function wn(){var n,t,e=(n=["\n  display: flex;\n  flex-direction: column;\n\n  "," {\n    ","\n  }\n\n  a {\n    display: inline-flex;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"],t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}})));return wn=function(){return e},e}var vn=c.Z.primaryColour;var yn=o.default.div.withConfig({componentId:"sc-7eb13881-0"})(wn(),a.Z,(function(n){return"constructit"===n.subsidiary&&"background: ".concat(vn)})),In=function(n){var t=n.news,e=(0,u.vt)();return(0,r.BX)(yn,{subsidiary:e,children:[(0,r.tZ)(A,{news:t}),(0,r.tZ)(bn,{news:t})]})},Cn=e(3159),kn=!0,_n=function(n){var t=n.news;return 0===t.length?(0,r.tZ)(i.default,{statusCode:400}):(0,r.BX)(r.HY,{children:[(0,r.tZ)(N.default,{children:(0,r.tZ)("title",{children:t[0].title})}),(0,r.tZ)(In,{news:t[0]}),(0,r.tZ)(Cn.Z,{})]})}},2918:function(n,t,e){n.exports=e(9185)}},function(n){n.O(0,[769,201,207,136,774,888,179],(function(){return t=8322,n(n.s=t);var t}));var t=n.O();_N_E=t}]);