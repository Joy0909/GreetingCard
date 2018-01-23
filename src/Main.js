Laya.class(Main, 'Main', ui.MainUI)

function Main() {
	Main.super(this)
	var _this = this
	start()

	function start() {
		console.log('start')
		_this.noteJump.play()
	}
}