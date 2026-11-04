const { test } = require('node:test');
const assert = require('node:assert/strict');
const { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
const { preparePublish } = require('../scripts/prepare-publish.cjs');

test('publishes the current homepage and assets while keeping server files out of the output', () => {
  const source = mkdtempSync(path.join(tmpdir(), 'site-publish-'));
  const destination = path.join(source, 'dist');
  const files = {
    'index.html': 'current homepage',
    'index-antigo.html': 'legacy homepage',
    'js/home-content.js': 'homepage script',
    'assets/covers/nightshift.jpg': 'cover',
    'content/home-defaults.json': '{}',
    'admin/index.html': 'admin page',
    'admin/.private': 'private fixture',
    'netlify/functions/content.mts': 'server code',
    'db/index.ts': 'database code',
    '.netlify/state.json': '{}',
    '.env': 'private fixture',
    'package.json': '{}',
    'package-lock.json': '{}',
    'dist/stale.html': 'removed page',
  };
  try {
    for (const [file, text] of Object.entries(files)) {
      const target = path.join(source, file);
      mkdirSync(path.dirname(target), { recursive: true });
      writeFileSync(target, text);
    }
    preparePublish(source, destination);
    for (const file of ['index.html', 'index-antigo.html', 'js/home-content.js', 'assets/covers/nightshift.jpg', 'content/home-defaults.json', 'admin/index.html']) {
      assert.equal(readFileSync(path.join(destination, file), 'utf8'), files[file]);
    }
    for (const file of ['netlify', 'db', '.netlify', '.env', 'package.json', 'package-lock.json', 'admin/.private', 'stale.html']) {
      assert.equal(existsSync(path.join(destination, file)), false, file);
    }
    assert.equal(readFileSync(path.join(source, 'netlify/functions/content.mts'), 'utf8'), 'server code');
  } finally {
    rmSync(source, { recursive: true, force: true });
  }
});
