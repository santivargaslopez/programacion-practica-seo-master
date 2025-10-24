SELECT DISTINCT content_type
FROM crawl
WHERE status_code NOT IN(301, 307);


SELECT 
	content_type,
    COUNT(content_type) AS Num
FROM crawl
WHERE status_code NOT IN(301, 307)
GROUP BY content_type
ORDER BY num DESC