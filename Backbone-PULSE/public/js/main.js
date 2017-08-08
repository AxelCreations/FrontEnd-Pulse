$(document).ready(function(){

	window.views.app = new Puls3.Views.App( $('body') );


	window.collections.articles = new Puls3.Collections.Articles();

	window.collections.articles.on('add', function(model){

		// console.log('Listo', model.toJSON());

		var view = new Puls3.Views.Article({model: model});
		view.render();
		view.$el.prependTo('.posts');
	});

	window.collections.articles.fetch();

});
