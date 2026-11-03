import { Buffer } from 'node:buffer';
import { getStore } from '@netlify/blobs';
import { authorize } from './lib/content.js';
export default async (req: Request) => {
  const url = new URL(req.url);
  if (req.method === 'POST') {
    const denied = await authorize(req);
    if (denied) return denied;
    try {
      const bytes = new Uint8Array(await req.arrayBuffer());
      if (!bytes.length || bytes.length > 3 * 1024 * 1024) return new Response('Escolha uma imagem de até 3 MB.', { status: 413 });
      let extension: string;
      if (bytes[0] === 137 && Buffer.from(bytes.slice(1, 8)).toString('hex') === '504e470d0a1a0a') extension = 'png';
      else if (bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) extension = 'jpg';
      else if (Buffer.from(bytes.slice(0, 6)).toString().match(/^GIF8[79]a$/)) extension = 'gif';
      else if (Buffer.from(bytes.slice(0, 4)).toString() === 'RIFF' && Buffer.from(bytes.slice(8, 12)).toString() === 'WEBP') extension = 'webp';
      else return new Response('Use PNG, JPG, GIF ou WebP.', { status: 400 });
      const key = `${crypto.randomUUID()}.${extension}`;
      await getStore({ name: 'content-images', consistency: 'strong' }).set(key, bytes.buffer);
      return Response.json({ url: `/api/media?image=${key}` });
    } catch { return new Response('Falha no envio da imagem. Tente novamente.', { status: 503 }); }
  }
  if (req.method !== 'GET') return new Response('Método não permitido.', { status: 405 });
  const key = url.searchParams.get('image') ?? '';
  if (!/^[a-f0-9-]{36}\.(png|jpg|gif|webp)$/.test(key)) return new Response('Imagem não encontrada.', { status: 404 });
  try {
    const data = await getStore({ name: 'content-images', consistency: 'strong' }).get(key, { type: 'arrayBuffer' });
    if (!data) return new Response('Imagem não encontrada.', { status: 404 });
    const types = { png: 'image/png', jpg: 'image/jpeg', gif: 'image/gif', webp: 'image/webp' };
    return new Response(data, { headers: { 'Content-Type': types[key.split('.').pop() as keyof typeof types], 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'public, max-age=31536000, immutable' } });
  } catch { return new Response('Imagem indisponível.', { status: 503 }); }
};
export const config = { path: '/api/media' };
