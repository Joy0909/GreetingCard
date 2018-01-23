var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var MainUI=(function(_super){
		function MainUI(){
			
		    this.view0=null;

			MainUI.__super.call(this);
		}

		CLASS$(MainUI,'ui.MainUI',_super);
		var __proto__=MainUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MainUI.uiView);

		}

		MainUI.uiView={"type":"View","props":{"width":360,"height":640},"child":[{"type":"View","props":{"var":"view0","top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Text","props":{"y":305,"x":147,"width":65,"text":"11111","height":30,"fontSize":26,"bold":true}}]}]};
		return MainUI;
	})(View);
var ProgressUI=(function(_super){
		function ProgressUI(){
			
		    this.progress=null;
		    this.text=null;

			ProgressUI.__super.call(this);
		}

		CLASS$(ProgressUI,'ui.ProgressUI',_super);
		var __proto__=ProgressUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ProgressUI.uiView);

		}

		ProgressUI.uiView={"type":"View","props":{"width":360,"height":640},"child":[{"type":"ProgressBar","props":{"y":308,"x":30,"width":300,"var":"progress","value":0,"skin":"comp/progress.png","height":24}},{"type":"Text","props":{"y":278,"x":160,"var":"text","text":"0%","fontSize":24,"color":"#e72623","bold":true,"align":"center"}}]};
		return ProgressUI;
	})(View);