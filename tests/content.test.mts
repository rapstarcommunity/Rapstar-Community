import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { authorize, validContent, validUrl } from '../netlify/functions/lib/content.ts';
const defaults = JSON.parse(await readFile(new URL('../content/home-defaults.json', import.meta.url), 'utf8'));

test('preserves the imported home content and accepts intentional empty sections', () => {
  assert.equal(validContent(defaults), true);
  assert.equal(validContent({ ...defaults, releases: [], highlights: [], labels: [] }), true);
});
test('rejects executable URLs, external HTTP links and malformed content', () => {
  for (const url of ['javascript:alert(1)', 'data:image/svg+xml,test', '//other.example/image.png', '/\\other.example/image.png', 'http://other.example/image.png']) assert.equal(validUrl(url), false, url);
  assert.equal(validUrl('/api/media?image=test.png'), true);
  assert.equal(validUrl('https://example.com/image.png'), true);
  for (const value of [null, {}, { ...defaults, releases: null }, { ...defaults, footer: '' }, { ...defaults, labels: Array(31).fill(defaults.labels[0]) }, { ...defaults, releases: [{ ...defaults.releases[0], link: 'javascript:alert(1)' }] }]) assert.equal(validContent(value), false);
});
test('accepts news without destinations and rejects invalid news content', () => {
  assert.equal(defaults.news.length, 3);
  assert.equal(validContent({ ...defaults, news: [] }), true);
  const news = defaults.news[0];
  for (const value of [null, Array(31).fill(news), [{ ...news, title: '' }], [{ ...news, cover: 'javascript:alert(1)' }], [{ ...news, link: 'javascript:alert(1)' }]]) {
    assert.equal(validContent({ ...defaults, news: value }), false);
  }
  assert.equal(validContent({ ...defaults, news: [{ ...news, link: '' }] }), true);
});
test('rejects writes from other origins and unauthenticated requests', async () => {
  const crossOrigin = new Request('https://site.example/api/content', { method: 'PUT', headers: { Origin: 'https://other.example' } });
  assert.equal((await authorize(crossOrigin))?.status, 403);
  const sameOrigin = new Request('https://site.example/api/content', { method: 'PUT', headers: { Origin: 'https://site.example' } });
  assert.equal((await authorize(sameOrigin))?.status, 401);
});
test('authorizes only server-provided administrator roles', async () => {
  const runtime = globalThis as typeof globalThis & { netlifyIdentityContext?: unknown };
  const previous = runtime.netlifyIdentityContext;
  const request = new Request('https://site.example/api/content', { method: 'PUT', headers: { Origin: 'https://site.example' } });
  try {
    runtime.netlifyIdentityContext = { user: { sub: 'test-user', app_metadata: { roles: ['member'] }, user_metadata: { roles: ['admin'] } } };
    assert.equal((await authorize(request))?.status, 403);
    runtime.netlifyIdentityContext = { user: { sub: 'test-admin', app_metadata: { roles: ['admin'] } } };
    assert.equal(await authorize(request), null);
  } finally { runtime.netlifyIdentityContext = previous; }
});
