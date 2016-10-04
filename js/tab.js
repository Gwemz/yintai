$(function(){


	// banner开始
	var Ban=document.getElementById('banner');
	var Con=getClass('content',Ban)[0];
	var list=Con.getElementsByTagName('a');
	var Roll=getClass('roll',Ban)[0];
	var Rolli=Roll.getElementsByTagName('li');
	var Btn=getClass('btn',Con)[0];
	var Left=getClass('left',Btn)[0];
	var Right=getClass('right',Btn)[0];
	// banner结束
	// Brand开始
	var Brand=document.getElementById('brand');
	var Brands=getClass('brand_content',Brand)[0];
	var BrandsUl=Brands.getElementsByTagName('ul')[0];
	var BrandsLi=Brands.getElementsByTagName('li');
	var BrandsCo=getClass('container',Brands);
	var BrandsSp=BrandsUl.getElementsByTagName('span');
	var BrandOne=$('.one',BrandsCo[2]);
	// console.log(BrandOne);
	for(var e=0;e<BrandOne.length;e++){
		BrandOne[e].index=e;
		BrandOne[e].onmouseover=function(){
			animate($('.bt',BrandOne[this.index])[0],{width:220},500);
			animate($('.bl',BrandOne[this.index])[0],{height:260},500);
			animate($('.br',BrandOne[this.index])[0],{height:260},500);
			animate($('.bb',BrandOne[this.index])[0],{width:220},500);
		}
		BrandOne[e].onmouseout=function(){
			animate($('.bt',BrandOne[this.index])[0],{width:0},500);
			animate($('.bl',BrandOne[this.index])[0],{height:0},500);
			animate($('.br',BrandOne[this.index])[0],{height:0},500);
			animate($('.bb',BrandOne[this.index])[0],{width:0},500);
		}
	}
	// brand线条动画效果开始

	// brand线条动画效果结束
	// Brand结束
	// brand2选项卡开始
	var Brand2=document.getElementById('brand2');
	var slide1=getClass('slide1',Brand2)[0];
	var slide1T=getClass('top',slide1)[0];
	var slide1Sp=slide1T.getElementsByTagName('span');
	var slide1Li=slide1T.getElementsByTagName('li');
	var slide1S=getClass('second',slide1);
	var slideli=$('li',slide1S[1]);
	var slideA=$('a',slide1S[0]);
	// brand2选项卡结束
	// brand2图片透明度效果开始
	for(var m=0;m<slideA.length;m++){
		slideA[m].index=m;
		slideA[m].onmouseover=function(){
			slideA[this.index].style.opacity='0.7';
		}
		slideA[m].onmouseout=function(){
			slideA[this.index].style.opacity='1';
		}
	}
	// brand2图片透明度效果结束
	// brand2线条动画开始
	for(var f=0;f<slideli.length;f++){
		slideli[f].index=f;
		slideli[f].onmouseover=function(){
			animate($(('.bt'),slideli[this.index])[0],{width:198},500);
			animate($(('.bl'),slideli[this.index])[0],{height:248},500);
			animate($(('.br'),slideli[this.index])[0],{height:248},500);
			animate($(('.bb'),slideli[this.index])[0],{width:198},500);
		}
		slideli[f].onmouseout=function(){
			animate($(('.bt'),slideli[this.index])[0],{width:0},500);
			animate($(('.bl'),slideli[this.index])[0],{height:0},500);
			animate($(('.br'),slideli[this.index])[0],{height:0},500);
			animate($(('.bb'),slideli[this.index])[0],{width:0},500);
		}
	}
	// brand2线条动画结束
	// Brand4.center选项卡开始

	
	var brand4C=getClass('brand4',document);
	for(var i=0;i<brand4C.length;i++){
		var Brand4=getClass('brand4',document)[i];
		wheel(Brand4);
	}
	function wheel(container){
		
		// 线条显示效果开始
		var right1=$('.right',Brand4)[0];
		var ri1A=$('a',right1);
		var Bl=$('.bl',right1);
		var Bt=$('.bt',right1);
		var Br=$('.br',right1);
		var Bb=$('.bb',right1);

		for(var a=0;a<ri1A.length;a++){
			ri1A[a].index=a;
			ri1A[a].onmouseover=function(){
				animate(Bl[this.index],{height:182},500);
				animate(Bt[this.index],{width:272},500);
				animate(Br[this.index],{height:182},500);
				animate(Bb[this.index],{width:272},500);
			}
			ri1A[a].onmouseout=function(){
				animate(Bl[this.index],{height:0},500);
				animate(Bt[this.index],{width:0},500);
				animate(Br[this.index],{height:0},500);
				animate(Bb[this.index],{width:0},500);
			}
		}

		// 线条显示效果结束

		// 选项卡动画效果开始
		var Cen=getClass('center',Brand4)[0];
		var Container=getClass('container',Brand4)[0];
		var ConA=Container.getElementsByTagName('a');
		var Img=Container.getElementsByTagName('img');
		var CenU=getClass('lis',Brand4)[0];
		var CenLi=CenU.getElementsByTagName('li');
		var CenBtn=getClass('btn',Brand4)[0];
		var Prev=getClass('prev',CenBtn)[0];
		var Next=getClass('next',CenBtn)[0];

		CenLi[0].style.backgroundPosition="0 -13px";
		var ins=parseInt(getStyle(Img[0],"width"));
		// console.log(ins);
		Container.style.width=ins*(Img.length)+'px';


		// 鼠标移到标签上时显示按钮
		Cen.onmouseover=function(){
			animate(Prev,{left:0});
			animate(Next,{right:0});
		}
		Cen.onmouseout=function(){
			animate(Prev,{left:-30});
			animate(Next,{right:-30});
		}
		// 选项卡效果
		for(var m=0;m<CenLi.length;m++){
			CenLi[m].index=m;
			CenLi[m].onclick=function(){
				for(var k=0;k<CenLi.length;k++){
					CenLi[k].style.backgroundPosition="0 0";
				}
				animate(Container,{left:-ins*this.index});
				CenLi[this.index].style.backgroundPosition="0 -13px";
			}
		}
		// 按钮右键
		Next.onclick=function(){
			animate(Container,{left:-ins});
			for(var i=0;i<CenLi.length;i++){
				CenLi[i].style.backgroundPosition="0 0";
			}
			CenLi[1].style.backgroundPosition="0 -13px";
		}
		// 按钮左键
		Prev.onclick=function(){
			animate(Container,{left:0});
			for(var i=0;i<CenLi.length;i++){
				CenLi[i].style.backgroundPosition="0 0";
			}
			CenLi[0].style.backgroundPosition="0 -13px";
		}
		// 选项卡动画效果结束
	}

	// 固定定位开始
	var fixed=$('#fixed');
	var fixA=$('a',fixed);
	fixed.style.display="none";
	var bran4=$('.brand4');
	var arr1=[];
	for(var m=0;m<bran4.length;m++){
		arr1.push(bran4[m].offsetTop);
	}
	fixA[0].style.backgroundColor="#e5004f";
	on(window,'scroll',function(){
		var tops=document.body.scrollTop||document.documentElement.scrollTop;
		if(tops>1000){
			fixed.style.display="block";
		}
		else{
			fixed.style.display="none";
		}
		for(var i=0;i<bran4.length;i++){
			if(tops+200>arr1[i]){
				for(j=0;j<bran4.length;j++){
					fixA[j].style.cssText="";
				}
				fixA[i].style.cssText="background-color:orange;background-image:none;line-height:18px;background-color:#e5004f;color:#fff;font-size:14px;text-align:center;"
			}
		}
		fixA[bran4.length].onclick=function(){
			animate(document.body,{scrollTop:0},500);
			animate(document.documentElement,{scrollTop:0},500);
		}
	})
	// 选项卡效果开始
	for(n=0;n<bran4.length;n++){
		fixA[n].index=n;
		fixA[n].onclick=function(){
			animate(document.body,{scrollTop:arr1[this.index]-50},500);
			animate(document.documentElement,{scrollTop:arr1[this.index]-50},500);
			/*document.body.scrollTop=arr1[this.index];
			document.documentElement.scrollTop=arr1[this.index];*/
		}
	}
	// 选项卡效果结束
	// 固定定位结束
	// 按需加载开始
	var need=$('.need');
	var ih=document.documentElement.clientHeight;
	var arr2=[];
	var flag2=[];
	for(var ne=0;ne<need.length;ne++){
		arr2.push(need[ne].offsetTop);
		flag2.push(true);
		on(window,'scroll',function(){
			var tops=document.body.scrollTop||document.documentElement.scrollTop;
			for(var j=0;j<need.length;j++){
				var bb=$('img',need[j]);
				if((tops+ih)>arr2[j]&&(flag2[j])){
					flag2[j]=false;
					for(var k=0;k<bb.length;k++){
						bb[k].src=bb[k].getAttribute('asrc');
					}
				}
			}
		})
	}
	
	// 按需加载结束
	// nav显示隐藏浮动框开始
	var nav=$('#nav');
	var navL=$('.left',nav)[0];
	var wechat=$('.two',navL)[0];
	var wechat1=$('.wechat',wechat)[0];
	var wechatb=$('b',wechat)[0];
	var phone=$('.three',navL)[0];
	var phone1=$('.phone',phone)[0];
	var phoneb=$('b',phone)[0];
	var navR=$('.right',nav)[0];
	var navR2=$('.two',navR)[0];
	var navlis=$('.lis',navR2)[0];
	var navR2b=$('b',navR2)[0];
	
	wechat1.style.display="none";
	phone1.style.display="none";
	navlis.style.display="none";
	hover(wechat,function(){
		wechat1.style.display="block";
		this.style.cssText="background-color:#fff";
		wechatb.style.backgroundPosition="-175px -128px";
	},function(){
		wechat1.style.display="none";
		this.style.backgroundColor="";
		wechatb.style.backgroundPosition="-175px -111px";
	})
	hover(phone,function(){
		phone1.style.display="block";
		this.style.cssText="background-color:#fff";
		phoneb.style.backgroundPosition="-175px -128px";
	},function(){
		phone1.style.display="none";
		this.style.backgroundColor="";
		phoneb.style.backgroundPosition="-175px -111px";
	})
	hover(navR2,function(){
		navlis.style.display="block";
		this.style.cssText="background-color:#fff";
		navR2b.style.backgroundPosition="-175px -128px";
	},function(){
		navlis.style.display="none";
		this.style.backgroundColor="";
		navR2b.style.backgroundPosition="-175px -111px";
	})
	// nav显示隐藏浮动框结束

	// 右侧内容框的显示和隐藏
	var menu=$('.menu-cate')[0];
	var menulis=$('.list',menu)[0];

	var mlisdl=$('dl',menulis);
	var contents=$('.content',menu);
	console.log(menulis);
	for(var l=0;l<mlisdl.length;l++){

		mlisdl[l].index=l;
		hover(mlisdl[l],function(){
			$('dt',menulis)[this.index].style.backgroundColor="#e5004f";
			contents[this.index].style.display="block";
		},function(){
			$('dt',menulis)[this.index].style.backgroundColor="";
			contents[this.index].style.display="none";
		})
	}
	// banner部分自动播放效果
	var index=0;
	list[0].style.display='block';
	Rolli[0].style.backgroundColor='#e5004f';
	var t=setInterval(move,2000);
	function move(){
		index++;
		if(index==list.length){
			index=0;
		}
		for(var i=0;i<list.length;i++){
			list[i].style.display='none';
			Rolli[i].style.backgroundColor="";
		}
		list[index].style.display='block';
		Rolli[index].style.backgroundColor='#e5004f';
	}
	// 鼠标移上去的时候定时事件停止
	Con.onmouseover=function(){
		clearInterval(t);
		Left.style.opacity='1';
		Right.style.opacity='1';
	}
	Con.onmouseout=function(){
		t=setInterval(move,2000);
		Left.style.opacity='0';
		Right.style.opacity='0';
	}
	// 鼠标单击滚动按钮时展示相应的图片
	for(var i=0;i<Rolli.length;i++){
		Rolli[i].index=i;
		Rolli[i].onclick=function(){
			for(var j=0;j<Rolli.length;j++){
				list[j].style.display='none';
				Rolli[j].style.backgroundColor="";
			}
			Rolli[this.index].style.backgroundColor='#e5004f';
			list[this.index].style.display='block';
			index=this.index;
		}
	}
	// 点击左键按钮
	Left.onclick=function(){
		index--;
		// 当index=-1时,将index即数组下标的值赋值为长度-1
		if(index==-1){
			index=Rolli.length-1;
		}
		for(var i=0;i<list.length;i++){
			list[i].style.display='none';
			Rolli[i].style.backgroundColor="";
		}
		list[index].style.display='block';
		Rolli[index].style.backgroundColor='#e5004f';
	}
	// 点击右键按钮
	Right.onclick=function(){
		move();
	}
	// Brand选项卡效果
	BrandsLi[0].style.fontWeight="bold";
	BrandsLi[0].style.borderBottom="5px solid #e5004f";
	BrandsSp[0].style.display="block";
	for(var j=0;j<BrandsCo.length;j++){
		BrandsLi[j].index=j;
		BrandsLi[j].onmouseover=function(){
			for(var k=0;k<BrandsCo.length;k++){
				BrandsCo[k].style.display="none";
				BrandsLi[k].style.fontWeight="";
				BrandsLi[k].style.borderBottom="";
				BrandsSp[k].style.display="none";
			}
			BrandsCo[this.index].style.display="block";
			BrandsLi[this.index].style.fontWeight="bold";
			BrandsLi[this.index].style.borderBottom="5px solid #e5004f";
			BrandsSp[this.index].style.display="block";
		}
	}
	// brand2选项卡效果	
	slide1Li[0].style.fontWeight="bold";
	slide1Li[0].style.borderBottom="3px solid #e70050";
	slide1Sp[0].style.display="block";
	slide1S[0].style.display="block";
	for(var f=0;f<slide1Sp.length;f++){
		slide1Li[f].index=f;
		slide1Li[f].onmouseover=function(){
			for(var k=0;k<slide1Sp.length;k++){
				slide1Li[k].style.fontWeight="";
				slide1Li[k].style.borderBottom="";
				slide1Sp[k].style.display="none";
				slide1S[k].style.display="none";
			}
			slide1Li[this.index].style.fontWeight="bold";
			slide1Li[this.index].style.borderBottom="3px solid #e70050";
			slide1Sp[this.index].style.display="block";
			slide1S[this.index].style.display="block";

		}
	}
	// brand2选项卡效果结束

	// 无缝滚动效果

	var Floor2=$('.floor2',document);
	for(var k=0;k<Floor2.length;k++){
		// var Con4L=$('.floor2',document)[k];
		wheel1(Floor2[k]);
	}
	function wheel1(Con4L){
		var Onebox=$('.oneBox',Con4L)[0];
		var One=$('.one',Con4L);
		var Prev1=$('.prev',Con4L)[0];
		var Next1=$('.next',Con4L)[0];
		// console.log(One[0]);
		var iw=parseInt(getStyle(One[0],'width'));
		// console.log(iw);
		for(var i=0;i<One.length;i++){
			One[i].style.left=(iw+44)+'px';
		}
		One[0].style.left=0;
		Onebox.style.width=(iw+44)*2+'px';
		// 点击右键
		var self=0;
		var next=0;
		Next1.onclick=function(){
			next++;
			if(next==One.length){
				next=0;
			}
			One[next].style.left=(iw+44)+'px';
			animate(One[self],{left:-(iw+44)},500);
			animate(One[next],{left:0},500);
			self=next;
		}
		// 点击左键
		Prev1.onclick=function(){
			next--;
			if(next==-1){
				next=One.length-1;
			}
			One[next].style.left=-(iw+44)+'px';
			animate(One[self],{left:(iw+44)},500);
			animate(One[next],{left:0},500);
			self=next;
		}
	}


	

})