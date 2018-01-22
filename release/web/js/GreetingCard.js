(function GreetingCard() {
	!function init() {
		Laya.init(360, 720)
		// 是否自动缩放
		// Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL
		// 水平居中
		// Laya.stage.alignH = Laya.Stage.ALIGN_CENTER
		// 横向居中
		// Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE
		// 是否自动适应横屏
		// Laya.stage.screenMode = Laya.Stage.SCREEN_NONE
		Laya.stage.bgColor = "#fff"
		// Laya 加载 UI，路径，回调，进度，加载资源类型
		Laya.loader.load('res/atlas/comp.atlas', Laya.Handler.create(this, onLoaded), null, Laya.loader.ATLAS)
	}()

	function onLoaded() {
		GreetingCard.root = new Root()
		Laya.stage.addChild(GreetingCard.root)
	}
}(window.GreetingCard || (window.GreetingCard = {})))