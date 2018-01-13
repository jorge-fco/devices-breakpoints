(function($){
	//

	app = {
		init: function(){
			//
			$('pre code').each(function(i, block) {
				hljs.highlightBlock(block);
			});
		}
	};

	//
	app.init();
})(jQuery);