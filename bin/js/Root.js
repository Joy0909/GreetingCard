var Root = (function(_super) {
	function Root() {
		Root.super(this)
		// this.startBtn.on(Laya.Event.CLICK, this, this.onStartGame)
	}
	// 注册类，类引用，路径，父类
	Laya.class(Root, 'Root', _super)

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

	return Root
})(ui.RootUI)