(function($){

	app = {
		init: function(){
			app.Orientation();
		},
		Orientation: function(){
			if (window.matchMedia("(orientation: portrait)").matches) {
				// you're in PORTRAIT mode
				console.log('PORTRAIT');
			}

			if (window.matchMedia("(orientation: landscape)").matches) {
				// you're in LANDSCAPE mode
				console.log('LANDSCAPE');
			}
		},
		Code: function(){
			hljs.configure({useBR: true});

			$('pre code').each(function(i, block) {
				hljs.highlightBlock(block);
			});
		},
	};

	app.init();
})(jQuery);