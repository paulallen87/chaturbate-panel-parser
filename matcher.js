
'use strict';

module.exports = (matchers, panel) => {
  const results = matchers.map((regex, index) => {
    if (!regex) return undefined;

    const item = panel[index];
    if (!item) return null;

    const matchResults = [];

    if (regex.label) {
      let labelMatches = item.label.match(regex.label);
      if (!labelMatches) return null;
      labelMatches = Array.from(labelMatches);
      labelMatches.splice(0, 1);
      matchResults.push(...labelMatches);
    }

    if (regex.value) {
      let valueMatches = item.value.match(regex.value);
      if (!valueMatches) return null;
      valueMatches = Array.from(valueMatches);
      valueMatches.splice(0, 1);
      matchResults.push(...valueMatches);
    }

    if (matchResults.length !== regex.assert) return null;

    return matchResults;
  });

  if (results.some((i) => i === null)) return null;

  return results;
};
