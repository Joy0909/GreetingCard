var Progress = (function (_super) {
	function Progress() {
		Progress.super(this)

		Laya.timer.frameLoop(6, this, updateProgress)
	}
	
	Laya.class(Progress, 'Progress', _super)

	// var proto = Progress.prototype

	function updateProgress() {
		var value = this.progress.value += .05
		this.text.text = (value * 100).toFixed() + '%'
		if(value >= 1) {
			this.removeSelf()
			
			GreetingCard.main = new Main()
			Laya.stage.addChild(GreetingCard.main)
		}
	}
	
	return Progress
})(ui.ProgressUI)