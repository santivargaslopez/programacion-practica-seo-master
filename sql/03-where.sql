SELECT 
  address AS URL,
  Status_Code AS statusCode
FROM crawl
WHERE Status_Code = 301;

SELECT *
FROM crawl
WHERE Status_Code > 299;

SELECT *
FROM crawl
WHERE Status_Code > 299 AND Status_Code < 307;


SELECT *
FROM crawl
WHERE Status_Code BETWEEN 299 AND 306;


SELECT *
FROM crawl
WHERE Status_Code NOT BETWEEN 299 AND 306;


SELECT *
FROM crawl
WHERE status_code IN(301, 307);


SELECT *
FROM crawl
WHERE status_code NOT IN(301, 307);


SELECT 
 address,
 word_count
FROM crawl
WHERE status_code NOT IN(301, 307) AND content_type LIKE '%html%';