DROP DATABASE CookNator;
CREATE DATABASE CookNator;
USE CookNator;

CREATE TABLE Usuarios (
    ID INT PRIMARY KEY,
    Nome VARCHAR(50),
    Sobrenome VARCHAR(50),
    Cidade VARCHAR(50)
);

INSERT INTO Usuarios (ID, Nome, Sobrenome, Cidade) VALUES
(1, 'João', 'Silva', 'São Paulo'),
(2, 'Maria', 'Santos', 'Rio de Janeiro'),
(3, 'Pedro', 'Costa', 'Belo Horizonte'),
(4, 'Ana', 'Oliveira', 'Salvador'),
(5, 'Carlos', 'Rocha', 'Recife');

SELECT * FROM Usuarios;

