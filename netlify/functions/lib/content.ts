import { getUser } from '@netlify/identity';
export async function authorize(request: Request) {
  if (request.headers.get('origin') !== new URL(request.url).origin) return new Response('Origem não permitida.', { status: 403 });
  const user = await getUser();
  if (!user) return new Response('Entre novamente para continuar.', { status: 401 });
  if (!user.roles?.includes('admin')) return new Response('Sua conta precisa do papel admin para editar.', { status: 403 });
  return null;
}
export function validUrl(value: unknown) {
  if (typeof value !== 'string' || value.length > 2000) return false;
  if (/^\/(?!\/)/.test(value) && !/[\\\s]/.test(value)) return true;
  try { return new URL(value as string).protocol === 'https:'; } catch { return false; }
}
export function validContent(value: any) {
  if (!value || typeof value !== 'object') return false;
  if (value.news !== undefined) {
    if (!Array.isArray(value.news) || value.news.length > 30) return false;
    for (const item of value.news) {
      if (!item || typeof item.title !== 'string' || !item.title.trim() || item.title.length > 200 || !validUrl(item.cover)) return false;
      if (item.link && !validUrl(item.link)) return false;
    }
  }
  for (const key of ['releasesTitle', 'highlightsTitle', 'labelsTitle', 'footer']) {
    if (typeof value[key] !== 'string' || !value[key].trim() || value[key].length > 250) return false;
  }
  for (const key of ['releases', 'highlights', 'labels']) {
    if (!Array.isArray(value[key]) || value[key].length > 30) return false;
    for (const item of value[key]) {
      if (!item || typeof item.title !== 'string' || !item.title.trim() || item.title.length > 200 || !validUrl(item.cover) || !validUrl(item.link)) return false;
      if (key !== 'labels' && (typeof item.artist !== 'string' || item.artist.length > 200)) return false;
    }
  }
  return true;
}
