'use strict';

const debug = require('debug')('chaturbate:panel-parser');
const fs = require('fs');
const path = require('path');

const normalizedPath = path.join(__dirname, 'transforms');
const TRANSFORMS = {}

fs.readdirSync(normalizedPath).forEach((file) => {
  debug(`loading panel transform '${file}'...`);
  const transform = require('./transforms/' + file);
  TRANSFORMS[transform.name] = transform;
});

module.exports = (panelAppName, panel) => {
  if (TRANSFORMS[panelAppName]) {
    debug(`transforming panel for '${panelAppName}'...`)
    return TRANSFORMS[panelAppName].transform(panel);
  }
};