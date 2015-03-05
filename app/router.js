import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('lessons', function(){
      this.route('new');
  });
  this.resource('lesson', { path: '/lesson/:lesson_id' });
});

export default Router;
