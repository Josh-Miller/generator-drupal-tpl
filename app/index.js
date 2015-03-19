'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    console.log('There is no base generator, please use one of the sub-generators ex. yo drupal-tpl:node');
  }
});
