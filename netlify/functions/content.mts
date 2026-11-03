import { and, eq } from 'drizzle-orm';
import { database } from '../../db/index.js';
import { siteContent } from '../../db/schema.js';
import defaults from '../../content/home-defaults.json' with { type: 'json' };
import { authorize, validContent } from './lib/content.js';
export default async (req: Request) => {
  const headers = { 'Cache-Control': 'no-store' };
  if (!['GET', 'PUT'].includes(req.method)) return new Response('Método não permitido.', { status: 405, headers });
  if (req.method === 'PUT') {
    const denied = await authorize(req);
    if (denied) return denied;
  }
  try {
    const db = database();
    if (req.method === 'GET') {
      const [row] = await db.select().from(siteContent).where(eq(siteContent.id, 'home'));
      return Response.json(row ?? { content: defaults, revision: 0 }, { headers });
    }
    const raw = await req.text();
    if (raw.length > 120000) return new Response('Conteúdo muito grande.', { status: 413, headers });
    let input;
    try { input = JSON.parse(raw); } catch { return new Response('Dados inválidos.', { status: 400, headers }); }
    if (!validContent(input.content) || !Number.isSafeInteger(input.revision) || input.revision < 0) return new Response('Confira os textos, imagens e links. Use links HTTPS ou caminhos iniciados com /.', { status: 400, headers });
    const values = { content: input.content, revision: input.revision + 1, updatedAt: new Date() };
    const rows = input.revision === 0
      ? await db.insert(siteContent).values({ id: 'home', ...values }).onConflictDoNothing().returning()
      : await db.update(siteContent).set(values).where(and(eq(siteContent.id, 'home'), eq(siteContent.revision, input.revision))).returning();
    if (!rows.length) return new Response('Outra edição foi publicada. Recarregue o painel antes de continuar.', { status: 409, headers });
    return Response.json(rows[0], { headers });
  } catch {
    return new Response('Não foi possível acessar o conteúdo. Tente novamente.', { status: 503, headers });
  }
};
export const config = { path: '/api/content' };
