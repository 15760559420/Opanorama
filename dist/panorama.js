!function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i=window.webpackJsonp;window.webpackJsonp=function(n,o,s){for(var r,h,c,l=0,u=[];l<n.length;l++)h=n[l],a[h]&&u.push(a[h][0]),a[h]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);for(i&&i(n,o,s);u.length;)u.shift()();if(s)for(l=0;l<s.length;l++)c=e(e.s=s[l]);return c};var n={},a={1:0};e.e=function(t){function i(){r.onerror=r.onload=null,clearTimeout(h);var e=a[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),a[t]=void 0)}var n=a[t];if(0===n)return new Promise(function(t){t()});if(n)return n[2];var o=new Promise(function(e,i){n=a[t]=[e,i]});n[2]=o;var s=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.async=!0,r.timeout=12e4,e.nc&&r.setAttribute("nonce",e.nc),r.src=e.p+""+t+".js?"+{0:"b40cb0b5c4f3dbea9676"}[t];var h=setTimeout(i,12e4);return r.onerror=r.onload=i,s.appendChild(r),o},e.m=t,e.c=n,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e.oe=function(t){throw console.error(t),t},e(e.s=0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(1),r=n(s),h=i(2),c=n(h),l=function(){function t(e){a(this,t),this._config=Object.assign({url:"",container:document.body,radius:500,fov:90,offsetLongitude:0,offsetLatitude:0,supportTouch:!0,supportOrient:!0,onFrame:function(t,e){return{lon:t,lat:e}}},e),this._config.width=e.container.clientWidth,this._config.height=e.container.clientHeight,e=this._config,this._fix={lat:e.offsetLatitude||0,lon:e.offsetLongitude||180,isFixed:e.offsetLatitude||e.offsetLongitude},this._touch=this._orient={lat:0,lon:0},this._initStage(),this.resize(),this._animate(),this._initControl()}return o(t,[{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._config=Object.assign({},this._config,t),(t.width||t.height)&&(this.renderer.setSize(this._config.width,this._config.height),this.camera.aspect=this._config.width/this._config.height),t.fov&&(this.camera.fov=t.fov),this.camera.updateProjectionMatrix(),this.resize()}},{key:"resize",value:function(){this.camera.lookAt(this.camera.target),this.renderer.render(this.scene,this.camera)}},{key:"_initStage",value:function(){var t=this._config,e=t.container,i=t.width,n=t.height,a=t.url,o=t.fov,s=t.radius;this.camera=new THREE.PerspectiveCamera(o,i/n,1,1100),this.camera.target=new THREE.Vector3(0,0,0),this.scene=new THREE.Scene;var r=new THREE.SphereBufferGeometry(s,60,40);r.scale(-1,1,1);var h=new THREE.MeshBasicMaterial({map:(new THREE.TextureLoader).load(a)}),c=new THREE.Mesh(r,h);this.scene.add(c),this.renderer=new THREE.WebGLRenderer,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(i,n),this.canvas=this.renderer.domElement,e.appendChild(this.canvas),window.addEventListener("resize",this._bindResize=this._onResize.bind(this))}},{key:"_onResize",value:function(){var t=this._config.container;this.update({width:t.clientWidth,height:t.clientHeight})}},{key:"_initControl",value:function(){var t=this,e=this._config;if(e.supportTouch){var i=void 0;this._toucher=new c.default({container:e.container,radius:e.radius,onChange:function(e){var n=e.lon,a=e.lat,o=e.scale;o&&(i=t._config.fov/o,i=Math.min(120,Math.max(i,60)),t.update({fov:i})),void 0!==n&&void 0!==a&&(t._fix.lat+t._orient.lat+a>90?t._fix.lat=90-t._orient.lat-a:t._fix.lat+t._orient.lat+a<-90&&(t._fix.lat=-90-t._orient.lat-a),t._touch={lon:n,lat:a})}})}e.supportOrient&&(this._orienter=new r.default({onChange:function(e){var i=e.lat,n=e.lon,a=t._fix;a.isFixed||(t._fix={lat:a.lat-i,lon:a.lon-n,isFixed:!0}),Math.abs(t._orient.lat-i)>=90||(t._fix.lat+t._touch.lat+i>90?t._fix.lat=90-t._touch.lat-i:t._fix.lat+t._touch.lat+i<-90&&(t._fix.lat=-90-t._touch.lat-i),t._orient={lat:i,lon:n})}}))}},{key:"destroy",value:function(){this._toucher&&this._toucher.unbind(),this._orienter&&this._orienter.destroy(),this._bindResize&&window.removeEventListener("resize",this._bindResize),cancelAnimationFrame(this._intFrame)}},{key:"_animate",value:function(){var t=this._config,e=this._touch.lat+this._fix.lat+this._orient.lat,i=this._touch.lon+this._fix.lon+this._orient.lon,n=t.onFrame(i,e);i+=n.lon||0,e+=n.lat||0,e=Math.max(-89,Math.min(89,e)),e=THREE.Math.degToRad(e),i=THREE.Math.degToRad(i),this.camera.target.x=500*Math.cos(e)*Math.cos(i),this.camera.target.y=500*Math.sin(e),this.camera.target.z=500*Math.cos(e)*Math.sin(i),this.resize(),this._intFrame=requestAnimationFrame(this._animate.bind(this))}}]),t}();e.default=l},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(e){n(this,t),this._config=Object.assign({onChange:function(){},onOrient:function(){}},e),this.lon=this.lat=0,this.offsetMooth=1,this.direction=window.orientation||0,this.bind()}return a(t,[{key:"bind",value:function(){window.addEventListener("deviceorientation",this._bindChange=this._onChange.bind(this)),window.addEventListener("orientationchange",this._bindOrient=this._onOrient.bind(this))}},{key:"destroy",value:function(){window.removeEventListener("deviceorientation",this._bindChange,!1),window.removeEventListener("orientationchange",this._bindOrient,!1)}},{key:"_onOrient",value:function(t){this.direction=window.orientation,this._config.onOrient(t),this.lastLon=this.lastLat=void 0}},{key:"_mooth",value:function(t,e){return void 0===e?t:t=Math.abs(t-e)>this.offsetMooth?t>e?e+this.offsetMooth:e-this.offsetMooth:e}},{key:"_onChange",value:function(t){switch(this.direction){case 0:this.lon=-(t.alpha+t.gamma),this.lat=t.beta-90;break;case 90:this.lon=t.alpha-Math.abs(t.beta),this.lat=t.gamma<0?-90-t.gamma:90-t.gamma;break;case-90:this.lon=-(t.alpha+Math.abs(t.beta)),this.lat=t.gamma>0?t.gamma-90:90+t.gamma}this.lon=this.lon>0?this.lon%360:this.lon%360+360,void 0===this.lastLat&&(this.lastLat=this.lat),this.lastLat=this.lat=this._mooth(this.lat,this.lastLat),this._config.onChange({lon:this.lon,lat:this.lat})}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(e){n(this,t),this.config=Object.assign({radius:50,container:document.body,onStart:function(){},onMove:function(){},onEnd:function(){},onChange:function(){}},e),this.lat=this.lon=0,this.lastX=this.lastY=0,this.lastDistance=0,this.startX=this.startY=0,this.speed={lat:0,lon:0},this.deceleration=.5,this.factor=50/this.config.radius,this.bind()}return a(t,[{key:"bind",value:function(){var t=this.config.container;t.addEventListener("touchstart",this._bindStart=this._onStart.bind(this)),t.addEventListener("touchmove",this._bindMove=this._onMove.bind(this)),t.addEventListener("touchend",this._bindEnd=this._onEnd.bind(this))}},{key:"unbind",value:function(){var t=this.config.container;t.removeEventListener("touchstart",this._bindStart),t.removeEventListener("touchmove",this._bindMove),t.removeEventListener("touchend",this._bindEnd)}},{key:"_onStart",value:function(t){var e=t.changedTouches[0];this.startX=this.lastX=e.clientX,this.startY=this.lastY=e.clientY,this.startTime=Date.now(),this.config.onStart(t),this.speed={lat:0,lon:0},this.lastDistance=void 0}},{key:"_onMove",value:function(t){t.preventDefault();var e=t.changedTouches[0];switch(t.changedTouches.length){case 1:this.lastDistance||(this.lon+=(this.lastX-e.clientX)*this.factor,this.lat+=(e.clientY-this.lastY)*this.factor,this.lastX=e.clientX,this.lastY=e.clientY,this.config.onChange({lat:this.lat,lon:this.lon}));break;case 2:var i=t.changedTouches[1],n=Math.abs(e.clientX-i.clientX)+Math.abs(e.clientY-i.clientY);void 0===this.lastDistance&&(this.lastDistance=n);var a=n/this.lastDistance;a&&(this.config.onChange({scale:a}),this.lastDistance=n)}this.config.onMove(t)}},{key:"_onEnd",value:function(t){var e=(Date.now()-this.startTime)/10;this.speed={lat:(this.startY-this.lastY)/e,lon:(this.startX-this.lastX)/e},this._inertance(),this.config.onEnd(t)}},{key:"_subSpeed",value:function(t){return 0!==t&&(t>0?(t-=this.deceleration)<0&&(t=0):(t+=this.deceleration)>0&&(t=0)),t}},{key:"_inertance",value:function(){var t=this.speed;t.lat=this._subSpeed(t.lat),t.lon=this._subSpeed(t.lon),this.lat-=t.lat,this.lon+=t.lon,this.config.onChange({isUserInteracting:!1,speed:t,lat:this.lat,lon:this.lon}),0===t.lat&&0===t.lon?(this._intFrame&&cancelAnimationFrame(this._intFrame),this._intFrame=0):this._intFrame=requestAnimationFrame(this._inertance.bind(this))}}]),t}();e.default=o}]);
//# sourceMappingURL=panorama.js.map?ed464704257860ee4439