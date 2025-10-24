SELECT address
FROM crawl2
WHERE status_code <> 200;

SELECT 
	address
FROM crawl
WHERE status_code = 200
	AND address IN (
    SELECT address
		FROM crawl2
		WHERE status_code <> 200
  );