function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}
const safeUrl = value => {
  try {
    const url = new URL(value, location.origin);
    return url.protocol === 'https:' || url.origin === location.origin ? url.href : '#';
  } catch { return '#'; }
};
export function renderHome(content, root = document) {
  ['releases', 'highlights', 'labels'].forEach((key, index) => {
    const container = root.getElementById(['musicList', 'highlightList', 'labelList'][index]);
    const section = container.closest('.music-section, .highlight-section, .label-section');
    section.querySelector('h2').textContent = content[['releasesTitle', 'highlightsTitle', 'labelsTitle'][index]];
    container.replaceChildren();
    content[key].forEach(item => {
      const card = element('div', '', ['music-item', 'highlight-item', 'label-item'][index]);
      const link = element('a');
      link.href = safeUrl(item.link);
      if (key !== 'labels') { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
      const image = element('img');
      image.src = safeUrl(item.cover); image.alt = item.title;
      link.append(image);
      if (key === 'labels') card.dataset.labelName = item.title;
      else link.append(element(key === 'releases' ? 'h3' : 'span', item.title));
      if (key === 'releases') link.append(element('p', item.artist));
      card.append(link); container.append(card);
    });
  });
  root.querySelector('footer p').textContent = content.footer;
}
async function load() {
  let content;
  try {
    const response = await fetch('/api/content', { cache: 'no-store' });
    if (!response.ok) throw new Error();
    content = (await response.json()).content;
  } catch {
    const response = await fetch('/content/home-defaults.json');
    content = await response.json();
  }
  renderHome(content);
}
// A prévia recebe apenas mensagens da própria origem, sem publicar alterações.
if (new URLSearchParams(location.search).has('content-preview') && window.parent !== window) {
  window.addEventListener('message', event => {
    if (event.origin === location.origin && event.source === window.parent && event.data?.type === 'home-preview') renderHome(event.data.content);
  });
} else if (document.getElementById('musicList')) load().catch(() => {});
