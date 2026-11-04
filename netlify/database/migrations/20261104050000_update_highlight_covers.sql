WITH covers(title, cover) AS (
  VALUES ('Nightmares', '/assets/covers/nightmares.jpg'),
         ('Maeve Meets World', '/assets/covers/maeve-meets-world.jpg'),
         ('Nightshift', '/assets/covers/nightshift.jpg'),
         ('that''s my baby', '/assets/covers/thats-my-baby.jpg'),
         ('Still Got It', '/assets/covers/still-got-it.jpg'),
         ('Who''s That DJ?', '/assets/covers/whos-that-dj.jpg')
), updated AS (
  SELECT site.id, jsonb_agg(
    CASE WHEN covers.cover IS NOT NULL
    THEN jsonb_set(entry.item, '{cover}', to_jsonb(covers.cover))
    ELSE entry.item END ORDER BY entry.position
  ) AS highlights
  FROM site_content AS site
  CROSS JOIN LATERAL jsonb_array_elements(site.content->'highlights')
    WITH ORDINALITY AS entry(item, position)
  LEFT JOIN covers ON entry.item->>'title' = covers.title
  WHERE site.id = 'home'
  GROUP BY site.id
)
UPDATE site_content AS site
SET content = jsonb_set(site.content, '{highlights}', updated.highlights),
    revision = site.revision + 1,
    updated_at = now()
FROM updated
WHERE site.id = updated.id
  AND site.content->'highlights' IS DISTINCT FROM updated.highlights;
