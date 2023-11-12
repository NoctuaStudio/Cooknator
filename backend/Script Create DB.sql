DROP DATABASE IF EXISTS CookNator;
CREATE DATABASE CookNator;
USE CookNator;

CREATE TABLE Ingredientes(
ID INT PRIMARY KEY ,
Nome VARCHAR (50) 
);

CREATE TABLE Usuarios(
ID INT AUTO_INCREMENT PRIMARY KEY,
Nome VARCHAR(50),
Senha VARCHAR(50),
Email VARCHAR(50),
Username VARCHAR(30),
Sobrenome VARCHAR(30)
);

INSERT INTO Usuarios (ID, Nome, Senha, Email, Username, Sobrenome) 
VALUES
(1, 'João', 'senha123', 'joao@email.com', 'joao123', 'Silva'),
(2, 'Maria', 'maria456', 'maria@email.com', 'maria456', 'Santos'),
(3, 'Pedro', 'pedro789', 'pedro@email.com', 'pedro789', 'Oliveira'),
(4, 'Ana', 'ana987', 'ana@email.com', 'ana987', 'Pereira'),
(5, 'Lucas', 'lucas654', 'lucas@email.com', 'lucas654', 'Ferreira'),
(6, 'Carla', 'carla321', 'carla@email.com', 'carla321', 'Rodrigues'),
(7, 'Miguel', 'miguel123', 'miguel@email.com', 'miguel123', 'Almeida'),
(8, 'Julia', 'julia789', 'julia@email.com', 'julia789', 'Carvalho'),
(9, 'Rafael', 'rafael567', 'rafael@email.com', 'rafael567', 'Melo'),
(10, 'Lara', 'lara000', 'lara@email.com', 'lara000', 'Martins');

INSERT INTO Usuarios (Nome, Senha, Email, Username, Sobrenome) VALUES
('Lara', 'lara000', 'lara@email.com', 'lara000', 'Martins');




CREATE TABLE Tipo_Receita(
ID INT PRIMARY KEY,
Tipo VARCHAR(50)
);

CREATE TABLE Receitas(
ID INT PRIMARY KEY ,
Nome VARCHAR(80),
Descricao VARCHAR(255),
ID_Tipo INT,
Imagem VARCHAR(255),
Avaliacao FLOAT,
ID_Usuario INT,
Tamanho ENUM ('Pequeno', 'Médio', 'Grande'),
Dieta ENUM ('Carnívoro', 'Vegetariano', 'Vegano'),
FOREIGN KEY (ID_Tipo) REFERENCES Tipo_Receita(ID),
FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID)
);

CREATE TABLE Ingredientes_Da_Receita(
ID INT PRIMARY KEY,
ID_Receita INT,
ID_Ingrediente INT,
Quantidade varchar(50),
FOREIGN KEY (ID_Receita) REFERENCES Receitas(ID),
FOREIGN KEY (ID_Ingrediente) REFERENCES Ingredientes(ID)
);

CREATE TABLE Receitas_Salvas(
ID INT PRIMARY KEY,
ID_Receita INT,
ID_Usuario INT,
FOREIGN KEY (ID_Receita) REFERENCES Tipo_Receita(ID),
FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID)
);