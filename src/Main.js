var Main = (function(_super) {
	function Main() {
		Main.super(this)
		// this.startBtn.on(Laya.Event.CLICK, this, this.onStartGame)
	}
	// 注册类，类引用，路径，父类
	Laya.class(Main, 'Main', _super)

	return Main
})(ui.MainUI)