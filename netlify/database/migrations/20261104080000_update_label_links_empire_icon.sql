WITH replacements(title, link) AS (
  VALUES ('Rocktopia', 'https://discord.com/channels/1279249850185154704/1279249850197872660'),
         ('Empire Music Group', 'https://discord.com/channels/1279249850185154704/1279249850197872661'),
         ('Muñoz Records', 'https://discord.com/channels/1279249850185154704/1280240501588496444'),
         ('Sterling Records', 'https://discord.com/channels/1279249850185154704/1281059716575002625'),
         ('Joint Nation', 'https://discord.com/channels/1279249850185154704/1279878065152856357')
), updated AS (
  SELECT site.id, jsonb_agg(CASE WHEN replacements.title IS NOT NULL
    THEN entry.item || jsonb_build_object('link', replacements.link)
      || CASE WHEN replacements.title = 'Empire Music Group'
        THEN jsonb_build_object('cover', 'https://i.imgur.com/TLfgmFZ.png')
        ELSE '{}'::jsonb END
    ELSE entry.item END ORDER BY entry.position) AS labels
  FROM site_content AS site
  CROSS JOIN LATERAL jsonb_array_elements(site.content->'labels') WITH ORDINALITY AS entry(item, position)
  LEFT JOIN replacements ON entry.item->>'title' = replacements.title
  WHERE site.id = 'home'
  GROUP BY site.id
)
UPDATE site_content AS site
SET content = jsonb_set(site.content, '{labels}', updated.labels),
    revision = site.revision + 1, updated_at = now()
FROM updated WHERE site.id = updated.id;
