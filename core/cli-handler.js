#!/usr/bin/env node

/**
Name : Wordpress block plugin boilerplate generator
Author:  Vurghus Minar <vurghus.minar@outlook.com>
License : MIT
Version : 1.0
* */

// Module Dependencies
const generate = require('./generator.js');

module.exports = {
  listen() {
    // Slice out the array
    const userArgs = process.argv.slice(1);
    // Read Argument Values and Assign
    const resource = userArgs[1];

    if (resource === 'help') {
      process.stdout.write('Help is at hand! \n');
      process.stdout.write('help === Display help \n');
      process.stdout.write('wp-block-gen <block-plugin-name> === e.g wp-block-gen my-block-plugin \n');
      process.exit();
    } else {
      generate.generate(resource);
    }
  },
};
