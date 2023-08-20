# 403.Criando tabelas com dados numéricos

- Vamos testar **BOOL** e **INT**;
- Neste exemplo vamos também inserir outro tipo de dado, para ver que isso é possível e muito utilizado;

> CREATE TABLE servidores (nome **VARCHAR(100)**, espaco_disco **INT(10)**, ligado **BOOL**);
> INSERT INTO servidores (nome, espaco_disco, ligado) **VALUES** ("Servidor 1", 123456, 0);
> INSERT INTO servidores (nome, espaco_disco, ligado) **VALUES** ("Servidor 2", 100000, 1);
> **SELECT** * **FROM** servidores;