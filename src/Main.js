var Main = (function(_super) {
	function Main() {
		Main.super(this)
		// this.startBtn.on(Laya.Event.CLICK, this, this.onStartGame)
	}
	// 注册类，类引用，路径，父类
	Laya.class(Main, 'Main', _super)

	// var _proto = Root.prototype
	// _proto.onStartGame = function onStartGame() {
	// 	// 游戏开始，移除自己
	// 	this.removeSelf()
	// 	if(!LayaHit.game) {
	// 		LayaHit.game = new Game()
	// 	}

	// 	LayaHit.game.gameStart()
	// 	Laya.stage.addChild(LayaHit.game)
	// }

	return Main
})(ui.MainUI)