const { cpSync, mkdirSync, readdirSync, rmSync } = require('node:fs');
const path = require('node:path');

const publicDirectories = new Set([
  'admin', 'artistas', 'artistas-antigo', 'assets', 'charts', 'content',
  'css', 'descartados', 'fontes', 'img', 'js', 'menu', 'metacritic', 'texte',
]);
const publicFiles = new Set([
  'albums-index.json', 'favicon.ico', 'icon.png', 'icon.svg', 'license.txt',
  'robots.txt', 'site.webmanifest',
]);

function preparePublish(source, destination) {
  rmSync(destination, { recursive: true, force: true });
  mkdirSync(destination, { recursive: true });
  for (const entry of readdirSync(source, { withFileTypes: true })) {
    const isPublic = entry.isDirectory()
      ? publicDirectories.has(entry.name)
      : entry.isFile() && (entry.name.endsWith('.html') || publicFiles.has(entry.name));
    if (isPublic) {
      cpSync(path.join(source, entry.name), path.join(destination, entry.name), {
        recursive: true,
        filter: file => !path.relative(source, file).split(path.sep).some(part => part.startsWith('.')),
      });
    }
  }
}

module.exports = { preparePublish };
if (require.main === module) {
  const root = path.resolve(__dirname, '..');
  preparePublish(root, path.join(root, 'dist'));
  console.log('Static site files prepared in dist.');
}
