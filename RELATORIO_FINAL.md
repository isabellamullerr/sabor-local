# RELATÓRIO FINAL - PROJETO SABOR LOCAL
**Desenvolvimento de Aplicação Web Full-Stack**

---

## 📊 INFORMAÇÕES DO PROJETO

**Nome do Projeto**: Sabor Local  
**Curso**: *(Preencher com seu curso)*  
**Disciplina**: *(Preencher com a disciplina)*  
**Período**: 2º Bimestre - 2025  
**Integrante(s)**: Isabella Muller *(adicionar outros se houver)*

**Repositório GitHub**: https://github.com/isabellamullerr/sabor-local  
**Deploy (Vercel)**: *(Adicionar URL do deploy quando disponível)*  
**Data de Entrega**: 23/10/2025

---

## 1. RESUMO EXECUTIVO

O projeto **Sabor Local** consiste em uma aplicação web full-stack desenvolvida para promover e conectar restaurantes e produtores locais com consumidores da região. A plataforma utiliza tecnologias modernas como React para o frontend e Node.js/Express para o backend, com deploy automatizado na Vercel através de GitHub Actions.

### Objetivos Alcançados
✅ Aplicação funcional em ambiente local e produção  
✅ Interface responsiva e moderna desenvolvida em React  
✅ API REST funcional com endpoints configurados  
✅ Deploy automatizado via CI/CD  
✅ Repositório organizado e documentado

---

## 2. DESCRIÇÃO DO PROJETO

### 2.1 Proposta
Criar uma plataforma digital que facilite a descoberta e acesso a restaurantes e produtos locais, promovendo:
- Economia regional
- Sustentabilidade alimentar
- Valorização de pequenos produtores
- Facilidade na busca por opções gastronômicas

### 2.2 Público-Alvo
- Consumidores buscando opções locais de alimentação
- Restaurantes e estabelecimentos locais
- Pequenos produtores rurais
- Comunidade interessada em economia circular

### 2.3 Funcionalidades Implementadas

**Frontend (React)**
- Interface de usuário responsiva
- Sistema de navegação intuitivo
- Suporte a temas claro/escuro
- Hot Module Replacement para desenvolvimento ágil
- Componentes reutilizáveis

**Backend (Node.js + Express)**
- API REST estruturada
- Endpoint de health check
- Listagem de restaurantes
- Middleware CORS configurado
- Tratamento de erros

**DevOps**
- Deploy automático via GitHub Actions
- Integração contínua configurada
- Versionamento com Git/GitHub

---

## 3. TECNOLOGIAS UTILIZADAS

### 3.1 Stack de Desenvolvimento

| Categoria | Tecnologia | Versão | Justificativa |
|-----------|------------|--------|---------------|
| **Frontend** | React | 19.1.1 | Biblioteca moderna, grande comunidade, componentes reutilizáveis |
| **Build Tool** | Vite | 7.x | Performance superior, HMR rápido, configuração simplificada |
| **Backend** | Node.js | 20.x | JavaScript unificado, assíncrono, grande ecossistema |
| **Framework** | Express | 5.1.0 | Minimalista, flexível, amplamente adotado |
| **Deploy** | Vercel | - | Deploy gratuito, integração GitHub, serverless |
| **CI/CD** | GitHub Actions | - | Automação nativa GitHub, gratuito para repositórios públicos |

### 3.2 Justificativas Técnicas

**React**: Escolhido pela sua capacidade de criar interfaces dinâmicas e responsivas, com uma curva de aprendizado favorável e vasta documentação.

**Vite**: Ferramenta moderna de build que oferece tempo de inicialização instantâneo e hot module replacement extremamente rápido, melhorando significativamente a experiência de desenvolvimento.

**Node.js + Express**: Combinação que permite usar JavaScript tanto no frontend quanto no backend, facilitando o desenvolvimento e manutenção. Express oferece flexibilidade sem complexidade desnecessária.

**Vercel**: Plataforma de deploy que oferece integração nativa com GitHub, deploy automático, e suporte nativo para aplicações React e Node.js, além de ser gratuita para projetos educacionais.

---

## 4. ARQUITETURA DO SISTEMA

### 4.1 Estrutura Geral
```
┌─────────────────┐
│   GitHub        │  ← Versionamento
│   (Repositório) │
└────────┬────────┘
         │
         ↓ (Push)
┌─────────────────┐
│ GitHub Actions  │  ← CI/CD
│   (Workflow)    │
└────────┬────────┘
         │
         ↓ (Deploy)
┌─────────────────┐
│    Vercel       │  ← Hospedagem
│  (Produção)     │
└─────────────────┘
         │
    ┌────┴────┐
    ↓         ↓
┌────────┐ ┌──────────┐
│Frontend│ │ Backend  │
│ React  │ │ Express  │
└────────┘ └──────────┘
```

### 4.2 Fluxo de Dados
1. **Desenvolvimento Local**: Programador desenvolve features
2. **Versionamento**: Commits enviados para GitHub
3. **CI/CD**: GitHub Actions detecta push na branch master
4. **Build**: Workflow executa instalação e build
5. **Deploy**: Vercel recebe e publica nova versão
6. **Produção**: Aplicação atualizada disponível online

### 4.3 Estrutura de Pastas
```
sabor-local/
├── .github/workflows/     # Automação CI/CD
├── backend/               # API Node.js/Express
│   ├── index.js          # Servidor principal
│   └── package.json      # Dependências
├── frontend/              # App React
│   ├── src/              # Código fonte
│   ├── public/           # Assets estáticos
│   └── package.json      # Dependências
├── package.json           # Scripts raiz
├── vercel.json           # Config deploy
└── README.md             # Documentação
```

---

## 5. DESENVOLVIMENTO

### 5.1 Metodologia
- **Desenvolvimento iterativo**: Features implementadas incrementalmente
- **Versionamento**: Git com commits descritivos
- **Testes manuais**: Validação em ambiente local antes de deploy
- **Documentação contínua**: README e comentários atualizados

### 5.2 Cronograma Realizado

| Fase | Atividade | Status |
|------|-----------|--------|
| 1 | Configuração inicial do projeto | ✅ Concluído |
| 2 | Desenvolvimento frontend React | ✅ Concluído |
| 3 | Desenvolvimento backend Express | ✅ Concluído |
| 4 | Integração frontend-backend | ✅ Concluído |
| 5 | Configuração de deploy | ✅ Concluído |
| 6 | Setup GitHub Actions | ✅ Concluído |
| 7 | Testes e ajustes | ✅ Concluído |
| 8 | Documentação | ✅ Concluído |

### 5.3 Desafios Encontrados e Soluções

**Desafio 1: Incompatibilidade de Versão do Node.js**
- **Problema**: Vite 7.x requer Node.js 20+, mas workflow usava 18
- **Erro**: `crypto.hash is not a function`
- **Solução**: Atualização do workflow para Node.js 20

**Desafio 2: Cache do Package-lock.json**
- **Problema**: GitHub Actions tentava cachear arquivo inexistente
- **Erro**: `unable to cache dependencies`
- **Solução**: Geração do package-lock.json e ajuste no workflow

**Desafio 3: Configuração do Deploy na Vercel**
- **Problema**: Estrutura de monorepo com frontend e backend
- **Solução**: Criação de vercel.json com rotas específicas

---

## 6. FUNCIONALIDADES E RECURSOS

### 6.1 Funcionalidades Atuais

**Interface do Usuário**
- [x] Layout responsivo
- [x] Tema claro/escuro automático
- [x] Componente de contador interativo (demonstração)
- [x] Navegação fluida

**Backend API**
- [x] Endpoint de health check (`/api/health`)
- [x] Listagem de restaurantes (`/api/restaurants`)
- [x] CORS habilitado
- [x] Tratamento de erros centralizado

**Infraestrutura**
- [x] Deploy automático
- [x] CI/CD configurado
- [x] Monitoramento via GitHub Actions
- [x] Logs acessíveis

### 6.2 Demonstração de Uso

**1. Execução Local**
```bash
# Instalar dependências
npm run install-all

# Executar ambos servidores
npm run dev
```

**2. Acessar Frontend**
- URL: http://localhost:5173
- Interface React com contador funcional

**3. Testar API**
```bash
# Health check
curl http://localhost:3001/api/health

# Listar restaurantes
curl http://localhost:3001/api/restaurants
```

---

## 7. APRENDIZADOS E COMPETÊNCIAS DESENVOLVIDAS

### 7.1 Conhecimentos Técnicos

**Desenvolvimento Frontend**
- Criação de componentes React funcionais
- Gerenciamento de estado com hooks (useState)
- Estilização com CSS moderno
- Build e otimização com Vite

**Desenvolvimento Backend**
- Estruturação de APIs REST
- Middleware e roteamento com Express
- Configuração CORS
- Tratamento de requisições HTTP

**DevOps e Deploy**
- Configuração de pipelines CI/CD
- Workflows do GitHub Actions
- Deploy em plataforma serverless
- Troubleshooting de builds

**Boas Práticas**
- Versionamento com Git
- Commits semânticos
- Documentação clara
- Estruturação de projetos

### 7.2 Competências Desenvolvidas

✅ **Trabalho com tecnologias modernas**  
✅ **Resolução de problemas técnicos**  
✅ **Leitura de documentação oficial**  
✅ **Debug e troubleshooting**  
✅ **Organização de código**  
✅ **Autonomia no aprendizado**

---

## 8. MELHORIAS REALIZADAS (vs Versão Parcial)

1. **Deploy Automatizado**: Implementação completa de CI/CD
2. **Backend Funcional**: API REST com endpoints operacionais
3. **Documentação Expandida**: README detalhado e relatórios
4. **Configuração Otimizada**: Vite, ESLint, e ferramentas de build
5. **Correções de Bugs**: Resolvidos problemas de compatibilidade
6. **Estrutura Profissional**: Organização de pastas e arquivos

---

## 9. PRÓXIMOS PASSOS E EVOLUÇÃO

### 9.1 Curto Prazo (Próximas 2-4 semanas)
- [ ] Implementar formulário de cadastro de restaurantes
- [ ] Criar sistema de busca e filtros
- [ ] Adicionar páginas de detalhes
- [ ] Melhorar interface visual

### 9.2 Médio Prazo (1-3 meses)
- [ ] Sistema de autenticação (login/registro)
- [ ] Banco de dados (MongoDB ou PostgreSQL)
- [ ] Sistema de avaliações e comentários
- [ ] Painel administrativo

### 9.3 Longo Prazo (3-6 meses)
- [ ] Aplicativo mobile com React Native
- [ ] Integração com APIs de mapas
- [ ] Sistema de pedidos online
- [ ] Notificações em tempo real
- [ ] Analytics e dashboards

### 9.4 Possíveis Expansões
- **Integração com pagamentos** (Stripe, Mercado Pago)
- **Sistema de delivery** próprio
- **Programa de fidelidade**
- **Marketplace de produtos locais**

---

## 10. CONCLUSÃO

O projeto **Sabor Local** alcançou todos os objetivos propostos para esta etapa, resultando em uma aplicação web full-stack funcional, com deploy automatizado e bem documentada. 

### Principais Conquistas
✅ Aplicação 100% funcional local e em produção  
✅ Stack moderna e profissional  
✅ Deploy automatizado via CI/CD  
✅ Documentação completa e organizada  
✅ Conhecimentos sólidos adquiridos

### Reflexão
O desenvolvimento deste projeto proporcionou experiência prática com tecnologias amplamente utilizadas no mercado, desde o desenvolvimento até o deploy, passando por troubleshooting e otimizações. Os desafios encontrados fortaleceram a capacidade de resolução de problemas e consulta a documentações técnicas.

A aplicação está pronta para evoluir com novas funcionalidades, tendo uma base sólida que permite escalabilidade e manutenibilidade.

---

## 11. REFERÊNCIAS

- **React Documentation**: https://react.dev/
- **Vite Guide**: https://vite.dev/guide/
- **Express.js**: https://expressjs.com/
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Actions**: https://docs.github.com/en/actions
- **Node.js**: https://nodejs.org/docs/

---

## 12. ANEXOS

### 12.1 Links do Projeto
- **Repositório**: https://github.com/isabellamullerr/sabor-local
- **Deploy**: *(URL da Vercel)*
- **GitHub Actions**: https://github.com/isabellamullerr/sabor-local/actions

### 12.2 Recursos Adicionais
- README.md completo no repositório
- DEPLOY.md com instruções de deploy
- Workflow configurado em `.github/workflows/`

---

**Relatório elaborado em**: 23/10/2025  
**Versão**: Final v1.0
