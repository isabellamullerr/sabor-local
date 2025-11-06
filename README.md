# 🍽️ Sabor Local

**Plataforma para valorização de restaurantes e produtores locais**

[![Deploy Status](https://img.shields.io/badge/deploy-vercel-black)](https://sabor-local.vercel.app)
[![Node.js](https://img.shields.io/badge/node-20.x-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-19.x-blue)](https://react.dev/)

---

## 🔗 Links Importantes

- **🌐 Deploy (Produção)**: [https://sabor-local.vercel.app](https://sabor-local.vercel.app) *(Atualizar com URL real)*
- **📦 Repositório**: [https://github.com/isabellamullerr/sabor-local](https://github.com/isabellamullerr/sabor-local)
- **📊 GitHub Actions**: [Ver Workflows](https://github.com/isabellamullerr/sabor-local/actions)

---

## 📋 Sobre o Projeto

O **Sabor Local** é uma aplicação web full-stack desenvolvida para conectar consumidores com restaurantes e produtores locais, promovendo a economia regional e facilitando o acesso a alimentos frescos e de qualidade.

### 🎯 Objetivos
- Valorizar a produção local e restaurantes da região
- Facilitar a descoberta de opções gastronômicas próximas
- Promover economia circular e sustentabilidade
- Oferecer plataforma intuitiva para produtores e consumidores

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca para interfaces de usuário
- **Vite 7.x** - Build tool moderna e rápida
- **JavaScript (ES6+)** - Linguagem de programação
- **CSS3** - Estilização com suporte a temas claro/escuro

### Backend
- **Node.js 20.x** - Runtime JavaScript
- **Express 5.1.0** - Framework web minimalista
- **CORS** - Middleware para requisições cross-origin

### DevOps & Deploy
- **Vercel** - Plataforma de hospedagem
- **GitHub Actions** - CI/CD automatizado
- **Git & GitHub** - Controle de versão

---

## 🚀 Instalação e Execução Local

### Pré-requisitos
- **Node.js** 20.19+ ou 22.12+ ([Download](https://nodejs.org/))
- **npm** 10.x (incluído com Node.js)
- **Git** ([Download](https://git-scm.com/))

### Passo 1: Clonar o Repositório
```bash
git clone https://github.com/isabellamullerr/sabor-local.git
cd sabor-local
```

### Passo 2: Instalar Dependências

#### Opção A - Instalar tudo de uma vez:
```bash
npm run install-all
```

#### Opção B - Instalar separadamente:
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### Passo 3: Executar em Desenvolvimento

#### Backend (Porta 3001):
```bash
cd backend
npm run dev
```

#### Frontend (Porta 5173):
```bash
cd frontend
npm run dev
```

#### Executar ambos simultaneamente:
```bash
# Na raiz do projeto
npm run dev
```

### Passo 4: Acessar a Aplicação
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:3001](http://localhost:3001)
- **API Health**: [http://localhost:3001/api/health](http://localhost:3001/api/health)
- **API Restaurantes**: [http://localhost:3001/api/restaurants](http://localhost:3001/api/restaurants)

---

## 📁 Estrutura do Projeto

```
sabor-local/
├── .github/
│   └── workflows/
│       └── deploy-vercel.yml    # CI/CD automático
├── backend/
│   ├── index.js                 # Servidor Express
│   ├── package.json             # Dependências backend
│   └── node_modules/
├── frontend/
│   ├── src/
│   │   ├── App.jsx              # Componente principal
│   │   ├── main.jsx             # Entry point
│   │   ├── App.css              # Estilos do app
│   │   └── index.css            # Estilos globais
│   ├── public/                  # Assets estáticos
│   ├── index.html               # HTML template
│   ├── vite.config.js           # Configuração Vite
│   ├── package.json             # Dependências frontend
│   └── node_modules/
├── package.json                 # Scripts raiz
├── vercel.json                  # Config deploy Vercel
├── README.md                    # Este arquivo
└── .gitignore                   # Arquivos ignorados
```

---

## 🌐 Deploy

O projeto está configurado para **deploy automático** na Vercel através do GitHub Actions.

### Deploy Automático
Toda vez que há um push na branch `master`, o GitHub Actions:
1. Faz checkout do código
2. Configura Node.js 20
3. Instala dependências
4. Faz build do frontend
5. Deploy automático na Vercel

### Deploy Manual (Opcional)
```bash
# Instalar Vercel CLI
npm install -g vercel

# Na pasta frontend
cd frontend
vercel --prod
```

---

## 🧪 Scripts Disponíveis

### Raiz do Projeto
```bash
npm run dev          # Executa backend + frontend
npm run build        # Build do frontend
npm run start        # Inicia backend produção
npm run install-all  # Instala todas dependências
```

### Frontend
```bash
npm run dev          # Servidor desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificar código
```

### Backend
```bash
npm start            # Servidor produção
npm run dev          # Servidor com auto-reload
```

---

## 📡 API Endpoints

### Backend Local (http://localhost:3001)

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/` | Mensagem de boas-vindas |
| GET | `/api/health` | Health check do servidor |
| GET | `/api/restaurants` | Lista de restaurantes |

### Exemplo de Resposta - `/api/restaurants`
```json
[
  {
    "id": 1,
    "name": "Restaurante Local 1",
    "cuisine": "Brasileira",
    "rating": 4.5
  },
  {
    "id": 2,
    "name": "Pizzaria da Esquina",
    "cuisine": "Italiana",
    "rating": 4.2
  }
]
```

---

## 🔧 Configuração

### Variáveis de Ambiente
O projeto não requer variáveis de ambiente para execução local básica.

Para deploy na Vercel, configure via GitHub Secrets:
- `VERCEL_TOKEN` - Token de acesso
- `VERCEL_ORG_ID` - ID da organização
- `VERCEL_PROJECT_ID` - ID do projeto

---

## 📝 Funcionalidades Implementadas

- ✅ Interface responsiva React
- ✅ Backend API REST com Express
- ✅ Sistema de build otimizado (Vite)
- ✅ Deploy automático CI/CD
- ✅ CORS habilitado para integração
- ✅ Health check endpoint
- ✅ Hot Module Replacement (HMR)
- ✅ ESLint configurado
- ✅ Tema claro/escuro

---

## 🎓 Aprendizados

Durante o desenvolvimento deste projeto, foram explorados:

1. **Arquitetura Full-Stack**: Integração frontend-backend
2. **React Moderno**: Hooks, componentes funcionais
3. **Build Tools**: Vite e suas vantagens de performance
4. **DevOps**: CI/CD com GitHub Actions
5. **Deploy**: Configuração e troubleshooting Vercel
6. **Versionamento**: Git flow e boas práticas
7. **APIs REST**: Endpoints e estruturação de dados

---

## 🚧 Próximos Passos

### Curto Prazo
- [ ] Implementar cadastro de restaurantes
- [ ] Sistema de busca e filtros
- [ ] Página de detalhes do restaurante
- [ ] Sistema de avaliações

### Médio Prazo
- [ ] Autenticação de usuários
- [ ] Painel administrativo
- [ ] Integração com mapas
- [ ] Sistema de pedidos

### Longo Prazo
- [ ] App mobile (React Native)
- [ ] Sistema de notificações
- [ ] Chat em tempo real
- [ ] Analytics e métricas

---

## 👥 Equipe

**Desenvolvedor(a)**: Isabella Muller
- 📧 Email: *(adicionar email)*
- 💼 GitHub: [@isabellamullerr](https://github.com/isabellamullerr)

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

## 🆘 Suporte

Para problemas ou dúvidas:
1. Verifique a [documentação](./DEPLOY.md)
2. Consulte os [logs do GitHub Actions](https://github.com/isabellamullerr/sabor-local/actions)
3. Abra uma [issue](https://github.com/isabellamullerr/sabor-local/issues)

---

**Desenvolvido com ❤️ para valorizar produtores e restaurantes locais**
#   F o r c e   r e d e p l o y  
 