SELECT *
FROM crawl
WHERE status_code not BETWEEN 299 AND 306
ORDER BY word_count;

SELECT *
FROM crawl
WHERE status_code not BETWEEN 299 AND 306
ORDER BY word_count DESC;

SELECT 
 address,
 word_count
FROM crawl
WHERE status_code not BETWEEN 299 AND 306
ORDER BY word_count DESC;

SELECT 
  SUM(word_count) AS total_Words
FROM crawl
where status_code NOT in(301, 307)
	AND content_type LIKE '%html%'
ORDER BY word_count DESC;