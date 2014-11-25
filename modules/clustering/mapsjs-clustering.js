(function(ns){var H = ns;var g=this;function h(b,a,c){return b.call.apply(b.bind,arguments)}function m(b,a,c){if(!b)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return b.apply(a,c)}}return function(){return b.apply(a,arguments)}}function p(b,a,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:m;return p.apply(null,arguments)}
function q(b,a){var c=b.split("."),d=g;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===a?d=d[e]?d[e]:d[e]={}:d[e]=a};function r(b){return"undefined"!==typeof b}var s=1/0,t=eval("");function u(b,a,c,d,e,f){b&&(this.parent=b,a&1?(c=b[8],e=b[5]):(c=b[7],e=b[8]),a&2?(d=b[9],f=b[6]):(d=b[4],f=b[9]));this[7]=c;this[5]=e;this[8]=(c+e)/2;this[4]=d;this[6]=f;this[9]=(d+f)/2}u.prototype.i=0;function v(b,a){return b[a]||(++b.i,b[a]=new u(b,a))}u.prototype.J=function(b,a){for(var c=0,d=this;d=d.parent;)++c;w(this,b,a,c)};function w(b,a,c,d){var e,f;if(!a(b,d)&&c--)for(++d,e=0;4>e;e++)(f=b[e])&&w(f,a,c,d)}u.prototype.m=0;u.prototype.n=0;u.prototype.e=0;function x(b,a,c,d,e){this.Q=b||10;this.root=null;this.L=d||0;this.M=e||0;this.V=a||1;this.W=c||1;y(this)}function y(b){b.head=b.root=new u(null,NaN,b.L-b.V,b.M-b.W,b.L+b.V,b.M+b.W)}function z(b,a){var c,d;for(c=0;4>c;c++)if(d=a[c])z(b,d),delete a[c];delete a.parent;delete a.c}function A(b,a){var c=b.head,d,e;if(a){if(d=a,d!==c)for(c=d;d=d.parent;)if(d.c||1<d.i)c=d}else for(;!c.c&&2>(e=c.i);)if(e)c=d;else break;b.head=c}
x.prototype.insertPoint=function(b,a,c,d){var e=this.root;if(!(b>=e[7]&&a>=e[4]&&b<=e[5]&&a<=e[6]))throw Error("Coordinates out of bounds");return B(this,this.root,b,a,c,this.Q,d)};
function B(b,a,c,d,e,f,k){var l;l=a.c;var n;f?a.i?l=B(b,v(a,c>=a[8]|(d>=a[9])<<1),c,d,e,f-1,k):l?(l=l[0],n=v(a,l[1]>=a[8]|(l[0]>=a[9])<<1),n.c=a.c,n.m=a.m,n.n=a.n,n.e=a.e,n.f=a.f,n.l=a.l,n.j=a.j,n.k=a.k,delete a.c,l.t=n,A(b,n),l=B(b,v(a,c>=a[8]|(d>=a[9])<<1),c,d,e,f-1,k)):(f=l=new C(c,d,e,k),(a.c||(a.c=[])).push(f),A(b,a)):(l||A(b,a),b=l=new C(c,d,e,k),(a.c||(a.c=[])).push(b));a.m+=c*e;a.n+=d*e;a.e+=e;a.f===t?(a.f=a.j=c,a.l=a.k=d):(c<a.f?a.f=c:c>a.j&&(a.j=c),d<a.l?a.l=d:d>a.k&&(a.k=d));return l}
x.prototype.J=function(b,a){w(this.root,b,a===+a?a:this.Q,0)};function C(b,a,c,d){this[0]=a;this[1]=b;this.weight=c;this.data=d};function D(){}D.prototype.H=function(){};D.prototype.getBounds=function(){};D.prototype.F=function(){};q("H.clustering.ICluster.prototype.forEachEntry",D.prototype.F);D.prototype.C=function(){};q("H.clustering.ICluster.prototype.forEachDataPoint",D.prototype.C);function E(b,a,c){this.a=b;this.q=a;this.s=c}q("H.clustering.NoisePoint",E);E.prototype.getPosition=function(){this.p||(this.p=this.a.xyToGeo(this.q[1],this.q[0],1));return this.p};E.prototype.getPosition=E.prototype.getPosition;E.prototype.r=function(){return this.q.weight};E.prototype.getWeight=E.prototype.r;E.prototype.I=function(){return!1};E.prototype.isCluster=E.prototype.I;E.prototype.o=function(){return this.s-this.a.g};E.prototype.getMinZoom=E.prototype.o;E.prototype.getData=function(){return this.q.data};
E.prototype.getData=E.prototype.getData;function F(b,a,c,d){this.a=b;this.d=a;this.s=c;this.da=d;this.G=p(this.G,this);this.D=p(this.D,this)}q("H.clustering.Cluster",F);F.prototype.getPosition=function(){this.p||(this.p=this.a.xyToGeo(this.d.m,this.d.n,this.d.e));return this.p};F.prototype.getPosition=F.prototype.getPosition;F.prototype.r=function(){return this.d.e};F.prototype.getWeight=F.prototype.r;F.prototype.I=function(){return!0};F.prototype.isCluster=F.prototype.I;F.prototype.o=function(){return this.s?this.s-this.a.g:-1/0};
F.prototype.getMinZoom=F.prototype.o;F.prototype.H=function(){return this.da-this.a.g};F.prototype.getMaxZoom=F.prototype.H;F.prototype.getBounds=function(){this.K||(this.K=H.geo.Rect.fromPoints(this.a.xyToGeo(this.d.f,this.d.l,1),this.a.xyToGeo(this.d.j,this.d.k,1),!0));return this.K};F.prototype.getBounds=F.prototype.getBounds;F.prototype.F=function(b){this.P=b;this.d.J(this.G,s)};F.prototype.forEachEntry=F.prototype.F;
F.prototype.G=function(b,a){var c=!1,d,e,f;b.e>=this.a.S&&b!==this.d&&b.e!==this.d.e&&(this.P(new F(this.a,b,0,a)),c=!0);if(!c&&(d=b.c))for(e=d.length,f=0;f<e;f++)this.P(new E(this.a,d[f],a));return c};F.prototype.C=function(b){this.$=b;this.d.J(this.D,s)};F.prototype.forEachDataPoint=F.prototype.C;F.prototype.D=function(b,a){var c,d,e;if(c=b.c)for(d=c.length,e=0;e<d;e++)this.$(new E(this.a,c[e],a));return!1};function G(b){b=b||{};var a,c,d,e=this.Z;this.T=r(a=b.projection)?a:H.geo.mercator;c=r(a=b.min)?a:0;this.R=d=Math.max(c,r(a=b.max)?a:22);this.S=Math.max(2,r(a=b.minWeight)?a:2);this.g=7-Math.round(Math.log(Math.max(1,b.eps)||32)/Math.LN2);this.U=new x(Math.max(c,d+this.g),e,e,e,e)}G.prototype.Z=2147483648;G.prototype.B=4294967296;
G.prototype.v=function(b){var a=0,c=b.length,d,e=new H.math.Point(0,0),f=this.B,k=this.T,l=this.U;z(l,l.root);for(y(l);a<c;a++)k.geoToPoint(d=b[a],e).scale(f).floor(),l.insertPoint(e.x,e.y,d.wt,d.data)};G.prototype.xyToGeo=function(b,a,c,d){return this.T.xyToGeo(b/c/this.B,a/c/this.B,d)};function I(b){var a={clusters:[],noisePoints:[]};J(b,b.U.root,0,b.R+b.g,-1/0,a,null);return a}
function J(b,a,c,d,e,f,k){var l=a.e,n;k&&(k.t.e!==l?(f.clusters.push(new F(b,k.t,k.depth,c-1)),k=null):e++);k||(l>=b.S?(k={t:a,depth:c},e=c):K(b,a,e+1,f));if(a.i&&d--)for(c++,l=0;4>l;l++)if(n=a[l])J(b,n,c,d,e,f,k),k=null;k&&f.clusters.push(new F(b,k.t,k.depth,b.R+b.g))}function K(b,a,c,d){a=a.c;var e,f;if(a)for(e=a.length,d=d.noisePoints,f=0;f<e;f++)d.push(new E(b,a[f],c));else for(f=0;4>f;f++)(e=b[f])&&K(b,e,c,d)};function L(){var b=document.createElement("canvas"),a=b.getContext("2d"),c=b.width=b.height=14;a.beginPath();a.strokeStyle="#FFFFFF";a.fillStyle="#1080DD";a.arc(c/2,c/2,6,0,2*Math.PI,!1);a.fill();a.lineWidth=1;a.stroke();this.ea=new H.map.Icon(b,{size:{w:c,h:c},anchor:{x:7,y:7}});this.N={};this.O={}}q("H.clustering.DefaultTheme",L);
function M(b,a,c){var d=a+":"+c,e,f=document.createElement("canvas"),k=f.getContext("2d");f.width=f.height=a;(e=b.N[d])?k.putImageData(e,0,0):(e=a/2,k.beginPath(),k.strokeStyle="rgba("+c+",0.2)",k.fillStyle="rgba("+c+",1)",k.arc(e,e,e/5*3,0,2*Math.PI,!1),k.fill(),k.lineWidth=e/5*4,k.stroke(),b.N[d]=k.getImageData(0,0,a,a));return f}
L.prototype.aa=function(b){var a,c,d=b.r(),e,f;a=this.O[d];a||(10>d?(a=M(this,28,"118,209,0"),c={x:11,y:18}):25>d?(a=M(this,38,"255,105,0"),c={x:13,y:23}):50>d?(a=M(this,38,"240,60,0"),c={x:13,y:23}):100>d?(a=M(this,38,"181,0,21"),c={x:13,y:23}):1E3>d?(a=M(this,48,"181,0,21"),c={x:15,y:28}):(a=M(this,66,"181,0,21"),c={x:20,y:38}),e=a.width,f=a.getContext("2d"),f.fillStyle="#FFFFFF",f.font="11px Arial",f.fillText(d,c.x,c.y),a=new H.map.Icon(a,{anchor:{x:e/2,y:e/2}}),this.O[d]=a);d=new H.map.Marker(b.getPosition(),
{icon:a,min:b.o(),max:b.H()});d.setData(b);return d};L.prototype.getClusterPresentation=L.prototype.aa;L.prototype.ba=function(b){var a=new H.map.Marker(b.getPosition(),{icon:this.ea,min:b.o()});a.setData(b);return a};L.prototype.getNoisePresentation=L.prototype.ba;q("H.clustering.DataPoint",function(b,a,c,d){this.lat=b;this.lng=a;this.wt=c===+c?c:1;this.data=d});function N(b,a){var c=a||{},d=c.clusteringOptions||{};this.min=c.min||0;this.max=c.max||22;this.b=new H.map.provider.LocalObjectProvider({min:this.min,max:this.max});this.b.setParentEventTarget(this);this.a=new G(d);this.a.v(b);this.A=c.theme||new L;this.b.getRootGroup().removeAll();this.u=I(this.a);O(this)}H.lang.inherits(N,H.util.EventTarget);q("H.clustering.Provider",N);N.prototype.X={Y:"update"};N.prototype.dispatchUpdate=function(){this.dispatchEvent(this.X.Y)};
function O(b){var a=b.u.clusters,c=b.u.noisePoints,d=b.b.getRootGroup(),e;b.ga=[];b.ha=[];for(e=a.length;e--;)d.addObject(b.A.getClusterPresentation(a[e]));for(e=c.length;e--;)d.addObject(b.A.getNoisePresentation(c[e]));b.dispatchUpdate()}N.prototype.fa=function(b){this.A=b;this.u&&(this.b.getRootGroup().removeAll(),O(this))};N.prototype.setTheme=N.prototype.fa;N.prototype.ca=function(){return this.A};N.prototype.getTheme=N.prototype.ca;
N.prototype.v=function(b){this.a.v(b);this.b.getRootGroup().removeAll();this.u=I(this.a);O(this)};N.prototype.setDataPoints=N.prototype.v;N.prototype.providesDomMarkers=function(){return this.b&&this.b.providesDomMarkers()};N.prototype.providesDomMarkers=N.prototype.providesDomMarkers;N.prototype.requestDomMarkers=function(b,a,c,d){return this.b.requestDomMarkers(b,a,c,d)};N.prototype.requestDomMarkers=N.prototype.requestDomMarkers;N.prototype.providesMarkers=function(){return this.b&&this.b.providesMarkers()};
N.prototype.providesMarkers=N.prototype.providesMarkers;N.prototype.requestMarkers=function(b,a,c,d){return this.b.requestMarkers(b,a,c,d)};N.prototype.requestMarkers=N.prototype.requestMarkers;N.prototype.providesSpatials=function(){return this.b&&this.b.providesSpatials()};N.prototype.providesSpatials=N.prototype.providesSpatials;N.prototype.requestSpatials=function(b,a,c,d){return this.b.requestSpatials(b,a,c,d)};N.prototype.requestSpatials=N.prototype.requestSpatials;
N.prototype.getInvalidations=function(){return this.b.getInvalidations()};N.prototype.getInvalidations=N.prototype.getInvalidations;N.prototype.invalidateObject=function(b,a){this.b.invalidateObject(b,a)};N.prototype.invalidateObject=N.prototype.invalidateObject;N.prototype.getCopyrights=function(){return null};N.prototype.getCopyrights=N.prototype.getCopyrights;var H=H||{};q("H.clustering.buildInfo",function(){return H.util.BuildInfo.get("mapsjs-clustering","0.7.0","c9043e0fc5244dda74df6406898131ea6dba65d4")});
}(H));