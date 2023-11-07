DROP DATABASE IF EXISTS CookNator;
CREATE DATABASE CookNator;
USE CookNator;

CREATE TABLE Ingredientes(
ID INT PRIMARY KEY ,
Nome VARCHAR (50) 
);

CREATE TABLE Usuarios(
ID INT PRIMARY KEY,
Nome VARCHAR(50),
Senha VARCHAR(50),
Email VARCHAR(50),
Username VARCHAR(30),
Sobrenome VARCHAR(30)
);



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