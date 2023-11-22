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
Modo_de_Preparo VARCHAR(12000),
Tempo_de_Preparo VARCHAR(255),
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

INSERT INTO Receitas (Nome, Descricao, ID_Tipo, Imagem, Avaliacao, ID_Usuario, Tamanho, Dieta, Modo_de_Preparo, Tempo_de_Preparo)
VALUES
('Salada de Verão', 'Uma deliciosa salada refrescante para os dias quentes.', 1, 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-salada-de-frango-1-730x449.jpg', 4.5, 1, 'Medio', 'Vegetariano', 'Prepare os vegetais: Lave bem as folhas de alface e corte em pedaços menores. Em uma tigela grande, misture a alface, o pepino, os tomates, o pimentão, a cebola, o milho e o abacate.
Prepare o molho: Em um pequeno recipiente, misture o azeite de oliva, o suco de limão, o sal, a pimenta e as ervas frescas picadas, se estiver usando. Mexa bem até que os ingredientes estejam combinados.
Montagem: Adicione o queijo feta à tigela de vegetais. Despeje o molho sobre a salada e misture delicadamente para incorporar todos os ingredientes e distribuir o molho uniformemente.
Sirva: Esta salada é ótima para acompanhar pratos grelhados, frango, peixe ou simplesmente como uma refeição leve por si só. Sirva imediatamente para aproveitar a frescura dos ingredientes.', '10 Minutos'),

('Smoothie Saudável', 'Um smoothie nutritivo cheio de vitaminas e antioxidantes.', 2, 'https://s2.glbimg.com/rMoEFhEKjpsyoBYx5Z8cnohEiSk=/620x550/e.glbimg.com/og/ed/f/original/2019/09/24/arno_feed_smoothie_sem_mixer.jpg', 4.0, 2, 'Pequeno', 'Vegano', 'Preparação dos ingredientes: Certifique-se de que a banana esteja congelada em pedaços antes de iniciar. Tenha todos os outros ingredientes prontos e à mão.
Montagem: Em um liquidificador, adicione a banana congelada, o abacaxi, a manga, o coco, o iogurte e o suco de laranja (ou água de coco). Se estiver usando, adicione as sementes de chia ou linhaça.
Misture: Bata todos os ingredientes até obter uma mistura cremosa e homogênea. Se necessário, adicione um pouco mais de suco de laranja ou água de coco para ajustar a consistência.
Sirva: Despeje o smoothie em um copo grande ou em recipientes menores. Decore com pedaços de frutas ou uma folha de hortelã, se desejar. Sirva imediatamente para aproveitar a frescura e os nutrientes das frutas.', '10 Minutos'),

('Torta de Chocolate', 'Uma sobremesa irresistível para os amantes de chocolate.', 3, 'https://conteudo.imguol.com.br/c/entretenimento/62/2022/12/16/torta-natalina-de-marilia-zylbersztajn-1671218499612_v2_4x3.jpg', 5.0, 3, 'Grande', 'Vegetariano', 'Prepare a Massa: Triture os biscoitos em um processador de alimentos até obter uma consistência de migalhas finas. Misture as migalhas de biscoito com a manteiga derretida até formar uma massa úmida. Pressione essa mistura no fundo e nas laterais de uma forma de torta (aproximadamente 22-24cm de diâmetro). Leve à geladeira enquanto prepara o recheio.
Prepare o Recheio: Em uma panela em fogo baixo, aqueça o creme de leite (não deixe ferver). Adicione o chocolate meio amargo picado e mexa até derreter completamente e formar uma mistura homogênea. Adicione o açúcar e a manteiga, misturando bem até incorporar todos os ingredientes.
Montagem: Retire a forma de torta da geladeira e despeje o recheio de chocolate sobre a base de biscoito. Espalhe uniformemente.
Refrigeração: Leve a torta à geladeira por pelo menos 4 horas ou até que o recheio esteja firme.
Decoração (opcional): Antes de servir, você pode decorar a torta com chantilly, raspas de chocolate, frutas vermelhas ou uma pitada de cacau em pó.
Sirva: Corte em fatias e sirva! Essa torta de chocolate é uma delícia por si só ou acompanhada de uma bola de sorvete de baunilha.', '50 Minutos'),

('Bruschettas de Tomate', 'Petiscos deliciosos para servir em qualquer ocasião.', 4, 'https://marolacomcarambola.com.br/wp-content/uploads/2014/05/bruschetta-de-tomate-tradicional-receitas-praticas.jpg', 4.2, 4, 'Medio', 'Vegetariano', 'Prepare os Tomates: Em uma tigela, misture os tomates picados com metade das folhas de manjericão picadas. Tempere com sal, pimenta e regue com um fio de azeite de oliva. Misture bem e reserve por alguns minutos para que os sabores se incorporem.
Prepare as Fatias de Pão: Pré-aqueça o forno a 180°C. Disponha as fatias de pão em uma assadeira e esfregue cada fatia com metade de um dente de alho. Regue um fio de azeite de oliva sobre cada fatia.
Asse as Fatias de Pão: Leve as fatias ao forno pré-aquecido por cerca de 5 a 7 minutos ou até que fiquem levemente douradas e crocantes.
Montagem: Retire as fatias de pão do forno e disponha generosamente a mistura de tomate sobre cada uma. Polvilhe o restante do manjericão fresco por cima.
Finalização (opcional): Se desejar, adicione um pouco de queijo parmesão ralado por cima das bruschettas.
Sirva: As bruschettas podem ser servidas como aperitivo ou entrada. Sirva imediatamente para aproveitar a textura crocante do pão e a frescura dos tomates.', '30 Minutos'),

('Spaghetti à Bolonhesa', 'Uma clássica receita italiana com molho de carne suculento.', 5, 'https://renata.com.br/images/receitas/164/renata-imagem-receitas-macarrao-a-bolonhesa-vegetariano-share.jpg', 4.8, 5, 'Grande', 'Carnivoro', 'Preparação dos Vegetais: Em uma panela grande, aqueça um pouco de azeite em fogo médio. Adicione a cebola, o alho, as cenouras e o aipo. Refogue por alguns minutos até que os vegetais comecem a amolecer.
Cozinhe a Carne: Adicione a carne moída à panela com os vegetais. Cozinhe até que a carne esteja bem dourada e não haja mais líquido na panela.
Adicione os Tomates e Temperos: Adicione os tomates pelados (ou frescos) à panela, esmagando-os levemente com uma colher. Acrescente o extrato de tomate, o vinho tinto (se estiver usando), o orégano, o manjericão, o sal e a pimenta. Deixe a mistura ferver e, em seguida, reduza o fogo para baixo. Cozinhe em fogo baixo por pelo menos uma hora, mexendo ocasionalmente, para que os sabores se desenvolvam.
Prepare a Massa: Enquanto o molho cozinha, cozinhe o spaghetti de acordo com as instruções da embalagem em água salgada fervente até que fique al dente.
Finalização: Escorra a massa e reserve um pouco da água do cozimento. Misture o spaghetti cozido com o molho bolonhesa. Se necessário, adicione um pouco da água do cozimento da massa para ajudar a misturar e dar consistência ao molho.
Sirva: Sirva o Spaghetti à Bolonhesa com uma generosa quantidade de queijo parmesão ralado por cima. Aproveite!', '1 hora e 30 minutos'),

('Churrasco de Picanha', 'Uma suculenta picanha grelhada perfeitamente.', 6, 'https://www.comidaereceitas.com.br/wp-content/uploads/2008/07/Picanha-inteira-na-grelha-para-churrasco-freepik-780x520.jpg', 4.7, 6, 'Grande', 'Carnivoro', 'Preparação da Picanha: Retire a picanha da geladeira cerca de 30 a 40 minutos antes de preparar para que ela chegue à temperatura ambiente. Isso ajuda a garantir um cozimento uniforme.
Prepare a Churrasqueira: Acenda o carvão na churrasqueira e espere até que as brasas estejam formadas e a temperatura esteja média-alta.
Faça Cortes na Gordura: Com a gordura voltada para cima, faça pequenos cortes superficiais em formato de losango na camada de gordura da picanha. Isso ajudará a derreter a gordura durante o cozimento, deixando-a mais suculenta.
Tempere com Sal Grosso: Espalhe o sal grosso por toda a superfície da picanha, cobrindo generosamente a carne. Pressione levemente o sal para que adira à carne.
Leve à Churrasqueira: Coloque a picanha na grelha da churrasqueira com a parte da gordura virada para cima. Deixe grelhar por alguns minutos até que comece a formar uma crosta dourada.
Vire a Picanha: Vire a peça de picanha para que a parte com a gordura fique voltada para baixo, mais próxima das brasas. Isso ajudará a derreter a gordura e deixar a carne mais suculenta.
Verifique o Ponto da Carne: O tempo de cozimento pode variar dependendo da espessura da picanha e do seu gosto pessoal. Use um termômetro de carne para verificar a temperatura interna. Para uma carne ao ponto, a temperatura deve estar em torno de 60-65°C.
Descanse e Fatie: Retire a picanha da churrasqueira e deixe-a descansar por alguns minutos em uma tábua de corte. Isso permite que os sucos se redistribuam na carne. Em seguida, fatie a picanha contra as fibras em fatias médias.
Sirva: Disponha as fatias de picanha em um prato e sirva imediatamente. Aproveite o churrasco!', '40 minutos'),

('Salmão ao Molho de Maracujá', 'Uma opção saudável e saborosa de peixe com um toque tropical.', 7, 'https://www.picanhacia.com.br/wp-content/uploads/2017/01/67-8.jpg', 4.6, 7, 'Medio', 'Carnivoro', 'Prepare o Salmão: Tempere os filés de salmão com sal, pimenta e um pouco de suco de limão. Deixe descansar por alguns minutos para absorver os temperos.
Prepare o Molho de Maracujá: Em uma panela, derreta a manteiga em fogo médio. Adicione a cebola picada e o alho, refogando até que fiquem dourados e perfumados.
Adicione os Ingredientes do Molho: Acrescente o suco de maracujá coado, o suco de laranja e o mel à panela. Mexa bem e deixe ferver em fogo baixo por cerca de 10 a 15 minutos, até que o molho reduza e engrosse um pouco. Tempere com sal e pimenta a gosto.
Prepare o Salmão na Frigideira: Em uma frigideira, aqueça um pouco de azeite em fogo médio-alto. Grelhe os filés de salmão por cerca de 3 a 4 minutos de cada lado, ou até que estejam cozidos conforme sua preferência.
Montagem: Sirva os filés de salmão com o molho de maracujá por cima. Se desejar, polvilhe um pouco de salsinha ou coentro fresco picado para finalizar.
Acompanhamento: Este prato combina muito bem com arroz branco ou integral e legumes grelhados.', '47 Minutos'),

('Frango ao Curry', 'Um prato exótico e aromático com frango e curry.', 8, 'https://www.sabornamesa.com.br/media/k2/items/cache/78468ad5288d433009367eeff5a5f3b3_XL.jpg', 4.4, 8, 'Medio', 'Carnivoro', 'Prepare o Frango: Tempere os cubos de frango com sal, pimenta e um pouco de suco de limão. Reserve por alguns minutos enquanto prepara os outros ingredientes.
Aqueça o Óleo: Em uma panela grande ou frigideira, aqueça o óleo em fogo médio. Adicione a cebola picada e refogue até ficar macia e translúcida.
Adicione os Temperos: Acrescente o alho e o gengibre à panela e refogue por mais um minuto. Adicione a pasta de curry, a cúrcuma, o cominho e o coentro em pó. Mexa bem para incorporar os temperos.
Cozinhe o Frango: Adicione os cubos de frango à panela e cozinhe até que fiquem dourados por fora.
Adicione o Leite de Coco: Despeje o leite de coco na panela, mexendo para combinar os sabores. Deixe ferver e reduza o fogo para médio-baixo. Cozinhe por cerca de 15 a 20 minutos, mexendo ocasionalmente, até que o frango esteja cozido e o molho tenha engrossado.
Finalize e Sirva: Prove e ajuste os temperos conforme necessário. Se desejar, finalize com um pouco de coentro fresco picado por cima. Sirva o frango ao curry acompanhado de arroz branco, basmati ou naan, se preferir.', '90 Minutos');

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
(39, 'Nutella'),
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
(60, 'Salsinha'),
(61, 'Feijão');

-- Adicione mais ingredientes conforme necessário.



-- RECEITA COMPLETA COM OS INGREDIENTES:


-- INSERÇÃO DA NOVA RECEITA

INSERT INTO Receitas (Nome, Descricao, ID_Tipo, Imagem, Avaliacao, ID_Usuario, Tamanho, Dieta, Modo_de_Preparo, Tempo_de_Preparo)
VALUES
('Salada de Frango Grelhado', 'Uma salada saudável com pedaços suculentos de frango grelhado.', 1, 'https://3.bp.blogspot.com/-chS1iWhv1RU/WKLNysHmGoI/AAAAAAAAK-4/PSv2Wwc-AZggRHpLyb9UQLzmfthdPEWrwCPcB/w1200/2017016-salada-frango-grelhado.png', 4.6, 1, 'Medio', 'Carnivoro', 'Grelhe o frango até ficar no ponto desejado. Monte a salada com os ingredientes frescos.', '30 minutos');


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
