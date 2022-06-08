-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */

create database Camisa12;

use Camisa12;

create table Time(
nomeTime varchar(30) primary key,
corPrimaria varchar(30),
corSecundaria varchar(30),
corTerciaria varchar(30),
corQuartenaria varchar(30),
backImage varchar(100)
);

create table Usuario (
idUsuario varchar(30) unique,
nomeUsuario varchar(30),
tel char(11) unique, 
senha varchar(45),
fkTime varchar(30),
foreign key (fkTime) references Time (nomeTime),
primary key (idUsuario, fkTime)
);

select * from usuario;

insert into time values 
('opt_amg','rgb(0, 79, 34)','rgba(0, 0, 0, 0.461)','rgb(0, 47, 20)','white','../assets/Visual\ ID/times/back-amg.jpg'),
('opt_cap','rgb(167, 0, 0)','rgba(0, 0, 0, 0.461)','black','black','../assets/Visual\ ID/times/back-cap.jpg'),
('opt_acg','rgb(167, 0, 0)','rgba(0, 0, 0, 0.461)','black','white','../assets/Visual\ ID/times/back-acg.jpg'),
('opt_cam','black','rgba(0, 0, 0, 0.461)','black','white','../assets/Visual\ ID/times/back-cam.jpg'),
('opt_avai','rgb(23, 71, 159)','rgba(45, 100, 202, 0.613)','rgb(14, 45, 102)','white','../assets/Visual\ ID/times/back-avai.jpg'),
('opt_bragantino','rgb(167, 0, 0)','rgba(45, 100, 202, 0.613)','rgb(167, 0, 0)','white','../assets/Visual\ ID/times/back-bragantino.jpg'),
('opt_bota','black','rgba(0, 0, 0, 0.461)','black','white','../assets/Visual\ ID/times/back-bota.jpg'),
('opt_ceara','black','rgba(0, 0, 0, 0.461)','black','white','../assets/Visual\ ID/times/back-ceara.jpg'),
('opt_corinthians','black','rgba(0, 0, 0, 0.461)','black','white','../assets/Visual\ ID/times/back-corinthians.jpg'),
('opt_coritiba','rgb(9, 96, 79)','rgba(9, 96, 79, 0.605)','rgb(9, 96, 79)','white','../assets/Visual\ ID/times/back-coritiba.jpg'),
('opt_cruzeiro','rgb(23, 71, 159)','rgba(45, 100, 202, 0.613)','rgb(14, 45, 102)','white','../assets/Visual\ ID/times/back-cruzeiro.jpg'),
('opt_cuiaba','rgb(0, 79, 34)','rgba(0, 79, 34, 0.667)','rgb(233, 219, 26)','white','../assets/Visual\ ID/times/back-cuiaba.jpg'),
('opt_flamengo','rgb(167, 0, 0)','rgba(0, 0, 0, 0.461)','black','black','../assets/Visual\ ID/times/back-flamengo.jpg'),
('opt_fluminense','rgb(96, 9, 25)','rgba(96, 9, 25, 0.638)','rgb(0, 47, 20)','white','../assets/Visual\ ID/times/back-fluminense.jpg'),
('opt_fortaleza','rgb(23, 71, 159)','rgba(45, 100, 202, 0.613)','rgb(167, 0, 0)','white','../assets/Visual\ ID/times/back-fortaleza.jpg'),
('opt_goias','rgb(0, 79, 34)','rgba(0, 79, 34, 0.667)','rgb(0, 47, 20)','white','../assets/Visual\ ID/times/back-goias.jpg'),
('opt_gremio','rgb(46, 144, 210)', 'rgba(0, 0, 0, 0.461)','black','white','../assets/Visual\ ID/times/back-gremio.jpg'),
('opt_inter','rgb(167, 0, 0)','rgba(167, 0, 0, 0.541)','rgb(167, 0, 0)','white','../assets/Visual\ ID/times/back-inter.jpg'),
('opt_juventude','rgb(0, 79, 34)','rgba(0, 79, 34, 0.667)','rgb(0, 47, 20)','white','../assets/Visual\ ID/times/back-juventude.jpg'),
('opt_palmeiras','rgb(0, 79, 34)','rgba(0, 79, 34, 0.667)','rgb(0, 47, 20)','white','../assets/Visual\ ID/times/back-palmeiras.jpg'),
('opt_santos','black','rgba(0, 0, 0, 0.461)','black','white','../assets/Visual\ ID/times/back-santos.jpg'),
('opt_spfc','rgb(167, 0, 0)','rgba(0, 0, 0, 0.461)','black','white','../assets/Visual\ ID/times/back-spfc.jpg'),
('opt_vasco','rgb(167, 0, 0)','rgba(0, 0, 0, 0.461)','black','white','../assets/Visual\ ID/times/back-vasco.jpg');


-- create table campeonato (
-- nomeCampeonato varchar(20),
-- fkUsuario int,
-- fkTime varchar(30),
-- foreign key (fkUsuario) references Usuario (idUsuario),
-- foreign key (fkTime) references Usuario (fkTime),
-- primary key (nomeCampeonato, fkUsuario, fkTime)
-- );

create table Partida (
idPartida int auto_increment,
campeonato varchar(20), 
mandoCampo char(3),
resultadoPartida varchar(7),
golsPro int,
golsContra int,
escanteios int,
cartoesAmarelos int,
fkUsuario varchar(30),
fkTime varchar(30),
foreign key (fkUsuario) references Usuario (idUsuario),
foreign key (fkTime) references Usuario (fkTime),
primary key (idPartida, fkUsuario, fkTime)
);
