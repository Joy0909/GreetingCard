var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var ProgressUI=(function(_super){
		function ProgressUI(){
			

			ProgressUI.__super.call(this);
		}

		CLASS$(ProgressUI,'ui.ProgressUI',_super);
		var __proto__=ProgressUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ProgressUI.uiView);

		}

		ProgressUI.uiView={"type":"View","props":{"width":360,"height":640}};
		return ProgressUI;
	})(View);
var RootUI=(function(_super){
		function RootUI(){
			
		    this.view0=null;

			RootUI.__super.call(this);
		}

		CLASS$(RootUI,'ui.RootUI',_super);
		var __proto__=RootUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RootUI.uiView);

		}

		RootUI.uiView={"type":"View","props":{"width":360,"height":640},"child":[{"type":"View","props":{"var":"view0","top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Text","props":{"y":305,"x":147,"width":65,"text":"11111","height":30,"fontSize":26,"bold":true}}]}]};
		return RootUI;
	})(View);