const yaml = require('js-yaml'),
      fs = require('fs'),
      util = require('util'),
      path = require('path'),
      glob = util.promisify(require('glob')),
      Mustache = require('mustache'),
      mkdirp = require('mkdirp'),
      readFile = util.promisify(fs.readFile),
      writeFile = util.promisify(fs.writeFile),
      TEMPLATE_DIR = path.join(__dirname, 'templates');
      OUTPUT_DIR = path.join(__dirname, '..', '..', '..', 'dist');

async function render(output, templateName, data) {
   await mkdirp(path.dirname(output));

   const template = await readFile(path.join(TEMPLATE_DIR, `${templateName}.html`), 'utf8'),
         compiled = Mustache.render(template, data);

   await writeFile(output, compiled);
}

(async () => {
   const files = await glob(path.join(__dirname, '..', '..', '..', 'drinks', '**', '*.yml'));

   const drinks = await Promise.all(files.map(async (file) => {
      const raw = await readFile(file, 'utf8'),
            data = yaml.safeLoad(raw),
            outputFilename = path.basename(file, '.yml') + '.html';

      await render(path.join(OUTPUT_DIR, 'drinks', outputFilename), 'drink', data);

      return {
         name: data.name,
         link: `drinks/${outputFilename}`,
      };
   }));

   await render(path.join(OUTPUT_DIR, 'index.html'), 'index', {
      drinks: drinks.sort((a, b) => {
         return a.name.localeCompare(b.name);
      }),
   });
})();
