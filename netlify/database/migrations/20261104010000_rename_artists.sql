-- Update saved homepage artist names without replacing other editorial changes.
WITH names(old_name, new_name) AS (
  VALUES ('Even Grace', 'Logan'), ('Ethan Grace', 'Logan'),
         ('Ava', 'Daniel'), ('Alana Grace', 'Maeve'),
         ('Hannah', 'Millie'), ('Ivy Sinclair', 'Maya Caccini'),
         ('4Music', 'Mason')
), renamed AS (
  SELECT site.id, jsonb_object_agg(section.key,
    CASE WHEN section.key IN ('releases', 'highlights')
              AND jsonb_typeof(section.value) = 'array'
    THEN (
      SELECT COALESCE(jsonb_agg(
        CASE WHEN names.new_name IS NOT NULL
        THEN jsonb_set(entry.item, '{artist}', to_jsonb(names.new_name))
        ELSE entry.item END ORDER BY entry.position
      ), '[]'::jsonb)
      FROM jsonb_array_elements(section.value) WITH ORDINALITY AS entry(item, position)
      LEFT JOIN names ON entry.item->>'artist' = names.old_name
    ) ELSE section.value END
  ) AS content
  FROM site_content AS site
  CROSS JOIN LATERAL jsonb_each(site.content) AS section(key, value)
  WHERE site.id = 'home'
  GROUP BY site.id
)
UPDATE site_content AS site
SET content = renamed.content,
    revision = site.revision + 1,
    updated_at = now()
FROM renamed
WHERE site.id = renamed.id AND site.content IS DISTINCT FROM renamed.content;
