DROP TABLE IF EXISTS review;

CREATE TABLE review (
    city VARCHAR(25) NOT NULL, 
    country VARCHAR(25) NOT NULL,
    travel_date VARCHAR(25) NOT NULL,
    rating INTEGER NOT NULL,
    blog VARCHAR(300)
);