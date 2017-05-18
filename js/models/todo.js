// js/models/todo.js

  var app = app || {};

  // Todo Model
  // ----------
  // Our basic **Todo** model has `title` and `completed` attributes.

  app.Todo = Backbone.Model.extend({
    //idAttribute:"_id", // http://stackoverflow.com/questions/14299992/backbone-collection-get-model-by-id
    // Default attributes ensure that each todo created has `title` and `completed` keys.
    defaults: {
      title: '',
      databaseId: 0,
      completed: false
    },
    
    initialize: function(id) {
      var v = this.get('cid');
      v = this.cid;
      this.set('databaseId',v);
      console.log("Just set databaseId to " + v);
    },

    // Toggle the `completed` state of this todo item.
    toggle: function() {
      this.save({
        completed: !this.get('completed')
      });
    }

  });