Registry.require(["helper","convert"],function(){var q=Registry.get("helper"),t=Registry.get("convert"),u,A=function(a){return a&&"http"==a.substr(0,4)},B={internal:!0,cookie:!0,"user-agent":!0,referer:!0,origin:!0,host:!0,"proxy-connection":!0,"accept-encoding":!0,"accept-charset":!0},E={"cache-control":"no-cache",pragma:"no-cache"},F={"cache-control":"max-age=0, must-revalidate"},v=function(a){return{responseXML:"",responseText:"",response:null,readyState:4,responseHeaders:"",status:0,statusText:"",
error:a||"Forbidden"}},w=function(a){if("Blob"===a.type)return new Blob([t.str2arrbuf(a.value)]);if("File"===a.type)return new File([t.str2arrbuf(a.value)],a.name,{type:a.meta,lastModified:a.lastModified||Date.now()});if("FormData"==a.type){var f=new FormData;Object.keys(a.value).forEach(function(b){var c="Array"===a.value[b].type,g=w(a.value[b]),n=c?g:[g];n.forEach(function(a,c){f.append(b,n[c])})});return f}if("Array"===a.type||"Object"===a.type){var h,c,g;"Object"===a?(g=Object.keys(a.value),c=
function(a){return a<g.length?g[a]:null},h={}):(c=function(b){return b<a.value.length?b:null},h=[]);for(var m,p=0;null!==(m=c(p));p++)h[m]=w(a.value[m]);return h}return a.value},G=function(a,f,h){void 0===h&&(h={});var c=q.assign({},f||{}),g=function(a,b){if(c[a])c[a]("function"==typeof b?b():b)};f=function(a,b){c[a]&&(g(a,b),c[a]=null)};if(h.internal||A(a.url)){var m=window.fetch&&a.url&&"http"==a.url.substr(0,4),p=!u.mozAnon&&a.anonymous,b=a.fetch;return m&&(p||b)?C(a,c,h,f,g):y(a,c,h,f,g)}console.warn("xhr: invalid scheme of url:",
a.url);a=v("Invalid scheme");f("onerror",a);f("ondone",a)},z="tm-finalurl"+rea.runtime.short_id.toLowerCase(),D="tm-setcookie"+rea.runtime.short_id.toLowerCase(),C=function(a,f,h,c,g){var m=function(a){var b=[],c,l;a.headers&&(c=a.headers.get(z)||a.url,a.headers.forEach(function(a,l){var c=l.toLowerCase();-1==[z,D].indexOf(c)&&b.push(c+":"+a)}),(l=a.headers.get(D))&&b.push("set-cookie:"+l));return{readyState:4,responseHeaders:b.join("\n"),finalUrl:c,status:a.status,statusText:a.statusText}},p=function(b){(function(a,
b){for(var l=[],e=0,c=a.length;e<c;e+=b)l.push(a.slice(e,b+e));return l})(b,parseInt(a.partialSize)).forEach(function(a){g("onpartial",{partial:a})})};try{var b={};b.method=a.method||"GET";b.redirect="follow";if(a.nocache||a.revalidate)b.cache="no-store";b.credentials=a.anonymous?"omit":"include";if(a.headers){var r={};Object.keys(a.headers).forEach(function(b){var c=b,k=a.headers[b];if(u.prefix)B[b.toLowerCase()]&&(c=u.prefix+b,k=null===k?"":t.encodeS(k));else if(null===k)return;r[c]=k});b.headers=
new window.Headers(r)}void 0!==a.timeout&&(b.timeout=a.timeout);void 0!==a.data&&(b.body="typified"===a.data_type?w(a.data):"string"===typeof a.data?a.data:JSON.stringify(a.data));var x=window.fetch(a.url,b).then(function(b){var d=m(b);(0!==d.status||200>d.status||300<=d.status)&&0<a.retries?(a.retries--,C(a,f,h,c,g)):function(){var c;if(b.ok)void 0!==a.responseType?function(){var l,e=a.responseType?a.responseType.toLowerCase():"";if(a.convertBinary){if("document"==e)return l=q.getStringBetweenTags(d.responseHeaders.toLowerCase(),
"content-type:","\n").trim()||"text/html",new window.Promise(function(a){return b.text().then(function(b){a({document:b,contentType:l})})});if("json"==e)return b.text();if("arraybuffer"==e||"blob"==e)return b.arrayBuffer().then(function(a){return t.arrbuf2str(a)})}else{if("arraybuffer"==a.responseType)return b.arrayBuffer();if("blob"==a.responseType)return b.blob();if("document"==a.responseType)return l=q.getStringBetweenTags(d.responseHeaders.toLowerCase(),"content-type:","\n").trim()||"text/xml",
(new window.DOMParser).parseFromString(b.text(),l);if("json"==a.responseType)return JSON.parse(b.text());console.warn("xhr: responseType",a.responseType," is not implemented!");return b.text()}}().then(function(a){d.response=a;c()}):b.text().then(function(a){d.response=a;c()});else return d.responseXML=null,d.responseText="",d.response=null,{done:function(a){a()}};return{done:function(a){c=a}}}().done(function(){if(a.partialSize&&f.onpartial){var b=a.convertBinary&&d.response?d.response:d.responseText;
["response","responseText","responseXML"].forEach(function(a){delete d[a]});b&&(b.length>a.partialSize?p(b):d.response_data=b)}c("onload",d);c("ondone",d)})}).catch(function(a){a=m({status:408,statusText:a.message||"Request Timeout"});c("onerror",a);c("ondone",a)})}catch(n){console.error(n.stack),b=v(n.message),c("onerror",b),c("ondone",b)}return{abort:function(){try{x.abort&&x.abort()}catch(a){}}}},y=function(a,f,h,c,g){var m,p,b=new XMLHttpRequest(a.anonymous?{mozAnon:!0}:{}),r=function(l){var e=
"",c=a.url;if(2<=b.readyState&&(e=b.getAllResponseHeaders(),4==b.readyState)){e&&(e=e.replace(/tm-finalurl[0-9a-zA-Z]*\: .*[\r\n]{1,2}/i,""),e=e.replace(/tm-setcookie[0-9a-zA-Z]*\:/i,"set-cookie:"));var d;if(d=b.getResponseHeader(z))c=d}e={readyState:b.readyState,responseHeaders:e,finalUrl:c,status:4==b.readyState?b.status:0,statusText:4==b.readyState?b.statusText:""};l&&4==b.readyState?(b.responseType?(e.responseXML=null,e.responseText=null,e.responseType=b.responseType):(e.responseXML=b.responseXML,
e.responseText=b.responseText),e.response=b.response):(e.responseXML=null,e.responseText="",e.response=null);return e},x=function(b){(function(a,b){for(var l=[],c=0,d=a.length;c<d;c+=b)l.push(a.slice(c,b+c));return l})(b,parseInt(a.partialSize)).forEach(function(a){g("onpartial",{partial:a})})},n={onload:function(){var b=r(!0);(0!==b.status||200>b.status||300<=b.status)&&0<a.retries?(a.retries--,y(a,f,h,c,g)):function(){if(a.convertBinary&&b.response){var c=b.responseType?b.responseType.toLowerCase():
"";m&&c!==m&&console.warn("xhr: requested responseType "+m+" differs from received "+c);if("document"==c||"document"==m)if("string"==typeof b.response)c=q.getStringBetweenTags(b.responseHeaders.toLowerCase(),"content-type:","\n").trim()||"text/html",b.response={document:b.response,contentType:c};else{var c=b.response,d=c.contentType||"text/html";try{b.response={document:(new XMLSerializer).serializeToString(c.documentElement),contentType:d}}catch(g){var f="unable to serialize content type "+d;console.warn("xhr: ",
f,c);b.response={error:f,contentType:d}}}else if("json"==c)b.response=JSON.stringify(b.response);else{if("blob"==c){var h,k=new FileReader;k.onload=function(){b.response=t.arrbuf2str(k.result);h()};k.readAsArrayBuffer(b.response);return{done:function(a){h=a}}}"arraybuffer"==c&&(b.response=t.arrbuf2str(b.response))}}return{done:function(a){a()}}}().done(function(){if(a.partialSize&&f.onpartial){var e=a.convertBinary&&b.response?b.response:b.responseText;["response","responseText","responseXML"].forEach(function(a){delete b[a]});
e&&(e.length>a.partialSize?x(e):b.response_data=e)}c("onload",b);4==b.readyState&&c("ondone",b)})},onerror:function(){var b=r();4==b.readyState&&200!=b.status&&0!=b.status&&0<a.retries?(a.retries--,y(a,f,h,c,g)):(c("onerror",b),c("ondone",b))},onloadstart:function(){g("onloadstart",function(){return r()})},onreadystatechange:function(){g("onreadystatechange",function(){return r()})},onprogress:function(a){g("onprogress",function(){var c=r(),d=c;void 0===d&&(d={});try{var f=null,g=null;if(a.lengthComputable||
0<a.total)f=a.loaded,g=a.total;else{var h=b.responseType&&-1==["","text"].indexOf(b.responseType)?null:b.responseText,k=Number(q.getStringBetweenTags(c.responseHeaders.toLowerCase(),"content-length:","\n").trim()),m=2<c.readyState&&h?h.length:0;0==k&&(k=-1);f=a.loaded||m;g=a.total||k}d.lengthComputable=a.lengthComputable;d.loaded=f;d.done=f;d.position=f;d.total=g;d.totalSize=g}catch(n){}return d})},ontimeout:function(){var a=r();c("ontimeout");c("ondone",a)},onabort:function(){var a=v("aborted");
c("ondone",a)}},d=0==Object.keys(n).concat(["ondone"]).filter(function(a){return!!f[a]}).length;if(d)throw Error("Synchronous XHR is not supported anymore");Object.keys(n).forEach(function(a){if(f[a]||-1!=["ontimeout","onload","onerror","onabort"].indexOf(a))b[a]=n[a]});try{if(!h.internal&&!A(a.url))throw Error("Invalid scheme of url: "+a.url);b.open(a.method,a.url,!d,a.user,a.password);if(a.headers||a.nocache||a.revalidate){var k={};a.headers&&q.assign(k,a.headers);a.nocache?q.assign(k,E):a.revalidate&&
q.assign(k,F);Object.keys(k).forEach(function(a){var c=a,d=k[a];if(u.prefix)B[a.toLowerCase()]&&(c=u.prefix+a,d=null===d?"":t.encodeS(d));else if(null===d)return;try{b.setRequestHeader(c,d)}catch(f){console.warn("xhr: rejected header",c,k[a])}})}void 0!==a.overrideMimeType&&b.overrideMimeType(a.overrideMimeType);void 0!==a.responseType&&(m=a.responseType.toLowerCase(),-1==["document","json"].indexOf(m)&&(b.responseType=m));void 0!==a.timeout&&(b.timeout=a.timeout);void 0!==a.data?("typified"===a.data_type?
b.send(w(a.data)):"string"===typeof a.data?b.send(a.data):b.send(JSON.stringify(a.data)),f.onprogress&&b.upload&&(b.upload.onprogress=n.onprogress)):b.send()}catch(l){console.error(l.stack),d=v(l.message),c("onerror",d),c("ondone",d)}p=p||{};return q.copy({abort:function(){b.abort()}},p)};Registry.register("xmlhttprequest","5890",function(){return{run:G,setConfig:function(a){u=a},getConfig:function(){return u},makeErrorResponse:v}})});
