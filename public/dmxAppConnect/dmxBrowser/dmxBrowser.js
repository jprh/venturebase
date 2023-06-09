/*!
 App Connect Browser
 Version: 3.0.0-beta.1
 (c) 2023 Wappler.io
 @build 2023-05-24 16:11:06
 */
dmx.Component("browser",{initialData:{online:navigator.onLine,userAgent:navigator.userAgent,language:navigator.language,cookieEnabled:navigator.cookieEnabled,referrer:document.referrer,location:{hash:location.hash,host:location.host,hostname:location.hostname,href:location.href,origin:location.origin,pathname:location.pathname,port:location.port,protocol:location.protocol,search:location.search,pathparts:location.pathname.slice(1).split("/")},scrollX:{offset:0,direction:0,position:0},scrollY:{offset:0,direction:0,position:0},viewport:{width:0,height:0},device:{width:0,height:0,pixelRatio:1,orientation:"landscape"},document:{width:0,height:0,hidden:document.hidden,visibility:document.visibilityState}},methods:{goto(t,e,i){e?(dmx.routing&&"hash"==dmx.routing.router&&(t="#!"+t),history.pushState({title:i||document.title},"",t),i&&(document.title=i),window.dispatchEvent(new Event("pushstate"))):location.assign(t)},reload(){location.reload()},back(){history.back()},forward(){history.forward()},scrollTo(t,e){window.scrollTo(t,e)},scrollXTo(t,e){window.scrollTo({left:t,behavior:e})},scrollYTo(t,e){window.scrollTo({top:t,behavior:e})},scrollBy(t,e){window.scrollBy(t,e)},scrollXBy(t,e){window.scrollBy({left:t,behavior:e})},scrollYBy(t,e){window.scrollBy({top:t,behavior:e})},alert(t){window.alert(t)},print(){window.print()},writeTextToClipboard:t=>navigator.clipboard.writeText(t)},events:{scroll:Event,resize:Event,online:Event,offline:Event,popstate:Event,pushstate:Event,replacestate:Event,visibilitychange:Event,orientationchange:Event},init(t){this._loadHandler=this._loadHandler.bind(this),this._sizeHandler=dmx.throttle(this._sizeHandler.bind(this)),this._onlineHandler=this._onlineHandler.bind(this),this._locationHandler=this._locationHandler.bind(this),this._visibilityHandler=this._visibilityHandler.bind(this),this._languageHandler=this._languageHandler.bind(this),this._orientationHandler=this._orientationHandler.bind(this),window.addEventListener("load",this._loadHandler),window.addEventListener("scroll",this._sizeHandler),window.addEventListener("resize",this._sizeHandler),window.addEventListener("online",this._onlineHandler),window.addEventListener("offline",this._onlineHandler),window.addEventListener("popstate",this._locationHandler),window.addEventListener("pushstate",this._locationHandler),window.addEventListener("replacestate",this._locationHandler),window.addEventListener("hashchange",this._locationHandler),window.addEventListener("languagechange",this._languageHandler),window.addEventListener("deviceorientation",this._orientationHandler),document.addEventListener("visibilitychange",this._visibilityHandler),dmx.nextTick((()=>this._updateSize()))},destroy(){window.removeEventListener("load",this._loadHandler),window.removeEventListener("scroll",this._sizeHandler),window.removeEventListener("resize",this._sizeHandler),window.removeEventListener("online",this._onlineHandler),window.removeEventListener("offline",this._onlineHandler),window.removeEventListener("popstate",this._locationHandler),window.removeEventListener("pushstate",this._locationHandler),window.removeEventListener("replacestate",this._locationHandler),window.removeEventListener("hashchange",this._locationHandler),window.removeEventListener("languagechange",this._languageHandler),window.removeEventListener("deviceorientation",this._orientationHandler),document.removeEventListener("visibilitychange",this._visibilityHandler)},_updateSize(){const t=this._documentSize(),e=t.width-window.innerWidth,i=t.height-window.innerHeight;let n={x:this.data.scrollX.direction,y:this.data.scrollY.direction};this.data.scrollX.offset<window.scrollX?n.x=1:this.data.scrollX.offset>window.scrollX&&(n.x=-1),this.data.scrollY.offset<window.scrollY?n.x=1:this.data.scrollY.offset>window.scrollY&&(n.x=-1),this.set({scrollX:{offset:window.scrollX,length:Math.max(0,e),direction:n.x,position:window.scrollX>0?window.scrollX/e:0},scrollY:{offset:window.scrollY,length:Math.max(0,i),direction:n.x,position:window.scrollY>0?window.scrollY/i:0},viewport:{width:window.innerWidth,height:window.innerHeight,scrollX:window.scrollX,scrollY:window.screenY},device:{width:window.screen.width,height:window.screen.height,pixelRatio:window.devicePixelRatio,orientation:this._orientation()},document:{width:t.width,height:t.height,hidden:document.hidden,visibility:document.visibilityState}})},_updateLocation(){this.set("location",{hash:location.hash,host:location.host,hostname:location.hostname,href:location.href,origin:location.origin,pathname:location.pathname,port:location.port,protocol:location.protocol,search:location.search,pathparts:location.pathname.slice(1).split("/")})},_documentSize:()=>({width:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth),height:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)}),_orientation:()=>window.matchMedia("(orientation: portrait)").matches?"portrait":"landscape",_loadHandler(t){this._updateSize()},_sizeHandler(t){this._updateSize(),this.dispatchEvent(t.type)},_onlineHandler(t){this.set("online","online"===t.type),this.dispatchEvent(t.type)},_locationHandler(t){this._updateLocation(),this.dispatchEvent(t.type)},_languageHandler(t){this.set("language",navigator.language)},_orientationHandler(t){this._updateSize(),this.dispatchEvent("orientationchange")},_visibilityHandler(t){const e=this._documentSize();this.set("document",{width:e.width,height:e.height,hidden:document.hidden,visibility:document.visibilityState}),this.dispatchEvent(t.type)}});
//# sourceMappingURL=../maps/dmxBrowser.js.map
