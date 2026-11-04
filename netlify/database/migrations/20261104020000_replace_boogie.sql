-- Replace the release in saved homepage content while preserving other edits.
WITH updated AS (
  SELECT site.id, jsonb_object_agg(section.key,
    CASE WHEN section.key IN ('releases', 'highlights')
              AND jsonb_typeof(section.value) = 'array'
    THEN (
      SELECT COALESCE(jsonb_agg(
        CASE WHEN entry.item->>'title' = 'Boogie'
                   AND entry.item->>'artist' = 'Blair'
        THEN entry.item || jsonb_build_object(
          'title', 'Chain Reaction',
          'artist', 'Maeve',
          'cover', 'https://i.imgur.com/UpUESsA.jpeg'
        ) ELSE entry.item END ORDER BY entry.position
      ), '[]'::jsonb)
      FROM jsonb_array_elements(section.value) WITH ORDINALITY AS entry(item, position)
    ) ELSE section.value END
  ) AS content
  FROM site_content AS site
  CROSS JOIN LATERAL jsonb_each(site.content) AS section(key, value)
  WHERE site.id = 'home'
  GROUP BY site.id
)
UPDATE site_content AS site
SET content = updated.content,
    revision = site.revision + 1,
    updated_at = now()
FROM updated
WHERE site.id = updated.id AND site.content IS DISTINCT FROM updated.content;
