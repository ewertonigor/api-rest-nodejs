# RF

- [x] O usuário deve poder criar uma nova transação
- [x] O usuário deve poder obter um resumo da sua conta
- [x] O usuário deve poder listar todas as transações que já ocorreram
- [x] O usuário deve poder visualizar uma transação única

# RN

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito que substrairá
- [ ] Deve ser possivel identificarmos o usuário entre as requisições
- [ ] O usuário só pode visualizar transações o qual ele criou

# RNF


/*
  -> HTTP
    - Método HTTP
    - url

  -> Métodos
    - GET -> Buscar uma recurso do back-end
    - POST -> Criar uma recurso no back-end
    - PUT -> Editar ou atualizar um recurso do back-end
    - PATCH -> Atualizar uma informação especifica de um recurso no back-end
    - DELETE -> Deletar uma informação no back-end

  -> JSON - JavaScript Object Notation

  -> Cabeçalhos (Requisição/Resposta) - São Metadados

  -> HTTP Status Code
    100 - 199 => Informational Responses
    200 - 299 => Sucessful Responses
    300 - 399 => Redirection Messages
    400 - 499 => Client Error Responses
    500 - 599 => Server Error Responses

  -> UUID: Universal Unique ID

  -> Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios (http://localhost:3333/users?userId=1&name=diego)
  -> Route Parameters: Identificação de recurso (http://localhost:3333/users/1)
  -> Request Body: Envio de informações de um formulário (HTTPs)

  -> TESTES
    - Unitários: Unidade da sua aplicação
    - Integração: Comunicação entre duas ou mais unidades
    - E2E (Ponta a ponta): Simulam um usuário operando na nossa aplicação

    * Front-End: Abre a página de login, digite o texto diego@rocketseat.com.br no campo ID email, clique no botão
    * Back-End: Chamadas HTTP, WebSockets.

    -> Pirâmide de testes: E2E (não dependem de nenhuma tecnologia, não dependem de arquitetura)

    Obs: A ideia é sempre ter poucos testes E2E, mais testes de integração, e muitos testes unitários

*/