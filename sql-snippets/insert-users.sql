INSERT INTO "User" (email, name)
VALUES ('ehasan+1@firecrackervocabulary.com', CONCAT('name_', (random() * 1000)::INTEGER::VARCHAR))
ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name
RETURNING *;

INSERT INTO "User" (email, name)
VALUES ('ehasan+2@firecrackervocabulary.com', 'name_2');

UPDATE "User"
SET name = 'name_20'
WHERE email = 'ehasan+2@firecrackervocabulary.com';

DELETE
FROM "User"
WHERE email = 'ehasan+2@firecrackervocabulary.com';
