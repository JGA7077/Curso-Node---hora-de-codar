# 391.Exportando banco de dados

- Podemos também exportar nosso banco, utilizamos o comando: **mysqldump -u root <nome_banco> > <nome_arquivo>.sql**
- Desta forma, todas as tabelas e dados ficarão salvas em um arquivo .sql

Com uma pasta selecionada no **terminal** daremos o comando:
> mysqldump -u root **phpmyadmin** > **phpmyadmin_bkp.sql**

Dessa forma, o banco de dados será exportado na pasta que o terminal estiver selecionada