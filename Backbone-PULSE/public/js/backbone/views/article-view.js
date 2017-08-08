Puls3.Views.Article = Backbone.View.extend({
	tagName : "article",
	className : "post",
	initialize : function (){
		// debugger;
		this.template = _.template($('#article-template').html());
		// this.template = swig.compile($('#article-template').html());
	},
	render : function (){
		var data = this.model.toJSON();
		var html = this.template(data);
		this.$el.html(html);
	}
});