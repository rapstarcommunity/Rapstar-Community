WITH replacements(title, patch) AS (
  VALUES ('Reflections', '{"title": "Voz do Brasil", "artist": "Nielly", "cover": "https://i.imgur.com/tvOI6s2.jpeg", "link": "https://discord.com/channels/1279249850185154704/1279482834540826696/1560136549625241721"}'::jsonb),
         ('Even After All', '{"title": "LATINAJE", "artist": "Emília Ramirez", "cover": "https://i.imgur.com/MIhfVRk.jpeg", "link": "https://discord.com/channels/1279249850185154704/1279484081792487541/1560480051735167092"}'::jsonb),
         ('Once Upon a Time...', '{"title": "Eletrogasm", "artist": "Aiddan King", "cover": "https://i.imgur.com/nTdddCx.jpeg", "link": "https://discord.com/channels/1279249850185154704/1279482057105342567/1557209440548298783"}'::jsonb)
), updated AS (
  SELECT site.id, jsonb_agg(CASE WHEN replacements.patch IS NOT NULL
    THEN entry.item || replacements.patch ELSE entry.item END ORDER BY entry.position) AS releases
  FROM site_content AS site
  CROSS JOIN LATERAL jsonb_array_elements(site.content->'releases') WITH ORDINALITY AS entry(item, position)
  LEFT JOIN replacements ON entry.item->>'title' = replacements.title
  WHERE site.id = 'home'
  GROUP BY site.id
)
UPDATE site_content AS site
SET content = jsonb_set(jsonb_set(site.content, '{releases}', updated.releases), '{news}', '[{"title": "\"Nightmares\" regressa ao topo da Billboard Hot 100 nove seasons após o lançamento", "cover": "https://i.imgur.com/BWnwpaS.jpeg", "link": "https://discord.com/channels/1279249850185154704/1280190901037039748"}, {"title": "Aiddan King regressa aos palcos com Eletroseven Club Tour", "cover": "https://i.imgur.com/wwLUhUa.jpeg"}, {"title": "Old-Schooled Boy 2 ultrapassa 1 bilhão de streams no Spotify", "cover": "https://i.imgur.com/NmfCWVK.jpeg"}]'::jsonb),
    revision = site.revision + 1, updated_at = now()
FROM updated WHERE site.id = updated.id;
