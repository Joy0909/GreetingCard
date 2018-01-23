var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var MainUI=(function(_super){
		function MainUI(){
			
		    this.noteJump=null;
		    this.view0=null;
		    this.view1=null;
		    this.view2=null;
		    this.view3=null;
		    this.view4=null;

			MainUI.__super.call(this);
		}

		CLASS$(MainUI,'ui.MainUI',_super);
		var __proto__=MainUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MainUI.uiView);

		}

		MainUI.uiView={"type":"View","props":{"y":0,"x":0,"width":640,"height":1080},"child":[{"type":"View","props":{"y":0,"var":"view0","right":0,"left":0,"height":1080},"child":[{"type":"Sprite","props":{"y":50,"x":535,"width":75,"height":60},"child":[{"type":"Image","props":{"width":75,"skin":"ppy/ppy_radio.png","height":60}}]},{"type":"Sprite","props":{"y":18,"x":593,"width":17,"height":22},"compId":10,"child":[{"type":"Image","props":{"y":0,"x":0,"width":17,"skin":"ppy/note.png","height":22}}]},{"type":"Text","props":{"y":100,"x":40,"text":"日期","fontSize":30,"color":"#4c67e7"}},{"type":"Text","props":{"y":172,"x":40,"text":"你选择了零零汽","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":244,"x":40,"text":"零零汽陪你度过了","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":247,"x":284,"text":"100","fontSize":30,"color":"#ffbf00","align":"center"}},{"type":"Text","props":{"y":244,"x":340,"text":"个日日夜夜","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":970,"x":224,"text":"上滑开启年度账单","fontSize":24,"color":"black","align":"center"}}]},{"type":"Sprite","props":{"y":1016,"x":304}},{"type":"Image","props":{"y":900,"x":20,"width":120,"height":120}},{"type":"Text","props":{"y":1028,"x":44,"text":"零零汽","fontSize":24,"color":"#333","align":"center"}},{"type":"View","props":{"y":1080,"x":0,"var":"view1","right":0,"left":0,"height":1080},"child":[{"type":"Text","props":{"y":100,"x":40,"text":"日期","fontSize":30,"color":"#8bd737"}},{"type":"Text","props":{"y":172,"x":40,"text":"这一天你下班很晚","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":244,"x":109,"text":"零零汽陪你度过了","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":247,"x":40,"text":"时间","fontSize":30,"color":"#4c67e7","align":"center"}},{"type":"Text","props":{"y":316,"x":40,"text":"个日日夜夜","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":388,"x":40,"text":"零零汽陪你度过了","fontSize":30,"color":"black"}}]},{"type":"View","props":{"y":1080,"x":0,"var":"view2","right":0,"left":0,"height":1080},"child":[{"type":"Text","props":{"y":100,"x":40,"text":"这一年，你总共查询了","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":172,"x":40,"text":"时间","fontSize":30,"color":"#ffbf00","align":"center"}},{"type":"Text","props":{"y":172,"x":110,"text":"个车架号","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":247,"x":40,"text":"时间","fontSize":30,"color":"#7ed321","align":"center"}},{"type":"Text","props":{"y":244,"x":110,"text":"个车型","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":316,"x":40,"text":"时间","fontSize":30,"color":"#4c67e7","align":"center"}},{"type":"Text","props":{"y":316,"x":110,"text":"个零件号","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":388,"x":40,"text":"原来你就是秋名山上的老司机！","fontSize":30,"color":"black"}}]},{"type":"View","props":{"y":1080,"var":"view3","right":0,"left":-3,"height":1080},"child":[{"type":"Text","props":{"y":100,"x":40,"text":"2017年，你促成的汽车零配件交易总额：","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":172,"x":40,"text":"¥","fontSize":30,"color":"#ffbf00","align":"center"}},{"type":"Text","props":{"y":247,"x":40,"text":"其中最大一笔交易金额为","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":316,"x":40,"text":"¥","fontSize":30,"color":"#8bd738","align":"center"}},{"type":"Text","props":{"y":388,"x":40,"text":"土豪，我们做朋友吧！","fontSize":30,"color":"black"}}]},{"type":"View","props":{"y":1080,"x":0,"var":"view4","right":0,"left":0,"height":1080},"child":[{"type":"Text","props":{"y":100,"x":40,"text":"2017年","fontSize":30,"color":"#566FE8"}},{"type":"Text","props":{"y":172,"x":40,"text":"你一共在零零汽上反馈了","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":172,"x":372,"text":"10","fontSize":30,"color":"#ffbf00"}},{"type":"Text","props":{"y":172,"x":410,"text":"个问题","fontSize":30,"color":"black"}},{"type":"Text","props":{"y":247,"x":40,"text":"感谢你的细心反馈帮助我们未来做的更好","fontSize":30,"color":"black"}}]}],"animations":[{"nodes":[{"target":10,"keyframes":{"y":[{"value":19,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0}],"skewY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"skewY","index":0}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":0},{"value":5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":10},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":15},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":19}],"pivotY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"pivotY","index":0}]}}],"name":"noteJump","id":1,"frameRate":24,"action":0}]};
		return MainUI;
	})(View);
var ProgressUI=(function(_super){
		function ProgressUI(){
			
		    this.text=null;
		    this.progress=null;

			ProgressUI.__super.call(this);
		}

		CLASS$(ProgressUI,'ui.ProgressUI',_super);
		var __proto__=ProgressUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ProgressUI.uiView);

		}

		ProgressUI.uiView={"type":"View","props":{"width":640,"height":1080},"child":[{"type":"Text","props":{"y":500,"x":302,"var":"text","text":"0%","fontSize":24,"color":"#e72623","bold":true,"align":"center"}},{"type":"ProgressBar","props":{"y":528,"x":170,"width":300,"var":"progress","skin":"ppy/progress.png","height":23}}]};
		return ProgressUI;
	})(View);