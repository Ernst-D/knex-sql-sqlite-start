CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    gender VARCHAR(10),
    address VARCHAR(255),
    city VARCHAR(255),
    phone VARCHAR(15),
    email VARCHAR(255),
    status VARCHAR(20),
    createdDate TIMESTAMP
);