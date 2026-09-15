const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dados simulados do seu portfólio
const meuPortfolio = {
  perfil: {
    nome: "Seu Nome Aqui",
    titulo: "Desenvolvedor de Software",
    bio: "Criando soluções incríveis através de código."
  },
  projetos: [
    {
      id: 1,
      titulo: "API de Portfólio",
      tecnologias: ["Node.js", "Express"],
      link_github: "https://github.com/seu-usuario/portfolio-api"
    },
    {
      id: 2,
      titulo: "App de Tarefas",
      tecnologias: ["React", "JavaScript"],
      link_github: "https://github.com/seu-usuario/todo-app"
    }
  ]
};

// Rota principal (Home)
app.get('/', (req, res) => {
  res.send('Bem-vindo à API do meu Portfólio!');
});

// Rota para buscar o perfil
app.get('/api/perfil', (req, res) => {
  res.json(meuPortfolio.perfil);
});

// Rota para buscar todos os projetos
app.get('/api/projetos', (req, res) => {
  res.json(meuPortfolio.projetos);
});

// Rota para buscar um projeto específico pelo ID
app.get('/api/projetos/:id', (req, res) => {
  const projetoId = parseInt(req.params.id);
  const projeto = meuPortfolio.projetos.find(p => p.id === projetoId);
  
  if (!projeto) {
    return res.status(404).json({ erro: "Projeto não encontrado" });
  }
  res.json(projeto);
});

// Iniciando o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});