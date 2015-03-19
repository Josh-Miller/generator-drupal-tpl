'use strict';

var yeoman = require('yeoman-generator'),
    _ = require('lodash');

var drupalNode = yeoman.generators.NamedBase.extend({
  prompting: function() {
    var done = this.async();

    var questions = [
      {
        name: 'tplName',
        message: 'What is the name of this template?',
        default: this.arguments[0]
      },
      {
        name: 'viewMode',
        message: 'Type the machine name of the view mode, or leave blank for no view mode.',
        default: '',
      },
      {
        name: 'fields',
        message: 'Type a comma separated list of field machine names that will be included in the tpl.',
        default: '',
      },
    ];

    this.prompt(questions, function (props) {

      // set prompts to this object
      var self = this;
      _.forIn(props, function(value, key) {
        self[key] = value;
      });

      done();
    }.bind(this));
  },
  writing: function() {

    var tpl = '--' + this.tplName,
        viewMode = (this.viewMode) ? '--' + this.viewMode : '',
        context = {
          fields: this.fields.split(','),
        };

    this.template('node.tpl.php', 'node' + viewMode + tpl + '.tpl.php', context);

  },
});

module.exports = drupalNode;
