import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return { items:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}]}
    }
});
