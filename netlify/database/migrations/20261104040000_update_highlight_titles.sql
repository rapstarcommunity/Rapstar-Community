WITH titles(old_title, new_title) AS (
  VALUES ('summer remains', 'that''s my baby'),
         ('honey', 'Nightshift'),
         ('dandelions', 'Maeve Meets World'),
         ('overgrown', 'Who''s That DJ?'),
         ('the drive', 'Still Got It'),
         ('the country club', 'Nightmares')
), updated AS (
  SELECT site.id, jsonb_agg(
    CASE WHEN titles.new_title IS NOT NULL
    THEN jsonb_set(entry.item, '{title}', to_jsonb(titles.new_title))
    ELSE entry.item END ORDER BY entry.position
  ) AS highlights
  FROM site_content AS site
  CROSS JOIN LATERAL jsonb_array_elements(site.content->'highlights')
    WITH ORDINALITY AS entry(item, position)
  LEFT JOIN titles ON lower(entry.item->>'title') = titles.old_title
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
