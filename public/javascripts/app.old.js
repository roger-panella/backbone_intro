var app = app || {};   // definitions blueprints go here

var active = active || {}; // instantiated objects go here

app.Collection = Backbone.Collection.extend({
  model: app.Model,
  initialize: function() {
    console.log('The collection of pancakes is on the loose');
  },
  model: app.Model,
  url: '/api'
});

app.CollectionView = Backbone.View.extend();

app.Model = Backbone.Model.extend({
  initialize: function() {
    console.log('A model was dynamically generated');
    this.render();
  }
});

Backbone.Model.idAttribute = "_id";

app.ModelView = Backbone.View.extend({
  initialize: function() {
    console.log('A model view was dynamically generated');
    this.render();
  },
  render: function() {
    // use our model's attributes
    var data = this.attributes;
    // get the text of a template
    var template = $('#recipe-template').html();
    // underscore transforms my template into a method
    // this method accepts data as an argument to render it
    var compileTpl = _.template(template);
    var html = compileTpl(data);
    console.log(html);
  }
});

$(document).ready(function(){
  console.log('here we go! pancakes!');
});
