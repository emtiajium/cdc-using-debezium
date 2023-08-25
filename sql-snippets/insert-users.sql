INSERT INTO "User" (email, name)
VALUES ('ehasan+1@firecrackervocabulary.com', CONCAT('name_', (random() * 1000)::INTEGER::VARCHAR))
ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name
RETURNING *;
