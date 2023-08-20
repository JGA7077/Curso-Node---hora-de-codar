# 413.Exercício de banco de dados

- Crie um banco de dados chamado **cadastro**;
- Crie uma tabela chamada **pessoas**;
- Colunas *nome*, *rg*, *cpf* e *limite*;
- *nome*, *rg* e *cpf*, são dados de texto;
- *limite* é um valor númerico;
- Insira 5 *dados*;

> CREATE DATABASE cadastro;
> USE cadastro;
> CREATE TABLE pessoas (nome VARCHAR(100), rg CHAR(7), cpf CHAR(11), limite INT(10));
> INSERT INTO pessoas (nome, rg, cpf, limite) VALUES ("João", "1234567", "12345678900", 1000);
> INSERT INTO pessoas (nome, rg, cpf, limite) VALUES ("Gabriel", "4567899", "12345678901", 2000);
> INSERT INTO pessoas (nome, rg, cpf, limite) VALUES ("Ewelyn", "7894565", "12345678902", 3000);
> INSERT INTO pessoas (nome, rg, cpf, limite) VALUES ("Ewerton", "1237899", "12345678903", 4000);
> INSERT INTO pessoas (nome, rg, cpf, limite) VALUES ("Emilly", "4563212", "12345678904", 5000);
> SELECT * FROM pessoas;