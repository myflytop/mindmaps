
$(function() {
	var toolbar = new ToolBar();
	MicroEvent.mixin(ToolBar);
	
	var canvas = new Canvas();
	var statusbar = new StatusBar();
	
	
	
	var view = new AppView(toolbar, canvas, statusbar);
	var presenter = new AppPresenter(view);
	
	
});