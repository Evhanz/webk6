
(function(g,h,c,j,d,l,k){/*! Jssor */
new(function(){});var f={Jd:function(a){return-c.cos(a*c.PI)/2+.5},oe:function(a){return a},Ed:function(a){return-a*(a-2)},pe:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},ue:function(a){return-1/2*(c.cos(c.PI*a)-1)},we:function(a){return a==0||a==1?a:(a*=2)<1?1/2*c.pow(2,10*(a-1)):1/2*(-c.pow(2,-10*--a)+2)},je:function(a){return 1-c.cos(a*c.PI*2)},Ce:function(a){return c.sin(a*c.PI*2)},De:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},Ee:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},e={ob:f.Ed,Hd:f.pe,Sd:f.ue,Wd:f.we,Vb:f.je,Zd:f.Ce,be:f.De,Ub:f.Ee};var b=new function(){var e=this,Ab=/\S+/g,F=1,yb=2,fb=3,eb=4,jb=5,G,r=0,i=0,s=0,X=0,z=0,I=navigator,ob=I.appName,o=I.userAgent,p=parseFloat;function Ib(){if(!G){G={xf:"ontouchstart"in g||"createTouch"in h};var a;if(I.pointerEnabled||(a=I.msPointerEnabled))G.Cd=a?"msTouchAction":"touchAction"}return G}function v(j){if(!r){r=-1;if(ob=="Microsoft Internet Explorer"&&!!g.attachEvent&&!!g.ActiveXObject){var e=o.indexOf("MSIE");r=F;s=p(o.substring(e+5,o.indexOf(";",e)));/*@cc_on X=@_jscript_version@*/;i=h.documentMode||s}else if(ob=="Netscape"&&!!g.addEventListener){var d=o.indexOf("Firefox"),b=o.indexOf("Safari"),f=o.indexOf("Chrome"),c=o.indexOf("AppleWebKit");if(d>=0){r=yb;i=p(o.substring(d+8))}else if(b>=0){var k=o.substring(0,b).lastIndexOf("/");r=f>=0?eb:fb;i=p(o.substring(k+1,b))}else{var a=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);if(a){r=F;i=s=p(a[1])}}if(c>=0)z=p(o.substring(c+12))}else{var a=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);if(a){r=jb;i=p(a[2])}}}return j==r}function q(){return v(F)}function Q(){return q()&&(i<6||h.compatMode=="BackCompat")}function db(){return v(fb)}function ib(){return v(jb)}function vb(){return db()&&z>534&&z<535}function J(){v();return z>537||i>42||r==F&&i>=11}function O(){return q()&&i<9}function wb(a){var b,c;return function(f){if(!b){b=d;var e=a.substr(0,1).toUpperCase()+a.substr(1);n([a].concat(["WebKit","ms","Moz","O","webkit"]),function(g,d){var b=a;if(d)b=g+e;if(f.style[b]!=k)return c=b})}return c}}function ub(b){var a;return function(c){a=a||wb(b)(c)||b;return a}}var K=ub("transform");function nb(a){return{}.toString.call(a)}var kb={};n(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){kb["[object "+a+"]"]=a.toLowerCase()});function n(b,d){var a,c;if(nb(b)=="[object Array]"){for(a=0;a<b.length;a++)if(c=d(b[a],a,b))return c}else for(a in b)if(c=d(b[a],a,b))return c}function C(a){return a==j?String(a):kb[nb(a)]||"object"}function lb(a){for(var b in a)return d}function A(a){try{return C(a)=="object"&&!a.nodeType&&a!=a.window&&(!a.constructor||{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))}catch(b){}}function u(a,b){return{x:a,y:b}}function rb(b,a){setTimeout(b,a||0)}function H(b,d,c){var a=!b||b=="inherit"?"":b;n(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.index+b[0].length+1,a.length-1);a=d+e}});a=c+(!a.indexOf(" ")?"":" ")+a;return a}function tb(b,a){if(i<9)b.style.filter=a}e.Se=Ib;e.vd=q;e.Me=db;e.qd=ib;e.uf=J;e.bc=O;wb("transform");e.Md=function(){return i};e.qf=function(){v();return z};e.p=rb;function Y(a){a.constructor===Y.caller&&a.Pd&&a.Pd.apply(a,Y.caller.arguments)}e.Pd=Y;e.Db=function(a){if(e.hf(a))a=h.getElementById(a);return a};function t(a){return a||g.event}e.Rd=t;e.gc=function(b){b=t(b);var a=b.target||b.srcElement||h;if(a.nodeType==3)a=e.Ld(a);return a};e.kd=function(a){a=t(a);return{x:a.pageX||a.clientX||0,y:a.pageY||a.clientY||0}};function D(c,d,a){if(a!==k)c.style[d]=a==k?"":a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&g.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,j);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function ab(b,c,a,d){if(a!==k){if(a==j)a="";else d&&(a+="px");D(b,c,a)}else return p(D(b,c))}function m(c,a){var d=a?ab:D,b;if(a&4)b=ub(c);return function(e,f){return d(e,b?b(e):c,f,a&2)}}function Db(b){if(q()&&s<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?p(a[1])/100:1}else return p(b.style.opacity||"1")}function Fb(b,a,f){if(q()&&s<9){var h=b.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=c.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=H(h,[i],d);tb(b,g)}else b.style.opacity=a==1?"":c.round(a*100)/100}var L={P:["rotate"],Z:["rotateX"],ib:["rotateY"],Tb:["skewX"],Ob:["skewY"]};if(!J())L=B(L,{E:["scaleX",2],F:["scaleY",2],ab:["translateZ",1]});function M(d,a){var c="";if(a){if(q()&&i&&i<10){delete a.Z;delete a.ib;delete a.ab}b.g(a,function(d,b){var a=L[b];if(a){var e=a[1]||0;if(N[b]!=d)c+=" "+a[0]+"("+d+(["deg","px",""])[e]+")"}});if(J()){if(a.tb||a.rb||a.ab)c+=" translate3d("+(a.tb||0)+"px,"+(a.rb||0)+"px,"+(a.ab||0)+"px)";if(a.E==k)a.E=1;if(a.F==k)a.F=1;if(a.E!=1||a.F!=1)c+=" scale3d("+a.E+", "+a.F+", 1)"}}d.style[K(d)]=c}e.Mc=m("transformOrigin",4);e.jf=m("backfaceVisibility",4);e.kf=m("transformStyle",4);e.lf=m("perspective",6);e.mf=m("perspectiveOrigin",4);e.nf=function(a,b){if(q()&&s<9||s<10&&Q())a.style.zoom=b==1?"":b;else{var c=K(a),f="scale("+b+")",e=a.style[c],g=new RegExp(/[\s]*scale\(.*?\)/g),d=H(e,[g],f);a.style[c]=d}};e.nc=function(b,a){return function(c){c=t(c);var f=c.type,d=c.relatedTarget||(f=="mouseout"?c.toElement:c.fromElement);(!d||d!==a&&!e.pf(a,d))&&b(c)}};e.f=function(a,d,b,c){a=e.Db(a);if(a.addEventListener){d=="mousewheel"&&a.addEventListener("DOMMouseScroll",b,c);a.addEventListener(d,b,c)}else if(a.attachEvent){a.attachEvent("on"+d,b);c&&a.setCapture&&a.setCapture()}};e.S=function(a,c,d,b){a=e.Db(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};e.Lb=function(a){a=t(a);a.preventDefault&&a.preventDefault();a.cancel=d;a.returnValue=l};e.sf=function(a){a=t(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=d};e.T=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,b)};return b};e.tf=function(a,b){if(b==k)return a.textContent||a.innerText;var c=h.createTextNode(b);e.lc(a);a.appendChild(c)};e.Qb=function(d,c){for(var b=[],a=d.firstChild;a;a=a.nextSibling)(c||a.nodeType==1)&&b.push(a);return b};function mb(a,c,e,b){b=b||"u";for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){if(U(a,b)==c)return a;if(!e){var d=mb(a,c,e,b);if(d)return d}}}e.N=mb;function S(a,d,f,b){b=b||"u";var c=[];for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){U(a,b)==d&&c.push(a);if(!f){var e=S(a,d,f,b);if(e.length)c=c.concat(e)}}return c}function gb(a,c,d){for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(!d){var b=gb(a,c,d);if(b)return b}}}e.Pe=gb;function xb(a,c,e){var b=[];for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){(!c||a.tagName==c)&&b.push(a);if(!e){var d=xb(a,c,e);if(d.length)b=b.concat(d)}}return b}e.Qe=xb;e.Re=function(b,a){return b.getElementsByTagName(a)};function B(){var e=arguments,d,c,b,a,g=1&e[0],f=1+g;d=e[f-1]||{};for(;f<e.length;f++)if(c=e[f])for(b in c){a=c[b];if(a!==k){a=c[b];var h=d[b];d[b]=g&&(A(h)||A(a))?B(g,{},h,a):a}}return d}e.M=B;function Z(f,g){var d={},c,a,b;for(c in f){a=f[c];b=g[c];if(a!==b){var e;if(A(a)&&A(b)){a=Z(a,b);e=!lb(a)}!e&&(d[c]=a)}}return d}e.cd=function(a){return C(a)=="function"};e.hf=function(a){return C(a)=="string"};e.ad=function(a){return!isNaN(p(a))&&isFinite(a)};e.g=n;e.yf=A;function R(a){return h.createElement(a)}e.Sb=function(){return R("DIV")};e.Ye=function(){return R("SPAN")};e.Wc=function(){};function V(b,c,a){if(a==k)return b.getAttribute(c);b.setAttribute(c,a)}function U(a,b){return V(a,b)||V(a,"data-"+b)}e.C=V;e.l=U;function x(b,a){if(a==k)return b.className;b.className=a}e.Uc=x;function qb(b){var a={};n(b,function(b){if(b!=k)a[b]=b});return a}function sb(b,a){return b.match(a||Ab)}function P(b,a){return qb(sb(b||"",a))}e.wf=sb;function bb(b,c){var a="";n(c,function(c){a&&(a+=b);a+=c});return a}function E(a,c,b){x(a,bb(" ",B(Z(P(x(a)),P(c)),P(b))))}e.Ld=function(a){return a.parentNode};e.R=function(a){e.bb(a,"none")};e.B=function(a,b){e.bb(a,b?"none":"")};e.Bf=function(b,a){b.removeAttribute(a)};e.zf=function(){return q()&&i<10};e.Cf=function(d,a){if(a)d.style.clip="rect("+c.round(a.c||a.A||0)+"px "+c.round(a.u)+"px "+c.round(a.s)+"px "+c.round(a.e||a.v||0)+"px)";else if(a!==k){var g=d.style.cssText,f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=H(g,f,"");b.Pb(d,e)}};e.hb=function(){return+new Date};e.X=function(b,a){b.appendChild(a)};e.cc=function(b,a,c){(c||a.parentNode).insertBefore(b,a)};e.Nb=function(b,a){a=a||b.parentNode;a&&a.removeChild(b)};e.Ue=function(a,b){n(a,function(a){e.Nb(a,b)})};e.lc=function(a){e.Ue(e.Qb(a,d),a)};e.Je=function(a,b){var c=e.Ld(a);b&1&&e.W(a,(e.n(c)-e.n(a))/2);b&2&&e.V(a,(e.o(c)-e.o(a))/2)};e.de=function(b,a){return parseInt(b,a||10)};e.ce=p;e.pf=function(b,a){var c=h.body;while(a&&b!==a&&c!==a)try{a=a.parentNode}catch(d){return l}return b===a};function W(d,c,b){var a=d.cloneNode(!c);!b&&e.Bf(a,"id");return a}e.gb=W;e.Cb=function(f,g){var a=new Image;function b(f,d){e.S(a,"load",b);e.S(a,"abort",c);e.S(a,"error",c);g&&g(a,d)}function c(a){b(a,d)}if(ib()&&i<11.6||!f)b(!f);else{e.f(a,"load",b);e.f(a,"abort",c);e.f(a,"error",c);a.src=f}};e.ae=function(d,a,f){var c=d.length+1;function b(b){c--;if(a&&b&&b.src==a.src)a=b;!c&&f&&f(a)}n(d,function(a){e.Cb(a.src,b)});b()};e.Xd=function(a,g,i,h){if(h)a=W(a);var c=S(a,g);if(!c.length)c=b.Re(a,g);for(var f=c.length-1;f>-1;f--){var d=c[f],e=W(i);x(e,x(d));b.Pb(e,d.style.cssText);b.cc(e,d);b.Nb(d)}return a};function Gb(a){var l=this,p="",r=["av","pv","ds","dn"],f=[],q,j=0,g=0,d=0;function i(){E(a,q,f[d||j||g&2||g]);b.Y(a,"pointer-events",d?"none":"")}function c(){j=0;i();e.S(h,"mouseup",c);e.S(h,"touchend",c);e.S(h,"touchcancel",c)}function o(a){if(d)e.Lb(a);else{j=4;i();e.f(h,"mouseup",c);e.f(h,"touchend",c);e.f(h,"touchcancel",c)}}l.Ke=function(a){if(a===k)return g;g=a&2||a&1;i()};l.Yb=function(a){if(a===k)return!d;d=a?0:3;i()};l.mb=a=e.Db(a);var m=b.wf(x(a));if(m)p=m.shift();n(r,function(a){f.push(p+a)});q=bb(" ",f);f.unshift("");e.f(a,"mousedown",o);e.f(a,"touchstart",o)}e.zc=function(a){return new Gb(a)};e.Y=D;e.wb=m("overflow");e.V=m("top",2);e.W=m("left",2);e.n=m("width",2);e.o=m("height",2);e.Zc=m("marginLeft",2);e.jd=m("marginTop",2);e.z=m("position");e.bb=m("display");e.J=m("zIndex",1);e.zb=function(b,a,c){if(a!=k)Fb(b,a,c);else return Db(b)};e.Pb=function(a,b){if(b!=k)a.style.cssText=b;else return a.style.cssText};var T={I:e.zb,c:e.V,e:e.W,cb:e.n,db:e.o,Ib:e.z,Uf:e.bb,Q:e.J};function w(g,l){var f=O(),b=J(),d=vb(),h=K(g);function i(b,d,a){var e=b.vb(u(-d/2,-a/2)),f=b.vb(u(d/2,-a/2)),g=b.vb(u(d/2,a/2)),h=b.vb(u(-d/2,a/2));b.vb(u(300,300));return u(c.min(e.x,f.x,g.x,h.x)+d/2,c.min(e.y,f.y,g.y,h.y)+a/2)}function a(d,a){a=a||{};var n=a.ab||0,p=(a.Z||0)%360,q=(a.ib||0)%360,u=(a.P||0)%360,l=a.E,m=a.F,g=a.Vf;if(l==k)l=1;if(m==k)m=1;if(g==k)g=1;if(f){n=0;p=0;q=0;g=0}var c=new Cb(a.tb,a.rb,n);c.Z(p);c.ib(q);c.Ud(u);c.Td(a.Tb,a.Ob);c.Hc(l,m,g);if(b){c.ub(a.v,a.A);d.style[h]=c.ie()}else if(!X||X<9){var o="",j={x:0,y:0};if(a.fb)j=i(c,a.fb,a.sb);e.jd(d,j.y);e.Zc(d,j.x);o=c.Ie();var s=d.style.filter,t=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),r=H(s,[t],o);tb(d,r)}}w=function(f,c){c=c||{};var h=c.v,i=c.A,g;n(T,function(a,b){g=c[b];g!==k&&a(f,g)});e.Cf(f,c.a);if(!b){h!=k&&e.W(f,(c.Kc||0)+h);i!=k&&e.V(f,(c.Lc||0)+i)}if(c.Ge)if(d)rb(e.T(j,M,f,c));else a(f,c)};e.Jb=M;if(d)e.Jb=w;if(f)e.Jb=a;else if(!b)a=M;e.L=w;w(g,l)}e.Jb=w;e.L=w;function Cb(i,k,o){var d=this,b=[1,0,0,0,0,1,0,0,0,0,1,0,i||0,k||0,o||0,1],h=c.sin,g=c.cos,l=c.tan;function f(a){return a*c.PI/180}function n(a,b){return{x:a,y:b}}function m(c,e,l,m,o,r,t,u,w,z,A,C,E,b,f,k,a,g,i,n,p,q,s,v,x,y,B,D,F,d,h,j){return[c*a+e*p+l*x+m*F,c*g+e*q+l*y+m*d,c*i+e*s+l*B+m*h,c*n+e*v+l*D+m*j,o*a+r*p+t*x+u*F,o*g+r*q+t*y+u*d,o*i+r*s+t*B+u*h,o*n+r*v+t*D+u*j,w*a+z*p+A*x+C*F,w*g+z*q+A*y+C*d,w*i+z*s+A*B+C*h,w*n+z*v+A*D+C*j,E*a+b*p+f*x+k*F,E*g+b*q+f*y+k*d,E*i+b*s+f*B+k*h,E*n+b*v+f*D+k*j]}function e(c,a){return m.apply(j,(a||b).concat(c))}d.Hc=function(a,c,d){if(a!=1||c!=1||d!=1)b=e([a,0,0,0,0,c,0,0,0,0,d,0,0,0,0,1])};d.ub=function(a,c,d){b[12]+=a||0;b[13]+=c||0;b[14]+=d||0};d.Z=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([1,0,0,0,0,d,i,0,0,-i,d,0,0,0,0,1])}};d.ib=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([d,0,-i,0,0,1,0,0,i,0,d,0,0,0,0,1])}};d.Ud=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([d,i,0,0,-i,d,0,0,0,0,1,0,0,0,0,1])}};d.Td=function(a,c){if(a||c){i=f(a);k=f(c);b=e([1,l(k),0,0,l(i),1,0,0,0,0,1,0,0,0,0,1])}};d.vb=function(c){var a=e(b,[1,0,0,0,0,1,0,0,0,0,1,0,c.x,c.y,0,1]);return n(a[12],a[13])};d.ie=function(){return"matrix3d("+b.join(",")+")"};d.Ie=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+b[0]+", M12="+b[4]+", M21="+b[1]+", M22="+b[5]+", SizingMethod='auto expand')"}}new function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.E=function(b,c){return a.Pc(b,c,0)};a.F=function(b,c){return a.Pc(b,0,c)};a.Pc=function(a,c,d){return b(a,[[c,0],[0,d]])};a.vb=function(d,c){var a=b(d,[[c.x],[c.y]]);return u(a[0][0],a[1][0])}};var N={Kc:0,Lc:0,v:0,A:0,D:1,E:1,F:1,P:0,Z:0,ib:0,tb:0,rb:0,ab:0,Tb:0,Ob:0};e.hd=function(a){var c=a||{};if(a)if(b.cd(a))c={Cc:c};else if(b.cd(a.a))c.a={Cc:a.a};return c};e.Jc=function(l,m,x,q,z,A,n){var a=m;if(l){a={};for(var g in m){var B=A[g]||1,w=z[g]||[0,1],e=(x-w[0])/w[1];e=c.min(c.max(e,0),1);e=e*B;var u=c.floor(e);if(e!=u)e-=u;var h=q.Cc||f.Jd,i,C=l[g],o=m[g];if(b.ad(o)){h=q[g]||h;var y=h(e);i=C+o*y}else{i=b.M({Zb:{}},l[g]);var v=q[g]||{};b.g(o.Zb||o,function(d,a){h=v[a]||v.Cc||h;var c=h(e),b=d*c;i.Zb[a]=b;i[a]+=b})}a[g]=i}var t=b.g(m,function(b,a){return N[a]!=k});t&&b.g(N,function(c,b){if(a[b]==k&&l[b]!==k)a[b]=l[b]});if(t){if(a.D)a.E=a.F=a.D;a.fb=n.fb;a.sb=n.sb;a.Ge=d}}if(m.a&&n.ub){var p=a.a.Zb,s=(p.c||0)+(p.s||0),r=(p.e||0)+(p.u||0);a.e=(a.e||0)+r;a.c=(a.c||0)+s;a.a.e-=r;a.a.u-=r;a.a.c-=s;a.a.s-=s}if(a.a&&b.zf()&&!a.a.c&&!a.a.e&&!a.a.A&&!a.a.v&&a.a.u==n.fb&&a.a.s==n.sb)a.a=j;return a}};function o(){var a=this,d=[];function i(a,b){d.push({Ac:a,Bc:b})}function h(a,c){b.g(d,function(b,e){b.Ac==a&&b.Bc===c&&d.splice(e,1)})}a.Fb=a.addEventListener=i;a.removeEventListener=h;a.j=function(a){var c=[].slice.call(arguments,1);b.g(d,function(b){b.Ac==a&&b.Bc.apply(g,c)})}}var m=function(z,C,f,K,N,M){z=z||0;var a=this,q,o,p,u,A=0,G,H,F,B,y=0,i=0,m=0,D,k,e,h,n,J,w=[],x;function P(a){e+=a;h+=a;k+=a;i+=a;m+=a;y+=a}function t(p){var g=p;if(n){if(g>=h||g<=e&&!J)g=((g-e)%n+n)%n+e;if(f.ze&&g<=e)g=e+n}if(!D||u||i!=g){var j=c.min(g,h);j=c.max(j,e);if(!D||u||j!=m){if(M){var l=(j-k)/(C||1);if(f.vc)l=1-l;var o=b.Jc(N,M,l,G,F,H,f);if(x)b.g(o,function(b,a){x[a]&&x[a](K,b)});else b.L(K,o)}a.Ic(m-k,j-k);var r=m,q=m=j;b.g(w,function(b,c){var a=g<i?w[w.length-c-1]:b;a.lb(m-y)});i=g;D=d;a.dc(r,q)}}}function E(a,b,d){b&&a.Rb(h);if(!d){e=c.min(e,a.gd()+y);h=c.max(h,a.wc()+y)}w.push(a)}var r=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.msRequestAnimationFrame;if(b.Me()&&b.Md()<7)r=j;r=r||function(a){b.p(a,f.kb)};function I(){if(q){var d=b.hb(),e=c.min(d-A,f.fd),a=i+e*p;A=d;if(a*p>=o*p)a=o;t(a);if(!u&&a*p>=o*p)L(B);else r(I)}}function s(f,g,j){if(!q){q=d;u=j;B=g;f=c.max(f,e);f=c.min(f,h);o=f;p=o<i?-1:1;a.dd();A=b.hb();r(I)}}function L(b){if(q){u=q=B=l;a.bd();b&&b()}}a.id=function(a,b,c){s(a?i+a:h,b,c)};a.Yc=s;a.nb=L;a.qe=function(a){s(a)};a.jb=function(){return i};a.Vc=function(){return o};a.Ab=function(){return m};a.lb=t;a.ub=function(a){t(i+a)};a.Oc=function(){return q};a.ne=function(a){n=a};a.Rb=P;a.Nc=function(a,b){E(a,0,b)};a.jc=function(a){E(a,1)};a.gd=function(){return e};a.wc=function(){return h};a.dc=a.dd=a.bd=a.Ic=b.Wc;a.ic=b.hb();f=b.M({kb:16,fd:50},f);n=f.oc;J=f.le;x=f.ke;e=k=z;h=z+C;H=f.K||{};F=f.eb||{};G=b.hd(f.m)};var n=new function(){var h=this,t=1,q=2,r=4,s=8,w=256,x=512,v=1024,u=2048,j=u+t,i=u+q,o=x+t,m=x+q,n=w+r,k=w+s,l=v+r,p=v+s;function y(a){return(a&q)==q}function z(a){return(a&r)==r}function g(b,a,c){c.push(a);b[a]=b[a]||[];b[a].push(c)}h.kc=function(f){for(var d=f.i,e=f.k,s=f.U,t=f.Sc,r=[],a=0,b=0,p=d-1,q=e-1,h=t-1,c,b=0;b<e;b++)for(a=0;a<d;a++){switch(s){case j:c=h-(a*e+(q-b));break;case l:c=h-(b*d+(p-a));break;case o:c=h-(a*e+b);case n:c=h-(b*d+a);break;case i:c=a*e+b;break;case k:c=b*d+(p-a);break;case m:c=a*e+(q-b);break;default:c=b*d+a}g(r,c,[b,a])}return r};h.Gb=function(q){var u=q.i,v=q.k,e=q.U,t=q.Sc,r=[],s=0,c=0,d=0,f=u-1,h=v-1,w=t-1;switch(e){case j:case m:case o:case i:var a=0,b=0;break;case k:case l:case n:case p:var a=f,b=0;break;default:e=p;var a=f,b=0}c=a;d=b;while(s<t){if(z(e)||y(e))g(r,w-s++,[d,c]);else g(r,s++,[d,c]);switch(e){case j:case m:c--;d++;break;case o:case i:c++;d--;break;case k:case l:c--;d--;break;case p:case n:default:c++;d++}if(c<0||d<0||c>f||d>h){switch(e){case j:case m:a++;break;case k:case l:case o:case i:b++;break;case p:case n:default:a--}if(a<0||b<0||a>f||b>h){switch(e){case j:case m:a=f;b++;break;case o:case i:b=h;a++;break;case k:case l:b=h;a--;break;case p:case n:default:a=0;b++}if(b>h)b=h;else if(b<0)b=0;else if(a>f)a=f;else if(a<0)a=0}d=b;c=a}}return r};h.Be=function(d){for(var e=[],a,b=0;b<d.k;b++)for(a=0;a<d.i;a++)g(e,c.ceil(1e5*c.random())%13,[b,a]);return e}},s=function(k,s,q,u,z){var e=this,v,g,a,y=0,x=u.Fe,r,h=8;function t(a){if(a.c)a.A=a.c;if(a.e)a.v=a.e;b.g(a,function(a){b.yf(a)&&t(a)})}function i(g,e){var a={kb:e,q:1,p:0,i:1,k:1,I:0,D:0,a:0,ub:l,G:l,vc:l,H:n.Be,U:1032,xc:{Rc:0,he:0},m:f.Jd,K:{},Mb:[],eb:{}};b.M(a,g);t(a);a.Sc=a.i*a.k;a.m=b.hd(a.m);a.Nf=c.ceil(a.q/a.kb);a.Mf=function(c,b){c/=a.i;b/=a.k;var f=c+"x"+b;if(!a.Mb[f]){a.Mb[f]={cb:c,db:b};for(var d=0;d<a.i;d++)for(var e=0;e<a.k;e++)a.Mb[f][e+","+d]={c:e*b,u:d*c+c,s:e*b+b,e:d*c}}return a.Mb[f]};if(a.Fc){a.Fc=i(a.Fc,e);a.G=d}return a}function p(B,h,a,w,o,m){var z=this,u,v={},i={},n=[],f,e,s,q=a.xc.Rc||0,r=a.xc.he||0,g=a.Mf(o,m),p=C(a),D=p.length-1,t=a.q+a.p*D,x=w+t,k=a.G,y;x+=50;function C(a){var b=a.H(a);return a.vc?b.reverse():b}z.Qc=x;z.ac=function(d){d-=w;var e=d<t;if(e||y){y=e;if(!k)d=t-d;var f=c.ceil(d/a.kb);b.g(i,function(a,e){var d=c.max(f,a.Af);d=c.min(d,a.length-1);if(a.Tc!=d){if(!a.Tc&&!k)b.B(n[e]);else d==a.Kf&&k&&b.R(n[e]);a.Tc=d;b.L(n[e],a[d])}})}};h=b.gb(h);b.Jb(h,j);if(b.bc()){var E=!h["no-image"],A=b.Qe(h);b.g(A,function(a){(E||a["jssor-slider"])&&b.zb(a,b.zb(a),d)})}b.g(p,function(h,j){b.g(h,function(G){var K=G[0],J=G[1],t=K+","+J,n=l,p=l,x=l;if(q&&J%2){if(q&3)n=!n;if(q&12)p=!p;if(q&16)x=!x}if(r&&K%2){if(r&3)n=!n;if(r&12)p=!p;if(r&16)x=!x}a.c=a.c||a.a&4;a.s=a.s||a.a&8;a.e=a.e||a.a&1;a.u=a.u||a.a&2;var E=p?a.s:a.c,B=p?a.c:a.s,D=n?a.u:a.e,C=n?a.e:a.u;a.a=E||B||D||C;s={};e={A:0,v:0,I:1,cb:o,db:m};f=b.M({},e);u=b.M({},g[t]);if(a.I)e.I=2-a.I;if(a.Q){e.Q=a.Q;f.Q=0}var I=a.i*a.k>1||a.a;if(a.D||a.P){var H=d;if(b.bc())if(a.i*a.k>1)H=l;else I=l;if(H){e.D=a.D?a.D-1:1;f.D=1;if(b.bc()||b.qd())e.D=c.min(e.D,2);var N=a.P||0;e.P=N*360*(x?-1:1);f.P=0}}if(I){var h=u.Zb={};if(a.a){var w=a.Tf||1;if(E&&B){h.c=g.db/2*w;h.s=-h.c}else if(E)h.s=-g.db*w;else if(B)h.c=g.db*w;if(D&&C){h.e=g.cb/2*w;h.u=-h.e}else if(D)h.u=-g.cb*w;else if(C)h.e=g.cb*w}s.a=u;f.a=g[t]}var L=n?1:-1,M=p?1:-1;if(a.x)e.v+=o*a.x*L;if(a.y)e.A+=m*a.y*M;b.g(e,function(a,c){if(b.ad(a))if(a!=f[c])s[c]=a-f[c]});v[t]=k?f:e;var F=a.Nf,A=c.round(j*a.p/a.kb);i[t]=new Array(A);i[t].Af=A;i[t].Kf=A+F-1;for(var z=0;z<=F;z++){var y=b.Jc(f,s,z/F,a.m,a.eb,a.K,{ub:a.ub,fb:o,sb:m});y.Q=y.Q||1;i[t].push(y)}})});p.reverse();b.g(p,function(a){b.g(a,function(c){var f=c[0],e=c[1],d=f+","+e,a=h;if(e||f)a=b.gb(h);b.L(a,v[d]);b.wb(a,"hidden");b.z(a,"absolute");B.cf(a);n[d]=a;b.B(a,!k)})})}function w(){var b=this,c=0;m.call(b,0,v);b.dc=function(d,b){if(b-c>h){c=b;a&&a.ac(b);g&&g.ac(b)}};b.Xc=r}e.We=function(){var a=0,b=u.Bb,d=b.length;if(x)a=y++%d;else a=c.floor(c.random()*d);b[a]&&(b[a].qb=a);return b[a]};e.Te=function(w,x,l,m,b){r=b;b=i(b,h);var j=m.ed,f=l.ed;j["no-image"]=!m.hc;f["no-image"]=!l.hc;var n=j,o=f,u=b,d=b.Fc||i({},h);if(!b.G){n=f;o=j}var t=d.Rb||0;g=new p(k,o,d,c.max(t-d.kb,0),s,q);a=new p(k,n,u,c.max(d.kb-t,0),s,q);g.ac(0);a.ac(0);v=c.max(g.Qc,a.Qc);e.qb=w};e.xb=function(){k.xb();g=j;a=j};e.bf=function(){var b=j;if(a)b=new w;return b};if(b.bc()||b.qd()||z&&b.qf()<537)h=16;o.call(e);m.call(e,-1e7,1e7)},i=function(n,fc){var e=this;function Bc(){var a=this;m.call(a,-1e8,2e8);a.df=function(){var b=a.Ab(),d=c.floor(b),f=t(d),e=b-c.floor(b);return{qb:f,vf:d,Ib:e}};a.dc=function(b,a){var f=c.floor(a);if(f!=a&&a>b)f++;Tb(f,d);e.j(i.ef,t(a),t(b),a,b)}}function Ac(){var a=this;m.call(a,0,0,{oc:r});b.g(C,function(b){D&1&&b.ne(r);a.jc(b);b.Rb(kb/bc)})}function zc(){var a=this,b=Ub.mb;m.call(a,-1,2,{m:f.oe,ke:{Ib:Zb},oc:r},b,{Ib:1},{Ib:-2});a.pc=b}function mc(o,n){var b=this,f,g,h,k,c;m.call(b,-1e8,2e8,{fd:100});b.dd=function(){M=d;R=j;e.j(i.rf,t(w.jb()),w.jb())};b.bd=function(){M=l;k=l;var a=w.df();e.j(i.of,t(w.jb()),w.jb());!a.Ib&&Dc(a.vf,s)};b.dc=function(i,e){var b;if(k)b=c;else{b=g;if(h){var d=e/h;b=a.Yd(d)*(g-f)+f}}w.lb(b)};b.Wb=function(a,d,c,e){f=a;g=d;h=c;w.lb(a);b.lb(0);b.Yc(c,e)};b.ff=function(a){k=d;c=a;b.id(a,j,d)};b.gf=function(a){c=a};w=new Bc;w.Nc(o);w.Nc(n)}function oc(){var c=this,a=Xb();b.J(a,0);b.Y(a,"pointerEvents","none");c.mb=a;c.cf=function(c){b.X(a,c);b.B(a)};c.xb=function(){b.R(a);b.lc(a)}}function xc(n,g){var f=this,q,M,v,k,y=[],x,B,W,H,S,F,h,w,p;m.call(f,-u,u+1,{});function E(a){q&&q.md();T(n,a,0);F=d;q=new I.O(n,I,b.ce(b.l(n,"idle"))||lc);q.lb(0)}function Z(){q.ic<I.ic&&E()}function O(p,r,o){if(!H){H=d;if(k&&o){var h=o.width,c=o.height,n=h,m=c;if(h&&c&&a.yb){if(a.yb&3&&(!(a.yb&4)||h>K||c>J)){var j=l,q=K/J*c/h;if(a.yb&1)j=q>1;else if(a.yb&2)j=q<1;n=j?h*J/c:K;m=j?J:c*K/h}b.n(k,n);b.o(k,m);b.V(k,(J-m)/2);b.W(k,(K-n)/2)}b.z(k,"absolute");e.j(i.Ne,g)}}b.R(r);p&&p(f)}function Y(b,c,d,e){if(e==R&&s==g&&N)if(!Cc){var a=t(b);A.Te(a,g,c,f,d);c.Oe();U.Rb(a-U.gd()-1);U.lb(a);z.Wb(b,b,0)}}function bb(b){if(b==R&&s==g){if(!h){var a=j;if(A)if(A.qb==g)a=A.bf();else A.xb();Z();h=new vc(n,g,a,q);h.pd(p)}!h.Oc()&&h.fc()}}function G(d,e,l){if(d==g){if(d!=e)C[e]&&C[e].nd();else!l&&h&&h.Ve();p&&p.Yb();var m=R=b.hb();f.Cb(b.T(j,bb,m))}else{var k=c.min(g,d),i=c.max(g,d),o=c.min(i-k,k+r-i),n=u+a.Xe-1;(!S||o<=n)&&f.Cb()}}function db(){if(s==g&&h){h.nb();p&&p.Ze();p&&p.af();h.od()}}function eb(){s==g&&h&&h.nb()}function ab(a){!P&&e.j(i.Df,g,a)}function Q(){p=w.pInstance;h&&h.pd(p)}f.Cb=function(c,a){a=a||v;if(y.length&&!H){b.B(a);if(!W){W=d;e.j(i.Hf,g);b.g(y,function(a){if(!b.C(a,"src")){a.src=b.l(a,"src2");b.bb(a,a["display-origin"])}})}b.ae(y,k,b.T(j,O,c,a))}else O(c,a)};f.Ef=function(){var i=g;if(a.xd<0)i-=r;var d=i+a.xd*tc;if(D&2)d=t(d);if(!(D&1)&&!ib)d=c.max(0,c.min(d,r-u));if(d!=g){if(A){var e=A.We(r);if(e){var k=R=b.hb(),h=C[t(d)];return h.Cb(b.T(j,Y,d,h,e,k),v)}}cb(d)}else if(a.Eb){f.nd();G(g,g)}};f.sc=function(){G(g,g,d)};f.nd=function(){p&&p.Ze();p&&p.af();f.td();h&&h.Gf();h=j;E()};f.Oe=function(){b.R(n)};f.td=function(){b.B(n)};f.Ff=function(){p&&p.Yb()};function T(a,c,e){if(b.C(a,"jssor-slider"))return;if(!F){if(a.tagName=="IMG"){y.push(a);if(!b.C(a,"src")){S=d;a["display-origin"]=b.bb(a);b.R(a)}}e&&b.J(a,(b.J(a)||0)+1);b.jd(a,0);b.Zc(a,0)}var f=b.Qb(a);b.g(f,function(f){var h=f.tagName,i=b.l(f,"u");if(i=="player"&&!w){w=f;if(w.pInstance)Q();else b.f(w,"dataavailable",Q)}if(i=="caption"){if(c){b.Mc(f,b.l(f,"to"));b.jf(f,b.l(f,"bf"));b.l(f,"3d")&&b.kf(f,"preserve-3d")}else if(!b.vd()){var g=b.gb(f,l,d);b.cc(g,f,a);b.Nb(f,a);f=g;c=d}}else if(!F&&!e&&!k){if(h=="A"){if(b.l(f,"u")=="image")k=b.Pe(f,"IMG");else k=b.N(f,"image",d);if(k){x=f;b.bb(x,"block");b.L(x,V);B=b.gb(x,d);b.z(x,"relative");b.zb(B,0);b.Y(B,"backgroundColor","#000")}}else if(h=="IMG"&&b.l(f,"u")=="image")k=f;if(k){k.border=0;b.L(k,V)}}T(f,c,e+1)})}f.Ic=function(c,b){var a=u-b;Zb(M,a)};f.qb=g;o.call(f);b.lf(n,b.l(n,"p"));b.mf(n,b.l(n,"po"));var L=b.N(n,"thumb",d);if(L){b.gb(L);b.R(L)}b.B(n);v=b.gb(gb);b.J(v,1e3);b.f(n,"click",ab);E(d);f.hc=k;f.Ad=B;f.ed=n;f.pc=M=n;b.X(M,v);e.Fb(203,G);e.Fb(28,eb);e.Fb(24,db)}function vc(y,g,p,q){var a=this,n=0,u=0,h,j,f,c,k,t,r,o=C[g];m.call(a,0,0);function v(){b.lc(L);cc&&k&&o.Ad&&b.X(L,o.Ad);b.B(L,!k&&o.hc)}function w(){a.fc()}function x(b){r=b;a.nb();a.fc()}a.fc=function(){var b=a.Ab();if(!B&&!M&&!r&&s==g){if(!b){if(h&&!k){k=d;a.od(d);e.j(i.If,g,n,u,h,c)}v()}var l,p=i.Dd;if(b!=c)if(b==f)l=c;else if(b==j)l=f;else if(!b)l=j;else l=a.Vc();e.j(p,g,b,n,j,f,c);var m=N&&(!E||F);if(b==c)(f!=c&&!(E&12)||m)&&o.Ef();else(m||b!=f)&&a.Yc(l,w)}};a.Ve=function(){f==c&&f==a.Ab()&&a.lb(j)};a.Gf=function(){A&&A.qb==g&&A.xb();var b=a.Ab();b<c&&e.j(i.Dd,g,-b-1,n,j,f,c)};a.od=function(a){p&&b.wb(lb,a&&p.Xc.pb?"":"hidden")};a.Ic=function(b,a){if(k&&a>=h){k=l;v();o.td();A.xb();e.j(i.Jf,g,n,u,h,c)}e.j(i.Lf,g,a,n,j,f,c)};a.pd=function(a){if(a&&!t){t=a;a.Fb($JssorPlayer$.me,x)}};p&&a.jc(p);h=a.wc();a.jc(q);j=h+q.Qd;f=h+q.ud;c=a.wc()}function Kb(a,c,d){b.W(a,c);b.V(a,d)}function Zb(c,b){var a=x>0?x:fb,d=zb*b*(a&1),e=Ab*b*(a>>1&1);Kb(c,d,e)}function Pb(){qb=M;Ib=z.Vc();G=w.jb()}function gc(){Pb();if(B||!F&&E&12){z.nb();e.j(i.Le)}}function ec(f){if(!B&&(F||!(E&12))&&!z.Oc()){var d=w.jb(),b=c.ceil(G);if(f&&c.abs(H)>=a.Id){b=c.ceil(d);b+=jb}if(!(D&1))b=c.min(r-u,c.max(b,0));var e=c.abs(b-d);e=1-c.pow(1-e,5);if(!P&&qb)z.qe(Ib);else if(d==b){tb.Ff();tb.sc()}else z.Wb(d,b,e*Vb)}}function Hb(a){!b.l(b.gc(a),"nodrag")&&b.Lb(a)}function rc(a){Yb(a,1)}function Yb(a,c){a=b.Rd(a);var k=b.gc(a);if(!O&&!b.l(k,"nodrag")&&sc()&&(!c||a.touches.length==1)){B=d;yb=l;R=j;b.f(h,c?"touchmove":"mousemove",Bb);b.hb();P=0;gc();if(!qb)x=0;if(c){var g=a.touches[0];ub=g.clientX;vb=g.clientY}else{var f=b.kd(a);ub=f.x;vb=f.y}H=0;hb=0;jb=0;e.j(i.ge,t(G),G,a)}}function Bb(e){if(B){e=b.Rd(e);var f;if(e.type!="mousemove"){var l=e.touches[0];f={x:l.clientX,y:l.clientY}}else f=b.kd(e);if(f){var j=f.x-ub,k=f.y-vb;if(c.floor(G)!=G)x=x||fb&O;if((j||k)&&!x){if(O==3)if(c.abs(k)>c.abs(j))x=2;else x=1;else x=O;if(ob&&x==1&&c.abs(k)-c.abs(j)>3)yb=d}if(x){var a=k,i=Ab;if(x==1){a=j;i=zb}if(!(D&1)){if(a>0){var g=i*s,h=a-g;if(h>0)a=g+c.sqrt(h)*5}if(a<0){var g=i*(r-u-s),h=-a-g;if(h>0)a=-g-c.sqrt(h)*5}}if(H-hb<-2)jb=0;else if(H-hb>2)jb=-1;hb=H;H=a;sb=G-H/i/(Y||1);if(H&&x&&!yb){b.Lb(e);if(!M)z.ff(sb);else z.gf(sb)}}}}}function bb(){qc();if(B){B=l;b.hb();b.S(h,"mousemove",Bb);b.S(h,"touchmove",Bb);P=H;z.nb();var a=w.jb();e.j(i.fe,t(a),a,t(G),G);E&12&&Pb();ec(d)}}function jc(c){if(P){b.sf(c);var a=b.gc(c);while(a&&v!==a){a.tagName=="A"&&b.Lb(c);try{a=a.parentNode}catch(d){break}}}}function Jb(a){C[s];s=t(a);tb=C[s];Tb(a);return s}function Dc(a,b){x=0;Jb(a);e.j(i.ee,t(a),b)}function Tb(a,c){wb=a;b.g(S,function(b){b.uc(t(a),a,c)})}function sc(){var b=i.ld||0,a=X;if(ob)a&1&&(a&=1);i.ld|=a;return O=a&~b}function qc(){if(O){i.ld&=~X;O=0}}function Xb(){var a=b.Sb();b.L(a,V);b.z(a,"absolute");return a}function t(a){return(a%r+r)%r}function kc(b,d){if(d)if(!D){b=c.min(c.max(b+wb,0),r-u);d=l}else if(D&2){b=t(b+wb);d=l}cb(b,a.tc,d)}function xb(){b.g(S,function(a){a.rc(a.Xb.Pf<=F)})}function hc(){if(!F){F=1;xb();if(!B){E&12&&ec();E&3&&C[s].sc()}}}function Ec(){if(F){F=0;xb();B||!(E&12)||gc()}}function ic(){V={cb:K,db:J,c:0,e:0};b.g(T,function(a){b.L(a,V);b.z(a,"absolute");b.wb(a,"hidden");b.R(a)});b.L(gb,V)}function ab(b,a){cb(b,a,d)}function cb(g,f,j){if(Rb&&(!B&&(F||!(E&12))||a.sd)){M=d;B=l;z.nb();if(f==k)f=Vb;var e=Cb.Ab(),b=g;if(j){b=e+g;if(g>0)b=c.ceil(b);else b=c.floor(b)}if(D&2)b=t(b);if(!(D&1))b=c.max(0,c.min(b,r-u));var i=(b-e)%r;b=e+i;var h=e==b?0:f*c.abs(i);h=c.min(h,f*u*1.5);z.Wb(e,b,h||1)}}e.id=function(){if(!N){N=d;C[s]&&C[s].sc()}};function W(){return b.n(y||n)}function nb(){return b.o(y||n)}e.fb=W;e.sb=nb;function Eb(c,d){if(c==k)return b.n(n);if(!y){var a=b.Sb(h);b.Uc(a,b.Uc(n));b.Pb(a,b.Pb(n));b.bb(a,"block");b.z(a,"relative");b.V(a,0);b.W(a,0);b.wb(a,"visible");y=b.Sb(h);b.z(y,"absolute");b.V(y,0);b.W(y,0);b.n(y,b.n(n));b.o(y,b.o(n));b.Mc(y,"0 0");b.X(y,a);var g=b.Qb(n);b.X(n,y);b.Y(n,"backgroundImage","");b.g(g,function(c){b.X(b.l(c,"noscale")?n:a,c);b.l(c,"autocenter")&&Lb.push(c)})}Y=c/(d?b.o:b.n)(y);b.nf(y,Y);var f=d?Y*W():c,e=d?c:Y*nb();b.n(n,f);b.o(n,e);b.g(Lb,function(a){var c=b.de(b.l(a,"autocenter"));b.Je(a,c)})}e.He=Eb;o.call(e);e.mb=n=b.Db(n);var a=b.M({yb:0,Xe:1,Dc:1,Ec:0,qc:l,Eb:1,Hb:d,sd:d,xd:1,Bd:3e3,zd:1,tc:500,Yd:f.Ed,Id:20,yd:0,i:1,wd:0,Ae:1,yc:1,rd:1},fc);a.Hb=a.Hb&&b.uf();if(a.ye!=k)a.Bd=a.ye;if(a.xe!=k)a.wd=a.xe;var fb=a.yc&3,tc=(a.yc&4)/-4||1,mb=a.Vd,I=b.M({O:q,Hb:a.Hb},a.Sf);I.Bb=I.Bb||I.Rf;var Fb=a.ve,Z=a.te,eb=a.Of,Q=!a.Ae,y,v=b.N(n,"slides",Q),gb=b.N(n,"loading",Q)||b.Sb(h),Nb=b.N(n,"navigator",Q),dc=b.N(n,"arrowleft",Q),ac=b.N(n,"arrowright",Q),Mb=b.N(n,"thumbnavigator",Q),pc=b.n(v),nc=b.o(v),V,T=[],uc=b.Qb(v);b.g(uc,function(a){a.tagName=="DIV"&&!b.l(a,"u")&&T.push(a);b.J(a,(b.J(a)||0)+1)});var s=-1,wb,tb,r=T.length,K=a.se||pc,J=a.re||nc,Wb=a.yd,zb=K+Wb,Ab=J+Wb,bc=fb&1?zb:Ab,u=c.min(a.i,r),lb,x,O,yb,S=[],Qb,Sb,Ob,cc,Cc,N,E=a.zd,lc=a.Bd,Vb=a.tc,rb,ib,kb,Rb=u<r,D=Rb?a.Eb:0,X,P,F=1,M,B,R,ub=0,vb=0,H,hb,jb,Cb,w,U,z,Ub=new oc,Y,Lb=[];if(r){if(a.Hb)Kb=function(a,c,d){b.Jb(a,{tb:c,rb:d})};N=a.qc;e.Xb=fc;ic();b.C(n,"jssor-slider",d);b.J(v,b.J(v)||0);b.z(v,"absolute");lb=b.gb(v,d);b.cc(lb,v);if(mb){cc=mb.Qf;rb=mb.O;ib=u==1&&r>1&&rb&&(!b.vd()||b.Md()>=8)}kb=ib||u>=r||!(D&1)?0:a.wd;X=(u>1||kb?fb:-1)&a.rd;var Gb=v,C=[],A,L,Db=b.Se(),ob=Db.xf,G,qb,Ib,sb;Db.Cd&&b.Y(Gb,Db.Cd,([j,"pan-y","pan-x","none"])[X]||"");U=new zc;if(ib)A=new rb(Ub,K,J,mb,ob);b.X(lb,U.pc);b.wb(v,"hidden");L=Xb();b.Y(L,"backgroundColor","#000");b.zb(L,0);b.cc(L,Gb.firstChild,Gb);for(var db=0;db<T.length;db++){var wc=T[db],yc=new xc(wc,db);C.push(yc)}b.R(gb);Cb=new Ac;z=new mc(Cb,U);b.f(v,"click",jc,d);b.f(n,"mouseout",b.nc(hc,n));b.f(n,"mouseover",b.nc(Ec,n));if(X){b.f(v,"mousedown",Yb);b.f(v,"touchstart",rc);b.f(v,"dragstart",Hb);b.f(v,"selectstart",Hb);b.f(h,"mouseup",bb);b.f(h,"touchend",bb);b.f(h,"touchcancel",bb);b.f(g,"blur",bb)}E&=ob?10:5;if(Nb&&Fb){Qb=new Fb.O(Nb,Fb,W(),nb());S.push(Qb)}if(Z&&dc&&ac){Z.Eb=D;Z.i=u;Sb=new Z.O(dc,ac,Z,W(),nb());S.push(Sb)}if(Mb&&eb){eb.Ec=a.Ec;Ob=new eb.O(Mb,eb);S.push(Ob)}b.g(S,function(a){a.Gc(r,C,gb);a.Fb(p.ec,kc)});b.Y(n,"visibility","visible");Eb(W());xb();a.Dc&&b.f(h,"keydown",function(b){if(b.keyCode==37)ab(-a.Dc);else b.keyCode==39&&ab(a.Dc)});var pb=a.Ec;if(!(D&1))pb=c.max(0,c.min(pb,r-u));z.Wb(pb,pb,0)}};i.Df=21;i.ge=22;i.fe=23;i.rf=24;i.of=25;i.Hf=26;i.Ne=27;i.Le=28;i.ef=202;i.ee=203;i.If=206;i.Jf=207;i.Lf=208;i.Dd=209;var p={ec:1},r=function(e,C){var f=this;o.call(f);e=b.Db(e);var s,A,z,r,k=0,a,m,i,w,x,h,g,q,n,B=[],y=[];function v(a){a!=-1&&y[a].Ke(a==k)}function t(a){f.j(p.ec,a*m)}f.mb=e;f.uc=function(a){if(a!=r){var d=k,b=c.floor(a/m);k=b;r=a;v(d);v(b)}};f.rc=function(a){b.B(e,a)};var u;f.Gc=function(D){if(!u){s=c.ceil(D/m);k=0;var p=q+w,r=n+x,o=c.ceil(s/i)-1;A=q+p*(!h?o:i-1);z=n+r*(h?o:i-1);b.n(e,A);b.o(e,z);for(var f=0;f<s;f++){var C=b.Ye();b.tf(C,f+1);var l=b.Xd(g,"numbertemplate",C,d);b.z(l,"absolute");var v=f%(o+1);b.W(l,!h?p*v:f%i*p);b.V(l,h?r*v:c.floor(f/(o+1))*r);b.X(e,l);B[f]=l;a.mc&1&&b.f(l,"click",b.T(j,t,f));a.mc&2&&b.f(l,"mouseover",b.nc(b.T(j,t,f),l));y[f]=b.zc(l)}u=d}};f.Xb=a=b.M({Kd:10,Nd:10,Od:1,mc:1},C);g=b.N(e,"prototype");q=b.n(g);n=b.o(g);b.Nb(g,e);m=a.Fd||1;i=a.k||1;w=a.Kd;x=a.Nd;h=a.Od-1;a.Hc==l&&b.C(e,"noscale",d);a.Kb&&b.C(e,"autocenter",a.Kb)},t=function(a,g,h){var c=this;o.call(c);var r,e,f,i;b.n(a);b.o(a);var n,m;function k(a){c.j(p.ec,a,d)}function t(c){b.B(a,c);b.B(g,c)}function s(){n.Yb(h.Eb||e>0);m.Yb(h.Eb||e<r-h.i)}c.uc=function(b,a,c){if(c)e=a;else{e=b;s()}};c.rc=t;var q;c.Gc=function(c){r=c;e=0;if(!q){b.f(a,"click",b.T(j,k,-i));b.f(g,"click",b.T(j,k,i));n=b.zc(a);m=b.zc(g);q=d}};c.Xb=f=b.M({Fd:1},h);i=f.Fd;if(f.Hc==l){b.C(a,"noscale",d);b.C(g,"noscale",d)}if(f.Kb){b.C(a,"autocenter",f.Kb);b.C(g,"autocenter",f.Kb)}};function q(e,d,c){var a=this;m.call(a,0,c);a.md=b.Wc;a.Qd=0;a.ud=c}jssor_1_slider_init=function(){var h=[{q:1200,x:.2,y:-.1,p:20,i:8,k:4,a:15,eb:{e:[.3,.7],c:[.3,.7]},H:n.Gb,U:260,m:{e:e.Vb,c:e.Vb,a:e.ob},pb:d,K:{e:1.3,c:2.5}},{q:1500,x:.3,y:-.3,p:20,i:8,k:4,a:15,eb:{e:[.1,.9],c:[.1,.9]},G:d,H:n.Gb,U:260,m:{e:e.Ub,c:e.Ub,a:e.ob},pb:d,K:{e:.8,c:2.5}},{q:1500,x:.2,y:-.1,p:20,i:8,k:4,a:15,eb:{e:[.3,.7],c:[.3,.7]},H:n.Gb,U:260,m:{e:e.Vb,c:e.Vb,a:e.ob},pb:d,K:{e:.8,c:2.5}},{q:1500,x:.3,y:-.3,p:80,i:8,k:4,a:15,eb:{e:[.3,.7],c:[.3,.7]},m:{e:e.Ub,c:e.Ub,a:e.ob},pb:d,K:{e:.8,c:2.5}},{q:1800,x:1,y:.2,p:30,i:10,k:5,a:15,eb:{e:[.3,.7],c:[.3,.7]},G:d,vc:d,H:n.Gb,U:2050,m:{e:e.Sd,c:e.Zd,a:e.Hd},pb:d,K:{c:1.3}},{q:1e3,p:30,i:8,k:4,a:15,G:d,H:n.Gb,U:2049,m:e.ob},{q:1e3,p:80,i:8,k:4,a:15,G:d,m:e.ob},{q:1e3,y:-1,i:12,H:n.kc,xc:{Rc:12}},{q:1e3,x:-.2,p:40,i:12,G:d,H:n.kc,U:260,m:{e:e.Wd,I:e.Hd},I:2,pb:d,K:{c:.5}},{q:2e3,y:-1,p:60,i:15,G:d,H:n.kc,m:e.be,K:{c:1.5}}],j={qc:d,Vd:{O:s,Bb:h,Fe:1},te:{O:t},ve:{O:r}},f=new i("jssor_1",j);function a(){var b=f.mb.parentNode.clientWidth;if(b){b=c.min(b,600);f.He(b)}else g.setTimeout(a,30)}a();b.f(g,"load",a);b.f(g,"resize",a);b.f(g,"orientationchange",a)}})(window,document,Math,null,true,false)
