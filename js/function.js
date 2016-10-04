
function getClass(classname,range){
	if(document.getElementsByClassName){
		return range.getElementsByClassName(classname);
	}
	else{
		var all=range.getElementsByTagName("*");
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,classname)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}

function checkClass(tagClass,classname){
	var aa=tagClass.split(" ");
	for(var i=0;i<aa.length;i++){
		if(aa[i]==classname){
			return true;
		}
	}
	return false;
}

// 获取文本内容
// 设置文本内容
function text(obj,val){
	/*alert("|"+obj.textContent+"|");
	""*/
	if(val==undefined){
		if(obj.textContent!=undefined){
			return obj.textContent;
		}
		else{
			return obj.innerText;
		}
	}
	else{
		if(obj.textContent!=undefined){
			obj.textContent=val;
		}
		else{
			obj.innerText=val;
		}	
	}
}

// 函数获取样式的方法
// 获取通用样式  getStyle(obj,attr)
// obj  要获取的对象
// attr  要获取的属性
// border-width
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return window.getComputedStyle(obj,null)[attr];
	}
}


function $(selector,range){
	if(typeof selector=="string"){
		// return('获取');
		// 如果传了range参数时候将range赋值给range否则将document赋给range
		var range=range||document;
		// 获取ID
		if(selector.charAt(0)=="#"){
			return document.getElementById(selector.slice(1));
		}
		// 获取类名
		if(selector.charAt(0)=="."){
			return getClass(selector.substr(1),range);
		}
		// 获取标签名
		if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
			return range.getElementsByTagName(selector);
		}
		// 创建元素/标签
		if(/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)){
			return document.createElement(selector.slice(1,-1));
		}
	}
	else if(typeof selector=="function"){
		// return('函数');
		window.onload=selector;
	}
}


// 获取子元素节点时所遇到的空格和注释问题
function getChilds(obj){
	var childs=obj.childNodes;
	var newArr=[];
	for(var i=0;i<childs.length;i++){
		if(!(childs[i].nodeType==8||(childs[i].nodeType==3&&trim(childs[i].nodeValue)==""))){
			newArr.push(childs[i]);
		}
	}
	return newArr;
}

// 用空元素代替空格 正则表达式  把字符串左右两边的空格替换为空元素
function trim(str){
	return str.replace(/^\s|\s+$/g,"");
}

// 获取第一个节点的方法
function getFirst(obj){
	return getChilds(obj)[0];
}

// 获取最后一个节点的方法
function getLast(obj){
	var childs=getChilds(obj);
	return getChilds(obj)[getChilds(obj).length-1];
}

// 获取指定节点的方法
function getIndex(obj,index){
	var childs=getChilds(obj);
	return childs[index];
}

// 获取指定节点的下一个节点
function getNext(obj){
	var next=obj.nextSibling;
	if(!next){
		return false;
	}
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
		next=next.nextSibling;
		if(!next){
			return false;
		}
	}
	return next;
}

// 获取指定节点的上一个节点
function getUp(obj){
	var up=obj.previousSibling;
	if(!up){
		return false;
	}
	while(up.nodeType==8||(up.nodeType==3&&trim(up.nodeValue)=="")){
		up=up.previousSibling;
		if(!up){
			return false;
		}
	}
	return up;
}

// 将节点插入到指定节点之前  这样就无需传父节点，函数内部已经通过之前的对象获取到父节点了
function insertBefore(obj1,obj2){
	var parent=obj2.parentNode;
	return parent.insertBefore(obj1,obj2);
}

// 将节点插入到指定节点之后
function insertAfter(obj,endobj){
	var parent=endobj.parentNode;
	var next=getNext(endobj);
	// parent.insertBefore(obj1,next);
	if(next){
		return insertBefore(obj,next);
	}
	else{
		return parent.appendChild(obj);
	}
}

// 同一事件绑定多个处理程序的兼容性问题以及this的指向问题
function on(obj,ev,callback){
	if(obj.addEventListener){
		obj.addEventListener(ev,callback);
	}
	else{
		obj.attachEvent('on'+ev,obj.fffnnn);
		obj.fffnnn=function(){
			callback.call(obj);
		}
	}
}

// 删除对象的某一处理程序
function off(obj,ev,callback){
	if(obj.removeEventListener){
		obj.removeEventListener(ev,callback);
	}
	else{
		obj.detachEvent('on'+ev,obj.fffnnn);
	}
}



