# generator-drupal-tpl

> [Yeoman](http://yeoman.io) generator

## What is this?

This is a Yeoman generator that creates Drupal .tpl theme files. Currently, only node.tpl and term.tpl files are supported with more coming in the near future.

The .tpl files are based on [Center](https://www.drupal.org/project/center) and [Prototype](https://www.drupal.org/project/prototype) from [Aten Design Group](http://atendesigngroup.com/). They can be easily changed out for your specific .tpl's

## Getting Started

### Install Yeoman

```bash
npm install -g yo
```

To install generator-drupal-tpl from npm, run:

```bash
npm install -g generator-drupal-tpl
```

Finally, initiate the generator:

```bash
yo drupal-tpl:node machine_name_node_type
```

## Node
### Prompts

#### yo drupal-tpl:node machine_name_node_type

- Machine name: (string) The machine name of your node content type, this is first passed in the initial command but can be changed before generating.

- View mode: (string) If this is for a specific view mode add that machine name.

- Fields: (string) A comma separated list of field machine names. ex. (field_body, field_author)

## Term
### Prompts

#### yo drupal-tpl:term machine_name_term_type

- Machine name: (string) The machine name of your term content type, this is first passed in the initial command but can be changed before generating.

- View mode: (string) If this is for a specific view mode add that machine name.

- Fields: (string) A comma separated list of field machine names. ex. (field_body, field_author)


Currently, the generator only comes with a node.tpl and term.tpl generator (more coming soon), or go ahead and create a pull request for your own. The generator also creates the files in the current directory you are in, this is something that may change later and be relative to drupal root.

## License

MIT
