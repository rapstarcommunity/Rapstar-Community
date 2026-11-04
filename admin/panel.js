const $ = id => document.getElementById(id);
let identity, content, revision = 0, dirty = false, tab = 'texts', inviteToken = null, recovery = false, uploads = 0, busy = false;
const titles = { releases: 'Lançamentos', highlights: 'Destaques', labels: 'Gravadoras', news: 'Notícias' };
function status(message, error = false) { $('status').textContent = message; $('status').classList.toggle('error', error); }
function changed() { dirty = true; $('save-state').textContent = 'Alterações ainda não publicadas'; }
function node(tag, text, className) { const e = document.createElement(tag); if (text) e.textContent = text; if (className) e.className = className; return e; }
function field(labelText, value, onChange, required = true) {
  const label = node('label', labelText), input = node('input'); input.value = value ?? ''; input.required = required; input.maxLength = labelText.includes('Link') || labelText.includes('URL') ? 2000 : 200;
  input.addEventListener('input', () => { onChange(input.value); changed(); }); label.append(input); return label;
}
async function api(url, options = {}) {
  await identity.getUser();
  const response = await fetch(url, { ...options, cache: 'no-store', credentials: 'same-origin' });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}
function updatePublish() { $('publish').disabled = busy || uploads > 0; }
function draw() {
  const target = $('fields'); target.replaceChildren();
  if (tab === 'texts') {
    const fields = node('div', '', 'text-fields');
    [['releasesTitle','Título dos lançamentos'],['highlightsTitle','Título dos destaques'],['labelsTitle','Título das gravadoras'],['footer','Texto do rodapé']].forEach(([key, label]) => fields.append(field(label, content[key], value => { content[key] = value; })));
    target.append(fields); return;
  }
  target.append(node('h3', titles[tab]), node('p', 'Escolha uma nova imagem ou cole sua URL. Use os botões para ordenar os itens. Até 30 itens por seção.', 'note'));
  const collection = content[tab] ??= [];
  if (!collection.length) target.append(node('p', 'Esta seção está vazia. Adicione o primeiro item abaixo.', 'empty'));
  collection.forEach((item, index) => {
    const card = node('article', '', 'item'), images = node('div', '', 'image-editor'), details = node('div');
    const image = node('img'); image.src = item.cover || ''; image.alt = item.title || 'Imagem do item';
    const imageLabel = node('label', 'Substituir imagem'), file = node('input'); file.type = 'file'; file.accept = 'image/png,image/jpeg,image/webp,image/gif';
    imageLabel.append(file); images.append(image, imageLabel, node('p', 'PNG, JPG, GIF ou WebP. Até 3 MB.', 'note'));
    file.addEventListener('change', async () => {
      const selected = file.files[0]; if (!selected) return;
      if (selected.size > 3 * 1024 * 1024) { status('Escolha uma imagem de até 3 MB.', true); file.value = ''; return; }
      uploads++; updatePublish(); file.disabled = true; status('Enviando imagem…');
      try { const result = await api('/api/media', { method: 'POST', headers: { 'Content-Type': selected.type }, body: selected }); item.cover = result.url; changed(); draw(); status('Imagem enviada. Publique para exibi-la no site.'); }
      catch (error) { status(error.message || 'Falha no envio. Tente novamente.', true); }
      finally { uploads--; updatePublish(); file.disabled = false; file.value = ''; }
    });
    const actions = node('div', '', 'item-actions');
    [['↑', -1, 'Mover para cima'], ['↓', 1, 'Mover para baixo']].forEach(([label, offset, accessible]) => {
      const button = node('button', label); button.type = 'button'; button.setAttribute('aria-label', accessible); button.disabled = index + offset < 0 || index + offset >= collection.length;
      button.onclick = () => { [collection[index], collection[index + offset]] = [collection[index + offset], collection[index]]; changed(); draw(); }; actions.append(button);
    });
    const remove = node('button', 'Remover'); remove.type = 'button'; remove.onclick = () => { collection.splice(index, 1); changed(); draw(); }; actions.append(remove);
    details.append(actions, field('Nome / título', item.title, value => { item.title = value; image.alt = value; }));
    if (tab !== 'labels' && tab !== 'news') details.append(field('Artista', item.artist, value => { item.artist = value; }, false));
    details.append(field(tab === 'news' ? 'Link de destino (opcional)' : 'Link de destino', item.link, value => { item.link = value; }, tab !== 'news'), field('URL da imagem', item.cover, value => { item.cover = value; if (/^(https:\/\/|\/(?!\/))/.test(value)) image.src = value; }));
    card.append(images, details); target.append(card);
  });
  const add = node('button', '+ Adicionar item'); add.id = 'add-item'; add.type = 'button'; add.disabled = collection.length >= 30;
  add.onclick = () => { collection.push({ title: '', artist: '', cover: '', link: '' }); changed(); draw(); }; target.append(add);
}
async function openEditor() {
  const user = await identity.getUser();
  $('auth').hidden = Boolean(user); $('logout').hidden = !user;
  if (!user) { status('Entre na sua conta para começar.'); return; }
  if (!user.roles?.includes('admin')) { status('Sua conta ainda não tem permissão. Adicione o papel admin à sua conta em Identity no painel Netlify.', true); return; }
  status('Carregando conteúdo…');
  const result = await api('/api/content'); content = structuredClone(result.content); revision = result.revision;
  $('editor').hidden = false; draw(); status('Pronto para editar. As mudanças só aparecem no site depois de publicar.');
}
$('login-form').onsubmit = async event => {
  event.preventDefault(); const button = event.submitter; button.disabled = true; status('Entrando…');
  try { await identity.login($('email').value, $('password').value); $('password').value = ''; await openEditor(); }
  catch { status('Não foi possível entrar. Confira o e-mail, a senha e a confirmação da conta.', true); }
  finally { button.disabled = false; }
};
$('forgot').onclick = async () => {
  if (!$('email').reportValidity() || !$('email').value) { status('Informe seu e-mail para recuperar a senha.', true); return; }
  $('forgot').disabled = true;
  try { await identity.requestPasswordRecovery($('email').value); status('Confira seu e-mail para continuar a recuperação.'); }
  catch { status('Não foi possível solicitar a recuperação. Tente novamente.', true); }
  finally { $('forgot').disabled = false; }
};
$('password-form').onsubmit = async event => {
  event.preventDefault(); event.submitter.disabled = true;
  try {
    if (inviteToken) await identity.acceptInvite(inviteToken, $('new-password').value);
    else await identity.updateUser({ password: $('new-password').value });
    inviteToken = null; recovery = false; $('new-password').value = ''; $('password-section').hidden = true; await openEditor();
  } catch { status('Não foi possível definir a senha. Confira se o link ainda é válido e tente novamente.', true); }
  finally { event.submitter.disabled = false; }
};
$('logout').onclick = async () => {
  if (dirty) { status('Publique suas alterações antes de sair, ou recarregue a página para descartá-las.', true); return; }
  try { await identity.logout(); location.reload(); } catch { status('Não foi possível sair. Tente novamente.', true); }
};
document.querySelectorAll('[data-tab]').forEach(button => button.onclick = () => {
  tab = button.dataset.tab; document.querySelectorAll('[data-tab]').forEach(b => b.setAttribute('aria-pressed', String(b === button))); draw();
});
$('publish').onclick = async () => {
  for (const key of ['releasesTitle','highlightsTitle','labelsTitle','footer']) if (!content[key].trim()) { status('Preencha todos os textos da página.', true); return; }
  const validURL = value => typeof value === 'string' && (/^\/(?!\/)/.test(value) || /^https:\/\//.test(value));
  for (const key of ['releases','highlights','labels','news']) {
    if ((content[key] ?? []).some(item => !item.title.trim() || !validURL(item.cover) || ((key !== 'news' || item.link) && !validURL(item.link)))) { tab = key; document.querySelector(`[data-tab="${key}"]`).click(); status('Preencha o título e a imagem de cada item e confira os links. Use HTTPS ou um caminho iniciado com /.', true); return; }
  }
  busy = true; $('fields').inert = true; document.querySelector('nav').inert = true; updatePublish(); status('Publicando alterações…');
  try {
    const result = await api('/api/content', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content, revision }) });
    revision = result.revision; dirty = false; $('save-state').textContent = 'Conteúdo publicado'; status('Alterações publicadas. Abra o site para conferir.');
  } catch (error) { status(error.message || 'Não foi possível publicar. Suas alterações continuam no painel.', true); }
  finally { busy = false; $('fields').inert = false; document.querySelector('nav').inert = false; updatePublish(); }
};
function sendPreview() { $('preview').contentWindow.postMessage({ type: 'home-preview', content }, location.origin); }
$('preview-button').onclick = () => { $('preview-dialog').showModal(); $('preview').src = '/?content-preview=1'; };
$('preview').onload = sendPreview;
$('close-preview').onclick = () => $('preview-dialog').close();
window.addEventListener('beforeunload', event => { if (dirty || uploads) { event.preventDefault(); event.returnValue = ''; } });
async function init() {
  try {
    identity = await import('https://esm.sh/@netlify/identity@2.0.0?bundle');
    const callback = await identity.handleAuthCallback();
    if (callback?.type === 'invite' || callback?.type === 'recovery') {
      inviteToken = callback.type === 'invite' ? callback.token : null; recovery = callback.type === 'recovery';
      $('password-section').hidden = false; status('Defina sua senha para acessar o painel.'); return;
    }
    await openEditor();
  } catch { status('Não foi possível carregar o painel. Confira sua conexão e tente recarregar a página.', true); }
}
init();
