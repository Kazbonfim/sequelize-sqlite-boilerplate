# Sobre
Este boilerplate fornece a estrutura essencial para conectar, modelar e interagir com um banco SQLite de forma simples e eficiente, utilizando o Sequelize para manipulação de dados. Ideal para protótipos rápidos ou projetos pequenos, sem a necessidade de configurar bancos mais complexos.

## Como usar?
```
git clone <URL> // Clonar esse rep.

cd <NOME> // Ir pra dentro da pasta dos arquivos

npm install // Vai instalar todos os módulos que usei 

npm start // Vai rodar o servidor Express, criar o arquivo .db na raíz, e em seguida, performar as colunas da tabela
```
É isso. É um projeto bem simples, no intuito de realmente reutilizar esses recursos quando forem necessários, sem ter que ficar recorrendo á documentação, IA ou qualquer outro recurso externos - que convenhamos, se torna chato, e as vezes limitante. Testei algumas vezes, não encontrei bugs; recomendo que, caso não tenha um front, só queira entender como funciona requisições e respostas, baixe e instancie, e vá testando tudo no Postaman.
Um exemplo de requisição seria...

Postman: 
![image](https://github.com/user-attachments/assets/1bc059ce-8988-481e-ace5-c5464ae32891)
Rota de criação de usuários: POST | http://localhost:3000/users
Body: 
```
{
  "name": "Teste",
  "email": "teste@example.com"
}
```
Retorno esperado: res(200), de sucesso na inserção ou interação com o algoritmo.
Você pode usar o Thunderclient direto no VCS também, basta instalar ele, e seguir os mesmos passos

## That's all folks! Dúvidas? Só ir em ISSUES, e abrir uma, respondo em breve, prometo.