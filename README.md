# 🚀 Portfólio API

Uma API RESTful simples, moderna e eficiente desenvolvida em **Node.js** e **Express** para servir dados de perfil e projetos pessoais. Ideal para integrar com aplicações frontend ou expor no meu portfólio do GitHub.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript no servidor
- **Express** — Framework web para Node.js
- **CORS** — Middleware para habilitar requisições cross-origin
- **Nodemon** — Ferramenta de desenvolvimento para auto-reload

---

## 📌 Rotas da API (Endpoints)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/` | Mensagem de boas-vindas |
| `GET` | `/api/perfil` | Retorna as informações do meu perfil |
| `GET` | `/api/projetos` | Retorna a lista completa de projetos |
| `GET` | `/api/projetos/:id` | Retorna os detalhes de um projeto por ID |

---

## 💻 Exemplo de Resposta

### `GET /api/perfil`
```json
{
  "nome": "Seu Nome Aqui",
  "titulo": "Desenvolvedor de Software",
  "bio": "Criando soluções incríveis através de código."
}