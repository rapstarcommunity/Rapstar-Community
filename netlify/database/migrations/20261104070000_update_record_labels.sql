WITH replacements(old_title, new_title, cover) AS (
  VALUES ('Rocktopia', 'Rocktopia', 'https://i.imgur.com/RZb1PMf.png'),
         ('Illuminati Records', 'Empire Music Group', 'https://i.imgur.com/RZb1PMf.png'),
         ('Starlight Group', 'Muñoz Records', 'https://i.imgur.com/xzwN1Af.png'),
         ('Pacific Records', 'Sterling Records', 'https://i.imgur.com/YpzgZNf.png'),
         ('YG Entertainment', 'Joint Nation', 'https://i.imgur.com/72hOX7J.png')
), updated AS (
  SELECT site.id, jsonb_agg(CASE WHEN replacements.old_title IS NOT NULL
    THEN entry.item || jsonb_build_object('title', replacements.new_title, 'cover', replacements.cover)
    ELSE entry.item END ORDER BY entry.position) AS labels
  FROM site_content AS site
  CROSS JOIN LATERAL jsonb_array_elements(site.content->'labels') WITH ORDINALITY AS entry(item, position)
  LEFT JOIN replacements ON entry.item->>'title' IN (replacements.old_title, replacements.new_title)
  WHERE site.id = 'home'
  GROUP BY site.id
)
UPDATE site_content AS site
SET content = jsonb_set(site.content, '{labels}', updated.labels),
    revision = site.revision + 1, updated_at = now()
FROM updated WHERE site.id = updated.id;
