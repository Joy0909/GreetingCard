(function GreetingCard() {
	!function init() {
		Laya.init(640, 1080)
		// 是否自动缩放
		Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL
		// 水平居中
		Laya.stage.alignH = Laya.Stage.ALIGN_CENTER
		// 横向居中
		// Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE
		// 是否自动适应横屏
		// Laya.stage.screenMode = Laya.Stage.SCREEN_NONE
		Laya.stage.bgColor = "#fff"
		
		// Laya 加载 UI，路径，回调，进度，加载资源类型
		Laya.loader.load('res/atlas/ppy.atlas', Laya.Handler.create(this, onLoaded), null, Laya.loader.ATLAS)
	}()

	function onLoaded() {
		GreetingCard.progress = new Progress()
		Laya.stage.addChild(GreetingCard.progress)
		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, onMouseDown)
		Laya.stage.on(Laya.Event.MOUSE_UP, this, onMouseUp)
		Laya.stage.on(Laya.Event.MOUSE_OUT, this, onMouseUp)
	}

	var startY = 0
	
	function onMouseDown() {
		startY = Laya.stage.mouseY
	}

	function onMouseUp() {
		if(Math.abs(Laya.stage.mouseY - startY) >= 100) console.log('下一张')
	}
}(window.GreetingCard || (window.GreetingCard = {})))