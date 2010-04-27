(function(window,undefined){var jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},_jQuery=window.jQuery,_$=window.$,document=window.document,rootjQuery,quickExpr=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,isSimple=/^.[^:#\[\.,]*$/,rnotwhite=/\S/,rtrim=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,userAgent=navigator.userAgent,browserMatch,readyBound=false,readyList=[],DOMContentLoaded,toString=Object.prototype.toString,hasOwnProperty=Object.prototype.hasOwnProperty,push=Array.prototype.push,slice=Array.prototype.slice,indexOf=Array.prototype.indexOf;jQuery.fn=jQuery.prototype={init:function(selector,context){var match,elem,ret,doc;if(!selector){return this;}
if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}
if(selector==="body"&&!context){this.context=document;this[0]=document.body;this.selector="body";this.length=1;return this;}
if(typeof selector==="string"){match=quickExpr.exec(selector);if(match&&(match[1]||!context)){if(match[1]){doc=(context?context.ownerDocument||context:document);ret=rsingleTag.exec(selector);if(ret){if(jQuery.isPlainObject(context)){selector=[document.createElement(ret[1])];jQuery.fn.attr.call(selector,context,true);}else{selector=[doc.createElement(ret[1])];}}else{ret=buildFragment([match[1]],[doc]);selector=(ret.cacheable?ret.fragment.cloneNode(true):ret.fragment).childNodes;}
return jQuery.merge(this,selector);}else{elem=document.getElementById(match[2]);if(elem){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context&&/^\w+$/.test(selector)){this.selector=selector;this.context=document;selector=document.getElementsByTagName(selector);return jQuery.merge(this,selector);}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return jQuery(context).find(selector);}}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length;},toArray:function(){return slice.call(this,0);},get:function(num){return num==null?this.toArray():(num<0?this.slice(num)[0]:this[num]);},pushStack:function(elems,name,selector){var ret=jQuery();if(jQuery.isArray(elems)){push.apply(ret,elems);}else{jQuery.merge(ret,elems);}
ret.prevObject=this;ret.context=this.context;if(name==="find"){ret.selector=this.selector+(this.selector?" ":"")+selector;}else if(name){ret.selector=this.selector+"."+name+"("+selector+")";}
return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},ready:function(fn){jQuery.bindReady();if(jQuery.isReady){fn.call(document,jQuery);}else if(readyList){readyList.push(fn);}
return this;},eq:function(i){return i===-1?this.slice(i):this.slice(i,+i+1);},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},slice:function(){return this.pushStack(slice.apply(this,arguments),"slice",slice.call(arguments).join(","));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function(){return this.prevObject||jQuery(null);},push:push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var target=arguments[0]||{},i=1,length=arguments.length,deep=false,options,name,src,copy;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(length===i){target=this;--i;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||jQuery.isArray(copy))){var clone=src&&(jQuery.isPlainObject(src)||jQuery.isArray(src))?src:jQuery.isArray(copy)?[]:{};target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({noConflict:function(deep){window.$=_$;if(deep){window.jQuery=_jQuery;}
return jQuery;},isReady:false,ready:function(){if(!jQuery.isReady){if(!document.body){return setTimeout(jQuery.ready,13);}
jQuery.isReady=true;if(readyList){var fn,i=0;while((fn=readyList[i++])){fn.call(document,jQuery);}
readyList=null;}
if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");}}},bindReady:function(){if(readyBound){return;}
readyBound=true;if(document.readyState==="complete"){return jQuery.ready();}
if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",jQuery.ready,false);}else if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",jQuery.ready);var toplevel=false;try{toplevel=window.frameElement==null;}catch(e){}
if(document.documentElement.doScroll&&toplevel){doScrollCheck();}}},isFunction:function(obj){return toString.call(obj)==="[object Function]";},isArray:function(obj){return toString.call(obj)==="[object Array]";},isPlainObject:function(obj){if(!obj||toString.call(obj)!=="[object Object]"||obj.nodeType||obj.setInterval){return false;}
if(obj.constructor&&!hasOwnProperty.call(obj,"constructor")&&!hasOwnProperty.call(obj.constructor.prototype,"isPrototypeOf")){return false;}
var key;for(key in obj){}
return key===undefined||hasOwnProperty.call(obj,key);},isEmptyObject:function(obj){for(var name in obj){return false;}
return true;},error:function(msg){throw msg;},parseJSON:function(data){if(typeof data!=="string"||!data){return null;}
data=jQuery.trim(data);if(/^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return window.JSON&&window.JSON.parse?window.JSON.parse(data):(new Function("return "+data))();}else{jQuery.error("Invalid JSON: "+data);}},noop:function(){},globalEval:function(data){if(data&&rnotwhite.test(data)){var head=document.getElementsByTagName("head")[0]||document.documentElement,script=document.createElement("script");script.type="text/javascript";if(jQuery.support.scriptEval){script.appendChild(document.createTextNode(data));}else{script.text=data;}
head.insertBefore(script,head.firstChild);head.removeChild(script);}},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()===name.toUpperCase();},each:function(object,callback,args){var name,i=0,length=object.length,isObj=length===undefined||jQuery.isFunction(object);if(args){if(isObj){for(name in object){if(callback.apply(object[name],args)===false){break;}}}else{for(;i<length;){if(callback.apply(object[i++],args)===false){break;}}}}else{if(isObj){for(name in object){if(callback.call(object[name],name,object[name])===false){break;}}}else{for(var value=object[0];i<length&&callback.call(value,i,value)!==false;value=object[++i]){}}}
return object;},trim:function(text){return(text||"").replace(rtrim,"");},makeArray:function(array,results){var ret=results||[];if(array!=null){if(array.length==null||typeof array==="string"||jQuery.isFunction(array)||(typeof array!=="function"&&array.setInterval)){push.call(ret,array);}else{jQuery.merge(ret,array);}}
return ret;},inArray:function(elem,array){if(array.indexOf){return array.indexOf(elem);}
for(var i=0,length=array.length;i<length;i++){if(array[i]===elem){return i;}}
return-1;},merge:function(first,second){var i=first.length,j=0;if(typeof second.length==="number"){for(var l=second.length;j<l;j++){first[i++]=second[j];}}else{while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,inv){var ret=[];for(var i=0,length=elems.length;i<length;i++){if(!inv!==!callback(elems[i],i)){ret.push(elems[i]);}}
return ret;},map:function(elems,callback,arg){var ret=[],value;for(var i=0,length=elems.length;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}
return ret.concat.apply([],ret);},guid:1,proxy:function(fn,proxy,thisObject){if(arguments.length===2){if(typeof proxy==="string"){thisObject=fn;fn=thisObject[proxy];proxy=undefined;}else if(proxy&&!jQuery.isFunction(proxy)){thisObject=proxy;proxy=undefined;}}
if(!proxy&&fn){proxy=function(){return fn.apply(thisObject||this,arguments);};}
if(fn){proxy.guid=fn.guid=fn.guid||proxy.guid||jQuery.guid++;}
return proxy;},uaMatch:function(ua){ua=ua.toLowerCase();var match=/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||!/compatible/.test(ua)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua)||[];return{browser:match[1]||"",version:match[2]||"0"};},browser:{}});browserMatch=jQuery.uaMatch(userAgent);if(browserMatch.browser){jQuery.browser[browserMatch.browser]=true;jQuery.browser.version=browserMatch.version;}
if(jQuery.browser.webkit){jQuery.browser.safari=true;}
if(indexOf){jQuery.inArray=function(elem,array){return indexOf.call(array,elem);};}
rootjQuery=jQuery(document);if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);jQuery.ready();};}else if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);jQuery.ready();}};}
function doScrollCheck(){if(jQuery.isReady){return;}
try{document.documentElement.doScroll("left");}catch(error){setTimeout(doScrollCheck,1);return;}
jQuery.ready();}
function evalScript(i,elem){if(elem.src){jQuery.ajax({url:elem.src,async:false,dataType:"script"});}else{jQuery.globalEval(elem.text||elem.textContent||elem.innerHTML||"");}
if(elem.parentNode){elem.parentNode.removeChild(elem);}}
function access(elems,key,value,exec,fn,pass){var length=elems.length;if(typeof key==="object"){for(var k in key){access(elems,k,key[k],exec,fn,value);}
return elems;}
if(value!==undefined){exec=!pass&&exec&&jQuery.isFunction(value);for(var i=0;i<length;i++){fn(elems[i],key,exec?value.call(elems[i],i,fn(elems[i],key)):value,pass);}
return elems;}
return length?fn(elems[0],key):undefined;}
function now(){return(new Date).getTime();}
(function(){jQuery.support={};var root=document.documentElement,script=document.createElement("script"),div=document.createElement("div"),id="script"+now();div.style.display="none";div.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var all=div.getElementsByTagName("*"),a=div.getElementsByTagName("a")[0];if(!all||!all.length||!a){return;}
jQuery.support={leadingWhitespace:div.firstChild.nodeType===3,tbody:!div.getElementsByTagName("tbody").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/red/.test(a.getAttribute("style")),hrefNormalized:a.getAttribute("href")==="/a",opacity:/^0.55$/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,checkOn:div.getElementsByTagName("input")[0].value==="on",optSelected:document.createElement("select").appendChild(document.createElement("option")).selected,parentNode:div.removeChild(div.appendChild(document.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};script.type="text/javascript";try{script.appendChild(document.createTextNode("window."+id+"=1;"));}catch(e){}
root.insertBefore(script,root.firstChild);if(window[id]){jQuery.support.scriptEval=true;delete window[id];}
try{delete script.test;}catch(e){jQuery.support.deleteExpando=false;}
root.removeChild(script);if(div.attachEvent&&div.fireEvent){div.attachEvent("onclick",function click(){jQuery.support.noCloneEvent=false;div.detachEvent("onclick",click);});div.cloneNode(true).fireEvent("onclick");}
div=document.createElement("div");div.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var fragment=document.createDocumentFragment();fragment.appendChild(div.firstChild);jQuery.support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;jQuery(function(){var div=document.createElement("div");div.style.width=div.style.paddingLeft="1px";document.body.appendChild(div);jQuery.boxModel=jQuery.support.boxModel=div.offsetWidth===2;document.body.removeChild(div).style.display='none';div=null;});var eventSupported=function(eventName){var el=document.createElement("div");eventName="on"+eventName;var isSupported=(eventName in el);if(!isSupported){el.setAttribute(eventName,"return;");isSupported=typeof el[eventName]==="function";}
el=null;return isSupported;};jQuery.support.submitBubbles=eventSupported("submit");jQuery.support.changeBubbles=eventSupported("change");root=script=div=all=a=null;})();jQuery.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var expando="jQuery"+now(),uuid=0,windowData={};jQuery.extend({cache:{},expando:expando,noData:{"embed":true,"object":true,"applet":true},data:function(elem,name,data){if(elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()]){return;}
elem=elem==window?windowData:elem;var id=elem[expando],cache=jQuery.cache,thisCache;if(!id&&typeof name==="string"&&data===undefined){return null;}
if(!id){id=++uuid;}
if(typeof name==="object"){elem[expando]=id;thisCache=cache[id]=jQuery.extend(true,{},name);}else if(!cache[id]){elem[expando]=id;cache[id]={};}
thisCache=cache[id];if(data!==undefined){thisCache[name]=data;}
return typeof name==="string"?thisCache[name]:thisCache;},removeData:function(elem,name){if(elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()]){return;}
elem=elem==window?windowData:elem;var id=elem[expando],cache=jQuery.cache,thisCache=cache[id];if(name){if(thisCache){delete thisCache[name];if(jQuery.isEmptyObject(thisCache)){jQuery.removeData(elem);}}}else{if(jQuery.support.deleteExpando){delete elem[jQuery.expando];}else if(elem.removeAttribute){elem.removeAttribute(jQuery.expando);}
delete cache[id];}}});jQuery.fn.extend({data:function(key,value){if(typeof key==="undefined"&&this.length){return jQuery.data(this[0]);}else if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
var parts=key.split(".");parts[1]=parts[1]?"."+parts[1]:"";if(value===undefined){var data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);if(data===undefined&&this.length){data=jQuery.data(this[0],key);}
return data===undefined&&parts[1]?this.data(parts[0]):data;}else{return this.trigger("setData"+parts[1]+"!",[parts[0],value]).each(function(){jQuery.data(this,key,value);});}},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});jQuery.extend({queue:function(elem,type,data){if(!elem){return;}
type=(type||"fx")+"queue";var q=jQuery.data(elem,type);if(!data){return q||[];}
if(!q||jQuery.isArray(data)){q=jQuery.data(elem,type,jQuery.makeArray(data));}else{q.push(data);}
return q;},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),fn=queue.shift();if(fn==="inprogress"){fn=queue.shift();}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
fn.call(elem,function(){jQuery.dequeue(elem,type);});}}});jQuery.fn.extend({queue:function(type,data){if(typeof type!=="string"){data=type;type="fx";}
if(data===undefined){return jQuery.queue(this[0],type);}
return this.each(function(i,elem){var queue=jQuery.queue(this,type,data);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(){var elem=this;setTimeout(function(){jQuery.dequeue(elem,type);},time);});},clearQueue:function(type){return this.queue(type||"fx",[]);}});var rclass=/[\n\t]/g,rspace=/\s+/,rreturn=/\r/g,rspecialurl=/href|src|style/,rtype=/(button|input)/i,rfocusable=/(button|input|object|select|textarea)/i,rclickable=/^(a|area)$/i,rradiocheck=/radio|checkbox/;jQuery.fn.extend({attr:function(name,value){return access(this,name,value,true,jQuery.attr);},removeAttr:function(name,fn){return this.each(function(){jQuery.attr(this,name,"");if(this.nodeType===1){this.removeAttribute(name);}});},addClass:function(value){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);self.addClass(value.call(this,i,self.attr("class")));});}
if(value&&typeof value==="string"){var classNames=(value||"").split(rspace);for(var i=0,l=this.length;i<l;i++){var elem=this[i];if(elem.nodeType===1){if(!elem.className){elem.className=value;}else{var className=" "+elem.className+" ",setClass=elem.className;for(var c=0,cl=classNames.length;c<cl;c++){if(className.indexOf(" "+classNames[c]+" ")<0){setClass+=" "+classNames[c];}}
elem.className=jQuery.trim(setClass);}}}}
return this;},removeClass:function(value){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);self.removeClass(value.call(this,i,self.attr("class")));});}
if((value&&typeof value==="string")||value===undefined){var classNames=(value||"").split(rspace);for(var i=0,l=this.length;i<l;i++){var elem=this[i];if(elem.nodeType===1&&elem.className){if(value){var className=(" "+elem.className+" ").replace(rclass," ");for(var c=0,cl=classNames.length;c<cl;c++){className=className.replace(" "+classNames[c]+" "," ");}
elem.className=jQuery.trim(className);}else{elem.className="";}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value,isBool=typeof stateVal==="boolean";if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);self.toggleClass(value.call(this,i,self.attr("class"),stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),state=stateVal,classNames=value.split(rspace);while((className=classNames[i++])){state=isBool?state:!self.hasClass(className);self[state?"addClass":"removeClass"](className);}}else if(type==="undefined"||type==="boolean"){if(this.className){jQuery.data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery.data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ";for(var i=0,l=this.length;i<l;i++){if((" "+this[i].className+" ").replace(rclass," ").indexOf(className)>-1){return true;}}
return false;},val:function(value){if(value===undefined){var elem=this[0];if(elem){if(jQuery.nodeName(elem,"option")){return(elem.attributes.value||{}).specified?elem.value:elem.text;}
if(jQuery.nodeName(elem,"select")){var index=elem.selectedIndex,values=[],options=elem.options,one=elem.type==="select-one";if(index<0){return null;}
for(var i=one?index:0,max=one?index+1:options.length;i<max;i++){var option=options[i];if(option.selected){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;}
if(rradiocheck.test(elem.type)&&!jQuery.support.checkOn){return elem.getAttribute("value")===null?"on":elem.value;}
return(elem.value||"").replace(rreturn,"");}
return undefined;}
var isFunction=jQuery.isFunction(value);return this.each(function(i){var self=jQuery(this),val=value;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,self.val());}
if(typeof val==="number"){val+="";}
if(jQuery.isArray(val)&&rradiocheck.test(this.type)){this.checked=jQuery.inArray(self.val(),val)>=0;}else if(jQuery.nodeName(this,"select")){var values=jQuery.makeArray(val);jQuery("option",this).each(function(){this.selected=jQuery.inArray(jQuery(this).val(),values)>=0;});if(!values.length){this.selectedIndex=-1;}}else{this.value=val;}});}});jQuery.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(elem,name,value,pass){if(!elem||elem.nodeType===3||elem.nodeType===8){return undefined;}
if(pass&&name in jQuery.attrFn){return jQuery(elem)[name](value);}
var notxml=elem.nodeType!==1||!jQuery.isXMLDoc(elem),set=value!==undefined;name=notxml&&jQuery.props[name]||name;if(elem.nodeType===1){var special=rspecialurl.test(name);if(name==="selected"&&!jQuery.support.optSelected){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}
if(name in elem&&notxml&&!special){if(set){if(name==="type"&&rtype.test(elem.nodeName)&&elem.parentNode){jQuery.error("type property can't be changed");}
elem[name]=value;}
if(jQuery.nodeName(elem,"form")&&elem.getAttributeNode(name)){return elem.getAttributeNode(name).nodeValue;}
if(name==="tabIndex"){var attributeNode=elem.getAttributeNode("tabIndex");return attributeNode&&attributeNode.specified?attributeNode.value:rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:undefined;}
return elem[name];}
if(!jQuery.support.style&&notxml&&name==="style"){if(set){elem.style.cssText=""+value;}
return elem.style.cssText;}
if(set){elem.setAttribute(name,""+value);}
var attr=!jQuery.support.hrefNormalized&&notxml&&special?elem.getAttribute(name,2):elem.getAttribute(name);return attr===null?undefined:attr;}
return jQuery.style(elem,name,value);}});var rnamespaces=/\.(.*)$/,fcleanup=function(nm){return nm.replace(/[^\w\s\.\|`]/g,function(ch){return"\\"+ch;});};jQuery.event={add:function(elem,types,handler,data){if(elem.nodeType===3||elem.nodeType===8){return;}
if(elem.setInterval&&(elem!==window&&!elem.frameElement)){elem=window;}
var handleObjIn,handleObj;if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;}
if(!handler.guid){handler.guid=jQuery.guid++;}
var elemData=jQuery.data(elem);if(!elemData){return;}
var events=elemData.events=elemData.events||{},eventHandle=elemData.handle,eventHandle;if(!eventHandle){elemData.handle=eventHandle=function(){return typeof jQuery!=="undefined"&&!jQuery.event.triggered?jQuery.event.handle.apply(eventHandle.elem,arguments):undefined;};}
eventHandle.elem=elem;types=types.split(" ");var type,i=0,namespaces;while((type=types[i++])){handleObj=handleObjIn?jQuery.extend({},handleObjIn):{handler:handler,data:data};if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();handleObj.namespace=namespaces.slice(0).sort().join(".");}else{namespaces=[];handleObj.namespace="";}
handleObj.type=type;handleObj.guid=handler.guid;var handlers=events[type],special=jQuery.event.special[type]||{};if(!handlers){handlers=events[type]=[];if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
handlers.push(handleObj);jQuery.event.global[type]=true;}
elem=null;},global:{},remove:function(elem,types,handler,pos){if(elem.nodeType===3||elem.nodeType===8){return;}
var ret,type,fn,i=0,all,namespaces,namespace,special,eventType,handleObj,origType,elemData=jQuery.data(elem),events=elemData&&elemData.events;if(!elemData||!events){return;}
if(types&&types.type){handler=types.handler;types=types.type;}
if(!types||typeof types==="string"&&types.charAt(0)==="."){types=types||"";for(type in events){jQuery.event.remove(elem,type+types);}
return;}
types=types.split(" ");while((type=types[i++])){origType=type;handleObj=null;all=type.indexOf(".")<0;namespaces=[];if(!all){namespaces=type.split(".");type=namespaces.shift();namespace=new RegExp("(^|\\.)"+
jQuery.map(namespaces.slice(0).sort(),fcleanup).join("\\.(?:.*\\.)?")+"(\\.|$)")}
eventType=events[type];if(!eventType){continue;}
if(!handler){for(var j=0;j<eventType.length;j++){handleObj=eventType[j];if(all||namespace.test(handleObj.namespace)){jQuery.event.remove(elem,origType,handleObj.handler,j);eventType.splice(j--,1);}}
continue;}
special=jQuery.event.special[type]||{};for(var j=pos||0;j<eventType.length;j++){handleObj=eventType[j];if(handler.guid===handleObj.guid){if(all||namespace.test(handleObj.namespace)){if(pos==null){eventType.splice(j--,1);}
if(special.remove){special.remove.call(elem,handleObj);}}
if(pos!=null){break;}}}
if(eventType.length===0||pos!=null&&eventType.length===1){if(!special.teardown||special.teardown.call(elem,namespaces)===false){removeEvent(elem,type,elemData.handle);}
ret=null;delete events[type];}}
if(jQuery.isEmptyObject(events)){var handle=elemData.handle;if(handle){handle.elem=null;}
delete elemData.events;delete elemData.handle;if(jQuery.isEmptyObject(elemData)){jQuery.removeData(elem);}}},trigger:function(event,data,elem){var type=event.type||event,bubbling=arguments[3];if(!bubbling){event=typeof event==="object"?event[expando]?event:jQuery.extend(jQuery.Event(type),event):jQuery.Event(type);if(type.indexOf("!")>=0){event.type=type=type.slice(0,-1);event.exclusive=true;}
if(!elem){event.stopPropagation();if(jQuery.event.global[type]){jQuery.each(jQuery.cache,function(){if(this.events&&this.events[type]){jQuery.event.trigger(event,data,this.handle.elem);}});}}
if(!elem||elem.nodeType===3||elem.nodeType===8){return undefined;}
event.result=undefined;event.target=elem;data=jQuery.makeArray(data);data.unshift(event);}
event.currentTarget=elem;var handle=jQuery.data(elem,"handle");if(handle){handle.apply(elem,data);}
var parent=elem.parentNode||elem.ownerDocument;try{if(!(elem&&elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()])){if(elem["on"+type]&&elem["on"+type].apply(elem,data)===false){event.result=false;}}}catch(e){}
if(!event.isPropagationStopped()&&parent){jQuery.event.trigger(event,data,parent,true);}else if(!event.isDefaultPrevented()){var target=event.target,old,isClick=jQuery.nodeName(target,"a")&&type==="click",special=jQuery.event.special[type]||{};if((!special._default||special._default.call(elem,event)===false)&&!isClick&&!(target&&target.nodeName&&jQuery.noData[target.nodeName.toLowerCase()])){try{if(target[type]){old=target["on"+type];if(old){target["on"+type]=null;}
jQuery.event.triggered=true;target[type]();}}catch(e){}
if(old){target["on"+type]=old;}
jQuery.event.triggered=false;}}},handle:function(event){var all,handlers,namespaces,namespace,events;event=arguments[0]=jQuery.event.fix(event||window.event);event.currentTarget=this;all=event.type.indexOf(".")<0&&!event.exclusive;if(!all){namespaces=event.type.split(".");event.type=namespaces.shift();namespace=new RegExp("(^|\\.)"+namespaces.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)");}
var events=jQuery.data(this,"events"),handlers=events[event.type];if(events&&handlers){handlers=handlers.slice(0);for(var j=0,l=handlers.length;j<l;j++){var handleObj=handlers[j];if(all||namespace.test(handleObj.namespace)){event.handler=handleObj.handler;event.data=handleObj.data;event.handleObj=handleObj;var ret=handleObj.handler.apply(this,arguments);if(ret!==undefined){event.result=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}
if(event.isImmediatePropagationStopped()){break;}}}}
return event.result;},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(event){if(event[expando]){return event;}
var originalEvent=event;event=jQuery.Event(originalEvent);for(var i=this.props.length,prop;i;){prop=this.props[--i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=event.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
if(!event.relatedTarget&&event.fromElement){event.relatedTarget=event.fromElement===event.target?event.toElement:event.fromElement;}
if(event.pageX==null&&event.clientX!=null){var doc=document.documentElement,body=document.body;event.pageX=event.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=event.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.which&&((event.charCode||event.charCode===0)?event.charCode:event.keyCode)){event.which=event.charCode||event.keyCode;}
if(!event.metaKey&&event.ctrlKey){event.metaKey=event.ctrlKey;}
if(!event.which&&event.button!==undefined){event.which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)));}
return event;},guid:1E8,proxy:jQuery.proxy,special:{ready:{setup:jQuery.bindReady,teardown:jQuery.noop},live:{add:function(handleObj){jQuery.event.add(this,handleObj.origType,jQuery.extend({},handleObj,{handler:liveHandler}));},remove:function(handleObj){var remove=true,type=handleObj.origType.replace(rnamespaces,"");jQuery.each(jQuery.data(this,"events").live||[],function(){if(type===this.origType.replace(rnamespaces,"")){remove=false;return false;}});if(remove){jQuery.event.remove(this,handleObj.origType,liveHandler);}}},beforeunload:{setup:function(data,namespaces,eventHandle){if(this.setInterval){this.onbeforeunload=eventHandle;}
return false;},teardown:function(namespaces,eventHandle){if(this.onbeforeunload===eventHandle){this.onbeforeunload=null;}}}}};var removeEvent=document.removeEventListener?function(elem,type,handle){elem.removeEventListener(type,handle,false);}:function(elem,type,handle){elem.detachEvent("on"+type,handle);};jQuery.Event=function(src){if(!this.preventDefault){return new jQuery.Event(src);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;}else{this.type=src;}
this.timeStamp=now();this[expando]=true;};function returnFalse(){return false;}
function returnTrue(){return true;}
jQuery.Event.prototype={preventDefault:function(){this.isDefaultPrevented=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.preventDefault){e.preventDefault();}
e.returnValue=false;},stopPropagation:function(){this.isPropagationStopped=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};var withinElement=function(event){var parent=event.relatedTarget;try{while(parent&&parent!==this){parent=parent.parentNode;}
if(parent!==this){event.type=event.data;jQuery.event.handle.apply(this,arguments);}}catch(e){}},delegate=function(event){event.type=event.data;jQuery.event.handle.apply(this,arguments);};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={setup:function(data){jQuery.event.add(this,fix,data&&data.selector?delegate:withinElement,orig);},teardown:function(data){jQuery.event.remove(this,fix,data&&data.selector?delegate:withinElement);}};});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(data,namespaces){if(this.nodeName.toLowerCase()!=="form"){jQuery.event.add(this,"click.specialSubmit",function(e){var elem=e.target,type=elem.type;if((type==="submit"||type==="image")&&jQuery(elem).closest("form").length){return trigger("submit",this,arguments);}});jQuery.event.add(this,"keypress.specialSubmit",function(e){var elem=e.target,type=elem.type;if((type==="text"||type==="password")&&jQuery(elem).closest("form").length&&e.keyCode===13){return trigger("submit",this,arguments);}});}else{return false;}},teardown:function(namespaces){jQuery.event.remove(this,".specialSubmit");}};}
if(!jQuery.support.changeBubbles){var formElems=/textarea|input|select/i,changeFilters,getVal=function(elem){var type=elem.type,val=elem.value;if(type==="radio"||type==="checkbox"){val=elem.checked;}else if(type==="select-multiple"){val=elem.selectedIndex>-1?jQuery.map(elem.options,function(elem){return elem.selected;}).join("-"):"";}else if(elem.nodeName.toLowerCase()==="select"){val=elem.selectedIndex;}
return val;},testChange=function testChange(e){var elem=e.target,data,val;if(!formElems.test(elem.nodeName)||elem.readOnly){return;}
data=jQuery.data(elem,"_change_data");val=getVal(elem);if(e.type!=="focusout"||elem.type!=="radio"){jQuery.data(elem,"_change_data",val);}
if(data===undefined||val===data){return;}
if(data!=null||val){e.type="change";return jQuery.event.trigger(e,arguments[1],elem);}};jQuery.event.special.change={filters:{focusout:testChange,click:function(e){var elem=e.target,type=elem.type;if(type==="radio"||type==="checkbox"||elem.nodeName.toLowerCase()==="select"){return testChange.call(this,e);}},keydown:function(e){var elem=e.target,type=elem.type;if((e.keyCode===13&&elem.nodeName.toLowerCase()!=="textarea")||(e.keyCode===32&&(type==="checkbox"||type==="radio"))||type==="select-multiple"){return testChange.call(this,e);}},beforeactivate:function(e){var elem=e.target;jQuery.data(elem,"_change_data",getVal(elem));}},setup:function(data,namespaces){if(this.type==="file"){return false;}
for(var type in changeFilters){jQuery.event.add(this,type+".specialChange",changeFilters[type]);}
return formElems.test(this.nodeName);},teardown:function(namespaces){jQuery.event.remove(this,".specialChange");return formElems.test(this.nodeName);}};changeFilters=jQuery.event.special.change.filters;}
function trigger(type,elem,args){args[0].type=type;return jQuery.event.handle.apply(elem,args);}
if(document.addEventListener){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){jQuery.event.special[fix]={setup:function(){this.addEventListener(orig,handler,true);},teardown:function(){this.removeEventListener(orig,handler,true);}};function handler(e){e=jQuery.event.fix(e);e.type=fix;return jQuery.event.handle.call(this,e);}});}
jQuery.each(["bind","one"],function(i,name){jQuery.fn[name]=function(type,data,fn){if(typeof type==="object"){for(var key in type){this[name](key,data,type[key],fn);}
return this;}
if(jQuery.isFunction(data)){fn=data;data=undefined;}
var handler=name==="one"?jQuery.proxy(fn,function(event){jQuery(this).unbind(event,handler);return fn.apply(this,arguments);}):fn;if(type==="unload"&&name!=="one"){this.one(type,data,fn);}else{for(var i=0,l=this.length;i<l;i++){jQuery.event.add(this[i],type,handler,data);}}
return this;};});jQuery.fn.extend({unbind:function(type,fn){if(typeof type==="object"&&!type.preventDefault){for(var key in type){this.unbind(key,type[key]);}}else{for(var i=0,l=this.length;i<l;i++){jQuery.event.remove(this[i],type,fn);}}
return this;},delegate:function(selector,types,data,fn){return this.live(types,data,fn,selector);},undelegate:function(selector,types,fn){if(arguments.length===0){return this.unbind("live");}else{return this.die(types,null,fn,selector);}},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){if(this[0]){var event=jQuery.Event(type);event.preventDefault();event.stopPropagation();jQuery.event.trigger(event,data,this[0]);return event.result;}},toggle:function(fn){var args=arguments,i=1;while(i<args.length){jQuery.proxy(fn,args[i++]);}
return this.click(jQuery.proxy(fn,function(event){var lastToggle=(jQuery.data(this,"lastToggle"+fn.guid)||0)%i;jQuery.data(this,"lastToggle"+fn.guid,lastToggle+1);event.preventDefault();return args[lastToggle].apply(this,arguments)||false;}));},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});var liveMap={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};jQuery.each(["live","die"],function(i,name){jQuery.fn[name]=function(types,data,fn,origSelector){var type,i=0,match,namespaces,preType,selector=origSelector||this.selector,context=origSelector?this:jQuery(this.context);if(jQuery.isFunction(data)){fn=data;data=undefined;}
types=(types||"").split(" ");while((type=types[i++])!=null){match=rnamespaces.exec(type);namespaces="";if(match){namespaces=match[0];type=type.replace(rnamespaces,"");}
if(type==="hover"){types.push("mouseenter"+namespaces,"mouseleave"+namespaces);continue;}
preType=type;if(type==="focus"||type==="blur"){types.push(liveMap[type]+namespaces);type=type+namespaces;}else{type=(liveMap[type]||type)+namespaces;}
if(name==="live"){context.each(function(){jQuery.event.add(this,liveConvert(type,selector),{data:data,selector:selector,handler:fn,origType:type,origHandler:fn,preType:preType});});}else{context.unbind(liveConvert(type,selector),fn);}}
return this;}});function liveHandler(event){var stop,elems=[],selectors=[],args=arguments,related,match,handleObj,elem,j,i,l,data,events=jQuery.data(this,"events");if(event.liveFired===this||!events||!events.live||event.button&&event.type==="click"){return;}
event.liveFired=this;var live=events.live.slice(0);for(j=0;j<live.length;j++){handleObj=live[j];if(handleObj.origType.replace(rnamespaces,"")===event.type){selectors.push(handleObj.selector);}else{live.splice(j--,1);}}
match=jQuery(event.target).closest(selectors,event.currentTarget);for(i=0,l=match.length;i<l;i++){for(j=0;j<live.length;j++){handleObj=live[j];if(match[i].selector===handleObj.selector){elem=match[i].elem;related=null;if(handleObj.preType==="mouseenter"||handleObj.preType==="mouseleave"){related=jQuery(event.relatedTarget).closest(handleObj.selector)[0];}
if(!related||related!==elem){elems.push({elem:elem,handleObj:handleObj});}}}}
for(i=0,l=elems.length;i<l;i++){match=elems[i];event.currentTarget=match.elem;event.data=match.handleObj.data;event.handleObj=match.handleObj;if(match.handleObj.origHandler.apply(match.elem,args)===false){stop=false;break;}}
return stop;}
function liveConvert(type,selector){return"live."+(type&&type!=="*"?type+".":"")+selector.replace(/\./g,"`").replace(/ /g,"&");}
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error").split(" "),function(i,name){jQuery.fn[name]=function(fn){return fn?this.bind(name,fn):this.trigger(name);};if(jQuery.attrFn){jQuery.attrFn[name]=true;}});if(window.attachEvent&&!window.addEventListener){window.attachEvent("onunload",function(){for(var id in jQuery.cache){if(jQuery.cache[id].handle){try{jQuery.event.remove(jQuery.cache[id].handle.elem);}catch(e){}}}});}
(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true;[0,0].sort(function(){baseHasDuplicate=false;return 0;});var Sizzle=function(selector,context,results,seed){results=results||[];var origContext=context=context||document;if(context.nodeType!==1&&context.nodeType!==9){return[];}
if(!selector||typeof selector!=="string"){return results;}
var parts=[],m,set,checkSet,extra,prune=true,contextXML=isXML(context),soFar=selector;while((chunker.exec(""),m=chunker.exec(soFar))!==null){soFar=m[3];parts.push(m[1]);if(m[2]){extra=m[3];break;}}
if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context);}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);while(parts.length){selector=parts.shift();if(Expr.relative[selector]){selector+=parts.shift();}
set=posProcess(selector,set);}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){var ret=Sizzle.find(parts.shift(),context,contextXML);context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0];}
if(context){var ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;if(parts.length>0){checkSet=makeArray(set);}else{prune=false;}
while(parts.length){var cur=parts.pop(),pop=cur;if(!Expr.relative[cur]){cur="";}else{pop=parts.pop();}
if(pop==null){pop=context;}
Expr.relative[cur](checkSet,pop,contextXML);}}else{checkSet=parts=[];}}
if(!checkSet){checkSet=set;}
if(!checkSet){Sizzle.error(cur||selector);}
if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet);}else if(context&&context.nodeType===1){for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&contains(context,checkSet[i]))){results.push(set[i]);}}}else{for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i]);}}}}else{makeArray(checkSet,results);}
if(extra){Sizzle(extra,origContext,results,seed);Sizzle.uniqueSort(results);}
return results;};Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1);}}}}
return results;};Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set);};Sizzle.find=function(expr,context,isXML){var set,match;if(!expr){return[];}
for(var i=0,l=Expr.order.length;i<l;i++){var type=Expr.order[i],match;if((match=Expr.leftMatch[type].exec(expr))){var left=match[1];match.splice(1,1);if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(/\\/g,"");set=Expr.find[type](match,context,isXML);if(set!=null){expr=expr.replace(Expr.match[type],"");break;}}}}
if(!set){set=context.getElementsByTagName("*");}
return{set:set,expr:expr};};Sizzle.filter=function(expr,set,inplace,not){var old=expr,result=[],curLoop=set,match,anyFound,isXMLFilter=set&&set[0]&&isXML(set[0]);while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.leftMatch[type].exec(expr))!=null&&match[2]){var filter=Expr.filter[type],found,item,left=match[1];anyFound=false;match.splice(1,1);if(left.substr(left.length-1)==="\\"){continue;}
if(curLoop===result){result=[];}
if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);if(!match){anyFound=found=true;}else if(match===true){continue;}}
if(match){for(var i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);var pass=not^!!found;if(inplace&&found!=null){if(pass){anyFound=true;}else{curLoop[i]=false;}}else if(pass){result.push(item);anyFound=true;}}}}
if(found!==undefined){if(!inplace){curLoop=result;}
expr=expr.replace(Expr.match[type],"");if(!anyFound){return[];}
break;}}}
if(expr===old){if(anyFound==null){Sizzle.error(expr);}else{break;}}
old=expr;}
return curLoop;};Sizzle.error=function(msg){throw"Syntax error, unrecognized expression: "+msg;};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href");}},relative:{"+":function(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!/\W/.test(part),isPartStrNotTag=isPartStr&&!isTag;if(isTag){part=part.toLowerCase();}
for(var i=0,l=checkSet.length,elem;i<l;i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}
checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part;}}
if(isPartStrNotTag){Sizzle.filter(part,checkSet,true);}},">":function(checkSet,part){var isPartStr=typeof part==="string";if(isPartStr&&!/\W/.test(part)){part=part.toLowerCase();for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var parent=elem.parentNode;checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false;}}}else{for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part;}}
if(isPartStr){Sizzle.filter(part,checkSet,true);}}},"":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=part.toLowerCase();checkFn=dirNodeCheck;}
checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML);},"~":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=part.toLowerCase();checkFn=dirNodeCheck;}
checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML);}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?[m]:[];}},NAME:function(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i]);}}
return ret.length===0?null:ret;}},TAG:function(match,context){return context.getElementsByTagName(match[1]);}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(/\\/g,"")+" ";if(isXML){return match;}
for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem);}}else if(inplace){curLoop[i]=false;}}}
return false;},ID:function(match){return match[1].replace(/\\/g,"");},TAG:function(match,curLoop){return match[1].toLowerCase();},CHILD:function(match){if(match[1]==="nth"){var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);match[2]=(test[1]+(test[2]||1))-0;match[3]=test[3]-0;}
match[0]=done++;return match;},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1].replace(/\\/g,"");if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name];}
if(match[2]==="~="){match[4]=" "+match[4]+" ";}
return match;},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop);}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);if(!inplace){result.push.apply(result,ret);}
return false;}}else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true;}
return match;},POS:function(match){match.unshift(true);return match;}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden";},disabled:function(elem){return elem.disabled===true;},checked:function(elem){return elem.checked===true;},selected:function(elem){elem.parentNode.selectedIndex;return elem.selected===true;},parent:function(elem){return!!elem.firstChild;},empty:function(elem){return!elem.firstChild;},has:function(elem,i,match){return!!Sizzle(match[3],elem).length;},header:function(elem){return/h\d/i.test(elem.nodeName);},text:function(elem){return"text"===elem.type;},radio:function(elem){return"radio"===elem.type;},checkbox:function(elem){return"checkbox"===elem.type;},file:function(elem){return"file"===elem.type;},password:function(elem){return"password"===elem.type;},submit:function(elem){return"submit"===elem.type;},image:function(elem){return"image"===elem.type;},reset:function(elem){return"reset"===elem.type;},button:function(elem){return"button"===elem.type||elem.nodeName.toLowerCase()==="button";},input:function(elem){return/input|select|textarea|button/i.test(elem.nodeName);}},setFilters:{first:function(elem,i){return i===0;},last:function(elem,i,match,array){return i===array.length-1;},even:function(elem,i){return i%2===0;},odd:function(elem,i){return i%2===1;},lt:function(elem,i,match){return i<match[3]-0;},gt:function(elem,i,match){return i>match[3]-0;},nth:function(elem,i,match){return match[3]-0===i;},eq:function(elem,i,match){return match[3]-0===i;}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];if(filter){return filter(elem,i,match,array);}else if(name==="contains"){return(elem.textContent||elem.innerText||getText([elem])||"").indexOf(match[3])>=0;}else if(name==="not"){var not=match[3];for(var i=0,l=not.length;i<l;i++){if(not[i]===elem){return false;}}
return true;}else{Sizzle.error("Syntax error, unrecognized expression: "+name);}},CHILD:function(elem,match){var type=match[1],node=elem;switch(type){case'only':case'first':while((node=node.previousSibling)){if(node.nodeType===1){return false;}}
if(type==="first"){return true;}
node=elem;case'last':while((node=node.nextSibling)){if(node.nodeType===1){return false;}}
return true;case'nth':var first=match[2],last=match[3];if(first===1&&last===0){return true;}
var doneName=match[0],parent=elem.parentNode;if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count;}}
parent.sizcache=doneName;}
var diff=elem.nodeIndex-last;if(first===0){return diff===0;}else{return(diff%first===0&&diff/first>=0);}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match;},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===match;},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1;},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false;},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];if(filter){return filter(elem,i,match,array);}}}};var origPOS=Expr.match.POS;for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,function(all,num){return"\\"+(num-0+1);}));}
var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);if(results){results.push.apply(results,array);return results;}
return array;};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;}catch(e){makeArray=function(array,results){var ret=results||[];if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array);}else{if(typeof array.length==="number"){for(var i=0,l=array.length;i<l;i++){ret.push(array[i]);}}else{for(var i=0;array[i];i++){ret.push(array[i]);}}}
return ret;};}
var sortOrder;if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){hasDuplicate=true;}
return a.compareDocumentPosition?-1:1;}
var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;if(ret===0){hasDuplicate=true;}
return ret;};}else if("sourceIndex"in document.documentElement){sortOrder=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){hasDuplicate=true;}
return a.sourceIndex?-1:1;}
var ret=a.sourceIndex-b.sourceIndex;if(ret===0){hasDuplicate=true;}
return ret;};}else if(document.createRange){sortOrder=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){hasDuplicate=true;}
return a.ownerDocument?-1:1;}
var aRange=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();aRange.setStart(a,0);aRange.setEnd(a,0);bRange.setStart(b,0);bRange.setEnd(b,0);var ret=aRange.compareBoundaryPoints(Range.START_TO_END,bRange);if(ret===0){hasDuplicate=true;}
return ret;};}
function getText(elems){var ret="",elem;for(var i=0;elems[i];i++){elem=elems[i];if(elem.nodeType===3||elem.nodeType===4){ret+=elem.nodeValue;}else if(elem.nodeType!==8){ret+=getText(elem.childNodes);}}
return ret;}
(function(){var form=document.createElement("div"),id="script"+(new Date).getTime();form.innerHTML="<a name='"+id+"'/>";var root=document.documentElement;root.insertBefore(form,root.firstChild);if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];}};Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===match;};}
root.removeChild(form);root=form=null;})();(function(){var div=document.createElement("div");div.appendChild(document.createComment(""));if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);if(match[1]==="*"){var tmp=[];for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i]);}}
results=tmp;}
return results;};}
div.innerHTML="<a href='#'></a>";if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2);};}
div=null;})();if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div");div.innerHTML="<p class='TEST'></p>";if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return;}
Sizzle=function(query,context,extra,seed){context=context||document;if(!seed&&context.nodeType===9&&!isXML(context)){try{return makeArray(context.querySelectorAll(query),extra);}catch(e){}}
return oldSizzle(query,context,extra,seed);};for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop];}
div=null;})();}
(function(){var div=document.createElement("div");div.innerHTML="<div class='test e'></div><div class='test'></div>";if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return;}
div.lastChild.className="e";if(div.getElementsByClassName("e").length===1){return;}
Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1]);}};div=null;})();function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;elem.sizset=i;}
if(elem.nodeName.toLowerCase()===cur){match=elem;break;}
elem=elem[dir];}
checkSet[i]=match;}}}
function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;elem.sizset=i;}
if(typeof cur!=="string"){if(elem===cur){match=true;break;}}else if(Sizzle.filter(cur,[elem]).length>0){match=elem;break;}}
elem=elem[dir];}
checkSet[i]=match;}}}
var contains=document.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16);}:function(a,b){return a!==b&&(a.contains?a.contains(b):true);};var isXML=function(elem){var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};var posProcess=function(selector,context){var tmpSet=[],later="",match,root=context.nodeType?[context]:context;while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];selector=selector.replace(Expr.match.PSEUDO,"");}
selector=Expr.relative[selector]?selector+"*":selector;for(var i=0,l=root.length;i<l;i++){Sizzle(selector,root[i],tmpSet);}
return Sizzle.filter(later,tmpSet);};jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.filters;jQuery.unique=Sizzle.uniqueSort;jQuery.text=getText;jQuery.isXMLDoc=isXML;jQuery.contains=contains;return;window.Sizzle=Sizzle;})();var runtil=/Until$/,rparentsprev=/^(?:parents|prevUntil|prevAll)/,rmultiselector=/,/,slice=Array.prototype.slice;var winnow=function(elements,qualifier,keep){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)===keep;});}else if(qualifier.nodeType){return jQuery.grep(elements,function(elem,i){return(elem===qualifier)===keep;});}else if(typeof qualifier==="string"){var filtered=jQuery.grep(elements,function(elem){return elem.nodeType===1;});if(isSimple.test(qualifier)){return jQuery.filter(qualifier,filtered,!keep);}else{qualifier=jQuery.filter(qualifier,filtered);}}
return jQuery.grep(elements,function(elem,i){return(jQuery.inArray(elem,qualifier)>=0)===keep;});};jQuery.fn.extend({find:function(selector){var ret=this.pushStack("","find",selector),length=0;for(var i=0,l=this.length;i<l;i++){length=ret.length;jQuery.find(selector,this[i],ret);if(i>0){for(var n=length;n<ret.length;n++){for(var r=0;r<length;r++){if(ret[r]===ret[n]){ret.splice(n--,1);break;}}}}}
return ret;},has:function(target){var targets=jQuery(target);return this.filter(function(){for(var i=0,l=targets.length;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function(selector){return this.pushStack(winnow(this,selector,false),"not",selector);},filter:function(selector){return this.pushStack(winnow(this,selector,true),"filter",selector);},is:function(selector){return!!selector&&jQuery.filter(selector,this).length>0;},closest:function(selectors,context){if(jQuery.isArray(selectors)){var ret=[],cur=this[0],match,matches={},selector;if(cur&&selectors.length){for(var i=0,l=selectors.length;i<l;i++){selector=selectors[i];if(!matches[selector]){matches[selector]=jQuery.expr.match.POS.test(selector)?jQuery(selector,context||this.context):selector;}}
while(cur&&cur.ownerDocument&&cur!==context){for(selector in matches){match=matches[selector];if(match.jquery?match.index(cur)>-1:jQuery(cur).is(match)){ret.push({selector:selector,elem:cur});delete matches[selector];}}
cur=cur.parentNode;}}
return ret;}
var pos=jQuery.expr.match.POS.test(selectors)?jQuery(selectors,context||this.context):null;return this.map(function(i,cur){while(cur&&cur.ownerDocument&&cur!==context){if(pos?pos.index(cur)>-1:jQuery(cur).is(selectors)){return cur;}
cur=cur.parentNode;}
return null;});},index:function(elem){if(!elem||typeof elem==="string"){return jQuery.inArray(this[0],elem?jQuery(elem):this.parent().children());}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context||this.context):jQuery.makeArray(selector),all=jQuery.merge(this.get(),set);return this.pushStack(isDisconnected(set[0])||isDisconnected(all[0])?all:jQuery.unique(all));},andSelf:function(){return this.add(this.prevObject);}});function isDisconnected(node){return!node||!node.parentNode||node.parentNode.nodeType===11;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return jQuery.nth(elem,2,"nextSibling");},prev:function(elem){return jQuery.nth(elem,2,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(!runtil.test(name)){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
ret=this.length>1?jQuery.unique(ret):ret;if((this.length>1||rmultiselector.test(selector))&&rparentsprev.test(name)){ret=ret.reverse();}
return this.pushStack(ret,name,slice.call(arguments).join(","));};});jQuery.extend({filter:function(expr,elems,not){if(not){expr=":not("+expr+")";}
return jQuery.find.matches(expr,elems);},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},nth:function(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir]){if(cur.nodeType===1&&++num===result){break;}}
return cur;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});var rinlinejQuery=/ jQuery\d+="(?:\d+|null)"/g,rleadingWhitespace=/^\s+/,rxhtmlTag=/(<([\w:]+)[^>]*?)\/>/g,rselfClosing=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnocache=/<script|<object|<embed|<option|<style/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,fcloseTag=function(all,front,tag){return rselfClosing.test(tag)?all:front+"></"+tag+">";},wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;if(!jQuery.support.htmlSerialize){wrapMap._default=[1,"div<div>","</div>"];}
jQuery.fn.extend({text:function(text){if(jQuery.isFunction(text)){return this.each(function(i){var self=jQuery(this);self.text(text.call(this,i,self.text()));});}
if(typeof text!=="object"&&text!==undefined){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text));}
return jQuery.text(this);},wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();},append:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.insertBefore(elem,this.firstChild);}});},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this);});}else if(arguments.length){var set=jQuery(arguments[0]);set.push.apply(set,this.toArray());return this.pushStack(set,"before",arguments);}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});}else if(arguments.length){var set=this.pushStack(this,"after",arguments);set.push.apply(set,jQuery(arguments[0]).toArray());return set;}},remove:function(selector,keepData){for(var i=0,elem;(elem=this[i])!=null;i++){if(!selector||jQuery.filter(selector,[elem]).length){if(!keepData&&elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));jQuery.cleanData([elem]);}
if(elem.parentNode){elem.parentNode.removeChild(elem);}}}
return this;},empty:function(){for(var i=0,elem;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}}
return this;},clone:function(events){var ret=this.map(function(){if(!jQuery.support.noCloneEvent&&!jQuery.isXMLDoc(this)){var html=this.outerHTML,ownerDocument=this.ownerDocument;if(!html){var div=ownerDocument.createElement("div");div.appendChild(this.cloneNode(true));html=div.innerHTML;}
return jQuery.clean([html.replace(rinlinejQuery,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(rleadingWhitespace,"")],ownerDocument)[0];}else{return this.cloneNode(true);}});if(events===true){cloneCopyEvent(this,ret);cloneCopyEvent(this.find("*"),ret.find("*"));}
return ret;},html:function(value){if(value===undefined){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(rinlinejQuery,""):null;}else if(typeof value==="string"&&!rnocache.test(value)&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,fcloseTag);try{for(var i=0,l=this.length;i<l;i++){if(this[i].nodeType===1){jQuery.cleanData(this[i].getElementsByTagName("*"));this[i].innerHTML=value;}}}catch(e){this.empty().append(value);}}else if(jQuery.isFunction(value)){this.each(function(i){var self=jQuery(this),old=self.html();self.empty().append(function(){return value.call(this,i,old);});});}else{this.empty().append(value);}
return this;},replaceWith:function(value){if(this[0]&&this[0].parentNode){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this),old=self.html();self.replaceWith(value.call(this,i,old));});}
if(typeof value!=="string"){value=jQuery(value).detach();}
return this.each(function(){var next=this.nextSibling,parent=this.parentNode;jQuery(this).remove();if(next){jQuery(next).before(value);}else{jQuery(parent).append(value);}});}else{return this.pushStack(jQuery(jQuery.isFunction(value)?value():value),"replaceWith",value);}},detach:function(selector){return this.remove(selector,true);},domManip:function(args,table,callback){var results,first,value=args[0],scripts=[],fragment,parent;if(!jQuery.support.checkClone&&arguments.length===3&&typeof value==="string"&&rchecked.test(value)){return this.each(function(){jQuery(this).domManip(args,table,callback,true);});}
if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);args[0]=value.call(this,i,table?self.html():undefined);self.domManip(args,table,callback);});}
if(this[0]){parent=value&&value.parentNode;if(jQuery.support.parentNode&&parent&&parent.nodeType===11&&parent.childNodes.length===this.length){results={fragment:parent};}else{results=buildFragment(args,this,scripts);}
fragment=results.fragment;if(fragment.childNodes.length===1){first=fragment=fragment.firstChild;}else{first=fragment.firstChild;}
if(first){table=table&&jQuery.nodeName(first,"tr");for(var i=0,l=this.length;i<l;i++){callback.call(table?root(this[i],first):this[i],i>0||results.cacheable||this.length>1?fragment.cloneNode(true):fragment);}}
if(scripts.length){jQuery.each(scripts,evalScript);}}
return this;function root(elem,cur){return jQuery.nodeName(elem,"table")?(elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody"))):elem;}}});function cloneCopyEvent(orig,ret){var i=0;ret.each(function(){if(this.nodeName!==(orig[i]&&orig[i].nodeName)){return;}
var oldData=jQuery.data(orig[i++]),curData=jQuery.data(this,oldData),events=oldData&&oldData.events;if(events){delete curData.handle;curData.events={};for(var type in events){for(var handler in events[type]){jQuery.event.add(this,type,events[type][handler],events[type][handler].data);}}}});}
function buildFragment(args,nodes,scripts){var fragment,cacheable,cacheresults,doc=(nodes&&nodes[0]?nodes[0].ownerDocument||nodes[0]:document);if(args.length===1&&typeof args[0]==="string"&&args[0].length<512&&doc===document&&!rnocache.test(args[0])&&(jQuery.support.checkClone||!rchecked.test(args[0]))){cacheable=true;cacheresults=jQuery.fragments[args[0]];if(cacheresults){if(cacheresults!==1){fragment=cacheresults;}}}
if(!fragment){fragment=doc.createDocumentFragment();jQuery.clean(args,doc,fragment,scripts);}
if(cacheable){jQuery.fragments[args[0]]=cacheresults?fragment:1;}
return{fragment:fragment,cacheable:cacheable};}
jQuery.fragments={};jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var ret=[],insert=jQuery(selector),parent=this.length===1&&this[0].parentNode;if(parent&&parent.nodeType===11&&parent.childNodes.length===1&&insert.length===1){insert[original](this[0]);return this;}else{for(var i=0,l=insert.length;i<l;i++){var elems=(i>0?this.clone(true):this).get();jQuery.fn[original].apply(jQuery(insert[i]),elems);ret=ret.concat(elems);}
return this.pushStack(ret,name,insert.selector);}};});jQuery.extend({clean:function(elems,context,fragment,scripts){context=context||document;if(typeof context.createElement==="undefined"){context=context.ownerDocument||context[0]&&context[0].ownerDocument||document;}
var ret=[];for(var i=0,elem;(elem=elems[i])!=null;i++){if(typeof elem==="number"){elem+="";}
if(!elem){continue;}
if(typeof elem==="string"&&!rhtml.test(elem)){elem=context.createTextNode(elem);}else if(typeof elem==="string"){elem=elem.replace(rxhtmlTag,fcloseTag);var tag=(rtagName.exec(elem)||["",""])[1].toLowerCase(),wrap=wrapMap[tag]||wrapMap._default,depth=wrap[0],div=context.createElement("div");div.innerHTML=wrap[1]+elem+wrap[2];while(depth--){div=div.lastChild;}
if(!jQuery.support.tbody){var hasBody=rtbody.test(elem),tbody=tag==="table"&&!hasBody?div.firstChild&&div.firstChild.childNodes:wrap[1]==="<table>"&&!hasBody?div.childNodes:[];for(var j=tbody.length-1;j>=0;--j){if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j]);}}}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]),div.firstChild);}
elem=div.childNodes;}
if(elem.nodeType){ret.push(elem);}else{ret=jQuery.merge(ret,elem);}}
if(fragment){for(var i=0;ret[i];i++){if(scripts&&jQuery.nodeName(ret[i],"script")&&(!ret[i].type||ret[i].type.toLowerCase()==="text/javascript")){scripts.push(ret[i].parentNode?ret[i].parentNode.removeChild(ret[i]):ret[i]);}else{if(ret[i].nodeType===1){ret.splice.apply(ret,[i+1,0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))));}
fragment.appendChild(ret[i]);}}}
return ret;},cleanData:function(elems){var data,id,cache=jQuery.cache,special=jQuery.event.special,deleteExpando=jQuery.support.deleteExpando;for(var i=0,elem;(elem=elems[i])!=null;i++){id=elem[jQuery.expando];if(id){data=cache[id];if(data.events){for(var type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{removeEvent(elem,type,data.handle);}}}
if(deleteExpando){delete elem[jQuery.expando];}else if(elem.removeAttribute){elem.removeAttribute(jQuery.expando);}
delete cache[id];}}}});var rexclude=/z-?index|font-?weight|opacity|zoom|line-?height/i,ralpha=/alpha\([^)]*\)/,ropacity=/opacity=([^)]*)/,rfloat=/float/i,rdashAlpha=/-([a-z])/ig,rupper=/([A-Z])/g,rnumpx=/^-?\d+(?:px)?$/i,rnum=/^-?\d/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssWidth=["Left","Right"],cssHeight=["Top","Bottom"],getComputedStyle=document.defaultView&&document.defaultView.getComputedStyle,styleFloat=jQuery.support.cssFloat?"cssFloat":"styleFloat",fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn.css=function(name,value){return access(this,name,value,true,function(elem,name,value){if(value===undefined){return jQuery.curCSS(elem,name);}
if(typeof value==="number"&&!rexclude.test(name)){value+="px";}
jQuery.style(elem,name,value);});};jQuery.extend({style:function(elem,name,value){if(!elem||elem.nodeType===3||elem.nodeType===8){return undefined;}
if((name==="width"||name==="height")&&parseFloat(value)<0){value=undefined;}
var style=elem.style||elem,set=value!==undefined;if(!jQuery.support.opacity&&name==="opacity"){if(set){style.zoom=1;var opacity=parseInt(value,10)+""==="NaN"?"":"alpha(opacity="+value*100+")";var filter=style.filter||jQuery.curCSS(elem,"filter")||"";style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):opacity;}
return style.filter&&style.filter.indexOf("opacity=")>=0?(parseFloat(ropacity.exec(style.filter)[1])/100)+"":"";}
if(rfloat.test(name)){name=styleFloat;}
name=name.replace(rdashAlpha,fcamelCase);if(set){style[name]=value;}
return style[name];},css:function(elem,name,force,extra){if(name==="width"||name==="height"){var val,props=cssShow,which=name==="width"?cssWidth:cssHeight;function getWH(){val=name==="width"?elem.offsetWidth:elem.offsetHeight;if(extra==="border"){return;}
jQuery.each(which,function(){if(!extra){val-=parseFloat(jQuery.curCSS(elem,"padding"+this,true))||0;}
if(extra==="margin"){val+=parseFloat(jQuery.curCSS(elem,"margin"+this,true))||0;}else{val-=parseFloat(jQuery.curCSS(elem,"border"+this+"Width",true))||0;}});}
if(elem.offsetWidth!==0){getWH();}else{jQuery.swap(elem,props,getWH);}
return Math.max(0,Math.round(val));}
return jQuery.curCSS(elem,name,force);},curCSS:function(elem,name,force){var ret,style=elem.style,filter;if(!jQuery.support.opacity&&name==="opacity"&&elem.currentStyle){ret=ropacity.test(elem.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";return ret===""?"1":ret;}
if(rfloat.test(name)){name=styleFloat;}
if(!force&&style&&style[name]){ret=style[name];}else if(getComputedStyle){if(rfloat.test(name)){name="float";}
name=name.replace(rupper,"-$1").toLowerCase();var defaultView=elem.ownerDocument.defaultView;if(!defaultView){return null;}
var computedStyle=defaultView.getComputedStyle(elem,null);if(computedStyle){ret=computedStyle.getPropertyValue(name);}
if(name==="opacity"&&ret===""){ret="1";}}else if(elem.currentStyle){var camelCase=name.replace(rdashAlpha,fcamelCase);ret=elem.currentStyle[name]||elem.currentStyle[camelCase];if(!rnumpx.test(ret)&&rnum.test(ret)){var left=style.left,rsLeft=elem.runtimeStyle.left;elem.runtimeStyle.left=elem.currentStyle.left;style.left=camelCase==="fontSize"?"1em":(ret||0);ret=style.pixelLeft+"px";style.left=left;elem.runtimeStyle.left=rsLeft;}}
return ret;},swap:function(elem,options,callback){var old={};for(var name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
callback.call(elem);for(var name in options){elem.style[name]=old[name];}}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){var width=elem.offsetWidth,height=elem.offsetHeight,skip=elem.nodeName.toLowerCase()==="tr";return width===0&&height===0&&!skip?true:width>0&&height>0&&!skip?false:jQuery.curCSS(elem,"display")==="none";};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};}
var jsc=now(),rscript=/<script(.|\s)*?\/script>/gi,rselectTextarea=/select|textarea/i,rinput=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,jsre=/=\?(&|$)/,rquery=/\?/,rts=/(\?|&)_=.*?(&|$)/,rurl=/^(\w+:)?\/\/([^\/?#]+)/,r20=/%20/g,_load=jQuery.fn.load;jQuery.fn.extend({load:function(url,params,callback){if(typeof url!=="string"){return _load.call(this,url);}else if(!this.length){return this;}
var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off);}
var type="GET";if(params){if(jQuery.isFunction(params)){callback=params;params=null;}else if(typeof params==="object"){params=jQuery.param(params,jQuery.ajaxSettings.traditional);type="POST";}}
var self=this;jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(res,status){if(status==="success"||status==="notmodified"){self.html(selector?jQuery("<div />").append(res.responseText.replace(rscript,"")).find(selector):res.responseText);}
if(callback){self.each(callback,[res.responseText,status,res]);}}});return this;},serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||rselectTextarea.test(this.nodeName)||rinput.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val,i){return{name:elem.name,value:val};}):{name:elem.name,value:val};}).get();}});jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f);};});jQuery.extend({get:function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=null;}
return jQuery.ajax({type:"GET",url:url,data:data,success:callback,dataType:type});},getScript:function(url,callback){return jQuery.get(url,null,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},post:function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data={};}
return jQuery.ajax({type:"POST",url:url,data:data,success:callback,dataType:type});},ajaxSetup:function(settings){jQuery.extend(jQuery.ajaxSettings,settings);},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:window.XMLHttpRequest&&(window.location.protocol!=="file:"||!window.ActiveXObject)?function(){return new window.XMLHttpRequest();}:function(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(origSettings){var s=jQuery.extend(true,{},jQuery.ajaxSettings,origSettings);var jsonp,status,data,callbackContext=origSettings&&origSettings.context||s,type=s.type.toUpperCase();if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
if(s.dataType==="jsonp"){if(type==="GET"){if(!jsre.test(s.url)){s.url+=(rquery.test(s.url)?"&":"?")+(s.jsonp||"callback")+"=?";}}else if(!s.data||!jsre.test(s.data)){s.data=(s.data?s.data+"&":"")+(s.jsonp||"callback")+"=?";}
s.dataType="json";}
if(s.dataType==="json"&&(s.data&&jsre.test(s.data)||jsre.test(s.url))){jsonp=s.jsonpCallback||("jsonp"+jsc++);if(s.data){s.data=(s.data+"").replace(jsre,"="+jsonp+"$1");}
s.url=s.url.replace(jsre,"="+jsonp+"$1");s.dataType="script";window[jsonp]=window[jsonp]||function(tmp){data=tmp;success();complete();window[jsonp]=undefined;try{delete window[jsonp];}catch(e){}
if(head){head.removeChild(script);}};}
if(s.dataType==="script"&&s.cache===null){s.cache=false;}
if(s.cache===false&&type==="GET"){var ts=now();var ret=s.url.replace(rts,"$1_="+ts+"$2");s.url=ret+((ret===s.url)?(rquery.test(s.url)?"&":"?")+"_="+ts:"");}
if(s.data&&type==="GET"){s.url+=(rquery.test(s.url)?"&":"?")+s.data;}
if(s.global&&!jQuery.active++){jQuery.event.trigger("ajaxStart");}
var parts=rurl.exec(s.url),remote=parts&&(parts[1]&&parts[1]!==location.protocol||parts[2]!==location.host);if(s.dataType==="script"&&type==="GET"&&remote){var head=document.getElementsByTagName("head")[0]||document.documentElement;var script=document.createElement("script");script.src=s.url;if(s.scriptCharset){script.charset=s.scriptCharset;}
if(!jsonp){var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){done=true;success();complete();script.onload=script.onreadystatechange=null;if(head&&script.parentNode){head.removeChild(script);}}};}
head.insertBefore(script,head.firstChild);return undefined;}
var requestDone=false;var xhr=s.xhr();if(!xhr){return;}
if(s.username){xhr.open(type,s.url,s.async,s.username,s.password);}else{xhr.open(type,s.url,s.async);}
try{if(s.data||origSettings&&origSettings.contentType){xhr.setRequestHeader("Content-Type",s.contentType);}
if(s.ifModified){if(jQuery.lastModified[s.url]){xhr.setRequestHeader("If-Modified-Since",jQuery.lastModified[s.url]);}
if(jQuery.etag[s.url]){xhr.setRequestHeader("If-None-Match",jQuery.etag[s.url]);}}
if(!remote){xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");}
xhr.setRequestHeader("Accept",s.dataType&&s.accepts[s.dataType]?s.accepts[s.dataType]+", */*":s.accepts._default);}catch(e){}
if(s.beforeSend&&s.beforeSend.call(callbackContext,xhr,s)===false){if(s.global&&!--jQuery.active){jQuery.event.trigger("ajaxStop");}
xhr.abort();return false;}
if(s.global){trigger("ajaxSend",[xhr,s]);}
var onreadystatechange=xhr.onreadystatechange=function(isTimeout){if(!xhr||xhr.readyState===0||isTimeout==="abort"){if(!requestDone){complete();}
requestDone=true;if(xhr){xhr.onreadystatechange=jQuery.noop;}}else if(!requestDone&&xhr&&(xhr.readyState===4||isTimeout==="timeout")){requestDone=true;xhr.onreadystatechange=jQuery.noop;status=isTimeout==="timeout"?"timeout":!jQuery.httpSuccess(xhr)?"error":s.ifModified&&jQuery.httpNotModified(xhr,s.url)?"notmodified":"success";var errMsg;if(status==="success"){try{data=jQuery.httpData(xhr,s.dataType,s);}catch(err){status="parsererror";errMsg=err;}}
if(status==="success"||status==="notmodified"){if(!jsonp){success();}}else{jQuery.handleError(s,xhr,status,errMsg);}
complete();if(isTimeout==="timeout"){xhr.abort();}
if(s.async){xhr=null;}}};try{var oldAbort=xhr.abort;xhr.abort=function(){if(xhr){oldAbort.call(xhr);}
onreadystatechange("abort");};}catch(e){}
if(s.async&&s.timeout>0){setTimeout(function(){if(xhr&&!requestDone){onreadystatechange("timeout");}},s.timeout);}
try{xhr.send(type==="POST"||type==="PUT"||type==="DELETE"?s.data:null);}catch(e){jQuery.handleError(s,xhr,null,e);complete();}
if(!s.async){onreadystatechange();}
function success(){if(s.success){s.success.call(callbackContext,data,status,xhr);}
if(s.global){trigger("ajaxSuccess",[xhr,s]);}}
function complete(){if(s.complete){s.complete.call(callbackContext,xhr,status);}
if(s.global){trigger("ajaxComplete",[xhr,s]);}
if(s.global&&!--jQuery.active){jQuery.event.trigger("ajaxStop");}}
function trigger(type,args){(s.context?jQuery(s.context):jQuery.event).trigger(type,args);}
return xhr;},handleError:function(s,xhr,status,e){if(s.error){s.error.call(s.context||s,xhr,status,e);}
if(s.global){(s.context?jQuery(s.context):jQuery.event).trigger("ajaxError",[xhr,s,e]);}},active:0,httpSuccess:function(xhr){try{return!xhr.status&&location.protocol==="file:"||(xhr.status>=200&&xhr.status<300)||xhr.status===304||xhr.status===1223||xhr.status===0;}catch(e){}
return false;},httpNotModified:function(xhr,url){var lastModified=xhr.getResponseHeader("Last-Modified"),etag=xhr.getResponseHeader("Etag");if(lastModified){jQuery.lastModified[url]=lastModified;}
if(etag){jQuery.etag[url]=etag;}
return xhr.status===304||xhr.status===0;},httpData:function(xhr,type,s){var ct=xhr.getResponseHeader("content-type")||"",xml=type==="xml"||!type&&ct.indexOf("xml")>=0,data=xml?xhr.responseXML:xhr.responseText;if(xml&&data.documentElement.nodeName==="parsererror"){jQuery.error("parsererror");}
if(s&&s.dataFilter){data=s.dataFilter(data,type);}
if(typeof data==="string"){if(type==="json"||!type&&ct.indexOf("json")>=0){data=jQuery.parseJSON(data);}else if(type==="script"||!type&&ct.indexOf("javascript")>=0){jQuery.globalEval(data);}}
return data;},param:function(a,traditional){var s=[];if(traditional===undefined){traditional=jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||a.jquery){jQuery.each(a,function(){add(this.name,this.value);});}else{for(var prefix in a){buildParams(prefix,a[prefix]);}}
return s.join("&").replace(r20,"+");function buildParams(prefix,obj){if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||/\[\]$/.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"||jQuery.isArray(v)?i:"")+"]",v);}});}else if(!traditional&&obj!=null&&typeof obj==="object"){jQuery.each(obj,function(k,v){buildParams(prefix+"["+k+"]",v);});}else{add(prefix,obj);}}
function add(key,value){value=jQuery.isFunction(value)?value():value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);}}});var elemdisplay={},rfxtypes=/toggle|show|hide/,rfxnum=/^([+-]=)?([\d+-.]+)(.*)$/,timerId,fxAttrs=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];jQuery.fn.extend({show:function(speed,callback){if(speed||speed===0){return this.animate(genFx("show",3),speed,callback);}else{for(var i=0,l=this.length;i<l;i++){var old=jQuery.data(this[i],"olddisplay");this[i].style.display=old||"";if(jQuery.css(this[i],"display")==="none"){var nodeName=this[i].nodeName,display;if(elemdisplay[nodeName]){display=elemdisplay[nodeName];}else{var elem=jQuery("<"+nodeName+" />").appendTo("body");display=elem.css("display");if(display==="none"){display="block";}
elem.remove();elemdisplay[nodeName]=display;}
jQuery.data(this[i],"olddisplay",display);}}
for(var j=0,k=this.length;j<k;j++){this[j].style.display=jQuery.data(this[j],"olddisplay")||"";}
return this;}},hide:function(speed,callback){if(speed||speed===0){return this.animate(genFx("hide",3),speed,callback);}else{for(var i=0,l=this.length;i<l;i++){var old=jQuery.data(this[i],"olddisplay");if(!old&&old!=="none"){jQuery.data(this[i],"olddisplay",jQuery.css(this[i],"display"));}}
for(var j=0,k=this.length;j<k;j++){this[j].style.display="none";}
return this;}},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2){var bool=typeof fn==="boolean";if(jQuery.isFunction(fn)&&jQuery.isFunction(fn2)){this._toggle.apply(this,arguments);}else if(fn==null||bool){this.each(function(){var state=bool?fn:jQuery(this).is(":hidden");jQuery(this)[state?"show":"hide"]();});}else{this.animate(genFx("toggle",3),fn,fn2);}
return this;},fadeTo:function(speed,to,callback){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:to},speed,callback);},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);if(jQuery.isEmptyObject(prop)){return this.each(optall.complete);}
return this[optall.queue===false?"each":"queue"](function(){var opt=jQuery.extend({},optall),p,hidden=this.nodeType===1&&jQuery(this).is(":hidden"),self=this;for(p in prop){var name=p.replace(rdashAlpha,fcamelCase);if(p!==name){prop[name]=prop[p];delete prop[p];p=name;}
if(prop[p]==="hide"&&hidden||prop[p]==="show"&&!hidden){return opt.complete.call(this);}
if((p==="height"||p==="width")&&this.style){opt.display=jQuery.css(this,"display");opt.overflow=this.style.overflow;}
if(jQuery.isArray(prop[p])){(opt.specialEasing=opt.specialEasing||{})[p]=prop[p][1];prop[p]=prop[p][0];}}
if(opt.overflow!=null){this.style.overflow="hidden";}
opt.curAnim=jQuery.extend({},prop);jQuery.each(prop,function(name,val){var e=new jQuery.fx(self,opt,name);if(rfxtypes.test(val)){e[val==="toggle"?hidden?"show":"hide":val](prop);}else{var parts=rfxnum.exec(val),start=e.cur(true)||0;if(parts){var end=parseFloat(parts[2]),unit=parts[3]||"px";if(unit!=="px"){self.style[name]=(end||1)+unit;start=((end||1)/e.cur(true))*start;self.style[name]=start+unit;}
if(parts[1]){end=((parts[1]==="-="?-1:1)*end)+start;}
e.custom(start,end,unit);}else{e.custom(start,val,"");}}});return true;});},stop:function(clearQueue,gotoEnd){var timers=jQuery.timers;if(clearQueue){this.queue([]);}
this.each(function(){for(var i=timers.length-1;i>=0;i--){if(timers[i].elem===this){if(gotoEnd){timers[i](true);}
timers.splice(i,1);}}});if(!gotoEnd){this.dequeue();}
return this;}});jQuery.each({slideDown:genFx("show",1),slideUp:genFx("hide",1),slideToggle:genFx("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(name,props){jQuery.fn[name]=function(speed,callback){return this.animate(props,speed,callback);};});jQuery.extend({speed:function(speed,easing,fn){var opt=speed&&typeof speed==="object"?speed:{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:jQuery.fx.speeds[opt.duration]||jQuery.fx.speeds._default;opt.old=opt.complete;opt.complete=function(){if(opt.queue!==false){jQuery(this).dequeue();}
if(jQuery.isFunction(opt.old)){opt.old.call(this);}};return opt;},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p;},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum;}},timers:[],fx:function(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;if(!options.orig){options.orig={};}}});jQuery.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this);}
(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style){this.elem.style.display="block";}},cur:function(force){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop];}
var r=parseFloat(jQuery.css(this.elem,this.prop,force));return r&&r>-10000?r:parseFloat(jQuery.curCSS(this.elem,this.prop))||0;},custom:function(from,to,unit){this.startTime=now();this.start=from;this.end=to;this.unit=unit||this.unit||"px";this.now=this.start;this.pos=this.state=0;var self=this;function t(gotoEnd){return self.step(gotoEnd);}
t.elem=this.elem;if(t()&&jQuery.timers.push(t)&&!timerId){timerId=setInterval(jQuery.fx.tick,13);}},show:function(){this.options.orig[this.prop]=jQuery.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());jQuery(this.elem).show();},hide:function(){this.options.orig[this.prop]=jQuery.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0);},step:function(gotoEnd){var t=now(),done=true;if(gotoEnd||t>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var i in this.options.curAnim){if(this.options.curAnim[i]!==true){done=false;}}
if(done){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;var old=jQuery.data(this.elem,"olddisplay");this.elem.style.display=old?old:this.options.display;if(jQuery.css(this.elem,"display")==="none"){this.elem.style.display="block";}}
if(this.options.hide){jQuery(this.elem).hide();}
if(this.options.hide||this.options.show){for(var p in this.options.curAnim){jQuery.style(this.elem,p,this.options.orig[p]);}}
this.options.complete.call(this.elem);}
return false;}else{var n=t-this.startTime;this.state=n/this.options.duration;var specialEasing=this.options.specialEasing&&this.options.specialEasing[this.prop];var defaultEasing=this.options.easing||(jQuery.easing.swing?"swing":"linear");this.pos=jQuery.easing[specialEasing||defaultEasing](this.state,n,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update();}
return true;}};jQuery.extend(jQuery.fx,{tick:function(){var timers=jQuery.timers;for(var i=0;i<timers.length;i++){if(!timers[i]()){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}},stop:function(){clearInterval(timerId);timerId=null;},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(fx){jQuery.style(fx.elem,"opacity",fx.now);},_default:function(fx){if(fx.elem.style&&fx.elem.style[fx.prop]!=null){fx.elem.style[fx.prop]=(fx.prop==="width"||fx.prop==="height"?Math.max(0,fx.now):fx.now)+fx.unit;}else{fx.elem[fx.prop]=fx.now;}}}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};}
function genFx(type,num){var obj={};jQuery.each(fxAttrs.concat.apply([],fxAttrs.slice(0,num)),function(){obj[this]=type;});return obj;}
if("getBoundingClientRect"in document.documentElement){jQuery.fn.offset=function(options){var elem=this[0];if(options){return this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
if(!elem||!elem.ownerDocument){return null;}
if(elem===elem.ownerDocument.body){return jQuery.offset.bodyOffset(elem);}
var box=elem.getBoundingClientRect(),doc=elem.ownerDocument,body=doc.body,docElem=doc.documentElement,clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,top=box.top+(self.pageYOffset||jQuery.support.boxModel&&docElem.scrollTop||body.scrollTop)-clientTop,left=box.left+(self.pageXOffset||jQuery.support.boxModel&&docElem.scrollLeft||body.scrollLeft)-clientLeft;return{top:top,left:left};};}else{jQuery.fn.offset=function(options){var elem=this[0];if(options){return this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
if(!elem||!elem.ownerDocument){return null;}
if(elem===elem.ownerDocument.body){return jQuery.offset.bodyOffset(elem);}
jQuery.offset.initialize();var offsetParent=elem.offsetParent,prevOffsetParent=elem,doc=elem.ownerDocument,computedStyle,docElem=doc.documentElement,body=doc.body,defaultView=doc.defaultView,prevComputedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle,top=elem.offsetTop,left=elem.offsetLeft;while((elem=elem.parentNode)&&elem!==body&&elem!==docElem){if(jQuery.offset.supportsFixedPosition&&prevComputedStyle.position==="fixed"){break;}
computedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle;top-=elem.scrollTop;left-=elem.scrollLeft;if(elem===offsetParent){top+=elem.offsetTop;left+=elem.offsetLeft;if(jQuery.offset.doesNotAddBorder&&!(jQuery.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(elem.nodeName))){top+=parseFloat(computedStyle.borderTopWidth)||0;left+=parseFloat(computedStyle.borderLeftWidth)||0;}
prevOffsetParent=offsetParent,offsetParent=elem.offsetParent;}
if(jQuery.offset.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible"){top+=parseFloat(computedStyle.borderTopWidth)||0;left+=parseFloat(computedStyle.borderLeftWidth)||0;}
prevComputedStyle=computedStyle;}
if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static"){top+=body.offsetTop;left+=body.offsetLeft;}
if(jQuery.offset.supportsFixedPosition&&prevComputedStyle.position==="fixed"){top+=Math.max(docElem.scrollTop,body.scrollTop);left+=Math.max(docElem.scrollLeft,body.scrollLeft);}
return{top:top,left:left};};}
jQuery.offset={initialize:function(){var body=document.body,container=document.createElement("div"),innerDiv,checkDiv,table,td,bodyMarginTop=parseFloat(jQuery.curCSS(body,"marginTop",true))||0,html="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";jQuery.extend(container.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});container.innerHTML=html;body.insertBefore(container,body.firstChild);innerDiv=container.firstChild;checkDiv=innerDiv.firstChild;td=innerDiv.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(checkDiv.offsetTop!==5);this.doesAddBorderForTableAndCells=(td.offsetTop===5);checkDiv.style.position="fixed",checkDiv.style.top="20px";this.supportsFixedPosition=(checkDiv.offsetTop===20||checkDiv.offsetTop===15);checkDiv.style.position=checkDiv.style.top="";innerDiv.style.overflow="hidden",innerDiv.style.position="relative";this.subtractsBorderForOverflowNotVisible=(checkDiv.offsetTop===-5);this.doesNotIncludeMarginInBodyOffset=(body.offsetTop!==bodyMarginTop);body.removeChild(container);body=container=innerDiv=checkDiv=table=td=null;jQuery.offset.initialize=jQuery.noop;},bodyOffset:function(body){var top=body.offsetTop,left=body.offsetLeft;jQuery.offset.initialize();if(jQuery.offset.doesNotIncludeMarginInBodyOffset){top+=parseFloat(jQuery.curCSS(body,"marginTop",true))||0;left+=parseFloat(jQuery.curCSS(body,"marginLeft",true))||0;}
return{top:top,left:left};},setOffset:function(elem,options,i){if(/static/.test(jQuery.curCSS(elem,"position"))){elem.style.position="relative";}
var curElem=jQuery(elem),curOffset=curElem.offset(),curTop=parseInt(jQuery.curCSS(elem,"top",true),10)||0,curLeft=parseInt(jQuery.curCSS(elem,"left",true),10)||0;if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
var props={top:(options.top-curOffset.top)+curTop,left:(options.left-curOffset.left)+curLeft};if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({position:function(){if(!this[0]){return null;}
var elem=this[0],offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=/^body|html$/i.test(offsetParent[0].nodeName)?{top:0,left:0}:offsetParent.offset();offset.top-=parseFloat(jQuery.curCSS(elem,"marginTop",true))||0;offset.left-=parseFloat(jQuery.curCSS(elem,"marginLeft",true))||0;parentOffset.top+=parseFloat(jQuery.curCSS(offsetParent[0],"borderTopWidth",true))||0;parentOffset.left+=parseFloat(jQuery.curCSS(offsetParent[0],"borderLeftWidth",true))||0;return{top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||document.body;while(offsetParent&&(!/^body|html$/i.test(offsetParent.nodeName)&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent;});}});jQuery.each(["Left","Top"],function(i,name){var method="scroll"+name;jQuery.fn[method]=function(val){var elem=this[0],win;if(!elem){return null;}
if(val!==undefined){return this.each(function(){win=getWindow(this);if(win){win.scrollTo(!i?val:jQuery(win).scrollLeft(),i?val:jQuery(win).scrollTop());}else{this[method]=val;}});}else{win=getWindow(elem);return win?("pageXOffset"in win)?win[i?"pageYOffset":"pageXOffset"]:jQuery.support.boxModel&&win.document.documentElement[method]||win.document.body[method]:elem[method];}};});function getWindow(elem){return("scrollTo"in elem&&elem.document)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.each(["Height","Width"],function(i,name){var type=name.toLowerCase();jQuery.fn["inner"+name]=function(){return this[0]?jQuery.css(this[0],type,false,"padding"):null;};jQuery.fn["outer"+name]=function(margin){return this[0]?jQuery.css(this[0],type,false,margin?"margin":"border"):null;};jQuery.fn[type]=function(size){var elem=this[0];if(!elem){return size==null?null:this;}
if(jQuery.isFunction(size)){return this.each(function(i){var self=jQuery(this);self[type](size.call(this,i,self[type]()));});}
return("scrollTo"in elem&&elem.document)?elem.document.compatMode==="CSS1Compat"&&elem.document.documentElement["client"+name]||elem.document.body["client"+name]:(elem.nodeType===9)?Math.max(elem.documentElement["client"+name],elem.body["scroll"+name],elem.documentElement["scroll"+name],elem.body["offset"+name],elem.documentElement["offset"+name]):size===undefined?jQuery.css(elem,type):this.css(type,typeof size==="string"?size:size+"px");};});window.jQuery=window.$=jQuery;})(window);(function($){var
undefined,dataFlag="watermark",dataClass="watermarkClass",dataFocus="watermarkFocus",dataFormSubmit="watermarkSubmit",dataMaxLen="watermarkMaxLength",dataPassword="watermarkPassword",dataText="watermarkText",selWatermarkDefined=":data("+dataFlag+")",selWatermarkAble=":text,:password,:search,textarea",triggerFns=["Page_ClientValidate"],pageDirty=false;$.extend($.expr[":"],{"search":function(elem){return"search"===elem.type;},"data":function(element,index,matches,set){var data,parts=/^((?:[^=!^$*]|[!^$*](?!=))+)(?:([!^$*]?=)(.*))?$/.exec(matches[3]);if(parts){data=$(element).data(parts[1]);if(data!==undefined){if(parts[2]){data=""+data;switch(parts[2]){case"=":return(data==parts[3]);case"!=":return(data!=parts[3]);case"^=":return(data.slice(0,parts[3].length)==parts[3]);case"$=":return(data.slice(-parts[3].length)==parts[3]);case"*=":return(data.indexOf(parts[3])!==-1);}}
return true;}}
return false;}});$.watermark={version:"3.0.4",options:{className:"watermark",useNative:true},hide:function(selector){$(selector).filter(selWatermarkDefined).each(function(){$.watermark._hide($(this));});},_hide:function($input,focus){if($input.val()==$input.data(dataText)){$input.val("");if($input.data(dataPassword)){if($input.attr("type")==="text"){var $pwd=$input.data(dataPassword),$wrap=$input.parent();$wrap[0].removeChild($input[0]);$wrap[0].appendChild($pwd[0]);$input=$pwd;}}
if($input.data(dataMaxLen)){$input.attr("maxLength",$input.data(dataMaxLen));$input.removeData(dataMaxLen);}
if(focus){$input.attr("autocomplete","off");window.setTimeout(function(){$input.select();},0);}}
$input.removeClass($input.data(dataClass));},show:function(selector){$(selector).filter(selWatermarkDefined).each(function(){$.watermark._show($(this));});},_show:function($input){var val=$input.val(),text=$input.data(dataText),type=$input.attr("type");if(((val.length==0)||(val==text))&&(!$input.data(dataFocus))){pageDirty=true;if($input.data(dataPassword)){if(type==="password"){var $wm=$input.data(dataPassword),$wrap=$input.parent();$wrap[0].removeChild($input[0]);$wrap[0].appendChild($wm[0]);$input=$wm;$input.attr("maxLength",text.length);}}
if((type==="text")||(type==="search")){var maxLen=$input.attr("maxLength");if((maxLen>0)&&(text.length>maxLen)){$input.data(dataMaxLen,maxLen);$input.attr("maxLength",text.length);}}
$input.addClass($input.data(dataClass));$input.val(text);}
else{$.watermark._hide($input);}},hideAll:function(){if(pageDirty){$.watermark.hide(selWatermarkAble);pageDirty=false;}},showAll:function(){$.watermark.show(selWatermarkAble);}};$.fn.watermark=function(text,options){var hasText=(typeof(text)==="string"),hasClass;if(typeof(options)==="object"){hasClass=(typeof(options.className)==="string");options=$.extend({},$.watermark.options,options);}
else if(typeof(options)==="string"){hasClass=true;options=$.extend({},$.watermark.options,{className:options});}
else{options=$.watermark.options;}
if(typeof(options.useNative)!=="function"){options.useNative=options.useNative?function(){return true;}:function(){return false;};}
return this.each(function(){var $input=$(this);if(!$input.is(selWatermarkAble)){return;}
if($input.data(dataFlag)){if(hasText||hasClass){$.watermark._hide($input);if(hasText){$input.data(dataText,text);}
if(hasClass){$input.data(dataClass,options.className);}}}
else{if(options.useNative.call(this,$input)){if(((""+$input.css("-webkit-appearance")).replace("undefined","")!=="")&&($input.attr("tagName")!=="TEXTAREA")){if(hasText){$input.attr("placeholder",text);}
return;}}
$input.data(dataText,hasText?text:"");$input.data(dataClass,options.className);$input.data(dataFlag,1);if($input.attr("type")==="password"){var $wrap=$input.wrap("<span>").parent();var $wm=$($wrap.html().replace(/type=["']?password["']?/i,'type="text"'));$wm.data(dataText,$input.data(dataText));$wm.data(dataClass,$input.data(dataClass));$wm.data(dataFlag,1);$wm.attr("maxLength",text.length);$wm.focus(function(){$.watermark._hide($wm,true);}).bind("dragenter",function(){$.watermark._hide($wm);}).bind("dragend",function(){window.setTimeout(function(){$wm.blur();},1);});$input.blur(function(){$.watermark._show($input);}).bind("dragleave",function(){$.watermark._show($input);});$wm.data(dataPassword,$input);$input.data(dataPassword,$wm);}
else{$input.focus(function(){$input.data(dataFocus,1);$.watermark._hide($input,true);}).blur(function(){$input.data(dataFocus,0);$.watermark._show($input);}).bind("dragenter",function(){$.watermark._hide($input);}).bind("dragleave",function(){$.watermark._show($input);}).bind("dragend",function(){window.setTimeout(function(){$.watermark._show($input);},1);}).bind("drop",function(evt){var dropText=evt.originalEvent.dataTransfer.getData("Text");if($input.val().replace(dropText,"")===$input.data(dataText)){$input.val(dropText);}
$input.focus();});}
if(this.form){var form=this.form,$form=$(form);if(!$form.data(dataFormSubmit)){$form.submit($.watermark.hideAll);if(form.submit){$form.data(dataFormSubmit,form.submit);form.submit=(function(f,$f){return function(){var nativeSubmit=$f.data(dataFormSubmit);$.watermark.hideAll();if(nativeSubmit.apply){nativeSubmit.apply(f,Array.prototype.slice.call(arguments));}
else{nativeSubmit();}};})(form,$form);}
else{$form.data(dataFormSubmit,1);form.submit=(function(f){return function(){$.watermark.hideAll();delete f.submit;f.submit();};})(form);}}}}
$.watermark._show($input);}).end();};if(triggerFns.length){$(function(){var i,name,fn;for(i=triggerFns.length-1;i>=0;i--){name=triggerFns[i];fn=window[name];if(typeof(fn)==="function"){window[name]=(function(origFn){return function(){$.watermark.hideAll();origFn.apply(null,Array.prototype.slice.call(arguments));};})(fn);}}});}})(jQuery);(function($)
{$.fn.qtip=function(options,blanket)
{var i,id,interfaces,opts,obj,command,config,api;if(typeof options=='string')
{if(typeof $(this).data('qtip')!=='object')
$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.NO_TOOLTIP_PRESENT,false);if(options=='api')
return $(this).data('qtip').interfaces[$(this).data('qtip').current];else if(options=='interfaces')
return $(this).data('qtip').interfaces;}
else
{if(!options)options={};if(typeof options.content!=='object'||(options.content.jquery&&options.content.length>0))options.content={text:options.content};if(typeof options.content.title!=='object')options.content.title={text:options.content.title};if(typeof options.position!=='object')options.position={corner:options.position};if(typeof options.position.corner!=='object')options.position.corner={target:options.position.corner,tooltip:options.position.corner};if(typeof options.show!=='object')options.show={when:options.show};if(typeof options.show.when!=='object')options.show.when={event:options.show.when};if(typeof options.show.effect!=='object')options.show.effect={type:options.show.effect};if(typeof options.hide!=='object')options.hide={when:options.hide};if(typeof options.hide.when!=='object')options.hide.when={event:options.hide.when};if(typeof options.hide.effect!=='object')options.hide.effect={type:options.hide.effect};if(typeof options.style!=='object')options.style={name:options.style};options.style=sanitizeStyle(options.style);opts=$.extend(true,{},$.fn.qtip.defaults,options);opts.style=buildStyle.call({options:opts},opts.style);opts.user=$.extend(true,{},options);};return $(this).each(function()
{if(typeof options=='string')
{command=options.toLowerCase();interfaces=$(this).qtip('interfaces');if(typeof interfaces=='object')
{if(blanket===true&&command=='destroy')
while(interfaces.length>0)interfaces[interfaces.length-1].destroy();else
{if(blanket!==true)interfaces=[$(this).qtip('api')];for(i=0;i<interfaces.length;i++)
{if(command=='destroy')interfaces[i].destroy();else if(interfaces[i].status.rendered===true)
{if(command=='show')interfaces[i].show();else if(command=='hide')interfaces[i].hide();else if(command=='focus')interfaces[i].focus();else if(command=='disable')interfaces[i].disable(true);else if(command=='enable')interfaces[i].disable(false);};};};};}
else
{config=$.extend(true,{},opts);config.hide.effect.length=opts.hide.effect.length;config.show.effect.length=opts.show.effect.length;if(config.position.container===false)config.position.container=$(document.body);if(config.position.target===false)config.position.target=$(this);if(config.show.when.target===false)config.show.when.target=$(this);if(config.hide.when.target===false)config.hide.when.target=$(this);id=$.fn.qtip.interfaces.length;for(i=0;i<id;i++)
{if(typeof $.fn.qtip.interfaces[i]=='undefined'){id=i;break;};};obj=new qTip($(this),config,id);$.fn.qtip.interfaces[id]=obj;if($(this).data('qtip')!=null&&typeof $(this).data('qtip')=='object')
{if(typeof $(this).attr('qtip')==='undefined')
$(this).data('qtip').current=$(this).data('qtip').interfaces.length;$(this).data('qtip').interfaces.push(obj);}
else $(this).data('qtip',{current:0,interfaces:[obj]});if(config.content.prerender===false&&config.show.when.event!==false&&config.show.ready!==true)
{config.show.when.target.bind(config.show.when.event+'.qtip-'+id+'-create',{qtip:id},function(event)
{api=$.fn.qtip.interfaces[event.data.qtip];api.options.show.when.target.unbind(api.options.show.when.event+'.qtip-'+event.data.qtip+'-create');api.cache.mouse={x:event.pageX,y:event.pageY};construct.call(api);api.options.show.when.target.trigger(api.options.show.when.event);});}
else
{obj.cache.mouse={x:config.show.when.target.offset().left,y:config.show.when.target.offset().top};construct.call(obj);}};});};function qTip(target,options,id)
{var self=this;self.id=id;self.options=options;self.status={animated:false,rendered:false,disabled:false,focused:false};self.elements={target:target.addClass(self.options.style.classes.target),tooltip:null,wrapper:null,content:null,contentWrapper:null,title:null,button:null,tip:null,bgiframe:null};self.cache={mouse:{},position:{},toggle:0};self.timers={};$.extend(self,self.options.api,{show:function(event)
{var returned,solo;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'show');if(self.elements.tooltip.css('display')!=='none')return self;self.elements.tooltip.stop(true,false);returned=self.beforeShow.call(self,event);if(returned===false)return self;function afterShow()
{if(self.options.position.type!=='static')self.focus();self.onShow.call(self,event);if($.browser.msie)self.elements.tooltip.get(0).style.removeAttribute('filter');};self.cache.toggle=1;if(self.options.position.type!=='static')
self.updatePosition(event,(self.options.show.effect.length>0));if(typeof self.options.show.solo=='object')solo=$(self.options.show.solo);else if(self.options.show.solo===true)solo=$('div.qtip').not(self.elements.tooltip);if(solo)solo.each(function(){if($(this).qtip('api').status.rendered===true)$(this).qtip('api').hide();});if(typeof self.options.show.effect.type=='function')
{self.options.show.effect.type.call(self.elements.tooltip,self.options.show.effect.length);self.elements.tooltip.queue(function(){afterShow();$(this).dequeue();});}
else
{switch(self.options.show.effect.type.toLowerCase())
{case'fade':self.elements.tooltip.fadeIn(self.options.show.effect.length,afterShow);break;case'slide':self.elements.tooltip.slideDown(self.options.show.effect.length,function()
{afterShow();if(self.options.position.type!=='static')self.updatePosition(event,true);});break;case'grow':self.elements.tooltip.show(self.options.show.effect.length,afterShow);break;default:self.elements.tooltip.show(null,afterShow);break;};self.elements.tooltip.addClass(self.options.style.classes.active);};return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_SHOWN,'show');},hide:function(event)
{var returned;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'hide');else if(self.elements.tooltip.css('display')==='none')return self;clearTimeout(self.timers.show);self.elements.tooltip.stop(true,false);returned=self.beforeHide.call(self,event);if(returned===false)return self;function afterHide(){self.onHide.call(self,event);};self.cache.toggle=0;if(typeof self.options.hide.effect.type=='function')
{self.options.hide.effect.type.call(self.elements.tooltip,self.options.hide.effect.length);self.elements.tooltip.queue(function(){afterHide();$(this).dequeue();});}
else
{switch(self.options.hide.effect.type.toLowerCase())
{case'fade':self.elements.tooltip.fadeOut(self.options.hide.effect.length,afterHide);break;case'slide':self.elements.tooltip.slideUp(self.options.hide.effect.length,afterHide);break;case'grow':self.elements.tooltip.hide(self.options.hide.effect.length,afterHide);break;default:self.elements.tooltip.hide(null,afterHide);break;};self.elements.tooltip.removeClass(self.options.style.classes.active);};return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_HIDDEN,'hide');},updatePosition:function(event,animate)
{var i,target,tooltip,coords,mapName,imagePos,newPosition,ieAdjust,ie6Adjust,borderAdjust,mouseAdjust,offset,curPosition,returned
if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'updatePosition');else if(self.options.position.type=='static')
return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.CANNOT_POSITION_STATIC,'updatePosition');target={position:{left:0,top:0},dimensions:{height:0,width:0},corner:self.options.position.corner.target};tooltip={position:self.getPosition(),dimensions:self.getDimensions(),corner:self.options.position.corner.tooltip};if(self.options.position.target!=='mouse')
{if(self.options.position.target.get(0).nodeName.toLowerCase()=='area')
{coords=self.options.position.target.attr('coords').split(',');for(i=0;i<coords.length;i++)coords[i]=parseInt(coords[i]);mapName=self.options.position.target.parent('map').attr('name');imagePos=$('img[usemap="#'+mapName+'"]:first').offset();target.position={left:Math.floor(imagePos.left+coords[0]),top:Math.floor(imagePos.top+coords[1])};switch(self.options.position.target.attr('shape').toLowerCase())
{case'rect':target.dimensions={width:Math.ceil(Math.abs(coords[2]-coords[0])),height:Math.ceil(Math.abs(coords[3]-coords[1]))};break;case'circle':target.dimensions={width:coords[2]+1,height:coords[2]+1};break;case'poly':target.dimensions={width:coords[0],height:coords[1]};for(i=0;i<coords.length;i++)
{if(i%2==0)
{if(coords[i]>target.dimensions.width)
target.dimensions.width=coords[i];if(coords[i]<coords[0])
target.position.left=Math.floor(imagePos.left+coords[i]);}
else
{if(coords[i]>target.dimensions.height)
target.dimensions.height=coords[i];if(coords[i]<coords[1])
target.position.top=Math.floor(imagePos.top+coords[i]);};};target.dimensions.width=target.dimensions.width-(target.position.left-imagePos.left);target.dimensions.height=target.dimensions.height-(target.position.top-imagePos.top);break;default:return $.fn.qtip.log.error.call(self,4,$.fn.qtip.constants.INVALID_AREA_SHAPE,'updatePosition');break;};target.dimensions.width-=2;target.dimensions.height-=2;}
else if(self.options.position.target.add(document.body).length===1)
{target.position={left:$(document).scrollLeft(),top:$(document).scrollTop()};target.dimensions={height:$(window).height(),width:$(window).width()};}
else
{if(typeof self.options.position.target.attr('qtip')!=='undefined')
target.position=self.options.position.target.qtip('api').cache.position;else
target.position=self.options.position.target.offset();target.dimensions={height:self.options.position.target.outerHeight(),width:self.options.position.target.outerWidth()};};newPosition=$.extend({},target.position);if(target.corner.search(/right/i)!==-1)
newPosition.left+=target.dimensions.width;if(target.corner.search(/bottom/i)!==-1)
newPosition.top+=target.dimensions.height;if(target.corner.search(/((top|bottom)Middle)|center/)!==-1)
newPosition.left+=(target.dimensions.width/2);if(target.corner.search(/((left|right)Middle)|center/)!==-1)
newPosition.top+=(target.dimensions.height/2);}
else
{target.position=newPosition={left:self.cache.mouse.x,top:self.cache.mouse.y};target.dimensions={height:1,width:1};};if(tooltip.corner.search(/right/i)!==-1)
newPosition.left-=tooltip.dimensions.width;if(tooltip.corner.search(/bottom/i)!==-1)
newPosition.top-=tooltip.dimensions.height;if(tooltip.corner.search(/((top|bottom)Middle)|center/)!==-1)
newPosition.left-=(tooltip.dimensions.width/2);if(tooltip.corner.search(/((left|right)Middle)|center/)!==-1)
newPosition.top-=(tooltip.dimensions.height/2);ieAdjust=($.browser.msie)?1:0;ie6Adjust=($.browser.msie&&parseInt($.browser.version.charAt(0))===6)?1:0;if(self.options.style.border.radius>0)
{if(tooltip.corner.search(/Left/)!==-1)
newPosition.left-=self.options.style.border.radius;else if(tooltip.corner.search(/Right/)!==-1)
newPosition.left+=self.options.style.border.radius;if(tooltip.corner.search(/Top/)!==-1)
newPosition.top-=self.options.style.border.radius;else if(tooltip.corner.search(/Bottom/)!==-1)
newPosition.top+=self.options.style.border.radius;};if(ieAdjust)
{if(tooltip.corner.search(/top/)!==-1)
newPosition.top-=ieAdjust
else if(tooltip.corner.search(/bottom/)!==-1)
newPosition.top+=ieAdjust
if(tooltip.corner.search(/left/)!==-1)
newPosition.left-=ieAdjust
else if(tooltip.corner.search(/right/)!==-1)
newPosition.left+=ieAdjust
if(tooltip.corner.search(/leftMiddle|rightMiddle/)!==-1)
newPosition.top-=1};if(self.options.position.adjust.screen===true)
newPosition=screenAdjust.call(self,newPosition,target,tooltip);if(self.options.position.target==='mouse'&&self.options.position.adjust.mouse===true)
{if(self.options.position.adjust.screen===true&&self.elements.tip)
mouseAdjust=self.elements.tip.attr('rel');else
mouseAdjust=self.options.position.corner.tooltip;newPosition.left+=(mouseAdjust.search(/right/i)!==-1)?-6:6;newPosition.top+=(mouseAdjust.search(/bottom/i)!==-1)?-6:6;}
if(!self.elements.bgiframe&&$.browser.msie&&parseInt($.browser.version.charAt(0))==6)
{$('select, object').each(function()
{offset=$(this).offset();offset.bottom=offset.top+$(this).height();offset.right=offset.left+$(this).width();if(newPosition.top+tooltip.dimensions.height>=offset.top&&newPosition.left+tooltip.dimensions.width>=offset.left)
bgiframe.call(self);});};newPosition.left+=self.options.position.adjust.x;newPosition.top+=self.options.position.adjust.y;curPosition=self.getPosition();if(newPosition.left!=curPosition.left||newPosition.top!=curPosition.top)
{returned=self.beforePositionUpdate.call(self,event);if(returned===false)return self;self.cache.position=newPosition;if(animate===true)
{self.status.animated=true;self.elements.tooltip.animate(newPosition,200,'swing',function(){self.status.animated=false});}
else self.elements.tooltip.css(newPosition);self.onPositionUpdate.call(self,event);if(typeof event!=='undefined'&&event.type&&event.type!=='mousemove')
$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_POSITION_UPDATED,'updatePosition');};return self;},updateWidth:function(newWidth)
{var hidden;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'updateWidth');else if(newWidth&&typeof newWidth!=='number')
return $.fn.qtip.log.error.call(self,2,'newWidth must be of type number','updateWidth');hidden=self.elements.contentWrapper.siblings().add(self.elements.tip).add(self.elements.button);if(!newWidth)
{if(typeof self.options.style.width.value=='number')
newWidth=self.options.style.width.value;else
{self.elements.tooltip.css({width:'auto'});hidden.hide();if($.browser.msie)
self.elements.wrapper.add(self.elements.contentWrapper.children()).css({zoom:'normal'});newWidth=self.getDimensions().width+1;if(!self.options.style.width.value)
{if(newWidth>self.options.style.width.max)newWidth=self.options.style.width.max
if(newWidth<self.options.style.width.min)newWidth=self.options.style.width.min};};};if(newWidth%2!==0)newWidth-=1;self.elements.tooltip.width(newWidth);hidden.show();if(self.options.style.border.radius)
{self.elements.tooltip.find('.qtip-betweenCorners').each(function(i)
{$(this).width(newWidth-(self.options.style.border.radius*2));})};if($.browser.msie)
{self.elements.wrapper.add(self.elements.contentWrapper.children()).css({zoom:'1'});self.elements.wrapper.width(newWidth);if(self.elements.bgiframe)self.elements.bgiframe.width(newWidth).height(self.getDimensions.height);};return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_WIDTH_UPDATED,'updateWidth');},updateStyle:function(name)
{var tip,borders,context,corner,coordinates;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'updateStyle');else if(typeof name!=='string'||!$.fn.qtip.styles[name])
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.STYLE_NOT_DEFINED,'updateStyle');self.options.style=buildStyle.call(self,$.fn.qtip.styles[name],self.options.user.style);self.elements.content.css(jQueryStyle(self.options.style));if(self.options.content.title.text!==false)
self.elements.title.css(jQueryStyle(self.options.style.title,true));self.elements.contentWrapper.css({borderColor:self.options.style.border.color});if(self.options.style.tip.corner!==false)
{if($('<canvas>').get(0).getContext)
{tip=self.elements.tooltip.find('.qtip-tip canvas:first');context=tip.get(0).getContext('2d');context.clearRect(0,0,300,300);corner=tip.parent('div[rel]:first').attr('rel');coordinates=calculateTip(corner,self.options.style.tip.size.width,self.options.style.tip.size.height);drawTip.call(self,tip,coordinates,self.options.style.tip.color||self.options.style.border.color);}
else if($.browser.msie)
{tip=self.elements.tooltip.find('.qtip-tip [nodeName="shape"]');tip.attr('fillcolor',self.options.style.tip.color||self.options.style.border.color);};};if(self.options.style.border.radius>0)
{self.elements.tooltip.find('.qtip-betweenCorners').css({backgroundColor:self.options.style.border.color});if($('<canvas>').get(0).getContext)
{borders=calculateBorders(self.options.style.border.radius)
self.elements.tooltip.find('.qtip-wrapper canvas').each(function()
{context=$(this).get(0).getContext('2d');context.clearRect(0,0,300,300);corner=$(this).parent('div[rel]:first').attr('rel')
drawBorder.call(self,$(this),borders[corner],self.options.style.border.radius,self.options.style.border.color);});}
else if($.browser.msie)
{self.elements.tooltip.find('.qtip-wrapper [nodeName="arc"]').each(function()
{$(this).attr('fillcolor',self.options.style.border.color)});};};return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_STYLE_UPDATED,'updateStyle');},updateContent:function(content,reposition)
{var parsedContent,images,loadedImages;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'updateContent');else if(!content)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.NO_CONTENT_PROVIDED,'updateContent');parsedContent=self.beforeContentUpdate.call(self,content);if(typeof parsedContent=='string')content=parsedContent;else if(parsedContent===false)return;if($.browser.msie)self.elements.contentWrapper.children().css({zoom:'normal'});if(content.jquery&&content.length>0)
content.clone(true).appendTo(self.elements.content).show();else self.elements.content.html(content);images=self.elements.content.find('img[complete=false]');if(images.length>0)
{loadedImages=0;images.each(function(i)
{$('<img src="'+$(this).attr('src')+'" />').load(function(){if(++loadedImages==images.length)afterLoad();});});}
else afterLoad();function afterLoad()
{self.updateWidth();if(reposition!==false)
{if(self.options.position.type!=='static')
self.updatePosition(self.elements.tooltip.is(':visible'),true);if(self.options.style.tip.corner!==false)
positionTip.call(self);};};self.onContentUpdate.call(self);return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_CONTENT_UPDATED,'loadContent');},loadContent:function(url,data,method)
{var returned;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'loadContent');returned=self.beforeContentLoad.call(self);if(returned===false)return self;if(method=='post')
$.post(url,data,setupContent);else
$.get(url,data,setupContent);function setupContent(content)
{self.onContentLoad.call(self);$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_CONTENT_LOADED,'loadContent');self.updateContent(content);};return self;},updateTitle:function(content)
{if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'updateTitle');else if(!content)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.NO_CONTENT_PROVIDED,'updateTitle');returned=self.beforeTitleUpdate.call(self);if(returned===false)return self;if(self.elements.button)self.elements.button=self.elements.button.clone(true);self.elements.title.html(content)
if(self.elements.button)self.elements.title.prepend(self.elements.button);self.onTitleUpdate.call(self);return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_TITLE_UPDATED,'updateTitle');},focus:function(event)
{var curIndex,newIndex,elemIndex,returned;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'focus');else if(self.options.position.type=='static')
return $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.CANNOT_FOCUS_STATIC,'focus');curIndex=parseInt(self.elements.tooltip.css('z-index'));newIndex=6000+$('div.qtip[qtip]').length-1;if(!self.status.focused&&curIndex!==newIndex)
{returned=self.beforeFocus.call(self,event);if(returned===false)return self;$('div.qtip[qtip]').not(self.elements.tooltip).each(function()
{if($(this).qtip('api').status.rendered===true)
{elemIndex=parseInt($(this).css('z-index'));if(typeof elemIndex=='number'&&elemIndex>-1)
$(this).css({zIndex:parseInt($(this).css('z-index'))-1});$(this).qtip('api').status.focused=false;}})
self.elements.tooltip.css({zIndex:newIndex});self.status.focused=true;self.onFocus.call(self,event);$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_FOCUSED,'focus');};return self;},disable:function(state)
{if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'disable');if(state)
{if(!self.status.disabled)
{self.status.disabled=true;$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_DISABLED,'disable');}
else $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.TOOLTIP_ALREADY_DISABLED,'disable');}
else
{if(self.status.disabled)
{self.status.disabled=false;$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_ENABLED,'disable');}
else $.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.TOOLTIP_ALREADY_ENABLED,'disable');};return self;},destroy:function()
{var i,returned,interfaces;returned=self.beforeDestroy.call(self);if(returned===false)return self;if(self.status.rendered)
{self.options.show.when.target.unbind('mousemove.qtip',self.updatePosition);self.options.show.when.target.unbind('mouseout.qtip',self.hide);self.options.show.when.target.unbind(self.options.show.when.event+'.qtip');self.options.hide.when.target.unbind(self.options.hide.when.event+'.qtip');self.elements.tooltip.unbind(self.options.hide.when.event+'.qtip');self.elements.tooltip.unbind('mouseover.qtip',self.focus);self.elements.tooltip.remove();}
else self.options.show.when.target.unbind(self.options.show.when.event+'.qtip-create');if(typeof self.elements.target.data('qtip')=='object')
{interfaces=self.elements.target.data('qtip').interfaces;if(typeof interfaces=='object'&&interfaces.length>0)
{for(i=0;i<interfaces.length-1;i++)
if(interfaces[i].id==self.id)interfaces.splice(i,1)}}
delete $.fn.qtip.interfaces[self.id];if(typeof interfaces=='object'&&interfaces.length>0)
self.elements.target.data('qtip').current=interfaces.length-1;else
self.elements.target.removeData('qtip');self.onDestroy.call(self);$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_DESTROYED,'destroy');return self.elements.target},getPosition:function()
{var show,offset;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'getPosition');show=(self.elements.tooltip.css('display')!=='none')?false:true;if(show)self.elements.tooltip.css({visiblity:'hidden'}).show();offset=self.elements.tooltip.offset();if(show)self.elements.tooltip.css({visiblity:'visible'}).hide();return offset;},getDimensions:function()
{var show,dimensions;if(!self.status.rendered)
return $.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.TOOLTIP_NOT_RENDERED,'getDimensions');show=(!self.elements.tooltip.is(':visible'))?true:false;if(show)self.elements.tooltip.css({visiblity:'hidden'}).show();dimensions={height:self.elements.tooltip.outerHeight(),width:self.elements.tooltip.outerWidth()};if(show)self.elements.tooltip.css({visiblity:'visible'}).hide();return dimensions;}});};function construct()
{var self,adjust,content,url,data,method,tempLength;self=this;self.beforeRender.call(self);self.status.rendered=true;self.elements.tooltip='<div qtip="'+self.id+'" '+'class="qtip '+(self.options.style.classes.tooltip||self.options.style)+'"'+'style="display:none; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0;'+'position:'+self.options.position.type+';">'+'  <div class="qtip-wrapper" style="position:relative; overflow:hidden; text-align:left;">'+'    <div class="qtip-contentWrapper" style="overflow:hidden;">'+'       <div class="qtip-content '+self.options.style.classes.content+'"></div>'+'</div></div></div>';self.elements.tooltip=$(self.elements.tooltip);self.elements.tooltip.appendTo(self.options.position.container)
self.elements.tooltip.data('qtip',{current:0,interfaces:[self]});self.elements.wrapper=self.elements.tooltip.children('div:first');self.elements.contentWrapper=self.elements.wrapper.children('div:first').css({background:self.options.style.background});self.elements.content=self.elements.contentWrapper.children('div:first').css(jQueryStyle(self.options.style));if($.browser.msie)self.elements.wrapper.add(self.elements.content).css({zoom:1});if(self.options.hide.when.event=='unfocus')self.elements.tooltip.attr('unfocus',true);if(typeof self.options.style.width.value=='number')self.updateWidth();if($('<canvas>').get(0).getContext||$.browser.msie)
{if(self.options.style.border.radius>0)
createBorder.call(self);else
self.elements.contentWrapper.css({border:self.options.style.border.width+'px solid '+self.options.style.border.color});if(self.options.style.tip.corner!==false)
createTip.call(self);}
else
{self.elements.contentWrapper.css({border:self.options.style.border.width+'px solid '+self.options.style.border.color});self.options.style.border.radius=0;self.options.style.tip.corner=false;$.fn.qtip.log.error.call(self,2,$.fn.qtip.constants.CANVAS_VML_NOT_SUPPORTED,'render');};if((typeof self.options.content.text=='string'&&self.options.content.text.length>0)||(self.options.content.text.jquery&&self.options.content.text.length>0))
content=self.options.content.text;else if(typeof self.elements.target.attr('title')=='string'&&self.elements.target.attr('title').length>0)
{content=self.elements.target.attr('title').replace("\\n",'<br />');self.elements.target.attr('title','');}
else if(typeof self.elements.target.attr('alt')=='string'&&self.elements.target.attr('alt').length>0)
{content=self.elements.target.attr('alt').replace("\\n",'<br />');self.elements.target.attr('alt','');}
else
{content=' ';$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.NO_VALID_CONTENT,'render');};if(self.options.content.title.text!==false)createTitle.call(self);self.updateContent(content);assignEvents.call(self);if(self.options.show.ready===true)self.show();if(self.options.content.url!==false)
{url=self.options.content.url;data=self.options.content.data;method=self.options.content.method||'get';self.loadContent(url,data,method);};self.onRender.call(self);$.fn.qtip.log.error.call(self,1,$.fn.qtip.constants.EVENT_RENDERED,'render');};function createBorder()
{var self,i,width,radius,color,coordinates,containers,size,betweenWidth,betweenCorners,borderTop,borderBottom,borderCoord,sideWidth,vertWidth;self=this;self.elements.wrapper.find('.qtip-borderBottom, .qtip-borderTop').remove();width=self.options.style.border.width;radius=self.options.style.border.radius;color=self.options.style.border.color||self.options.style.tip.color;coordinates=calculateBorders(radius);containers={};for(i in coordinates)
{containers[i]='<div rel="'+i+'" style="'+((i.search(/Left/)!==-1)?'left':'right')+':0; '+'position:absolute; height:'+radius+'px; width:'+radius+'px; overflow:hidden; line-height:0.1px; font-size:1px">';if($('<canvas>').get(0).getContext)
containers[i]+='<canvas height="'+radius+'" width="'+radius+'" style="vertical-align: top"></canvas>';else if($.browser.msie)
{size=radius*2+3;containers[i]+='<v:arc stroked="false" fillcolor="'+color+'" startangle="'+coordinates[i][0]+'" endangle="'+coordinates[i][1]+'" '+'style="width:'+size+'px; height:'+size+'px; margin-top:'+((i.search(/bottom/)!==-1)?-2:-1)+'px; '+'margin-left:'+((i.search(/Right/)!==-1)?coordinates[i][2]-3.5:-1)+'px; '+'vertical-align:top; display:inline-block; behavior:url(#default#VML)"></v:arc>';};containers[i]+='</div>';};betweenWidth=self.getDimensions().width-(Math.max(width,radius)*2);betweenCorners='<div class="qtip-betweenCorners" style="height:'+radius+'px; width:'+betweenWidth+'px; '+'overflow:hidden; background-color:'+color+'; line-height:0.1px; font-size:1px;">';borderTop='<div class="qtip-borderTop" dir="ltr" style="height:'+radius+'px; '+'margin-left:'+radius+'px; line-height:0.1px; font-size:1px; padding:0;">'+
containers['topLeft']+containers['topRight']+betweenCorners;self.elements.wrapper.prepend(borderTop);borderBottom='<div class="qtip-borderBottom" dir="ltr" style="height:'+radius+'px; '+'margin-left:'+radius+'px; line-height:0.1px; font-size:1px; padding:0;">'+
containers['bottomLeft']+containers['bottomRight']+betweenCorners;self.elements.wrapper.append(borderBottom);if($('<canvas>').get(0).getContext)
{self.elements.wrapper.find('canvas').each(function()
{borderCoord=coordinates[$(this).parent('[rel]:first').attr('rel')];drawBorder.call(self,$(this),borderCoord,radius,color);})}
else if($.browser.msie)self.elements.tooltip.append('<v:image style="behavior:url(#default#VML);"></v:image>');sideWidth=Math.max(radius,(radius+(width-radius)))
vertWidth=Math.max(width-radius,0);self.elements.contentWrapper.css({border:'0px solid '+color,borderWidth:vertWidth+'px '+sideWidth+'px'})};function drawBorder(canvas,coordinates,radius,color)
{var context=canvas.get(0).getContext('2d');context.fillStyle=color;context.beginPath();context.arc(coordinates[0],coordinates[1],radius,0,Math.PI*2,false);context.fill();};function createTip(corner)
{var self,color,coordinates,coordsize,path;self=this;if(self.elements.tip!==null)self.elements.tip.remove();color=self.options.style.tip.color||self.options.style.border.color;if(self.options.style.tip.corner===false)return;else if(!corner)corner=self.options.style.tip.corner;coordinates=calculateTip(corner,self.options.style.tip.size.width,self.options.style.tip.size.height);self.elements.tip='<div class="'+self.options.style.classes.tip+'" dir="ltr" rel="'+corner+'" style="position:absolute; '+'height:'+self.options.style.tip.size.height+'px; width:'+self.options.style.tip.size.width+'px; '+'margin:0 auto; line-height:0.1px; font-size:1px;">';if($('<canvas>').get(0).getContext)
self.elements.tip+='<canvas height="'+self.options.style.tip.size.height+'" width="'+self.options.style.tip.size.width+'"></canvas>';else if($.browser.msie)
{coordsize=self.options.style.tip.size.width+','+self.options.style.tip.size.height;path='m'+coordinates[0][0]+','+coordinates[0][1];path+=' l'+coordinates[1][0]+','+coordinates[1][1];path+=' '+coordinates[2][0]+','+coordinates[2][1];path+=' xe';self.elements.tip+='<v:shape fillcolor="'+color+'" stroked="false" filled="true" path="'+path+'" coordsize="'+coordsize+'" '+'style="width:'+self.options.style.tip.size.width+'px; height:'+self.options.style.tip.size.height+'px; '+'line-height:0.1px; display:inline-block; behavior:url(#default#VML); '+'vertical-align:'+((corner.search(/top/)!==-1)?'bottom':'top')+'"></v:shape>';self.elements.tip+='<v:image style="behavior:url(#default#VML);"></v:image>';self.elements.contentWrapper.css('position','relative');};self.elements.tooltip.prepend(self.elements.tip+'</div>');self.elements.tip=self.elements.tooltip.find('.'+self.options.style.classes.tip).eq(0);if($('<canvas>').get(0).getContext)
drawTip.call(self,self.elements.tip.find('canvas:first'),coordinates,color);if(corner.search(/top/)!==-1&&$.browser.msie&&parseInt($.browser.version.charAt(0))===6)
self.elements.tip.css({marginTop:-4});positionTip.call(self,corner);};function drawTip(canvas,coordinates,color)
{var context=canvas.get(0).getContext('2d');context.fillStyle=color;context.beginPath();context.moveTo(coordinates[0][0],coordinates[0][1]);context.lineTo(coordinates[1][0],coordinates[1][1]);context.lineTo(coordinates[2][0],coordinates[2][1]);context.fill();};function positionTip(corner)
{var self,ieAdjust,paddingCorner,paddingSize,newMargin;self=this;if(self.options.style.tip.corner===false||!self.elements.tip)return;if(!corner)corner=self.elements.tip.attr('rel');ieAdjust=positionAdjust=($.browser.msie)?1:0;self.elements.tip.css(corner.match(/left|right|top|bottom/)[0],0);if(corner.search(/top|bottom/)!==-1)
{if($.browser.msie)
{if(parseInt($.browser.version.charAt(0))===6)
positionAdjust=(corner.search(/top/)!==-1)?-3:1;else
positionAdjust=(corner.search(/top/)!==-1)?1:2;};if(corner.search(/Middle/)!==-1)
self.elements.tip.css({left:'50%',marginLeft:-(self.options.style.tip.size.width/2)});else if(corner.search(/Left/)!==-1)
self.elements.tip.css({left:self.options.style.border.radius-ieAdjust});else if(corner.search(/Right/)!==-1)
self.elements.tip.css({right:self.options.style.border.radius+ieAdjust});if(corner.search(/top/)!==-1)
self.elements.tip.css({top:-positionAdjust});else
self.elements.tip.css({bottom:positionAdjust});}
else if(corner.search(/left|right/)!==-1)
{if($.browser.msie)
positionAdjust=(parseInt($.browser.version.charAt(0))===6)?1:((corner.search(/left/)!==-1)?1:2);if(corner.search(/Middle/)!==-1)
self.elements.tip.css({top:'50%',marginTop:-(self.options.style.tip.size.height/2)});else if(corner.search(/Top/)!==-1)
self.elements.tip.css({top:self.options.style.border.radius-ieAdjust});else if(corner.search(/Bottom/)!==-1)
self.elements.tip.css({bottom:self.options.style.border.radius+ieAdjust});if(corner.search(/left/)!==-1)
self.elements.tip.css({left:-positionAdjust});else
self.elements.tip.css({right:positionAdjust});};paddingCorner='padding-'+corner.match(/left|right|top|bottom/)[0];paddingSize=self.options.style.tip.size[(paddingCorner.search(/left|right/)!==-1)?'width':'height'];self.elements.tooltip.css('padding',0);self.elements.tooltip.css(paddingCorner,paddingSize);if($.browser.msie&&parseInt($.browser.version.charAt(0))==6)
{newMargin=parseInt(self.elements.tip.css('margin-top'))||0;newMargin+=parseInt(self.elements.content.css('margin-top'))||0;self.elements.tip.css({marginTop:newMargin});};};function createTitle()
{var self=this;if(self.elements.title!==null)self.elements.title.remove();self.elements.title=$('<div class="'+self.options.style.classes.title+'">').css(jQueryStyle(self.options.style.title,true)).css({zoom:($.browser.msie)?1:0}).prependTo(self.elements.contentWrapper);if(self.options.content.title.text)self.updateTitle.call(self,self.options.content.title.text);if(self.options.content.title.button!==false&&typeof self.options.content.title.button=='string')
{self.elements.button=$('<a class="'+self.options.style.classes.button+'" style="float:right; position: relative"></a>').css(jQueryStyle(self.options.style.button,true)).html(self.options.content.title.button).prependTo(self.elements.title).click(function(event){if(!self.status.disabled)self.hide(event)});};};function assignEvents()
{var self,showTarget,hideTarget,inactiveEvents;self=this;showTarget=self.options.show.when.target;hideTarget=self.options.hide.when.target;if(self.options.hide.fixed)hideTarget=hideTarget.add(self.elements.tooltip);if(self.options.hide.when.event=='inactive')
{inactiveEvents=['click','dblclick','mousedown','mouseup','mousemove','mouseout','mouseenter','mouseleave','mouseover'];function inactiveMethod(event)
{if(self.status.disabled===true)return;clearTimeout(self.timers.inactive);self.timers.inactive=setTimeout(function()
{$(inactiveEvents).each(function()
{hideTarget.unbind(this+'.qtip-inactive');self.elements.content.unbind(this+'.qtip-inactive');});self.hide(event);},self.options.hide.delay);};}
else if(self.options.hide.fixed===true)
{self.elements.tooltip.bind('mouseover.qtip',function()
{if(self.status.disabled===true)return;clearTimeout(self.timers.hide);});};function showMethod(event)
{if(self.status.disabled===true)return;if(self.options.hide.when.event=='inactive')
{$(inactiveEvents).each(function()
{hideTarget.bind(this+'.qtip-inactive',inactiveMethod);self.elements.content.bind(this+'.qtip-inactive',inactiveMethod);});inactiveMethod();};clearTimeout(self.timers.show);clearTimeout(self.timers.hide);self.timers.show=setTimeout(function(){self.show(event);},self.options.show.delay);};function hideMethod(event)
{if(self.status.disabled===true)return;if(self.options.hide.fixed===true&&self.options.hide.when.event.search(/mouse(out|leave)/i)!==-1&&$(event.relatedTarget).parents('div.qtip[qtip]').length>0)
{event.stopPropagation();event.preventDefault();clearTimeout(self.timers.hide);return false;};clearTimeout(self.timers.show);clearTimeout(self.timers.hide);self.elements.tooltip.stop(true,true);self.timers.hide=setTimeout(function(){self.hide(event);},self.options.hide.delay);};if((self.options.show.when.target.add(self.options.hide.when.target).length===1&&self.options.show.when.event==self.options.hide.when.event&&self.options.hide.when.event!=='inactive')||self.options.hide.when.event=='unfocus')
{self.cache.toggle=0;showTarget.bind(self.options.show.when.event+'.qtip',function(event)
{if(self.cache.toggle==0)showMethod(event);else hideMethod(event);});}
else
{showTarget.bind(self.options.show.when.event+'.qtip',showMethod);if(self.options.hide.when.event!=='inactive')
hideTarget.bind(self.options.hide.when.event+'.qtip',hideMethod);};if(self.options.position.type.search(/(fixed|absolute)/)!==-1)
self.elements.tooltip.bind('mouseover.qtip',self.focus);if(self.options.position.target==='mouse'&&self.options.position.type!=='static')
{showTarget.bind('mousemove.qtip',function(event)
{self.cache.mouse={x:event.pageX,y:event.pageY};if(self.status.disabled===false&&self.options.position.adjust.mouse===true&&self.options.position.type!=='static'&&self.elements.tooltip.css('display')!=='none')
self.updatePosition(event);});};};function screenAdjust(position,target,tooltip)
{var self,adjustedPosition,adjust,newCorner,overflow,corner;self=this;if(tooltip.corner=='center')return target.position
adjustedPosition=$.extend({},position);newCorner={x:false,y:false};overflow={left:(adjustedPosition.left<$.fn.qtip.cache.screen.scroll.left),right:(adjustedPosition.left+tooltip.dimensions.width+2>=$.fn.qtip.cache.screen.width+$.fn.qtip.cache.screen.scroll.left),top:(adjustedPosition.top<$.fn.qtip.cache.screen.scroll.top),bottom:(adjustedPosition.top+tooltip.dimensions.height+2>=$.fn.qtip.cache.screen.height+$.fn.qtip.cache.screen.scroll.top)};adjust={left:(overflow.left&&(tooltip.corner.search(/right/i)!=-1||(tooltip.corner.search(/right/i)==-1&&!overflow.right))),right:(overflow.right&&(tooltip.corner.search(/left/i)!=-1||(tooltip.corner.search(/left/i)==-1&&!overflow.left))),top:(overflow.top&&tooltip.corner.search(/top/i)==-1),bottom:(overflow.bottom&&tooltip.corner.search(/bottom/i)==-1)};if(adjust.left)
{if(self.options.position.target!=='mouse')
adjustedPosition.left=target.position.left+target.dimensions.width;else
adjustedPosition.left=self.cache.mouse.x
newCorner.x='Left';}
else if(adjust.right)
{if(self.options.position.target!=='mouse')
adjustedPosition.left=target.position.left-tooltip.dimensions.width;else
adjustedPosition.left=self.cache.mouse.x-tooltip.dimensions.width;newCorner.x='Right';};if(adjust.top)
{if(self.options.position.target!=='mouse')
adjustedPosition.top=target.position.top+target.dimensions.height;else
adjustedPosition.top=self.cache.mouse.y
newCorner.y='top';}
else if(adjust.bottom)
{if(self.options.position.target!=='mouse')
adjustedPosition.top=target.position.top-tooltip.dimensions.height;else
adjustedPosition.top=self.cache.mouse.y-tooltip.dimensions.height;newCorner.y='bottom';};if(adjustedPosition.left<0)
{adjustedPosition.left=position.left;newCorner.x=false;};if(adjustedPosition.top<0)
{adjustedPosition.top=position.top;newCorner.y=false;};if(self.options.style.tip.corner!==false)
{adjustedPosition.corner=new String(tooltip.corner);if(newCorner.x!==false)adjustedPosition.corner=adjustedPosition.corner.replace(/Left|Right|Middle/,newCorner.x);if(newCorner.y!==false)adjustedPosition.corner=adjustedPosition.corner.replace(/top|bottom/,newCorner.y);if(adjustedPosition.corner!==self.elements.tip.attr('rel'))
createTip.call(self,adjustedPosition.corner);};return adjustedPosition;};function jQueryStyle(style,sub)
{var styleObj,i;styleObj=$.extend(true,{},style);for(i in styleObj)
{if(sub===true&&i.search(/(tip|classes)/i)!==-1)
delete styleObj[i];else if(!sub&&i.search(/(width|border|tip|title|classes|user)/i)!==-1)
delete styleObj[i];};return styleObj;};function sanitizeStyle(style)
{if(typeof style.tip!=='object')style.tip={corner:style.tip};if(typeof style.tip.size!=='object')style.tip.size={width:style.tip.size,height:style.tip.size};if(typeof style.border!=='object')style.border={width:style.border};if(typeof style.width!=='object')style.width={value:style.width};if(typeof style.width.max=='string')style.width.max=parseInt(style.width.max.replace(/([0-9]+)/i,"$1"));if(typeof style.width.min=='string')style.width.min=parseInt(style.width.min.replace(/([0-9]+)/i,"$1"));if(typeof style.tip.size.x=='number')
{style.tip.size.width=style.tip.size.x;delete style.tip.size.x;};if(typeof style.tip.size.y=='number')
{style.tip.size.height=style.tip.size.y;delete style.tip.size.y;};return style;};function buildStyle()
{var self,i,styleArray,styleExtend,finalStyle,ieAdjust;self=this;styleArray=[true,{}];for(i=0;i<arguments.length;i++)
styleArray.push(arguments[i]);styleExtend=[$.extend.apply($,styleArray)];while(typeof styleExtend[0].name=='string')
{styleExtend.unshift(sanitizeStyle($.fn.qtip.styles[styleExtend[0].name]));};styleExtend.unshift(true,{classes:{tooltip:'qtip-'+(arguments[0].name||'defaults')}},$.fn.qtip.styles.defaults);finalStyle=$.extend.apply($,styleExtend);ieAdjust=($.browser.msie)?1:0;finalStyle.tip.size.width+=ieAdjust;finalStyle.tip.size.height+=ieAdjust;if(finalStyle.tip.size.width%2>0)finalStyle.tip.size.width+=1;if(finalStyle.tip.size.height%2>0)finalStyle.tip.size.height+=1;if(finalStyle.tip.corner===true)
finalStyle.tip.corner=(self.options.position.corner.tooltip==='center')?false:self.options.position.corner.tooltip;return finalStyle;};function calculateTip(corner,width,height)
{var tips={bottomRight:[[0,0],[width,height],[width,0]],bottomLeft:[[0,0],[width,0],[0,height]],topRight:[[0,height],[width,0],[width,height]],topLeft:[[0,0],[0,height],[width,height]],topMiddle:[[0,height],[width/2,0],[width,height]],bottomMiddle:[[0,0],[width,0],[width/2,height]],rightMiddle:[[0,0],[width,height/2],[0,height]],leftMiddle:[[width,0],[width,height],[0,height/2]]};tips.leftTop=tips.bottomRight;tips.rightTop=tips.bottomLeft;tips.leftBottom=tips.topRight;tips.rightBottom=tips.topLeft;return tips[corner];};function calculateBorders(radius)
{var borders;if($('<canvas>').get(0).getContext)
{borders={topLeft:[radius,radius],topRight:[0,radius],bottomLeft:[radius,0],bottomRight:[0,0]};}
else if($.browser.msie)
{borders={topLeft:[-90,90,0],topRight:[-90,90,-radius],bottomLeft:[90,270,0],bottomRight:[90,270,-radius]};};return borders;};function bgiframe()
{var self,html,dimensions;self=this;dimensions=self.getDimensions();html='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:false" '+'style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=\'0\'); border: 1px solid red; '+'height:'+dimensions.height+'px; width:'+dimensions.width+'px" />';self.elements.bgiframe=self.elements.wrapper.prepend(html).children('.qtip-bgiframe:first');};$(document).ready(function()
{$.fn.qtip.cache={screen:{scroll:{left:$(window).scrollLeft(),top:$(window).scrollTop()},width:$(window).width(),height:$(window).height()}};var adjustTimer;$(window).bind('resize scroll',function(event)
{clearTimeout(adjustTimer);adjustTimer=setTimeout(function()
{if(event.type==='scroll')
$.fn.qtip.cache.screen.scroll={left:$(window).scrollLeft(),top:$(window).scrollTop()};else
{$.fn.qtip.cache.screen.width=$(window).width();$.fn.qtip.cache.screen.height=$(window).height();};for(i=0;i<$.fn.qtip.interfaces.length;i++)
{var api=$.fn.qtip.interfaces[i];if(api.status.rendered===true&&(api.options.position.type!=='static'||api.options.position.adjust.scroll&&event.type==='scroll'||api.options.position.adjust.resize&&event.type==='resize'))
{api.updatePosition(event,true);}};},100);})
$(document).bind('mousedown.qtip',function(event)
{if($(event.target).parents('div.qtip').length===0)
{$('.qtip[unfocus]').each(function()
{var api=$(this).qtip("api");if($(this).is(':visible')&&!api.status.disabled&&$(event.target).add(api.elements.target).length>1)
api.hide(event);})};})});$.fn.qtip.interfaces=[]
$.fn.qtip.log={error:function(){return this;}};$.fn.qtip.constants={};$.fn.qtip.defaults={content:{prerender:false,text:false,url:false,data:null,title:{text:false,button:false}},position:{target:false,corner:{target:'bottomRight',tooltip:'topLeft'},adjust:{x:0,y:0,mouse:true,screen:false,scroll:true,resize:true},type:'absolute',container:false},show:{when:{target:false,event:'mouseover'},effect:{type:'fade',length:100},delay:140,solo:false,ready:false},hide:{when:{target:false,event:'mouseout'},effect:{type:'fade',length:100},delay:0,fixed:false},api:{beforeRender:function(){},onRender:function(){},beforePositionUpdate:function(){},onPositionUpdate:function(){},beforeShow:function(){},onShow:function(){},beforeHide:function(){},onHide:function(){},beforeContentUpdate:function(){},onContentUpdate:function(){},beforeContentLoad:function(){},onContentLoad:function(){},beforeTitleUpdate:function(){},onTitleUpdate:function(){},beforeDestroy:function(){},onDestroy:function(){},beforeFocus:function(){},onFocus:function(){}}};$.fn.qtip.styles={defaults:{background:'white',color:'#111',overflow:'hidden',textAlign:'left',width:{min:0,max:250},padding:'5px 9px',border:{width:1,radius:0,color:'#d3d3d3'},tip:{corner:false,color:false,size:{width:13,height:13},opacity:1},title:{background:'#e1e1e1',fontWeight:'bold',padding:'7px 12px'},button:{cursor:'pointer'},classes:{target:'',tip:'qtip-tip',title:'qtip-title',button:'qtip-button',content:'qtip-content',active:'qtip-active'}},cream:{border:{width:3,radius:0,color:'#F9E98E'},title:{background:'#F0DE7D',color:'#A27D35'},background:'#FBF7AA',color:'#A27D35',classes:{tooltip:'qtip-cream'}},light:{border:{width:3,radius:0,color:'#E2E2E2'},title:{background:'#f1f1f1',color:'#454545'},background:'white',color:'#454545',classes:{tooltip:'qtip-light'}},dark:{border:{width:3,radius:0,color:'#303030'},title:{background:'#404040',color:'#f3f3f3'},background:'#505050',color:'#f3f3f3',classes:{tooltip:'qtip-dark'}},red:{border:{width:3,radius:0,color:'#CE6F6F'},title:{background:'#f28279',color:'#9C2F2F'},background:'#F79992',color:'#9C2F2F',classes:{tooltip:'qtip-red'}},green:{border:{width:3,radius:0,color:'#A9DB66'},title:{background:'#b9db8c',color:'#58792E'},background:'#CDE6AC',color:'#58792E',classes:{tooltip:'qtip-green'}},blue:{border:{width:3,radius:0,color:'#ADD9ED'},title:{background:'#D0E9F5',color:'#5E99BD'},background:'#E5F6FE',color:'#4D9FBF',classes:{tooltip:'qtip-blue'}}};})(jQuery);jQuery(function($){var csrf_token=$('meta[name=csrf-token]').attr('content'),csrf_param=$('meta[name=csrf-param]').attr('content');$.fn.extend({triggerAndReturn:function(name,data){var event=new $.Event(name);this.trigger(event,data);return event.result!==false;},callRemote:function(){var el=this,data=el.is('form')?el.serializeArray():[],method=el.attr('method')||el.attr('data-method')||'GET',url=el.attr('action')||el.attr('href');if(url===undefined){throw"No URL specified for remote call (action or href must be present).";}else{if(el.triggerAndReturn('ajax:before')){$.ajax({url:url,data:data,dataType:'script',type:method.toUpperCase(),beforeSend:function(xhr){el.trigger('ajax:loading',xhr);},success:function(data,status,xhr){el.trigger('ajax:success',[data,status,xhr]);},complete:function(xhr){el.trigger('ajax:complete',xhr);},error:function(xhr,status,error){el.trigger('ajax:failure',[xhr,status,error]);}});}
el.trigger('ajax:after');}}});$('a[data-confirm],input[data-confirm]').live('click',function(){var el=$(this);if(el.triggerAndReturn('confirm')){if(!confirm(el.attr('data-confirm'))){return false;}}});$('form[data-remote]').live('submit',function(e){$(this).callRemote();e.preventDefault();});$('a[data-remote],input[data-remote]').live('click',function(e){$(this).callRemote();e.preventDefault();});$('a[data-method]:not([data-remote])').live('click',function(e){var link=$(this),href=link.attr('href'),method=link.attr('data-method'),form=$('<form method="post" action="'+href+'"></form>'),metadata_input='<input name="_method" value="'+method+'" type="hidden" />';if(csrf_param!=null&&csrf_token!=null){metadata_input+='<input name="'+csrf_param+'" value="'+csrf_token+'" type="hidden" />';}
form.hide().append(metadata_input).appendTo('body');e.preventDefault();form.submit();});var disable_with_input_selector='input[data-disable-with]';var disable_with_form_selector='form[data-remote]:has('+disable_with_input_selector+')';$(disable_with_form_selector).live('ajax:before',function(){$(this).find(disable_with_input_selector).each(function(){var input=$(this);input.data('enable-with',input.val()).attr('value',input.attr('data-disable-with')).attr('disabled','disabled');});});$(disable_with_form_selector).live('ajax:after',function(){$(this).find(disable_with_input_selector).each(function(){var input=$(this);input.removeAttr('disabled').val(input.data('enable-with'));});});});(function($){$('.dropdown .toggle, .dropdown .select').click(function(){var list=$(this).parent().parent();var listItems=$("dd ul",list);if(listItems.is(':visible')){listItems.hide();list.removeClass('active');}
else{hideAll();listItems.show();list.addClass('active');}});$(document).click(function(e){var clicked=$(e.target);if(!clicked.parents().parent().hasClass('dropdown')){hideAll();}});function hideAll(){$('.dropdown dd ul').hide();$('.dropdown').removeClass('active');}
$.fn.error_tool_tip=function(){$(this).qtip({style:{name:'red',border:{radius:5},tip:{corner:'leftMiddle'}},position:{corner:{target:'rightMiddle',tooltip:'leftMiddle'}}});};})(jQuery)