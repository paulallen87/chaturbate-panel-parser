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
    // eslint-disable-next-line global-require
    const transform = require(`./transforms/${file}`);
    transforms[transform.name] = transform;
  });
  return transforms;
});

module.exports = (panelAppName, panel) => {
  const transforms = getTransforms();

  if (transforms[panelAppName]) {
    debug(`transforming panel for '${panelAppName}'...`);
    return transforms[panelAppName].transform(panel);
  }

  let found = null;

  Object.keys(transforms).some((name) => {
    debug(`trying transform panel for '${name}'...`);
    found = transforms[panelAppName].transform(panel);
    return Boolean(found);
  });

  if (found) {
    debug('manually found transform');
    return found;
  }

  return undefined;
};
