-- 1. ¿Cuántas filas tiene el archivo crawl.csv?
SELECT COUNT(*) FROM crawl;

-- 2. ¿Cuántos status code distintos tiene crawl2.csv?
SELECT COUNT(DISTINCT status_code) FROM crawl2;

-- 3. ¿Cuántas URLs hay según cada status code en crawl.csv?
SELECT 
	status_code,
	COUNT(*) 
FROM crawl
GROUP BY status_code;

-- 4. ¿Cuántas URLs son indexables en crawl.csv?
SELECT 
	COUNT(*) 
FROM crawl
WHERE indexability = 'Indexable';

-- 5. ¿Qué URLs son de tipo imagen en crawl.csv?
SELECT address
FROM crawl
WHERE content_type LIKE '%image%';

-- 6. ¿Que URL contiene más palabras? 
SELECT 
	address,
    word_count
FROM crawl
WHERE status_code = 200
 AND content_type LIKE '%html%';
ORDER BY word_count DESC;

-- ¿Y el que menos?
SELECT 
	address,
    word_count
FROM crawl
WHERE status_code = 200
 AND content_type LIKE '%html%';
ORDER BY word_count;

-- 7. Averigua lo mismo que la anterior pregunta pero sin usar ORDER BY y sin consultar los datos
SELECT 
	address,
	MAX(word_count)
FROM crawl
WHERE status_code = 200
 AND content_type LIKE '%html%';

SELECT 
	address,
	MIN(word_count)
FROM crawl
WHERE status_code = 200
 AND content_type LIKE '%html%';

-- 8. ¿Cuál es la media de palabras?
SELECT 
	AVG(word_count)
FROM crawl
WHERE status_code = 200
 AND content_type LIKE '%html%';

-- 9. ¿Qué títulos se han modificado en crawl2.csv en comparación con crawl.csv?
SELECT 
	c.address,
    c.title_1,
    c2.title_1
FROM crawl AS c
INNER JOIN crawl2 AS c2
	ON c.address = c2.address
    AND c.title_1 <> c2.title_1;













