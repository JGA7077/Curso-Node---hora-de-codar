# 401.Inserindo dados no banco

- Uma das operações mais comuns é **inserir dados**, utilizamos o comando:
- **INSERT INTO <tabela> (<colunas>...) VALUES (<valores>...);
- Precisamos inserir o nome das colunas e também os valores para cada uma, **separados por vírgula**;
- Os **valores precisam corresponder a ordem das colunas**;
- **Obs.:** valores de texto são inseridos entre aspas;

> **INSERT INTO** produtos (nome, sku, informacoes) **VALUES** ("Playstation 5", "PS5XY", "É um videogame de última geração");

Para verificarmos os dados inseridos, podemos buscar todos os dados da tabela:

> **SELECT** * **FROM** produtos;
