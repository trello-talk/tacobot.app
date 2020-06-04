const fs = require('fs-extra');
const path = require('path');

function getTemplate (path) {
  const result = '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
      '<meta charset="utf-8">' +
      '<title>Redirecting...</title>' +
      '<link rel="canonical" href="' + path + '">' +
      '<meta http-equiv="refresh" content="0; url=' + path + '">' +
    '</head>' +
    '</html>';

  return result;
}

function getAliases (options, ctx) {
  let aliasArray = [];

  ctx.pages.filter(({ frontmatter }) => {
    return frontmatter.alias || frontmatter.aliases
  }).forEach(page => {
    let aliases = page.frontmatter.alias || page.frontmatter.aliases;
    if (!Array.isArray(aliases)) aliases = [aliases];
    if (!aliases.length) return;

    aliasArray.push({ url: page.path, aliases });
  });

  if (options && Array.isArray(options))
    aliasArray = aliasArray.concat(options);

  return aliasArray;
}

module.exports = (options, ctx) => ({
  name: 'redirect-pages',
  beforeDevServer(app) {
    getAliases(options, ctx).forEach(({ url, aliases }) => 
      aliases.forEach(alias => 
        app.get(alias, (_, res) => res.redirect(url)))
    );
  },
  generated () {
    const { outDir } = ctx;

    getAliases(options, ctx).forEach(({ url, aliases }) => {
      aliases.forEach(async alias => {
        if (/^\/.+\/$/.test(alias))
          alias = alias.slice(1).replace(/\/$/, '') + '.html';
        const aliasPagePath = path.resolve(outDir, alias)
        await fs.outputFile(aliasPagePath, getTemplate(url))
      });
    });
  }
})