Registry.registerRaw("page.js","5890",function(){return{backup:function(a,A,t,G){var d={safeWindow:{},safeDocument:{},eval:eval,Context:{D:G},exec_fn:function(a,b,d){g(new c.Function(a),b,d)},exec_csp:function(a,b,c){var H="__u__"+(19831206*d.Context.M_r()+1);d.Message.send("csp",{id:H,src:a});d.exec_script(H,b,c)},exec_script:function(b,d,c){var H=a[b];delete a[b];g(H,d,c)}},g,b,y,K,n,L,O,ba,v,B,u,ga,c=d.safeWindow;(function(){var e=function(a){var b=function(b){return g(a,b,g(y.wrappedJSObject,
arguments,[1]))};b.wrappedJSObject=a;return b},fa=function(a,b){for(var d;null!==a&&void 0!==a&&!(d=v(a,b));)a=ba(a);return d},z={i_N:B=function(){return function(a){return!("prototype"in a)}}(),i_SS:u=function(){return function(a,b,d){var c=fa(a,b);if(!c||!c.set||B(c.set))return a[b]=d,!0}}(),i_SG:ga=function(){return function(a,b){var d=fa(a,b);if(!d||!d.get||B(d.get))return a[b]}}(),F_a:g=function(){"use strict";var b=a.Function.apply;return function(a,d,c){var e;ga(a,"apply")===b?e=a.apply(d,c):
u(a,t,b)&&(e=a[t](d,c),delete a[t]);return e}}(),E_u:function(b,c){if(d.exec_eval){var e="__u__"+(19831206*d.Context.M_r()+1),g=e+"_";a[g]=c;var v=d.Context.F_c(d.Context.eval,a,"(function() {"+b+'}).apply(window["'+g+'"])');delete a[e];delete a[g];return v}d.exec_csp(b,c)},E_c:function(a,b){d.exec_eval?g(new c.Function(a),b):d.exec_csp(a,b)},F_c:e(a.Function.call),F_b:b=e(a.Function.bind),F_tS:e(a.Function.toString),A_fE:n=e(a.Array.prototype.forEach),A_sl:y=e(a.Array.prototype.slice),A_sp:e(a.Array.prototype.splice),
A_sh:e(a.Array.prototype.shift),A_j:e(a.Array.prototype.join),A_pu:K=e(a.Array.prototype.push),A_po:e(a.Array.prototype.pop),A_m:e(a.Array.prototype.map),A_c:e(a.Array.prototype.concat),A_f:e(a.Array.prototype.filter),A_iO:e(a.Array.prototype.indexOf),O_k:a.Object.keys,O_dP:a.Object.defineProperties,O_dPy:a.Object.defineProperty,O_gOPN:a.Object.getOwnPropertyNames,O_gOPD:v=a.Object.getOwnPropertyDescriptor,O_gOPDs:a.Object.getOwnPropertyDescriptors||function(a){var b={},d;for(d in a)b[d]=z.O_gOPD(a,
d);return b},O_gPO:ba=a.Object.getPrototypeOf,O_tS:e(a.Object.prototype.toString),J_p:O=a.JSON.parse,J_s:L=a.JSON.stringify,c_l:a.console.log.bind(a.console),c_i:a.console.info.bind(a.console),c_w:a.console.warn.bind(a.console),c_e:a.console.error.bind(a.console),c_d:a.console.debug.bind(a.console),M_f:a.Math.floor,M_r:a.Math.random,M_m:a.Math.max,N_tS:e(a.Number.prototype.toString),P_r:a.Promise?a.Promise.resolve.bind(a.Promise):void 0,P_t:a.Promise?e(a.Promise.prototype.then):void 0,P_c:a.Promise?
e(a.Promise.prototype.catch):void 0,R_rAAB:a.FileReader?e(a.FileReader.prototype.readAsArrayBuffer):void 0,S_fCC:a.String.fromCharCode,S_m:e(a.String.prototype.match),S_su:e(a.String.prototype.substr),S_se:e(a.String.prototype.search),S_sp:e(a.String.prototype.split),S_r:e(a.String.prototype.replace),S_cCA:e(a.String.prototype.charCodeAt),S_tLC:e(a.String.prototype.toLowerCase),S_tUC:e(a.String.prototype.toUpperCase),D_pFS:e(a.DOMParser.prototype.parseFromString),X_o:e(a.XMLHttpRequest.prototype.open),
X_sRH:e(a.XMLHttpRequest.prototype.setRequestHeader),X_oMT:e(a.XMLHttpRequest.prototype.overrideMimeType),X_gARH:e(a.XMLHttpRequest.prototype.getAllResponseHeaders),X_gRH:e(a.XMLHttpRequest.prototype.getResponseHeader),X_s:e(a.XMLHttpRequest.prototype.send),X_a:e(a.XMLHttpRequest.prototype.abort),D_n:a.Date.now};Object.keys(z).forEach(function(a){d.Context[a]=z[a]});"String Array Object Number parseInt JSON Math Date Event MutationEvent console location Error Uint8Array Blob FileReader DOMParser XMLHttpRequest Function RegExp frames self top document location Promise".split(" ").forEach(function(b){c[b]=
a[b]});"postMessage addEventListener removeEventListener setTimeout setInterval clearTimeout clearInterval alert prompt confirm encodeURIComponent decodeURIComponent encodeURI decodeURI escape unescape atob btoa close".split(" ").forEach(function(b){var d=a[b];c[b]=function(){return g(d,a,arguments)}});d.createSafeDocument=function(a){"getElementById createEvent createElement dispatchEvent addEventListener removeEventListener".split(" ").forEach(function(b){var c=a[b];d.safeDocument[b]=function(){return g(c,
a,arguments)}})};d.createSafeDocument(A)})();try{d.Message=function(a,b){var d=function(){return g(b.dispatchEvent,b,arguments)},c=function(){return g(b.addEventListener,b,arguments)},v=function(){return g(b.removeEventListener,b,arguments)},t=function(a,d){var c=b.createEvent("MutationEvent");c.initMutationEvent(a,!1,!1,null,null,null,L(d),c.ADDITION);return c},y=function(a,b){var d;a&&(d=G[a])&&(d(b),delete G[a])},u,A,p,I,S=1,G={},B=[],W=function(a){var b=O(a.attrName);"message.response"==b.m?y(b.r,
b.a):u&&!1===u(b,b.r?function(a){a=t(p,{m:"message.response",a:a,r:b.r});d(a)}:function(){})&&K(B,a)};return{init:function(a){I||(I=a);p="2C_"+I;A="2P_"+I;c(A,W,!1)},send:function(a,b,c){if(c){var e=++S;G[S]=c;c=e}else c=null;a=t(p,{m:a,a:b,r:c});d(a)},onMessage:{setListener:function(a,b){u=a;b||(n(B,function(a){W(a)}),B=null)}},cleanup:function(){W&&v(A,W,!1);W=null}}}(c,d.safeDocument),d.Message.init(t),d.Message.onMessage.setListener(function(c){if(d)if("load"==c.m)d.Context.pageLoaded=!0;else if("DOMContentLoaded"==
c.m)d.Context.domContentLoaded=!0;else if("cleanup"==c.m)d.Message.cleanup(),d=null;else if("next"==c.m)if(c.a.id)d.exec_script(c.a.id,d),d.exec_eval=!1;else{if(void 0===d.exec_eval)try{d.exec_eval=b(d.eval,a)("true")}catch(g){d.exec_eval=!1}d.exec_eval?d.exec_fn(c.a.src,d):d.exec_csp(c.a.src,d)}else return!1},!0)}catch(e){}},next:function(a,A,t,G,d,g,b,y,K,n,L,O,ba,v,B){var u="";y&&(u+="var V = true;\n");n&&(u+="var EV = true;\n");K&&(u+="var ENV = true;\n");n="";if(ba||"complete"==document.readyState)n+=
"Context.pageLoaded |= true;\nContext.domContentLoaded |= true;\n";else if(v||"interactive"==document.readyState)n+="Context.domContentLoaded |= true;\n";return['var backup = this;\n(function TM_back() {var Context = backup.Context;\nvar copy = function(src) {"use strict";var props = Context.O_gOPN(src);for (var kk, ii=0; (kk=props[ii]) !== undefined; ii++) {Context[kk] = src[kk];};};copy(backup);with (Context) {(function() {"use strict";copy({Context: Context,V:',y?"true":"false",",ENV:",K?"true":"false",
",TS:",L?"true":"false",",D:",O?"true":"false",",use:",g,",windowProps:",G,",scripts:",A,",powers:",t,",_content: false,flags:",d,',write_listeners: []});var cleanup = function(evt) {Message.cleanup();safeWindow.removeEventListener("unload", cleanup, false);};safeWindow.addEventListener("unload", cleanup, false);Context.write_listeners.push(function(d) {Context.createSafeDocument(d);Message.init();});',u+("var logLevel = "+b+";\n")+('var contextId = "'+a+'";\n')+"var Event = function() {};var Window = function() {};Window.prototype = {};"+
n+"("+B+")(Context, contextId);\n","})();};})()"].join("")},environment:function(a,A){var t=a.V,G=a.EV,d=a.D,g=a.Message,b=a.safeWindow,y=window,K=a.safeDocument,n=a.flags,L=a.i_N,O=a.i_SS,ba=a.i_SG,v=a.F_a,B=a.F_c,u=a.F_b,ga=a.F_tS,c=a.A_fE,e=a.A_sl,fa=a.A_sp,z=a.A_pu,H=a.A_po,qa=a.A_sh,V=a.A_j,ra=a.A_f,ka=a.A_iO,Ba=a.A_c,p=a.O_k,I=a.O_dP,S=a.O_dPy,Aa=a.O_gOPN,Ca=a.O_gOPD,W=a.O_gOPDs,za=a.O_tS,sa=a.J_p,oa=a.J_s,w=a.c_l,Da=a.c_i,P=a.c_w,ha=a.c_e,Q=a.c_d,Ea=a.M_f,ta=a.M_r,ua=a.M_m,Fa=a.P_r,Ga=a.P_t,
Ha=a.P_c,ca=a.S_fCC,la=a.S_m,va=a.S_su,wa=a.S_sp,X=a.S_r,da=a.S_se,xa=a.S_cCA,ia=a.S_tLC,Ia=a.S_tUC,Ja=a.R_rAAB,Ka=a.D_pFS,La=a.X_o,Ma=a.X_sRH,Na=a.X_oMT,Oa=a.X_gARH,Pa=a.X_gRH,Qa=a.X_s,Ra=a.X_a,Sa=a.N_tS,ma=a.D_n,na=b.Promise||function(){P("There is no browser Promise support!")};a.domContentLoaded|=0;a.pageLoaded|=0;a.domNodeInserted|=0;a.props={};var ea=function(){var F=[],ya=function(a){if(document.body)a&&(a(),a=null);else{var b=["load","DOMNodeInserted","DOMContentLoaded"],d=function(){c(b,
function(a){K.removeEventListener(a,d,!1)});ya(a)};c(b,function(a){K.addEventListener(a,d,!1)})}},e=function(d){z(F,function(){b.setTimeout(d,1)});a.domContentLoaded&&r.runListeners()},r={runListeners:function(){for(var a;a=qa(F);)a()},run:function(b){var c=function(){Ta.create(b)};"document-start"==b.script.options.run_at?(d&&Q('env: run "'+b.script.name+'" ASAP -> document-start'),c()):"document-body"==b.script.options.run_at?(d&&Q('env: schedule "'+b.script.name+'" for document-body'),ya(c)):"context-menu"==
b.script.options.run_at?(d&&Q('env: run "'+b.script.name+'" ASAP -> context-menu'),c()):"document-end"==b.script.options.run_at?(d&&Q('env: schedule "'+b.script.name+'" for document-end'),z(F,c),a.domContentLoaded&&r.runListeners()):(d&&Q('env: schedule "'+b.script.name+'" for document-idle'),e(c))}};return r}();(t||d)&&Q("env: initialized (content, id:"+va(A,0,10)+"..., "+b.location.origin+b.location.pathname+") ");var Y={createUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*ta()|0;return Sa("x"==a?b:b&3|8,16)})},toType:function(a){return la(za(a,{}),new b.RegExp("\\s([a-z|A-Z]+)"))[1]}},M={UTF8:{encode:function(a){return b.unescape(b.encodeURIComponent(a))},decode:function(a){return b.decodeURIComponent(b.escape(a))}},Base64:{encode:function(a){for(var d="",c=0;c<a.length;c++)d+=ca(xa(a,c)&255);return b.btoa(d)},decode:function(a){return b.atob(a)}},str2arrbuf:function(a){for(var d=new b.Uint8Array(a.length),c=0;c<a.length;c++)d[c]=xa(a,c);return d.buffer},
arrbuf2str:function(a){var d="";a=new b.Uint8Array(a);for(var c=0;c<a.length;c+=32687)d+=v(ca,null,a.subarray(c,c+32687));return d}},R=function(){var a={},b,e=function(b){var d=[],e=[],f=function(){p=e=d=null;delete a[b]},p={postMessage:function(a){g.send("port.message",{response_id:b,value:a})},onMessage:{addListener:function(a){z(d,a)}},onDisconnect:{addListener:function(a){z(e,a)}},disconnect:function(){g.send("port.message",{response_id:b,disconnect:!0});f()}};a[b]={message:function(a){d&&c(d,
function(b){b(a)})},disconnect:function(a){e&&c(e,function(b){b(a)});f()}};return p};return{message:function(c){var f;c.connect?b&&b(c.destination,e(c.response_id)):(f=a[c.response_id])?c.disconnect?f.disconnect():f.message(c.value):d&&P("ports: unkown id",c.response_id,c)},connect:function(a){var b=Y.createUUID();g.send("port.message",{response_id:b,connect:!0,destination:a});return e(b)},onConnect:{addListener:function(a){b=a}}}}(),pa=function(){var a={objs:{},push:function(b,c){0!==c&&1!==c&&(c=
0);var d=Ea(19831206*ta()+1);a.objs[d]={fn:b,prio:c};return d},remove:function(b){delete a.objs[b]},get:function(b){for(var d=[],e=0;1>=e;e++)c(p(a.objs),function(c){a.objs[c].prio!==e||void 0!==b&&c!=b||z(d,a.objs[c].fn)});return void 0===b?d:d[0]},finalize:function(b){if(void 0===b){b=a.get();for(var c=0;c<b.length;c++)b[c]()}else return a.objs[b]&&(c=a.objs[b].fn(),delete a.objs[b]),c}};return a}(),f=n.statistics?function(a,c){b.setTimeout(function(){g.send("api",{name:a,type:c},null)},1)}:function(){},
aa=function(){var a=function(a,b){f("GM_openInTab");var c=null,e=!1,g=null,p,v=function(){var a=[];return{run:function(b){b&&z(a,b);if(c)for(;a.length;)H(a)()}}}(),t=R.connect("openInTab");t.onMessage.addListener(function(a){a.tabId?e?t&&t.postMessage({close:!0}):(c=a.tabId,v.run()):a.name?p=a.name:a.closed&&(e=!0,g&&(g(),g=void 0))});t.onDisconnect.addListener(function(){t=null});t.postMessage({method:"openTab",url:a,options:b});var n={};I(n,{close:{value:function(){f("GM_openInTab.close");e?d&&
Q("env: attempt to close already closed tab!"):(e=!0,t&&t.postMessage({close:!0}))}},closed:{get:function(){f("GM_openInTab.closed");return e}},onclose:{get:function(){return g},set:function(a){f("GM_openInTab.onclose=");g=a}},name:{get:function(){return p},set:function(a){v.run(function(){f("GM_openInTab.name=");t&&t.postMessage({name:a})})}}});return n},e=function(a,c){f("GM_download");var d="Object"===Y.toType(a)?a:{url:a,name:c},e=function(a,c){c=c||{};a&&b.setTimeout(function(){v(a,c,[c])},1)},
g=R.connect("download");g.onMessage.addListener(function(a){try{a.load?d.onload&&e(d.onload,a.data):a.progress?d.onprogress&&e(d.onprogress,a.data):a.timeout?d.ontimeout&&e(d.ontimeout,a.data):d.onerror&&e(d.onerror,a.data)}catch(b){w("env: Error: TM_download - ",b,d)}});g.onDisconnect.addListener(function(){g=null});g.postMessage({details:d});return{abort:function(){if(g)return g.postMessage({cancel:!0}),g.disconnect(),g=null,!0}}},y={};return{log:function(){f("GM_log");v(w,this,arguments)},addStyle:function(a,
b){f("GM_addStyle");var c=Y.createUUID();g.send("addStyle",{css:a,id:c},b?function(){b()}:null);return K.getElementById(c)},closeTab:function(a){f("window.close");g.send("closeTab",null,a?function(){a()}:null)},focusTab:function(a){f("window.focus");g.send("focusTab",null,a?function(){a()}:null)},setClipboard:function(a,b,c){f("GM_setClipboard");g.send("setClipboard",{content:a,info:b,id:A},c?function(){c()}:null)},syntaxCheck:function(a,b){g.send("syntaxCheck",{code:a},function(a){b(a)})},of:function(r){var C=
r.script,u=function(){var a=[],q=r.storage,k=0,h=function(a,c){if("string"===typeof a){var d=a[0];a=va(a,1);switch(d){case "b":return"true"===a;case "n":return b.Number(a);case "x":return M.UTF8.decode(M.Base64.decode(a));case "o":try{return sa(a)}catch(J){w("values: parseValueFromStorage: "+J)}return c;default:return a}}else return c},e=function(b,k,q,l){k!=q&&c(a,function(a){if(a&&a.key==b&&a.cb)try{a.cb(b,h(k),h(q),l)}catch(c){d&&P('values: change listener of "'+b+'" failed with: '+c.message)}})},
m=function(a){l.postMessage({method:"saveStorageKey",uuid:C.uuid,key:a,value:q.data[a],id:A,ts:q.ts})},l=R.connect("values");l.onMessage.addListener(function(a){a.storage&&c(p(a.storage.data),function(b){var c=q.data[b];q.data[b]=a.storage.data[b];var d=q.data[b];t&&w("values: message - config key "+b+": "+c+" -> "+d);e(b,c,d,!0)});a.removed&&(q[a.removed]=void 0)});l.onDisconnect.addListener(function(){d&&w("values: port disconnected")});l.postMessage({method:"addStorageListener",uuid:C.uuid,id:A});
return{set:function(a,b){f("GM_setValue");var c=q.data[a];q.ts=ma();var d=q.data,J;a:{J=b;var k=(typeof J)[0];switch(k){case "o":try{J=k+oa(J)}catch(h){w(h);J=void 0;break a}break;case "s":var N=ca(8232),D=ca(8233);if(-1!==da(J,N)||-1!==da(J,D))k="x",J=M.Base64.encode(M.UTF8.encode(J));J=k+J;break;default:J=k+J}}d[a]=J;m(a);e(a,c,q.data[a],!1)},get:function(a,b){f("GM_getValue");return h(q.data[a],b)},remove:function(a){f("GM_deleteValue");var b=q.data[a];q.ts=ma();delete q.data[a];m(a);e(a,b,q.data[a],
!1)},list:function(){f("GM_listValues");return p(q.data)},registerChangeListener:function(b,c){f("GM_addValueChangeListener");var d=++k;z(a,{id:d,key:b,cb:c});return d},unregisterChangeListener:function(b){f("GM_removeValueChangeListener");a=ra(a,function(a){return a.id!==b?!0:!1})}}}(),G=function(){return{getText:function(a){f("GM_getResourceText");for(var b=0;b<C.resources.length;b++){var c=C.resources[b];if(c.name==a&&!c.failed){try{if(null!==c.content)return M.UTF8.decode(c.content)}catch(d){}return""}}return null},
getURL:function(a){f("GM_getResourceURL");for(var b=0;b<C.resources.length;b++){var c=C.resources[b];if(c.name==a&&!c.failed){if(null===c.content)return"";try{return"data:"+(c.meta||"application")+";base64,"+M.Base64.encode(c.content)}catch(d){}return c.url}}return null}}}(),B=function(){return{set:function(a,b){f("GM_setTab");g.send("tabs",{action:"set",uuid:C.uuid,tab:a},b?function(){b()}:null)},get:function(a){f("GM_getTab");g.send("tabs",{action:"get",uuid:C.uuid},a?function(b){a(b||{})}:null)},
getAll:function(a){f("GM_getTabs");g.send("tabs",{action:"list",uuid:C.uuid},a?function(b){a(b||{})}:null)}}}(),I=function(a){f("GM_xmlhttpRequest");var d=!1,k=a.context;delete a.context;var h=function(){var a={};c(p(b.XMLHttpRequest.__proto__),function(b){a[b]=!0});var d=function(){};c(p(b.XMLHttpRequest),function(c){a[c]||(d[c]=b.XMLHttpRequest[c])});return d}(),e=function(){d=!0},m=function(a,c){c=c||{};a&&!d&&b.setTimeout(function(){c.__proto__=h;v(a,c,[c])},1)};"object"===typeof a.url&&a.url.href&&
(a.url=a.url.href);var l=function(a,c){var d=new b.FileReader;d.onload=function(){c(M.arrbuf2str(d.result))};Ja(d,a)},U=function(a,c){var d,N,k,h=Y.toType(a);if("Blob"===h||"File"===h)l(a,function(b){c({type:h,value:b,meta:a.type,name:a.name,lastModified:a.lastModified})});else if("FormData"===h)if(N=a.keys&&a.getAll?a.keys():null){var q,e={};for(d=[];!(q=N.next()).done;)z(d,q.value);k=function(){if(d.length){var b=H(d),N=a.getAll(b);-1===da(b,/\[\]$/)&&(N=N[0]);U(N,function(a){e[b]=a;k()})}else c({type:"FormData",
value:e})};k()}else c({error:h});else if(!(h=Y.toType(a))||"Array"!==h&&"Object"!==h)c({value:a});else{var J,m,E=0;N=0;"Object"===h?(d=p(a),m=function(a){return a<d.length?d[a]:null},J={}):(m=function(b){return b<a.length?b:null},J=[]);k=function(){var d=m(E);null===d?c({type:h,value:J}):U(a[d],function(a){a.error?c(a):(J[d]=a,E++,1024>N++?k():(N=0,b.setTimeout(k,1)))})};k()}},E=function(a,c,d){if("text"==d)a="document"==c?a.document:a;else if("arraybuffer"==c)a=M.str2arrbuf(a);else if("blob"==c)a=
new b.Blob([M.str2arrbuf(a)]);else if("json"==c)a=sa(a);else if("document"==c){if(a.error){P("GM_xmlhttpRequest:",a.error);return}c=new b.DOMParser;return Ka(c,a.document,a.contentType)}return a},g=!0;(function(b){if(a.url){var c=a.url.substr(0,5);if(-1!=["data:","blob:"].indexOf(c))return g=!1,b()}if(!a.data)return b();U(a.data,function(c){c.error?(g=!1,P("GM_xmlhttpRequest:","unable to handle data type "+c.error+". Going to use default xhr as fallback.")):(a.binary&&(c.type="Blob"),a.data=c,a.data_type=
"typified");b()})})(function(){"use strict";if(!d)if(g){var h=R.connect("xhr"),l=[];a.headers&&c(p(a.headers),function(b){"cookie"===ia(b)&&(a.cookie=a.headers[b],delete a.headers[b])});h.postMessage({method:"xhr",details:a,callbacks:{onloadstart:!!a.onloadstart,onload:!!a.onload,onreadystatechange:!!a.onreadystatechange,onerror:!0,ontimeout:!!a.ontimeout,onprogress:!!a.onprogress,onpartial:!0},id:A,url:b.location.href,uuid:C.uuid});h.onMessage.addListener(function(b){b.data&&k&&(b.data.context=k);if(b.data&&
b.onload){l.length&&(b.data.response_data=V(l,""),l=null);if(b.data.response_data){var d=b.data.response_data;c(["response_data"],function(a){delete b.data[a]});var h={response:function(b){f("GM_xmlhttpRequest.response["+(a.responseType||"unknown")+"]");var c=a.responseType?ia(a.responseType):"";return E(b,c)},responseText:function(b){f("GM_xmlhttpRequest.responseText");var c=a.responseType?ia(a.responseType):"";return E(b,c,"text")},responseXML:function(a){f("GM_xmlhttpRequest.responseXML");return E({document:a,
contentType:"text/xml"},"document")}};c(p(h),function(a){S(b.data,a,{get:function(){try{return h[a](d)}catch(b){P("GM_xmlhttpRequest:",b)}}})})}m(a.onreadystatechange,b.data);m(a.onload,b.data)}else if(b.onreadystatechange)4!=b.data.readyState&&m(a.onreadystatechange,b.data);else if(b.onpartial)z(l,b.data.partial);else if(b.onerror)b.exception&&ha(b.exception),m(a.onerror,b.data);else{var q=ra(["onloadstart","onprogress","ontimeout"],function(a){return!!b[a]})[0]||"onerror";m(a[q],b.data)}});t&&h.onDisconnect.addListener(function(){w("env: GM_xmlhttpRequest.onDisconnect! :)")});
e=function(){f("GM_xmlhttpRequest.abort");h&&h.disconnect();h=null;d=!0}}else{var x=new b.XMLHttpRequest;void 0===a.async&&(a.async=!0);La(x,a.method,a.url,a.async,a.user,a.password);a.headers&&c(p(a.headers),function(b){Ma(x,b,a.headers[b])});a.overrideMimeType&&Na(x,a.overrideMimeType);a.responseType&&(x.responseType=a.responseType);c("abort error load loadstart progress readystatechange timeout".split(" "),function(b){x["on"+b]=function(){var c="",d=a.url;if(2<x.readyState&&(c=Oa(x),4==x.readyState)){c&&
(c=X(c,/TM-finalURL[0-9a-zA-Z]*\: .*[\r\n]{1,2}/,""));var h;try{h=Pa(x,"TM-finalURL"+n.short_id)}catch(l){}h&&(d=h)}c={readyState:x.readyState,status:"",statusText:"",responseHeaders:c,finalUrl:d,context:k};4==x.readyState&&(x.responseType?c.response=x.response:(c.responseText=x.responseText,c.responseXML=x.responseXML),c.status=x.status,c.statusText=x.statusText);m(a["on"+b],c)}});Qa(x,a.data);e=function(){f("GM_xmlhttpRequest.abort");Ra(x);d=!0}}});return{abort:function(){e()}}},O=function(a){var b=
{};c(p(a),function(c){b[c]=a[c]});b.id=A;f("GM_notification");b.text||b.highlight?g.send("notification",b,function(a){if(b.onclick&&a.clicked)b.onclick();if(b.ondone)b.ondone(!0===a.clicked)}):P("GM_notification: neither a message text nor hightlight options were given!")},K,Q=function(){if(K)return K;var a=r.script,b={observers:1,id:1,enabled:1,hash:1,fileURL:1},d={script:{}};c(p(a),function(c){b[c]||(d.script[c]=a[c])});var h=a.options.updateURL||a.options.fileURL;d.script["run-at"]=a.options.override.run_at||
a.options.run_at;d.script.excludes=a.options.override.orig_excludes;d.script.includes=a.options.override.orig_includes;d.script.matches=a.options.override.orig_matches;d.script.grant=a.grant;d.script.unwrap=!1;d.scriptMetaStr=r.header;d.scriptSource=r.code;d.scriptWillUpdate=!!h;d.scriptUpdateURL=h;d.version=n.version;d.scriptHandler="Tampermonkey";d.isIncognito=n.inIncognitoContext;d.downloadMode=n.downloadMode;return K=d},L,E=function(a,b){f("GM_webRequest");var c=function(){L==d&&(L=null);d=null};
L&&L.disconnect();var d=L=R.connect("webRequest");b&&d.onMessage.addListener(function(a){b(a.type,a.message||"ok",a.details)});d.onDisconnect.addListener(c);d.postMessage({rules:a,uuid:C.uuid});return{abort:function(){f("GM_webRequest.abort");d&&d.disconnect();c()}}},U=function(){var a=0,c={},d={register:function(h,e,m){f("GM_registerMenuCommand");var l=R.connect("registerMenuCommand");l.onMessage.addListener(function(a){"run"===a&&b.setTimeout(e,1)});l.onDisconnect.addListener(function(){d.unregister(E)});
l.postMessage({method:"register",name:h,uuid:C.uuid,accessKey:m});t&&w("env: registerMenuCommand "+ga(e));var E=++a;c[E]=l.disconnect;return E},unregister:function(a){f("GM_unregisterMenuCommand");t&&w("env: unregisterMenuCommand "+a);var b;if(b=c[a])b(),delete c[a]}};return d}(),Ua=function(){"use strict";var a=function(a,c){return{action:a,uuid:C.uuid,url:b.location.href,details:c}};return{set:function(b,c){f("GM_cookie.set");g.send("cookie",a("set",b),c?function(a){c(a.error)}:null)},delete:function(b,
c){f("GM_cookie.delete");g.send("cookie",a("delete",b),c?function(a){c(a.error)}:null)},list:function(b,c){f("GM_cookie.list");g.send("cookie",a("list",b),c?function(a){c(a.cookies,a.error)}:null)}}}();y[r.script.uuid]=y[r.script.uuid]||{getInfo:Q,registerMenuCommand:U.register,unregisterMenuCommand:U.unregister,download:e,webRequest:E,openInTab:a,setValue:u.set,getValue:u.get,deleteValue:u.remove,listValues:u.list,addValueChangeListener:u.registerChangeListener,removeValueChangeListener:u.unregisterChangeListener,
getResourceText:G.getText,getResourceURL:G.getURL,notification:O,xmlhttpRequest:I,cookie:Ua,setTab:B.set,getTab:B.get,getTabs:B.getAll};return y[r.script.uuid]}}}(),Ta=function(){var F=function(a,b,d){var e=W(b);c(p(e),function(c){var d=e[c];if(!d||!d.get||L(d.get)||n.sandbox_allow_getters)"function"===typeof b[c]?a[c]=u(b[c],b):function(){S(a,c,{get:function(){"use strict";return b[c]}})}()});c(p(d),function(b){a[b]=d[b]});return a},A=function(a,d,e,g){var q={attrChange:0,attrName:null,bubbles:!0,cancelBubble:!1,
cancelable:!1,clipboardData:void 0,currentTarget:null,defaultPrevented:!1,eventPhase:0,newValue:null,prevValue:null,relatedNode:null,returnValue:!0,srcElement:null,target:null,timeStamp:ma()};e="string"===typeof e?new b.Function(e):e;var k=new Event;c(p(q),function(a){k[a]=q[a]});c(p(d),function(a){k[a]=d[a]});k.type=a;v(e,g,[k])},K=function(a,b,d,e){void 0===e&&(e=function(a,b){return b});c(Ba(["GM_info","GM.info"],b),function(b){var c,h=d[b];h&&(c=e(b,h))&&(a[b]=c)})},r=function(a,b){void 0===b&&
(b=100);return b&&a&&(a==document||r(a.parentNode,b-1))},C=function(){var b=null;return function(d){b||(b={instance:d,is_open:!1},c(["write","writeln","open","close"],function(e){b[e]=d[e];d[e]=function(){var f=!1;-1!=ka(["write","writeln","open"],e)?b.is_open?f=!0:b.is_open=!0:"close"===e&&(b.is_open=!1);!f&&b.is_open&&g.send("document.write");var q=document.documentElement,k=v(b[e],d,arguments);if(!f&&b.is_open)return q!==document.documentElement&&(b.instance!==d&&(b=null,C(document)),c(a.write_listeners,
function(a){a(document)})),k}}))}}(),M={},H=[],R=function(c,e,g){if(!c.__addEventListener){I(c,{__addEventListener:{value:c.addEventListener,enumerable:!1,configurable:!1},__removeEventListener:{value:c.removeEventListener,enumerable:!1,configurable:!1}});var f=[],q=function(a){for(var b=0;b<f.length;b++)if(f[b].fn===a)return b};c.removeEventListener=function(a,b,c){c=!!c;var d,e,k;if(void 0!==(d=q(b))&&(e=f[d].listeners)){if(k=e[a+"-"+c])this.__removeEventListener(a,k,c),delete e[a+"-"+c];Aa(e).length||
fa(f,d,1)}else return v(this.__removeEventListener,this,arguments)};var k=function(a,c,d,e){if(c){var k=H.length;c=b.parseInt(V(["DOMContentLoaded"==d?1:2,e?1:2,e?c:3-c,ma()],"0"));for(d=0;d<H.length;d++)if(e=H[d],!e||!e.prio||e.prio>c){k=d;break}fa(H,k,0,{prio:c,fn:a})}else z(H,{fn:a})};c.addEventListener=function(c,p,m){(t||G)&&w("env: addEventListener "+c);if(p&&(1==e&&"load"==c||"DOMContentLoaded"==c||"DOMNodeInserted"==c)){m=!!m;var l,E=!0,n=this;try{try{throw new b.Error;}catch(T){var u=/tms_[0-9a-f_]+/,
r=T.stack||T.stacktrace;if(r)for(var y=wa(r,"\n"),x,r=0;r<y.length&&(!(x=la(y[r],u))||!(l=M[x[0]]));r++);else{var N=function(a,c){void 0===c&&(c=10);if(0===c)return null;if(a.caller){var e,D;try{return D=ga(a.caller),la(D,new b.RegExp("^function[^(]+"))&&(void 0).length&&(e=la((void 0)[0],u))?e[0]:N(a.caller,c-1)}catch(h){d&&P("env: unable to detect caller context",h)}}return null},D;if(D=N(arguments.callee))l=M[D]}}}catch(T){d&&ha("env: Error: event "+c,T)}l&&"document-idle"!==l.run_at&&(l=null,
"load"==c?a.pageLoaded&&(l=function(){var a=p,c=n,d=n.document||n;(t||G)&&w("env: postLoadEvent!");d=d||document;A("load",{attrName:"null",newValue:"null",prevValue:"null",eventPhase:b.Event.AT_TARGET,attrChange:b.MutationEvent.ADDITION,target:d,relatedNode:d,srcElement:d},a,c)},E=!1,k(l,e,c,m)):"DOMContentLoaded"==c&&a.domContentLoaded&&(l=function(){var a=p,c=n,d=n.document||n;(t||G)&&w("env: postDomEventListener!");d=d||document;A("DOMContentLoaded",{attrName:"null",newValue:"null",prevValue:"null",
eventPhase:b.Event.AT_TARGET,attrChange:b.MutationEvent.ADDITION,target:d,relatedNode:d,srcElement:d},a,c)},E=!1,k(l,e,c,m)),l&&(b.setTimeout(function(){if(H.length){var a=qa(H);a&&a.fn&&a.fn()}},1),E=!1));E&&(l=function(a){return ja(B,[p,this,g(a)],0,!0,n)},void 0===(E=q(p))&&(E=f.length,z(f,{fn:p,listeners:{}})),f[E].listeners[c+"-"+m]=l,this.__addEventListener(c,l,m))}else return v(this.__addEventListener,this,arguments)};z(pa,function(){c.removeEventListener=c.__removeEventListener;c.addEventListener=
c.__addEventListener})}},ca=function(a){a.__evaluate||(I(a,{__evaluate:{value:a.evaluate,enumerable:!1,configurable:!1}}),a.evaluate=function(a,b,c,d,e){t&&w("env: document.evaluate "+a);b||(b=this);var h;if("undefined"!=typeof XPathResult){var f=a,g=null;try{h=this.__evaluate(f,b,c,d,e)}catch(p){g=p}var l=!1;try{l|=!!h.snapshotLength}catch(p){}try{l|=!!h.singleNodeValue}catch(p){}if(l||"."==a[0]||r(b))t&&w("env: queried document for "+f);else{t&&w("env: query added elem for "+f);f=("/"==a[0]?".":
"./")+a;try{h=this.__evaluate(f,b,c,d,e)}catch(p){}}t&&w("env: query returned ",h,g);if(!l&&g)throw g;}else t&&w("env: XPathResult == undefined, but selectNodes via ",a),h=b.selectNodes(a);return h},z(pa,function(){a.evaluate=a.__evaluate}))},ja=function(a,c,d,e,f){var k=c[d],h=typeof k;e&&"string"===h?c[d]=new b.Function(k):f&&"function"===h&&(c[d]=function(){return v(k,f,arguments)});return v(a,y,c)},ea=function(d,e){var f=["eval"],g={};c(p(d),function(a){d[a].context_prop&&(g[(a.split(".")||[])[1]]=
!0)});var q=function(a,d,e,m){var l=function(b){return b===d?a:b},q=function(a,b,c,d){c||(c=a);var e=a[b];a=function(){"use strict";var a=v(e,c,arguments);d&&(a=d(a));return a};a.__proto__=e;a.prototype=e.prototype;return a},t=function(c){var d,e=c.substr(2),l;S(a,c,{get:function(){return d},set:function(c){"use strict";(d=c)&&!l?(l=function(){if("function"===typeof d)return v(d,a,arguments)},b.addEventListener(e,l,!0)):!d&&l&&(b.removeEventListener(e,l,!0),l=null)}})},E=function(b,c,e,f){var g,m={};m.get=
"function"===typeof c?c:function(){"use strict";f&&f.get_cb&&v(f.get_cb,this,[arguments,E]);return void 0===g?l(d[b]):g};"function"===typeof e?m.set=e:c||(m.set=function(a){g=a});S(a,b,m)};c(p(m),function(a){e[a]=e[a]||!1!==m[a]});var r=n.sandbox_allow_getters,U=n.detect_constructors_by_keys;c(p(e),function(b){var c,D,T,n,w,z,Z,C,F,A,H,K,B,G;try{var I;(I=Ca(d,b))&&I.get&&(w=!L(I.get));try{if(!(D=m[b])||D.needs_grant&&!0!==g[b])if((c=e[b])&&c.event)B=!0;else if(I&&I.get)if(w)if(r)Z=!0;else return;else Z=
function(){"use strict";return l(v(I.get,y))};else"function"===(n=typeof(T=d[b]))?c.proto?z=!0:(I.enumerable||!(U&&p(T).length||!L(T)))&&-1==ka(f,b)&&"bind"in T?H=!0:A=!0:"number"===n||"string"===n?Z=!0:A=!0;else if(D.wrap)z=!0,K=D.that;else if(D.direct)A=!0;else if(D.enhance)G=D.enhance;else if(D.get||D.set)Z=D.get,C=D.set,F=D.opts}catch(M){Z=C=!0}if(G)a[b]=G;else if(!w||r)B?t(b):Z||C?E(b,Z,C,F):z?a[b]=q(d,b,K,l):A?a[b]=l(d[b]):H&&(a[b]=u(d[b],d))}catch(M){P("env: error while creating a new sandbox["+
b+"]: "+M.message)}});return a};return function(){var d=new Window,f={setTimeout:{enhance:function(){"use strict";return ja(b.setTimeout,arguments,0,!0,d)}},setInterval:{enhance:function(){"use strict";return ja(b.setInterval,arguments,0,!0,d)}},close:{needs_grant:!0,get:function(){"use strict";return b.self==b.top?function(a){return aa.closeTab(a)}:b.close}},focus:{needs_grant:!0,get:function(){return function(a){"use strict";return aa.focusTab(a)}}},location:{get:!0,set:function(a){"use strict";b.location.href=
a}},name:{get:function(){"use strict";return ba(y,"name")},set:function(a){"use strict";O(y,"name",a)}},document:{get:function(){"use strict";var a=b.document;e(a);return a}},clearInterval:{get:function(){"use strict";return b.clearInterval}},clearTimeout:{get:function(){"use strict";return b.clearTimeout}},addEventListener:{enhance:function(){"use strict";return ja(b.addEventListener,arguments,1,!0)}},removeEventListener:{enhance:function(){"use strict";return ja(b.removeEventListener,arguments,1,!0)}}};(function(){var a=
ua(b.frames.length,7);f.length={get:!0,opts:{get_cb:function(c,d){"use strict";for(var e=b.frames.length,f=a;f<e;f++)d(b.String(f),{get:!0});a=ua(e,a)}}};for(var c=0;c<a;c++)f[b.String(c)]={get:!0}})();c(p(b),function(a){b[a]!=y&&(f[a]=f[a]||{enhance:b[a]})});var g=q(d,y,a.windowProps,f),m={context:g,filter:function(a){"use strict";return a==y?g:a},filterEvent:function(a){var b={},c;for(c in a)if("function"===typeof a[c])b[c]=function(){var b=c;return function(){return v(a[b],a,arguments)}}();else{var d=
m.filter(a[c]);b[c]=d}return b}};return m}()},da=function(){return F({},b.console,{debug:Q,log:w,info:Da,warn:P,error:ha})},ia=function(e,f,g,t,q,k,h){var r=null,m=function(){return"[Tampermonkey property]"};try{var l=t.sandboxes[e.uuid],u=["context","fapply"],w=[void 0,void 0],C=t.elements[e.uuid];c(p(C),function(a){var b=C[a];b.overwrite?(z(u,a),z(w,b.value)):b.context_prop||(z(u,a),z(w,"context."+a),b.getter?S(l,a,{get:b.getter}):l[a]=b.value);b.protect&&l[a]&&O(l[a],"toString",m)});var y,r=V(["(function(context, fapply, console) {",
"with (context) {","(function(module) {",'"use strict";',"try {\n",n.measure_scripts?'console.time("'+(y="SCRIPT RUN TIME["+e.name.replace(/\W+/g," ")+"]")+'");\n':"","fapply(module, context, [",V(w,","),"]);",n.measure_scripts?'console.timeEnd("'+y+'");\n':"","} catch (e) {","if (e.message && e.stack) {","console.error(\"ERROR: Execution of script '",X(e.name,new b.RegExp("[\"']","g"),"\\$1"),"' failed! \" + e.message);",'console.log(e.stack.replace(/(\\\\(eval at )?<anonymous>[: ]?)|([\\s.]*at Object.tms_[\\s\\S.]*)/g, ""));',
"} else {","console.error(e);","}","}\n","})","(function ",k,"(",V(u,","),") {",n.enforce_strict_mode?'"use strict";\n':"",g,f,"\n","})","}","})(this.context, this.fapply, this.console);\n",h?"//# sourceURL="+h+"\n":""],""),F={context:l,fapply:v,console:da()};q?q(r,F):a.E_c(r,F)}catch(x){aa.syntaxCheck(V([g,f],""),function(a){var D="";if(a.errors){var h=wa(g,"\n").length-1,k="";a.errors&&c(p(a.errors),function(b){if((b=a.errors[b])&&0<=b.line&&b.reason){var c=b.line;k+=V([c>h?"script:":"require:"," (",
b.code,") ",X(b.reason,/.$/,"")," on line: ",c>h?c-h:c," at character: ",b.character,"\n"],"")}});D="JSHINT output:\n"+k}else D=f;var l=x.stack?X(x.stack,/(\\(eval at )?<anonymous>[: ]?)|([\s.]*at Object.tms_[\s\S.]*)/g,""):"";d||a.errors?ha('Syntax error @ "'+e.name+'"!\n##########################\n'+D+"##########################\n\n"+l):ha('Syntax error @ "'+e.name+'"!\n\n',l);b.setTimeout(function(){throw x;},1)})}};return{create:function(g){var n=g.script,r={},u=-1!==ka(n.grant,"none")?function(b,
c){a.E_u(b,c)}:null,q=n.namespace+"_"+!!u;void 0===a.props[q]&&(a.props[q]={sandboxes:{},elements:{}},z(pa,function(){a.props[q]=null}));r.CDATA={value:function(a){f("CDATA");this.src=a;this.toXMLString=this.toString=function(){return this.src}}};r.uneval={value:function(a){f("window.uneval");try{return"\\$1 = "+oa(a)+";"}catch(b){w(b)}}};r.define={value:void 0};r.module={value:void 0};r.exports={value:void 0};var k={},h={},F={},m=aa.of(g);f(n.options.run_at||"<default>","run_at");if(u)f("none","grant");
else{f("sandbox","grant");r.window={value:"context",overwrite:!0};var l={window:y};c(p(l),function(a){var b="unsafe"+X(a,/^(.)/g,function(a){return Ia(a)});r[b]={value:l[a]};-1!=ka(n.grant,b)&&f(b,"grant")});r.console={value:da()};r.cloneInto={value:function(a){f("compat.cloneInto");return a}};r.exportFunction={value:function(a,b,c){f("compat.exportFunction");c&&void 0!==c.defineAs&&(b[c.defineAs]=a);return a}};r.createObjectIn={value:function(a,b){f("compat.createObjectIn");var c={};b&&void 0!==
b.defineAs&&(a[b.defineAs]=c);return c}};k.addStyle=aa.addStyle;k.deleteValue=m.deleteValue;k.listValues=m.listValues;k.getValue=m.getValue;k.setValue=m.setValue;k.log=aa.log;k.registerMenuCommand=m.registerMenuCommand;k.unregisterMenuCommand=m.unregisterMenuCommand;k.openInTab=m.openInTab;k.addValueChangeListener=m.addValueChangeListener;k.removeValueChangeListener=m.removeValueChangeListener;F.xmlhttpRequest=m.xmlhttpRequest;F.download=m.download;k.webRequest=m.webRequest;F.setClipboard=aa.setClipboard;
k.getTab=m.getTab;k.setTab=m.setTab;k.saveTab=m.setTab;k.getTabs=m.getTabs;k.getResourceText=m.getResourceText;F.getResourceURL=m.getResourceURL;var A=function(a){return function(){var b=Fa(v(a,this,arguments));O(b,"then",function(a){return Ga(b,a)});O(b,"catch",function(a){return Ha(b,a)});return b}},G=function(a,b){var d,e=new na(function(e,f){var g={},h=b.onload,k=b.ontimeout,l=b.onerror;c(p(b),function(a){g[a]=b[a]});g.onerror=function(a){f(a);l&&v(l,this,arguments)};g.ontimeout=function(a){f(a);
k&&v(k,this,arguments)};g.onload=function(a){e(a);h&&v(h,this,arguments)};var m=a(g).abort;!0===d?m():d=m});O(e,"abort",function(){d?d():d=!0});return e};c(p(F),function(a){h["GM_"+a]={value:F[a]}});h["GM.getResourceUrl"]={getter:function(){return A(F.getResourceURL)}};h["GM.xmlHttpRequest"]={value:function(a){return G(F.xmlhttpRequest,a)}};h["GM.download"]={value:function(a){return G(F.download,a)}};h["GM.setClipboard"]={value:function(a,b){return new na(function(c){F.setClipboard(a,b,c)})}};h.GM_notification=
{value:function(a,b,d,e){var f=null,g=["timeout","text","image","title","highlight"],h=null,k={};"object"===typeof a&&(h=a);h?(c(g,function(a){k[a]=h[a]}),f=h.ondone,e=h.onclick,"function"===typeof b&&(f=b)):(k.image=d,k.title=b,k.text=a);k.text&&(k.image=k.image||n.icon64||n.icon,k.title=k.title||n.name);k.onclick=e;k.ondone=f;m.notification(k)}};h["GM.notification"]={value:function(a){return"object"!==typeof a?P("GM.notification(details): received no details"):new na(function(b,d){c(p(a),function(a){});
m.notification(a)})}};h.GM_cookie={value:function(){var a=m.cookie,b=function(b,c,d){return(a[b]||function(){})(c,d)};c(p(a),function(c){b[c]=a[c]});return b}()};h["GM.cookie"]={value:function(){var a=function(a,b){return new na(function(c,d){"list"==a?h.GM_cookie.value(a,b,function(a,b){b?d(b):c(a)}):h.GM_cookie.value(a,b,function(a){a?d(a):c()})})};c(p(m.cookie),function(b){a[b]=function(c){return a(b,c)}});return a}()};c(p(k),function(a){var b=k[a];h["GM_"+a]={value:b};h["GM."+a]={getter:function(){return A(b)}}});
h["window.close"]={context_prop:!0};h["window.focus"]={context_prop:!0}}h.GM_info=h["GM.info"]={getter:m.getInfo};var H={};r.GM={value:H,protect:!0};K(r,n.grant,h,function(a,b){if("GM."===a.substr(0,3))a=a.split(".")[1],S(H,a,{get:b.getter?b.getter:function(){return b.value}});else return b.protect=!0,b});n.options.compat_prototypes&&((t||d)&&w("env: option: add toSource"),b.Object.prototype.toSource||I(b.Object.prototype,{toSource:{value:function(){f("Object.toSource");var a=Y.toType(this);if("String"===
a)return'(String("'+X(this,new b.RegExp('"',"g"),'\\"')+'"))';if("Number"===a)return'(Number("'+b.Number(this)+'"))';if("Array"===a){for(var a="(new Array(",c=0;c<this.length;c++){var d=Y.toType(this[c]),a="Null"===d?a+"null":"Undefined"===d?a+"undefined":a+this[c].toSource();c+1<this.length&&(a+=",")}return a+"))"}return'JSON.parse(unescape("'+b.escape(oa(this))+'"))'},enumerable:!1,writable:!0,configurable:!0}}),(t||d)&&w("env: option: add some array generics"),c("indexOf lastIndexOf filter forEach every map some slice".split(" "),
function(a){if("function"!==typeof b.Array[a]){var c={};c[a]={value:function(c){f("Array."+a);return v(b.Array.prototype[a],c,v(e.wrappedJSObject,arguments,[1]))},enumerable:!1,writable:!0,configurable:!0};I(b.Array,c)}}));var B,L="";if(u)B=new Window;else{var x=ea(r,function(a){ca(a);C(a);R(a,2,x.filterEvent)});B={run_at:n.options.run_at,uuid:n.uuid};L="tms_"+X(n.uuid,/-/g,"_");M[L]=B;R(x.context,1,x.filterEvent);B=x.context}a.props[q].sandboxes[n.uuid]=B;a.props[q].elements[n.uuid]=r;(t||d)&&Q("env: execute script "+
n.name+" @ the "+(u?"un":"")+"safe context now!");ia(n,g.code,g.requires,a.props[q],u,L,g.source_url)}}}();(function(){if(n.external_connect){var a;if(a=y.external){var b=function(a,b){g.send("external.message",a,function(a){b&&b(a)})};try{I(a,{Tampermonkey:{get:function(){return{getVersion:function(a){b({method:"getVersion"},a)},isInstalled:function(a,c,d){"function"===typeof c&&(d=c,c=null);b({method:"isInstalled",script:{name:a,namespace:c}},d)}}},configurable:!0}})}catch(c){}}}})();g.onMessage.setListener(function(b){var c=
b.a;"load"==b.m?(a.pageLoaded=!0,ea.runListeners()):"DOMContentLoaded"==b.m?(a.domContentLoaded=!0,ea.runListeners()):"setForeignAttr"==b.m?y[c.attr]=c.value:"port.message"==b.m?R.message(c):"executeScript"==b.m?ea.run(b.a):"cleanup"==b.m?g.cleanup():d&&w("env: unkown method",b)});d&&w("Tampermonkey started");c(a.scripts,function(a){ea.run(a)})}}}());
