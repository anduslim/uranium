(function(){function e(a,b){var d;if(typeof a==h){var i=a,m=b.firstChild===null?{UL:"LI",DL:"DT",TR:"TD"}[b.tagName]||b.tagName:b.firstChild.tagName;d={};var c=/^<([A-Z][A-Z0-9]*)([^>]*)>([\s\S]*)<\/\1>/i,g,e;e=0;var f;if(c.test(i)){c=c.exec(i);m=c[1];if(c[2]!=="")for(i=c[2].split(/([A-Z]*\s*=\s*['|"][A-Z0-9:;#\s]*['|"])/i);e<i.length;e++)f=i[e].replace(/^\s*|\s*$/g,""),f!==""&&f!==" "&&(f=f.split("="),d[f[0]]=f[1].replace(/(["']?)/g,""));i=c[3]}m=j.createElement(m);for(g in d)e=j.createAttribute(g),
e.nodeValue=d[g],m.setAttributeNode(e);m.innerHTML=i;d=m}else d=a;return d}function f(a){var b=/\S/;a.each(function(a){for(var p=a.firstChild,d=-1,c;p;)c=p.nextSibling,p.nodeType==3&&!b.test(p.nodeValue)?a.removeChild(p):p.nodeIndex=++d,p=c})}function c(a){if(a._xuiEventID)return a._xuiEventID;return a._xuiEventID=++c.id}function b(a,b){var d=n[a]=n[a]||{};return d[b]=d[b]||[]}function g(a,d,u){var i=c(a),d=b(i,d),i=function(b){u.call(a,b)===!1&&(b.preventDefault(),b.stopPropagation())};i.guid=u.guid=
u.guid||++c.id;i.handler=u;d.push(i);return i}var a,d=this,h=new String("string"),j=d.document,q=/^#?([\w-]+)$/,l=/^#/,v=/<([\w:]+)/,k=function(a){return[].slice.call(a,0)};try{k(j.documentElement.childNodes)}catch(A){k=function(a){for(var b=[],d=0;a[d];d++)b.push(a[d]);return b}}d.x$=d.xui=a=function(b,d){return new a.fn.find(b,d)};if(![].forEach)Array.prototype.forEach=function(a,b){var d=this.length||0,c=0;if(typeof a=="function")for(;c<d;c++)a.call(b,this[c],c,this)};a.fn=a.prototype={extend:function(b){for(var d in b)a.fn[d]=
b[d]},find:function(b,o){var c=[],i;if(b)if(o==void 0&&this.length)c=this.each(function(d){c=c.concat(k(a(b,d)))}).reduce(c);else if(o=o||j,typeof b==h)q.test(b)&&o.getElementById&&o.getElementsByTagName?(c=l.test(b)?[o.getElementById(b.substr(1))]:o.getElementsByTagName(b),c[0]==null&&(c=[])):v.test(b)?(i=j.createElement("i"),i.innerHTML=b,k(i.childNodes).forEach(function(a){c.push(a)})):c=d.Sizzle!==void 0?Sizzle(b,o):o.querySelectorAll(b),c=k(c);else if(b instanceof Array)c=b;else if(b.toString()==
"[object NodeList]")c=k(b);else{if(b.nodeName||b===d)c=[b]}else return this;return this.set(c)},set:function(b){var d=a();d.cache=k(this.length?this:[]);d.length=0;[].push.apply(d,b);return d},reduce:function(a,b){var d=[],a=a||k(this);a.forEach(function(a){d.indexOf(a,0,b)<0&&d.push(a)});return d},has:function(b){var d=a(b);return this.filter(function(){var a=this,b=null;d.each(function(d){b=b||d==a});return b})},filter:function(a){var b=[];return this.each(function(d,c){a.call(d,c)&&b.push(d)}).set(b)},
not:function(b){var d=k(this);return this.filter(function(c){var e;a(b).each(function(a){return e=d[c]!=a});return e})},each:function(a){for(var b=0,d=this.length;b<d;++b)if(a.call(this[b],this[b],b,this)===!1)break;return this}};a.fn.find.prototype=a.fn;a.extend=a.fn.extend;a.extend({html:function(a,b){f(this);if(arguments.length==0)return this[0].innerHTML;arguments.length==1&&arguments[0]!="remove"&&(b=a,a="inner");if(a!="remove"&&b&&b.each!==void 0){if(a=="inner"){var d=j.createElement("p");b.each(function(a){d.appendChild(a)});
this.each(function(a){a.innerHTML=d.innerHTML})}else{var c=this;b.each(function(b){c.html(a,b)})}return this}return this.each(function(d){var c,g=0;if(a=="inner")if(typeof b==h||typeof b=="number"){d.innerHTML=b;d=d.getElementsByTagName("SCRIPT");for(c=d.length;g<c;g++)eval(d[g].text)}else d.innerHTML="",d.appendChild(b);else a=="outer"?d.parentNode.replaceChild(e(b,d),d):a=="top"?d.insertBefore(e(b,d),d.firstChild):a=="bottom"?d.insertBefore(e(b,d),null):a=="remove"?d.parentNode.removeChild(d):a==
"before"?d.parentNode.insertBefore(e(b,d.parentNode),d):a=="after"&&d.parentNode.insertBefore(e(b,d.parentNode),d.nextSibling)})},attr:function(a,b){if(arguments.length==2)return this.each(function(d){a=="checked"&&(b==""||b==!1||typeof b=="undefined")?d.removeAttribute(a):d.setAttribute(a,b)});else{var d=[];this.each(function(b){b=b.getAttribute(a);b!=null&&d.push(b)});return d}}});"inner outer top bottom remove before after".split(" ").forEach(function(b){a.fn[b]=function(a){return function(b){return this.html(a,
b)}}(b)});a.events={};var n={};a.extend({on:function(d,e,f){return this.each(function(i){if(a.events[d]){var m=c(i),m=b(m,d);f=f||{};f.handler=function(b,c){a.fn.fire.call(a(this),d,c)};m.length||a.events[d].call(i,f)}i.addEventListener(d,g(i,d,e),!1)})},un:function(a,d){return this.each(function(e){for(var g=c(e),f=b(g,a),h=f.length;h--;)if(d===void 0||d.guid===f[h].guid){e.removeEventListener(a,f[h],!1);var s=n[g][a],j=h,z=s.slice(2);s.length=j<0?s.length+j:j;s.push.apply(s,z)}n[g][a].length===
0&&delete n[g][a];for(var t in n[g])return;delete n[g]})},fire:function(a,b){return this.each(function(d){if(d==j&&!d.dispatchEvent)d=j.documentElement;var c=j.createEvent("HTMLEvents");c.initEvent(a,!0,!0);c.data=b||{};c.eventName=a;d.dispatchEvent(c)})}});"click load submit touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend orientationchange".split(" ").forEach(function(b){a.fn[b]=function(a){return function(b){return b?this.on(a,b):this.fire(a)}}(b)});a(d).on("load",
function(){"onorientationchange"in j.body||function(b,c){a(d).on("resize",function(){var g=d.innerWidth<b&&d.innerHeight>c&&d.innerWidth<d.innerHeight,e=d.innerWidth>b&&d.innerHeight<c&&d.innerWidth>d.innerHeight;if(g||e)d.orientation=g?0:90,a("body").fire("orientationchange"),b=d.innerWidth,c=d.innerHeight})}(d.innerWidth,d.innerHeight)});var r;try{r=!!j.createEvent("TouchEvent").initTouchEvent}catch(B){r=!1}a.touch=r;c.id=1;a.extend({tween:function(a,b){a instanceof Array&&a.forEach(function(){});
var d=function(){var b={};"duration after easing".split(" ").forEach(function(d){a[d]&&(b[d]=a[d],delete a[d])});return b}(a),c=function(a){var b=[],d;if(typeof a!=h){for(d in a)b.push(d+":"+a[d]);b=b.join(";")}else b=a;return b}(a);return this.each(function(a){emile(a,c,d,b)})}});var x=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;a.extend({setStyle:function(a,b){a=a.replace(/\-[a-z]/g,function(a){return a[1].toUpperCase()});return this.each(function(d){d.style[a]=b})},getStyle:function(a,b){var d=function(a,b){return j.defaultView.getComputedStyle(a,
"").getPropertyValue(b.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}))};if(b===void 0){var c=[];this.each(function(b){c.push(d(b,a))});return c}else this.each(function(c){b(d(c,a))})},addClass:function(a){return this.each(function(b){if(w(a).test(b.className)===!1)b.className=(b.className+" "+a||"").replace(x,"")})},hasClass:function(a,b){var d=this;return this.length&&function(){var c=!1;d.each(function(d){w(a).test(d.className)&&(c=!0,b&&b(d))});return c}()},removeClass:function(a){if(a===
void 0)this.each(function(a){a.className=""});else{var b=w(a);this.each(function(a){var d;d=(a.className.replace(b,"$1")||"").replace(x,"");a.className=d})}return this},css:function(a){for(var b in a)this.setStyle(b,a[b]);return this}});var y={},w=function(a){var b=y[a];b||(b=RegExp("(^|\\s+)"+a+"(?:\\s+|$)"),y[a]=b);return b};a.extend({xhr:function(a,b,d){function c(){f.readyState==4&&(delete e.xmlHttpRequest,(f.status===0||f.status==200)&&f.handleResp(),/^[45]/.test(f.status)&&f.handleError())}
/^(inner|outer|top|bottom|before|after)$/.test(a)||(d=b,b=a,a="inner");var g=d?d:{};if(typeof d=="function")g={},g.callback=d;var e=this,f=new XMLHttpRequest,d=g.method||"get",h=g.async||!1,j=g.data||null,t=0;f.queryString=j;f.open(d,b,h);if(g.headers)for(;t<g.headers.length;t++)f.setRequestHeader(g.headers[t].name,g.headers[t].value);f.handleResp=g.callback!=null?g.callback:function(){e.html(a,this.responseText)};f.handleError=g.error&&typeof g.error=="function"?g.error:function(){};if(h)f.onreadystatechange=
c,this.xmlHttpRequest=f;f.send(j);h||c();return this}});(function(a,b){function d(a,b,c){return(a+(b-a)*c).toFixed(3)}function c(a,b,d){for(var g=2,e,f,h=[],j=[];e=3,f=arguments[g-1],g--;)if(f.substr(0,1)=="r")for(f=f.match(/\d+/g);e--;)h.push(~~f[e]);else for(f.length==4&&(f="#"+f.substr(1,1)+f.substr(1,1)+f.substr(2,1)+f.substr(2,1)+f.substr(3,1)+f.substr(3,1));e--;)h.push(parseInt(f.substr(1+e*2,2),16));for(;e--;)g=~~(h[e+3]+(h[e]-h[e+3])*d),j.push(g<0?0:g>255?255:g);return"rgb("+j.join(",")+")"}
function g(a){var b=parseFloat(a),a=a.replace(/^[\-\d\.]+/,"");return isNaN(b)?{v:a,f:c,u:""}:{v:b,f:d,u:a}}function e(a){var b={},d=h.length,c;f.innerHTML='<div style="'+a+'"></div>';for(a=f.childNodes[0].style;d--;)if(c=a[h[d]])b[h[d]]=g(c);return b}var f=j.createElement("div"),h="backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
b[a]=function(a,b,d,c){var a=typeof a=="string"?j.getElementById(a):a,d=d||{},f=e(b),b=a.currentStyle?a.currentStyle:getComputedStyle(a,null),h,i={},k=+new Date,n=d.duration||200,l=k+n,r,q=d.easing||function(a){return-Math.cos(a*Math.PI)/2+0.5};for(h in f)i[h]=g(b[h]);r=setInterval(function(){var b=+new Date,g=b>l?1:(b-k)/n;for(h in f)a.style[h]=f[h].f(i[h].v,f[h].v,q(g))+f[h].u;b>l&&(clearInterval(r),d.after&&d.after(),c&&setTimeout(c,1))},10)}})("emile",this)})();typeof Ur=="undefined"&&(Ur={QuickLoaders:{},WindowLoaders:{},Widgets:{},onLoadCallbacks:[],setup:function(e){Ur.initialize({type:"DOMContentLoaded"},e);Ur.loaded?Ur.initialize({type:"load"},e):window.addEventListener("load",function(f){Ur.initialize(f,e)},!1)},initialize:function(e,f){var c=e.type=="DOMContentLoaded"?Ur.QuickLoaders:Ur.WindowLoaders;if(f===void 0)f=document.body;for(name in c)(new c[name]).initialize(f);if(e.type=="load")Ur.loaded=!0,Ur._onLoad()},_onLoad:function(){x$().iterate(Ur.onLoadCallbacks,
function(e){e()})},loaded:!1});window.addEventListener("load",Ur.initialize,!1);window.addEventListener("DOMContentLoaded",Ur.initialize,!1);
var mixins={iterate:function(e,f){if(e!==void 0){var c=e.length||0,b=0;if(typeof f=="function")for(;b<c;b++)f.call(f,e[b],b,e)}},offset:function(e){typeof(e=="undefined")&&(e=this[0]);for(cumulative_left=cumulative_top=0;e.offsetParent;)cumulative_top+=e.offsetTop,cumulative_left+=e.offsetLeft,e=e.offsetParent;return{left:cumulative_left,top:cumulative_top}},find_next_ancestor:function(e,f){return e.parentNode!=window.document?x$().find_set_ancestor(e.parentNode,f):null},find_set_ancestor:function(e,
f){var c=x$(e).attr("data-ur-set")[0];return c!==void 0?f==void 0?e:c==f?e:x$().find_next_ancestor(e,f):x$().find_next_ancestor(e,f)},get_unique_uranium_id:function(){var e=0;return function(){e+=1;return e}}(),find_elements:function(e,f){var c={};this.each(function(b,c,a){return function(){x$().helper_find(this,b,c,a)}}(e,f,c));return c},helper_find:function(e,f,c,b){x$(e).find("*[data-ur-"+f+"-component]").each(function(){var g=!0,a=x$(this).attr("data-ur-id");if(a.length!=0)b[a]===void 0&&(b[a]=
{});else{var d=x$().find_set_ancestor(this,f);if(x$(d).attr("data-ur-state")[0]==="disabled"&&Ur.loaded==!1)return;d!==null?(a=x$(d).attr("data-ur-id")[0],a===void 0&&(a=x$().get_unique_uranium_id(),x$(d).attr("data-ur-id",a)),b[a]===void 0&&(b[a]={}),b[a].set=d):(console.log("Uranium Error: Couldn't find associated ur-set for component:",this),g=!1)}d=x$(this).attr("data-ur-"+f+"-component");d===void 0&&(g=!1);if(g)if(c!==void 0&&c[d]!==void 0)c[d](b[a],this,d);else b[a][d]=this});return b}};xui.extend(mixins);Ur.WindowLoaders.carousel=function(){function e(a){this.container=a.view_container;this.items=a.scroll_container;if(this.items.length==0)return console.log("Error -- carousel missing item components"),!1;this.button=a.button===void 0?{}:a.button;this.count=a.count;this.multi=x$(a.view_container).attr("data-ur-type")[0]=="multi";this.initialize();this.onSlideCallbacks=[]}function f(a){var a=x$(a),b=0;x$().iterate(["width","padding-left","padding-right","margin-left","margin-right","border-left-width",
"border-right-width"],function(c){b+=parseInt(a.getStyle(c))});return b}function c(a,b){a.style.webkitTransform="translate3d("+b+"px, 0px, 0px)"}function b(){}e.prototype={initialize:function(){var a=x$(this.container).attr("data-ur-touch")[0],a=a===void 0?!0:a=="enabled"?!0:!1;x$(this.container).attr("data-ur-touch",a?"enabled":"disabled");if(a)xui.touch?(this.touch=!0,x$(this.items).on("touchstart",function(a){return function(b){a.start_swipe(b)}}(this)),x$(this.items).on("touchmove",function(a){return function(b){a.continue_swipe(b)}}(this)),
x$(this.items).on("touchend",function(a){return function(b){a.finish_swipe(b)}}(this))):(this.touch=!1,x$(this.items).on("mousedown",function(a){return function(b){a.start_swipe(b)}}(this)),x$(this.items).on("mousemove",function(a){return function(b){a.continue_swipe(b)}}(this)),x$(this.items).on("mouseup",function(a){return function(b){a.finish_swipe(b)}}(this)));x$(this.button.prev).on("click",function(a){return function(){a.move_to(a.magazine_count)}}(this));x$(this.button.next).on("click",function(a){return function(){a.move_to(-a.magazine_count)}}(this));
this.item_index=0;this.magazine_count=1;this.adjust_spacing();this.update_index(0);this.jump_to_index=function(a){return function(b){a.__proto__.move_to_index.call(a,b)}}(this);window.setInterval(function(a){return function(){a.resize()}}(this),1E3)},get_transform:function(a){a=window.getComputedStyle(a).webkitTransform;return a!="none"?(a=new WebKitCSSMatrix(a),a.m41):(console.log("no webkit transform"),0)},resize:function(){this.snap_width!=this.container.offsetWidth&&this.adjust_spacing()},adjust_spacing:function(){var a=
this.container.offsetWidth;if(!(this.old_width!==void 0&&this.old_width==a)){this.old_width=a;var b=0,g=x$(this.items).find("[data-ur-carousel-component='item']");this.item_count=g.length;var e=0;x$().iterate(g,function(a){e+=f(a)});this.items.style.width=e+"px";this.snap_width=a;if(this.multi){var q=f(g[0]),l=Math.floor(a/q);this.magazine_count=l=l>this.item_count?this.item_count:l;var v=a-l*q;this.snap_width=v/(l-1)+q;this.last_index=this.item_count-this.magazine_count}else this.last_index=this.item_count-
1;this.item_index=this.last_index<this.item_index?this.last_index:this.item_index;b-=this.snap_width*this.item_index;c(this.items,b);var k=0;this.multi?(x$().iterate(g,function(a,b){var d=k;b!=0&&(d+=v/(l-1));c(a,d);k=d}),this.update_index(this.item_index)):x$().iterate(g,function(b,d){var e=k;d!=0&&(e+=a-g[d-1].offsetWidth);c(b,e);k=e})}},get_event_coordinates:function(a){if(this.touch){if(a.touches.length==1)return{x:a.touches[0].clientX,y:a.touches[0].clientY}}else return{x:a.clientX,y:a.clientY};
return null},update_buttons:function(){this.item_index==0?(x$(this.button.prev).attr("data-ur-state","disabled"),x$(this.button.next).attr("data-ur-state","enabled")):(this.item_index==this.last_index?x$(this.button.next).attr("data-ur-state","disabled"):x$(this.button.next).attr("data-ur-state","enabled"),x$(this.button.prev).attr("data-ur-state","enabled"))},update_index:function(a){if(a!==void 0){this.item_index=a;if(this.item_index<0)this.item_index=0;else if(this.item_index>this.last_index)this.item_index=
this.last_index-1;if(this.count!==void 0)this.count.innerHTML=this.multi?this.item_index+1+" to "+(this.item_index+this.magazine_count)+" of "+this.item_count:this.item_index+1+" of "+this.item_count;x$(this.items).find("*[data-ur-carousel-component='item'][data-ur-state='active']").attr("data-ur-state","inactive");a=x$(this.items).find("*[data-ur-carousel-component='item']")[this.item_index];x$(a).attr("data-ur-state","active");this.update_buttons()}},start_swipe:function(a){if(this.increment_flag)return!1;
this.touch_in_progress=!0;a=this.get_event_coordinates(a);if(a!==null)this.start_pos=a,this.starting_offset=this.get_transform(this.items);this.click=!0},continue_swipe:function(a){a.preventDefault();a.stopPropagation();if(this.touch_in_progress){a=this.get_event_coordinates(a);if(a!==null)this.end_pos=a,a=this.swipe_dist()+this.starting_offset,c(this.items,a);this.click=!1}},finish_swipe:function(a){this.click||(a.preventDefault(),a.stopPropagation());this.touch_in_progress=!1;if(!this.touch||a.touches.length==
0){var a=this.swipe_dist(),b=0;this.multi?(b=this.magazine_count,b=1/(1+Math.pow(Math.E,-1*a))*b-b/2<=0?Math.floor(1/(1+Math.pow(Math.E,-1*a))*b-b/2):Math.ceil(1/(1+Math.pow(Math.E,-1*a))*b-b/2)):b=a/this.snap_width<=0?Math.floor(a/this.snap_width):Math.ceil(a/this.snap_width);this.move_helper(b)}},snap_to:function(a){this.destination_offset=a+this.starting_offset;a=-1*this.last_index*this.snap_width;if(this.destination_offset<a||this.destination_offset>0)this.destination_offset=Math.abs(this.destination_offset-
a)<1?a:this.starting_offset;this.momentum()},move_to:function(a){this.starting_offset=this.get_transform(this.items);this.move_helper(a)},move_helper:function(a){a=this.item_index-a;a>this.last_index?a=this.last_index:a<0&&(a=0);var b=x$(this.items).find("*[data-ur-carousel-component='item']")[a],c=x$(this.items).find("*[data-ur-carousel-component='item']")[this.item_index],g=this.get_transform(c)-this.get_transform(b);this.snap_to(c.offsetLeft-b.offsetLeft+g);this.update_index(a)},move_to_index:function(a){this.move_to(this.item_index-
a)},momentum:function(){if(!this.touch_in_progress){this.increment_flag=!1;var a=this.get_transform(this.items),b=this.destination_offset-a;b-=b/1.1>=0?Math.floor(b/1.1):Math.ceil(b/1.1);Math.abs(b)<0.01&&(b=0);c(this.items,b+a);if(b!=0)this.increment_flag=!0;this.increment_flag?setTimeout(function(a){return function(){a.momentum()}}(this),16):x$().iterate(this.onSlideCallbacks,function(a){a()})}},swipe_dist:function(){if(this.end_pos===void 0)return 0;return this.end_pos.x-this.start_pos.x}};var g=
{button:function(a,b,c){a.button===void 0&&(a.button={});c=x$(b).attr("data-ur-carousel-button-type")[0];c===void 0&&console.log("Uranium declaration error: Malformed carousel button type on:"+b.outerHTML);a.button[c]=b;c=="prev"?x$(b).attr("data-ur-state","disabled"):x$(b).attr("data-ur-state","enabled")}};b.prototype.initialize=function(a){a=x$(a).find_elements("carousel",g);Ur.Widgets.carousel={};for(name in a){var b=a[name];Ur.Widgets.carousel[name]=new e(b);x$(b.set).attr("data-ur-state","enabled")}};
return b}();Ur.QuickLoaders["select-buttons"]=function(){function e(c){this.select=c.select;this.increment=c.increment;this.decrement=c.decrement;this.initialize()}function f(){}e.prototype.initialize=function(){x$(this.increment).click(function(c){return function(b){c.trigger_option(b,1)}}(this));x$(this.decrement).click(function(c){return function(b){c.trigger_option(b,-1)}}(this))};e.prototype.trigger_option=function(c,b){if(x$(c.currentTarget).attr("data-ur-state")[0]==="disabled")return!1;var g={},a=this.select.value,
d={prev:null,next:null};x$().iterate(this.select.children,function(b,c){x$(b).attr("value")[0]==a&&(g={element:b,index:c});typeof g.index=="undefined"&&(d.prev=x$(b).attr("value")[0]);c==g.index+1&&(d.next=x$(b).attr("value")[0])});var e=this.select.children.length,f=g.index+b;f==0?x$(this.decrement).attr("data-ur-state","disabled"):x$(this.decrement).attr("data-ur-state","enabled");f==e-1?x$(this.increment).attr("data-ur-state","disabled"):x$(this.increment).attr("data-ur-state","enabled");if(f<
0||f==e)return!1;this.select.value=d[b==1?"next":"prev"];return!0};f.prototype.initialize=function(c){c=x$(c).find_elements("select-buttons");for(name in c)new e(c[name]),x$(c[name].set).attr("data-ur-state","enabled")};return f}();Ur.QuickLoaders["select-list"]=function(){function e(c,b){this.select=c;this.list=b;this.initialize()}function f(){this.SelectLists={}}e.prototype.initialize=function(){x$(this.list).click(function(c){return function(b){c.trigger_option(b)}}(this))};e.prototype.trigger_option=function(c){var b=c.target,g="";x$().iterate(this.list.children,function(a){a==b?(x$(a).attr("data-ur-state","enabled"),g=x$(a).attr("value")):x$(a).attr("data-ur-state","disabled")});this.select.value=g;return!0};f.prototype.initialize=
function(c){c=x$(c).find_elements("select-list");for(name in c){var b=c[name];this.SelectLists[name]=new e(c[name].select,c[name].content);x$(b.set).attr("data-ur-state","enabled")}};return f}();Ur.QuickLoaders.toggler=function(){function e(c,b){c.content===void 0&&(c.content=[]);c.content.push(b)}function f(){this.component_constructors={content:e}}f.prototype.find=function(c){c=x$(c).find_elements("toggler",this.component_constructors);for(toggler_id in c){var b=c[toggler_id];if(b.button===void 0)console.log("Uranium Declaration Error: No button found for toggler with id="+toggler_id);else{var g=x$(b.button).attr("data-ur-state")[0];g===void 0&&x$(b.button).attr("data-ur-state","disabled");
b.content===void 0?console.log("Uranium Declaration Error: No content found for toggler with id="+toggler_id):x$().iterate(b.content,function(a){x$(a).attr("data-ur-state")[0]===void 0&&x$(a).attr("data-ur-state",g)})}}return c};f.prototype.construct_button_callback=function(c,b){return function(g){var g=g.currentTarget,a=x$(g).attr("data-ur-state")[0]==="enabled"?"disabled":"enabled";x$(g).attr("data-ur-state",a);x$(b).attr("data-ur-state",a);x$().iterate(c,function(a){var b=x$(a).attr("data-ur-state")[0]===
"enabled"?"disabled":"enabled";x$(a).attr("data-ur-state",b)})}};f.prototype.initialize=function(c){c=this.find(c);for(name in c){var b=c[name];x$(b.button).click(this.construct_button_callback(b.content,b.set));x$(b.set).attr("data-ur-state","enabled")}};return f}();Ur.QuickLoaders["zoom-preview"]=function(){function e(b){this.elements=b.elements;this.modifier={};if(b.modifier!==null)this.modifier=b.modifier;this.dimensions={};this.zoom=!1;this.update();this.events={start:"touchstart",move:"touchmove",end:"touchend"};this.touch=xui.touch;if(!this.touch)this.events={move:"mousemove",end:"mouseout"};this.initialize();console.log("Zoom Preview Loaded")}function f(){}e.prototype.rewrite_images=function(b,c,a){if(typeof b=="undefined")return!1;if(c===void 0&&a===
void 0)c=this.modifier.zoom_image.match,a=this.modifier.zoom_image.replace;this.elements.zoom_image.src=b.replace(c,a);c=a=null;if(this.modifier.button)c=this.modifier.button.match,a=this.modifier.button.replace;this.elements.button.src=c&&a?this.elements.zoom_image.src.replace(c,a):this.elements.zoom_image.src;var d=this;this.elements.zoom_image.style.visibility="hidden";x$(this.elements.zoom_image).on("load",function(){d.update()});x$(this.elements.button).on("load",function(){x$(d.elements.button).addClass("loaded")})};
e.prototype.update=function(){var b=this;x$().iterate(["button","zoom_image","container"],function(a){b.dimensions[a]=[b.elements[a].offsetWidth,b.elements[a].offsetHeight]});var c=x$(this.elements.button).offset(),c=[c.left,c.top];this.button_center=[this.dimensions.button[0]/2+c[0],this.dimensions.button[1]/2+c[1]];this.image_origin=[-0.5*this.dimensions.zoom_image[0],-0.5*this.dimensions.zoom_image[1]]};e.prototype.get_event_coordinates=function(b){if(this.touch){if(b.touches.length==1)return[b.touches[0].pageX,
b.touches[0].pageY]}else return[b.pageX,b.pageY]};e.prototype.initialize=function(){x$(this.elements.button).on(this.events.move,function(b){return function(c){b.scroll_zoom(c)}}(this));x$(this.elements.button).on(this.events.end,function(b){return function(c){b.scroll_end(c)}}(this));if(this.events.start)x$(this.elements.button).on("touchstart",function(){return function(b){b.preventDefault()}}(this));x$(this.elements.thumbnails).click(function(b){return function(c){if(c.target.tagName!="IMG")return!1;
b.rewrite_images(c.target.src)}}(this));this.normal_image_changed()};e.prototype.normal_image_changed=function(b){b!==void 0&&(this.elements.normal_image=b);img=x$(this.elements.normal_image);this.rewrite_images(img.attr("src")[0],this.modifier.normal_image.match,this.modifier.normal_image.replace)};e.prototype.scroll_end=function(){this.elements.zoom_image.style.visibility="hidden"};e.prototype.scroll_zoom=function(b){this.elements.zoom_image.style.visibility="visible";b=this.get_event_coordinates(b);
if(b===null)return!1;b=[(b[0]-this.button_center[0])/this.dimensions.button[0],(b[1]-this.button_center[1])/this.dimensions.button[1]];b=[this.dimensions.zoom_image[0]*b[0],this.dimensions.zoom_image[1]*b[1]];b=[this.image_origin[0]-b[0],this.image_origin[1]-b[1]];b=this.check_bounds(b);this.elements.zoom_image.style.webkitTransform="translate3d("+b[0]+"px,"+b[1]+"px,0px)"};e.prototype.check_bounds=function(b){var c=[this.dimensions.container[0]-this.dimensions.zoom_image[0],this.dimensions.container[1]-
this.dimensions.zoom_image[1]];x$().iterate([0,1],function(a){b[a]>=0&&(b[a]=0);b[a]<=c[a]&&(b[a]=c[a])});return b};var c={_modifiers:function(b,c,a,d){b.modifier===void 0&&(b.modifier={});var e=d===void 0?"src":"zoom";console.log("searching for modifier:",e,c);d=x$(c).attr("data-ur-"+e+"-modifier-match")[0];c=x$(c).attr("data-ur-"+e+"-modifier-replace")[0];typeof d!="undefined"&&typeof c!="undefined"&&(console.log("found modifiers:",d,c),b.modifier[a]={match:RegExp(d),replace:c})},_construct:function(b,
c,a,d){b.elements===void 0&&(b.elements={});b.elements[a]=c;this._modifiers(b,c,a,d)},normal_image:function(b,c,a){this._construct(b,c,a,"zoom")},zoom_image:function(b,c,a){this._construct(b,c,a)},button:function(b,c,a){this._construct(b,c,a)},container:function(b,c,a){this._construct(b,c,a)},thumbnails:function(b,c,a){this._construct(b,c,a)}};f.prototype.initialize=function(b){this.zoom_previews=x$(b).find_elements("zoom-preview",c);Ur.Widgets["zoom-preview"]={};for(name in this.zoom_previews)Ur.Widgets["zoom-preview"][name]=
new e(this.zoom_previews[name]),x$(this.zoom_previews[name].set).attr("data-ur-state","enabled")};return f}();
