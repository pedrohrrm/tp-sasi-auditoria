create database ongAnimal;
use ongAnimal; 

create table t_admin(
	id int primary key auto_increment, 
    email varchar(50), 
    senha varchar(50)
);

create table animal  (
	id  int primary key auto_increment,
    nome varchar(30),
    idade float,
    porte varchar(20),
    sexo varchar(30),
    especie varchar(30)
);

create table adotante (
	cpf bigint primary key, 
    nome varchar(20),
    sobrenome varchar(20),
    rua varchar(40), 
    cidade varchar(30), 
    estado varchar(30),
    nCasa varchar(11), 
    telefone varchar(40)
);

create table adocao (
	idAdocao int primary key auto_increment,
    idAnimal int, 
    cpfAdotante bigint, 
    dataAdocao date,
    foreign key (idAnimal) references animal(id), 
    foreign key (cpfAdotante) references adotante(cpf)
);

create table resgate (
	idResgate int primary key auto_increment,
    dataResgate date,
    idAnimal int, 
    nomeResgatante varchar(40),
    foreign key (idAnimal) references animal(id)
);

-- Procedure para o cadastro de animais e seus respectivos resgates
delimiter //
create procedure spCadAnimal(nomeA varchar(30), idadeA float, porteA varchar(20), sexoA varchar(30), especieA varchar(30), dResgate date, nResgatante varchar(40))
begin
declare idA int;
declare erro_sql TINYINT DEFAULT FALSE; 
declare continue handler for sqlexception set erro_sql = TRUE; 

start transaction;

	insert into animal(nome, idade, porte, sexo, especie) values (nomeA, idadeA, porteA, sexoA, especieA);

	set idA = @@IDENTITY;

	insert into resgate(nomeResgatante, dataResgate, idAnimal) values(nResgatante, dResgate, idA);
if erro_sql = false then 
	commit; 
else
	rollback;
end if; 
end; //

-- Procedure para deletar um animal conforme seu id
delimiter //
create procedure spDeleteAnimalById(idA int)
begin
	declare erro_sql TINYINT DEFAULT FALSE; 
	declare continue handler for sqlexception set erro_sql = TRUE; 
	start transaction;
		delete from adocao
		where idAnimal = idA;
		
		delete from resgate 
		where idAnimal = idA;
		
		delete from animal 
		where id = idA;
	if erro_sql = false then 
		commit; 
	else
		rollback;
	end if;     
end;//

-- Procedure para deletar um adotando por seu id
delimiter //
create procedure spDeleteAdotanteByID(cpfA bigint)
begin
	declare erro_sql TINYINT DEFAULT FALSE; 
	declare continue handler for sqlexception set erro_sql = TRUE; 
	start transaction;

		delete from adocao
		where cpfAdotante = cpfA; 
		
		delete from adotante
		where cpf = cpfA; 
	if erro_sql = false then 
		commit; 
	else
		rollback;
	end if; 
end;//

-- Procedure para retornar os dados de um único animal 
delimiter //
create procedure spDadosAnimal(in idAnimal int)
begin
	declare id int;    
    declare nomeAnimal varchar(30);
    declare idadeAnimal float; 
    declare porteAnimal varchar(20);
    declare sexoAnimal varchar(30); 
    declare especieAnimal varchar(30); 
    declare dResgate date;
    declare nResgatante varchar(40);
    declare statusAnimal varchar(40);
	
    set id = idAnimal;
    
    select nome, idade, porte, sexo, especie, dataResgate, nomeResgatante 
    into nomeAnimal, idadeAnimal, porteAnimal, sexoAnimal, especieAnimal, dResgate, nResgatante
    from animal join resgate on animal.id = resgate.idAnimal
    where animal.id = id;
    
	
    set statusAnimal = (
		case 
			when  (id in (select idAnimal from adocao)) then 'Adotado'
			else 'Não adotado'
        end
    );
    
    select id, nomeAnimal, idadeAnimal, porteAnimal, sexoAnimal, especieAnimal, dResgate, nResgatante, statusAnimal;
end;//


INSERT INTO `t_admin`(`email`, `senha`) VALUES ('admin@admin','1234');