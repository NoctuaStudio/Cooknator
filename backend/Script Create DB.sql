DROP DATABASE IF EXISTS CookNator;
CREATE DATABASE CookNator;
USE CookNator;

CREATE TABLE Ingredientes(
ID INT AUTO_INCREMENT PRIMARY KEY ,
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


CREATE TABLE Tipo_Receita(
ID INT PRIMARY KEY,
Tipo VARCHAR(50)
);


CREATE TABLE Receitas(
ID INT AUTO_INCREMENT PRIMARY KEY ,
Nome VARCHAR(80),
Descricao VARCHAR(255),
ID_Tipo INT,
Imagem VARCHAR(2000),
Avaliacao FLOAT,
ID_Usuario INT,
Tamanho ENUM ('Pequeno', 'Medio', 'Grande'),
Dieta ENUM ('Carnivoro', 'Vegetariano', 'Vegano'),
FOREIGN KEY (ID_Tipo) REFERENCES Tipo_Receita(ID),
FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID)
);


CREATE TABLE Ingredientes_Da_Receita(
ID INT AUTO_INCREMENT PRIMARY KEY,
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

-- TIPOS DE RECEITAS PRONTAS PARA O SISTEMA:

INSERT INTO Tipo_Receita(ID, Tipo) VALUES
 (1, 'Salada'),
 (2, 'Saudáveis'),
 (3, 'Doces e sobremesas'),
 (4, 'Petiscos e lanches'),
 (5, 'Massas'),
 (6, 'Carnes'),
 (7, 'Peixes e frutos do mar'),
 (8, 'Frangos e outras aves'),
 (9, 'Legumes e verduras');


-- USUARIOS PRONTOS PARA TESTE:

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


-- RECEITAS PRONTAS PARA TESTE:

INSERT INTO Receitas (Nome, Descricao, ID_Tipo, Imagem, Avaliacao, ID_Usuario, Tamanho, Dieta)
VALUES
('Salada de Verão', 'Uma deliciosa salada refrescante para os dias quentes.', 1, 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-salada-de-frango-1-730x449.jpg', 4.5, 1, 'Medio', 'Vegetariano'),

('Smoothie Saudável', 'Um smoothie nutritivo cheio de vitaminas e antioxidantes.', 2, 'https://s2.glbimg.com/rMoEFhEKjpsyoBYx5Z8cnohEiSk=/620x550/e.glbimg.com/og/ed/f/original/2019/09/24/arno_feed_smoothie_sem_mixer.jpg', 4.0, 2, 'Pequeno', 'Vegano'),

('Torta de Chocolate', 'Uma sobremesa irresistível para os amantes de chocolate.', 3, 'https://conteudo.imguol.com.br/c/entretenimento/62/2022/12/16/torta-natalina-de-marilia-zylbersztajn-1671218499612_v2_4x3.jpg', 5.0, 3, 'Grande', 'Vegetariano'),

('Bruschettas de Tomate', 'Petiscos deliciosos para servir em qualquer ocasião.', 4, 'https://marolacomcarambola.com.br/wp-content/uploads/2014/05/bruschetta-de-tomate-tradicional-receitas-praticas.jpg', 4.2, 4, 'Medio', 'Vegetariano'),

('Spaghetti à Bolonhesa', 'Uma clássica receita italiana com molho de carne suculento.', 5, 'https://renata.com.br/images/receitas/164/renata-imagem-receitas-macarrao-a-bolonhesa-vegetariano-share.jpg', 4.8, 5, 'Grande', 'Carnivoro'),

('Churrasco de Picanha', 'Uma suculenta picanha grelhada perfeitamente.', 6, 'https://www.comidaereceitas.com.br/wp-content/uploads/2008/07/Picanha-inteira-na-grelha-para-churrasco-freepik-780x520.jpg', 4.7, 6, 'Grande', 'Carnivoro'),

('Salmão ao Molho de Maracujá', 'Uma opção saudável e saborosa de peixe com um toque tropical.', 7, 'https://www.picanhacia.com.br/wp-content/uploads/2017/01/67-8.jpg', 4.6, 7, 'Medio', 'Carnivoro'),

('Frango ao Curry', 'Um prato exótico e aromático com frango e curry.', 8, 'https://www.sabornamesa.com.br/media/k2/items/cache/78468ad5288d433009367eeff5a5f3b3_XL.jpg', 4.4, 8, 'Medio', 'Carnivoro');

-- ADICIONANDO INGREDIENTES

-- INSERÇÃO DE INGREDIENTES
INSERT INTO Ingredientes (ID, Nome) VALUES
(1, 'Sal'),
(2, 'Açúcar'),
(3, 'Óleo de Oliva'),
(4, 'Alho'),
(5, 'Cebola'),
(6, 'Tomate'),
(7, 'Cenoura'),
(8, 'Arroz'),
(9, 'Macarrão'),
(10, 'Peito de Frango'),
(11, 'Salmão'),
(12, 'Alface'),
(13, 'Tomate Cereja'),
(14, 'Molho de Tomate'),
(15, 'Queijo Parmesão'),
(16, 'Leite'),
(17, 'Ovos'),
(18, 'Farinha'),
(19, 'Manteiga'),
(20, 'Chocolate'),
(21, 'Canela'),
(22, 'Gengibre'),
(23, 'Pimenta'),
(24, 'Manjericão'),
(25, 'Coentro'),
(26, 'Pimentão'),
(27, 'Mel'),
(28, 'Limão'),
(29, 'Creme de Leite'),
(30, 'Amêndoas'),
(31, 'Abacate'),
(32, 'Aipo'),
(33, 'Amendoim'),
(34, 'Azeitonas'),
(35, 'Banana'),
(36, 'Batata'),
(37, 'Brocolis'),
(38, 'Canela'),
(39, 'Cenoura'),
(40, 'Champignon'),
(41, 'Chocolate Amargo'),
(42, 'Coco Ralado'),
(43, 'Couve'),
(44, 'Cravo'),
(45, 'Espinafre'),
(46, 'Gengibre'),
(47, 'Grão-de-Bico'),
(48, 'Iogurte'),
(49, 'Laranja'),
(50, 'Maçã'),
(51, 'Manga'),
(52, 'Molho de Soja'),
(53, 'Mostarda'),
(54, 'Nozes'),
(55, 'Orégano'),
(56, 'Pêssego'),
(57, 'Pimenta do Reino'),
(58, 'Queijo Gorgonzola'),
(59, 'Rúcula'),
(60, 'Salsinha');

-- Adicione mais ingredientes conforme necessário.



-- RECEITA COMPLETA COM OS INGREDIENTES:


-- INSERÇÃO DA NOVA RECEITA

INSERT INTO Receitas (Nome, Descricao, ID_Tipo, Imagem, Avaliacao, ID_Usuario, Tamanho, Dieta)
VALUES
('Salada de Frango Grelhado', 'Uma salada saudável com pedaços suculentos de frango grelhado.', 1, 'https://3.bp.blogspot.com/-chS1iWhv1RU/WKLNysHmGoI/AAAAAAAAK-4/PSv2Wwc-AZggRHpLyb9UQLzmfthdPEWrwCPcB/w1200/2017016-salada-frango-grelhado.png', 4.6, 1, 'Medio', 'Carnivoro');


-- INSERÇÃO DE INGREDIENTES NA RECEITA

INSERT INTO Ingredientes_Da_Receita (ID_Receita, ID_Ingrediente, Quantidade)
VALUES
-- Alface
((SELECT ID FROM Receitas WHERE Nome = 'Salada de Frango Grelhado'), (SELECT ID FROM Ingredientes WHERE Nome = 'Alface' LIMIT 1), '1 maço'),

-- Tomate
((SELECT ID FROM Receitas WHERE Nome = 'Salada de Frango Grelhado'), (SELECT ID FROM Ingredientes WHERE Nome = 'Tomate' LIMIT 1), '2 unidades'),

-- Peito de Frango
((SELECT ID FROM Receitas WHERE Nome = 'Salada de Frango Grelhado'), (SELECT ID FROM Ingredientes WHERE Nome = 'Peito de Frango' LIMIT 1), '200g'),

-- Cenoura
((SELECT ID FROM Receitas WHERE Nome = 'Salada de Frango Grelhado'), (SELECT ID FROM Ingredientes WHERE Nome = 'Cenoura' LIMIT 1), '1 unidade'),

-- Queijo Parmesão
((SELECT ID FROM Receitas WHERE Nome = 'Salada de Frango Grelhado'), (SELECT ID FROM Ingredientes WHERE Nome = 'Queijo Parmesão' LIMIT 1), '50g'),

-- Molho de Tomate
((SELECT ID FROM Receitas WHERE Nome = 'Salada de Frango Grelhado'), (SELECT ID FROM Ingredientes WHERE Nome = 'Molho de Tomate' LIMIT 1), '2 colheres de sopa'),

-- Sal
((SELECT ID FROM Receitas WHERE Nome = 'Salada de Frango Grelhado'), (SELECT ID FROM Ingredientes WHERE Nome = 'Sal' LIMIT 1), 'a gosto'),

-- Pimenta
((SELECT ID FROM Receitas WHERE Nome = 'Salada de Frango Grelhado'), (SELECT ID FROM Ingredientes WHERE Nome = 'Pimenta do Reino' LIMIT 1), 'a gosto');

SELECT * FROM Receitas;

SELECT * FROM Ingredientes_Da_Receita;



