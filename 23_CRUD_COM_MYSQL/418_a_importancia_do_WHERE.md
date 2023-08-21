# 418. A importância do WHERE

- O WHERE é uma cláusula de algumas queries, que determina **quais registros vamos atualizar**;
- Por exemplo: **WHERE id=1**;
- Se não inserirmos esta instrução em atualizações ou remoções, vamos **aplicar a todos os dados**, o que pode ser um enorme problema;
- Então **lembre-se sempre de inserir WHERE** em UPDATE e DELETE;
- Depois veremos sua aplicação com SELECT;