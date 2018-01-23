var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var MainUI=(function(_super){
		function MainUI(){
			
		    this.noteJump=null;
		    this.view0=null;

			MainUI.__super.call(this);
		}

		CLASS$(MainUI,'ui.MainUI',_super);
		var __proto__=MainUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MainUI.uiView);

		}

		MainUI.uiView={"type":"View","props":{"width":360,"height":640},"child":[{"type":"View","props":{"var":"view0","top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Sprite","props":{"y":50,"x":255,"width":75,"height":60},"child":[{"type":"Image","props":{"width":75,"skin":"ppy/ppy_radio.png","height":60}}]},{"type":"Sprite","props":{"y":19,"x":307,"width":17,"height":22},"compId":10,"child":[{"type":"Image","props":{"y":0,"x":0,"width":17,"skin":"ppy/note.png","height":22}}]}]}],"animations":[{"nodes":[{"target":10,"keyframes":{"y":[{"value":19,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":19,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":1}],"skewY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"skewY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"skewY","index":1}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":1},{"value":2,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":2},{"value":3,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":3},{"value":4,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":4},{"value":5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":5},{"value":4,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":6},{"value":3,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":7},{"value":2,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":10},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":11},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":12},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":13},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":14},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":15},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":16},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":17},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":18},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":19}],"pivotY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"pivotY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"pivotY","index":1}]}}],"name":"noteJump","id":1,"frameRate":24,"action":0}]};
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

		ProgressUI.uiView={"type":"View","props":{"width":360,"height":640},"child":[{"type":"Text","props":{"y":278,"x":160,"var":"text","text":"0%","fontSize":24,"color":"#e72623","bold":true,"align":"center"}},{"type":"ProgressBar","props":{"y":308,"x":30,"width":300,"var":"progress","skin":"ppy/progress.png","height":23}}]};
		return ProgressUI;
	})(View);