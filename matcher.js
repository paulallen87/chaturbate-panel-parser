
module.exports = (matchers, panel) => {
  const results = matchers.map((regex, index) => {
    if (!regex) return undefined;

    const item = panel[index];
    if (!item) return null;

    const results = [];

    if (regex.label) {
      let labelMatches = item.label.match(regex.label);
      if (!labelMatches) return null;
      labelMatches = Array.from(labelMatches);
      labelMatches.splice(0, 1);
      results.push(...labelMatches);
    }

    if (regex.value) {
      let valueMatches = item.value.match(regex.value);
      if (!valueMatches) return null;
      valueMatches = Array.from(valueMatches);
      valueMatches.splice(0, 1);
      results.push(...valueMatches);
    }

    if (results.length != regex.assert) return null;

    return results;
  });

  if (results.some((i) => i === null)) return;

  return results;
};