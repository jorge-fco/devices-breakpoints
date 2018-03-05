(function($){

	app = {
		init: function(){
			app.Code();
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