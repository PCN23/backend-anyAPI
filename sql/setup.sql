-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS horses;

CREATE table horses (
    id BIGINT GENEATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL, 
    wins INT NOT NULL,
    born INT NOT NULL
);

INSERT INTO horses (name, wins, born) VALUES
('Lucky', 13, 2012),
('Bond James', 15, 2014),
('Knows To Win', 8, 2019),
('Paul friend', 25, 2010),
('Alchemy buddy', 4, 2016);
