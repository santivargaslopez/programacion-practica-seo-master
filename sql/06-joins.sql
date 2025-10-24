SELECT 
	*
FROM crawl
INNER JOIN crawl2
	ON crawl.address = crawl2.address;


SELECT 
	c.address,
    c.status_code,
    c2.status_code
FROM crawl AS c
LEFT JOIN crawl2 AS c2
	USING(address);


SELECT 
	c.address,
    c.status_code,
    c2.status_code
FROM crawl AS c
INNER JOIN crawl2 AS c2
	ON c.address = c2.address;


SELECT 
	c.address,
    c.status_code,
    c2.status_code
FROM crawl AS c
INNER JOIN crawl2 AS c2
	ON c.address = c2.address
    AND c.status_code <> c2.status_code;


SELECT 
	c.address,
    c.status_code,
    c2.status_code
FROM crawl AS c
LEFT JOIN crawl2 AS c2
	ON c.address = c2.address
    AND c.status_code = c2.status_code
WHERE c2.status_code IS NULL;

