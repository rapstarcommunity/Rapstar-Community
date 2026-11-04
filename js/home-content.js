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
  renderNews(content.news ?? [], root);
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
function renderNews(items, root) {
  const section = root.getElementById('newsSection');
  const track = root.getElementById('newsTrack');
  if (!section || !track) return;
  section.hidden = items.length === 0;
  track.replaceChildren();
  const pagination = root.getElementById('newsPagination');
  pagination.replaceChildren();
  let current = 0;
  const show = index => {
    current = (index + items.length) % items.length;
    track.children[current]?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest', inline: 'start' });
  };
  items.forEach((item, index) => {
    const slide = element('article', '', 'news-slide');
    slide.setAttribute('aria-label', `${index + 1} de ${items.length}`);
    const card = element(item.link ? 'a' : 'div', '', 'news-card');
    if (item.link) {
      card.href = safeUrl(item.link);
      card.target = '_blank'; card.rel = 'noopener noreferrer';
    }
    const cover = element('img'); cover.src = safeUrl(item.cover); cover.alt = ''; cover.loading = 'lazy';
    const caption = element('div', '', 'news-caption');
    caption.append(element('span', 'Na comunidade', 'news-kicker'), element('h3', item.title));
    card.append(cover, caption); slide.append(card); track.append(slide);
    const dot = element('button'); dot.type = 'button';
    dot.setAttribute('aria-label', `Mostrar notícia ${index + 1}`);
    dot.onclick = () => show(index);
    pagination.append(dot);
  });
  const update = () => {
    if (!track.children.length || !track.clientWidth) return;
    current = Math.round(track.scrollLeft / track.clientWidth);
    [...pagination.children].forEach((dot, index) => dot.setAttribute('aria-current', String(index === current)));
    root.getElementById('newsCounter').textContent = `${current + 1} / ${items.length}`;
  };
  track.onscroll = update;
  track.onkeydown = event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault(); show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  };
  root.getElementById('newsPrevious').onclick = () => show(current - 1);
  root.getElementById('newsNext').onclick = () => show(current + 1);
  update();
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
