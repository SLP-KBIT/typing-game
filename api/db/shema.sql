CREATE TABLE users (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(32) NOT NULL,
    score INT NOT NULL,
    difficulty INT NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE words (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    difficulty INT NOT NULL DEFAULT 1
);

-- 初期データ
INSERT INTO users (name, score) VALUES ("Tom", "10");
INSERT INTO users (name, score) VALUES ("John", "12");

INSERT INTO words (name) VALUES ("apple");
INSERT INTO words (name) VALUES ("orange");
INSERT INTO words (name) VALUES ("grape");
INSERT INTO words (name) VALUES ("carrot");
INSERT INTO words (name) VALUES ("mellon");
INSERT INTO words (name) VALUES ("banana");
