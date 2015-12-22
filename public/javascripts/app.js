var app = app || {};
var active = active || {};


app.Model = Backbone.Model.extend({
});

// define my 4 important parts!
app.Collection = Backbone.Collection.extend({
  model: app.Model, //what type of models will this collection hold
  url: '/api',
  initialize: function(){
    var self = this;  // what is this for???
    this.on('change', function() {
      console.log('Our collection changed.');
      var view = new app.CollectionView({
        collection: self
    });
  });
    this.on('sync', function(){
      console.log('Our collection synced wiht the API.');
      var view = new app.CollectionView({
        collection: self
      });
    });
    // get data from the api
    this.fetch();
  }
});


Backbone.Model.idAttribute = "_id";

app.CollectionView = Backbone.View.extend({
  el: $('#pancake-listing'),
  initialize: function(){
    console.log('Collection View is a go.');
    this.render();
  },
  render: function() {
    console.log('CollectionView is rendering.');
    var models = this.collection.models; //we expect our collection view to be bound to a collection
    for (var m in models) {
      new app.ModelView({
        model: models[m],
        el: this.el
      });
    }
  }
});

app.ModelView = Backbone.View.extend({
  initialize: function(){
    console.log('ModelView instantiated and awaiting orders');
    this.render();
  },
  render: function(){
    console.log('ModelView rendering.');
    var data = this.model.attributes;
    console.log('Grabbing template...');
    var template = $('#recipe-template').html();
    console.log('Transforming template...');
    var compileTpl = _.template(template);
    console.log('Creating HTML from template and model data');
    var html = compileTpl(data);
    console.log('Rendering to page...');
    this.$el.append(html);
  }
});

// mongoDB support!
Backbone.Model.idAttribute = "_id";

$(document).ready(function(){
  active.collection = new app.Collection;
});
