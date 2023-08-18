# 396.Criando uma tabela

- Agora vamos criar nossa primeira tabela, o comando é:
- **CREATE TABLE <nome> (<coluna> <tipo_de_dado>);**
- Podemos inserir diversas colunas e com diferentes tipos de dados;
- O mais comum e que acaba sendo mais utilizado é o **VARCHAR**, que representa os textos/strings de uma tabela;

Um exemplo de comando:

> CREATE TABLE **pessoas** (**nome** VARCHAR(100), **cpf** CHAR(11), **descricao** MEDIUMTEXT);