var Progress = (function (_super) {
	function Progress() {
		Progress.super(this)

		Laya.timer.frameLoop(6, this, updateProgress)
	}
	
	Laya.class(Progress, 'Progress', _super)

	var proto = Progress.prototype

	function updateProgress() {
		this.progress.value += .05
		this.text.text = this.progress.value.toFixed(2) + '%'
		if(this.progress.value >= 1) {
			this.removeSelf()
			
			GreetingCard.main = new Main()
			Laya.stage.addChild(GreetingCard.main)
		}
	}
	
	return Progress
})(ui.ProgressUI)