'use strict';

const debug = require('debug')('chaturbate:panel-parser');
const fs = require('fs');
const path = require('path');
const memoizee = require('memoizee');

const getTransforms = memoizee(() => {
  const transforms = {};
  const normalizedPath = path.join(__dirname, 'transforms');
  fs.readdirSync(normalizedPath).forEach((file) => {
    debug(`loading panel transform '${file}'...`);
    const transform = require('./transforms/' + file);
    transforms[transform.name] = transform;
  });
  return transforms;
});

module.exports = (panelAppName, panel) => {
  const transforms = getTransforms();

  if (transforms[panelAppName]) {
    debug(`transforming panel for '${panelAppName}'...`)
    return transforms[panelAppName].transform(panel);
  }
};