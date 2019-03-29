Registry.require(["helper","promise"],function(){var k=Registry.get("helper"),g=Registry.get("promise"),h={items:{},remove:function(e){delete h.items[e]},create:function(e){var a={},d={retimeout_on_get:!1,timeout:300,check_interval:120},f,c={init:function(){f||c.schedule()},schedule:function(){c.unschedule();f=window.setInterval(c.clean,1E3*d.check_interval)},unschedule:function(){f&&window.clearInterval(f);f=null},setOptions:function(b){for(var a in b)b.hasOwnProperty(a)&&(d[a]=b[a],"check_interval"==
a&&f&&c.schedule());return c},set:function(b,c){a[b]={value:c,ts:Date.now()}},setj:function(b,a){return c.set(b,a?JSON.stringify(a):a)},get:function(b,c){var e=c;a[b]&&(d.retimeout_on_get&&(a[b].ts=Date.now()),e=a[b].value);return e},getj:function(){var a=c.get.apply(this,arguments);return a?JSON.parse(a):a},remove:function(b){delete a[b]},clean:function(){var b=Date.now()-1E3*d.timeout;k.each(a,function(a,d){a.ts<b&&window.setTimeout(function(){c.remove(d)},1)})},removeAll:function(){a={}},finalize:function(){c.unschedule();
a={}}};return h.items[e]=c}};Registry.register("tools","5890",{cache:h,createQueue:function(e){var a=[],d=[],f=function(){var c;if(d.length<e&&a.length&&(c=a.shift())){var b=c.fn();d.push(b);b.always(function(){var a;-1<(a=d.indexOf(b))&&d.splice(a,1);f()});c.p.consume(b)}};return{add:function(c){var b=g();a.push({fn:c,p:b});f();return b.promise()}}},sleep:function(e){var a=g();window.setTimeout(function(){a.resolve()},e);return a.promise()},readAsText:function(e){var a=g(),d=new FileReader;d.onloadend=
function(){a.resolve(this.result)};d.onerror=a.reject;d.onabort=a.reject;d.readAsText(e);return a.promise()}})});
