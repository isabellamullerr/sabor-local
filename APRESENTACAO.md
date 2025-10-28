# 🎤 GUIA DE APRESENTAÇÃO - SABOR LOCAL

**Data da Apresentação**: A partir de 30/10/2025  
**Duração Estimada**: 10-15 minutos  
**Formato**: Demonstração prática + Explicação técnica

---

## 📋 CHECKLIST PRÉ-APRESENTAÇÃO

### Antes do Dia
- [ ] Deploy funcionando na Vercel
- [ ] Testar aplicação em navegador
- [ ] Preparar slides (opcional, mas recomendado)
- [ ] Testar apresentação com cronômetro
- [ ] Preparar backup local caso internet falhe
- [ ] Screenshot das telas principais

### No Dia
- [ ] Abas do navegador organizadas
- [ ] Deploy aberto e testado
- [ ] GitHub repository aberto
- [ ] Terminal pronto (caso precise rodar local)
- [ ] Anotar pontos principais

---

## 🎯 ESTRUTURA DA APRESENTAÇÃO

### 1. INTRODUÇÃO (2 minutos)

**O que dizer:**
```
"Bom dia/Boa tarde! Vou apresentar o Sabor Local, uma aplicação 
web full-stack desenvolvida para conectar consumidores com 
restaurantes e produtores locais.

O projeto utiliza React no frontend, Node.js/Express no backend, 
e está automaticamente deployado na Vercel através de GitHub Actions."
```

**Mostrar:**
- Slide de título ou README do GitHub
- Link do deploy

---

### 2. DEMONSTRAÇÃO DO PROJETO FUNCIONANDO (3-4 minutos)

**No Navegador - Deploy Vercel:**

1. **Acessar o site**
   ```
   "Aqui está a aplicação rodando em produção na Vercel.
   Toda vez que faço um push no GitHub, ela é automaticamente 
   atualizada."
   ```

2. **Mostrar Interface**
   - Navegar pela página
   - Demonstrar responsividade (redimensionar janela)
   - Mostrar tema claro/escuro (se aplicável)

3. **Interação do Usuário**
   - Demonstrar contador funcional
   - Explicar que é um placeholder para futuras funcionalidades

4. **Backend API** (Abrir nova aba)
   ```
   URL: https://seu-deploy.vercel.app/api/health
   ```
   - Mostrar resposta JSON do health check
   - Acessar `/api/restaurants` e mostrar dados

   **O que dizer:**
   ```
   "A aplicação tem um backend funcional. Aqui vemos a API 
   retornando dados de restaurantes em formato JSON, que 
   podem ser consumidos pelo frontend."
   ```

---

### 3. TECNOLOGIAS UTILIZADAS (2-3 minutos)

**Apresentar o Stack:**

**Frontend:**
```
"Para o frontend, utilizei React 19 com Vite como build tool.

POR QUÊ REACT?
- Biblioteca moderna e amplamente utilizada no mercado
- Componentes reutilizáveis
- Grande comunidade e documentação

POR QUÊ VITE?
- Build extremamente rápido
- Hot Module Replacement instantâneo
- Melhor experiência de desenvolvimento"
```

**Backend:**
```
"O backend foi desenvolvido com Node.js e Express.

POR QUÊ NODE.JS?
- Permite usar JavaScript tanto no front quanto no back
- Assíncrono e performático
- Ecossistema rico de bibliotecas

POR QUÊ EXPRESS?
- Framework minimalista e flexível
- Fácil criação de APIs REST
- Amplamente adotado no mercado"
```

**Deploy e DevOps:**
```
"Para deploy, configurei integração contínua com GitHub Actions.

COMO FUNCIONA:
1. Faço push do código no GitHub
2. GitHub Actions detecta automaticamente
3. Roda build e testes
4. Deploy automático na Vercel

Isso garante que a aplicação está sempre atualizada e funcional."
```

---

### 4. ARQUITETURA E FLUXO (2 minutos)

**Mostrar Diagrama (pode ser desenhado ou em slide):**

```
GitHub → GitHub Actions → Vercel → Frontend (React) ↔ Backend (Express)
```

**Explicar:**
```
"A arquitetura é dividida em camadas:

FRONTEND (React):
- Interface visual que o usuário vê
- Faz requisições HTTP para o backend

BACKEND (Express):
- API REST com endpoints
- Processa requisições e retorna dados JSON

DEPLOY (Vercel + GitHub Actions):
- Automação completa
- Zero downtime em atualizações"
```

---

### 5. CÓDIGO E REPOSITÓRIO (2 minutos)

**Abrir GitHub Repository:**

**Mostrar:**

1. **Estrutura de Pastas**
   ```
   "O projeto está organizado em:
   - /frontend - Aplicação React
   - /backend - API Node.js
   - /.github/workflows - Automação CI/CD
   - Documentação completa no README"
   ```

2. **README.md**
   ```
   "Toda documentação está no README:
   - Como instalar
   - Como executar
   - Links importantes
   - Estrutura do projeto"
   ```

3. **GitHub Actions (Aba Actions)**
   ```
   "Aqui vemos o histórico de deploys automáticos.
   Cada commit na branch master dispara um novo deploy."
   ```

---

### 6. DEMONSTRAÇÃO LOCAL (Opcional - 1-2 minutos)

**Se tiver tempo e internet estável:**

```bash
# Mostrar no terminal
npm run dev
```

**O que dizer:**
```
"Também funciona perfeitamente em ambiente local.
Com um único comando, ambos servidores sobem:
- Frontend na porta 5173
- Backend na porta 3001"
```

---

### 7. CONTRIBUIÇÕES E APRENDIZADOS (2 minutos)

**Se for projeto individual:**
```
"Este projeto foi desenvolvido individualmente, onde fui 
responsável por:

✓ Estruturação completa do projeto
✓ Desenvolvimento frontend com React
✓ Desenvolvimento backend com Express
✓ Configuração de deploy e CI/CD
✓ Documentação e testes

PRINCIPAIS APRENDIZADOS:
- Desenvolvimento full-stack
- DevOps e automação
- Resolução de problemas técnicos
- Trabalho com tecnologias modernas do mercado"
```

**Se for projeto em grupo:**
```
"Divisão de tarefas:
- [Nome]: Frontend e interface
- [Nome]: Backend e API
- [Nome]: Deploy e documentação

Todos contribuíram para testes e revisões."
```

---

### 8. PRÓXIMOS PASSOS (1 minuto)

```
"O projeto tem potencial para evoluir:

CURTO PRAZO:
- Sistema de cadastro de restaurantes
- Busca e filtros
- Páginas de detalhes

MÉDIO/LONGO PRAZO:
- Autenticação de usuários
- Banco de dados
- Sistema de pedidos
- App mobile

A base está sólida e permite essas expansões."
```

---

### 9. CONCLUSÃO (30 segundos)

```
"Em resumo, o Sabor Local é uma aplicação full-stack funcional,
com deploy automático, bem documentada e pronta para evoluir.

Obrigado(a)! Estou disponível para perguntas."
```

---

## 🎬 DICAS PARA UMA BOA APRESENTAÇÃO

### Preparação
✅ **Ensaie**: Pratique pelo menos 2-3 vezes  
✅ **Cronometr**: Mantenha dentro do tempo  
✅ **Backup**: Tenha screenshots caso algo falhe  
✅ **Teste**: Verifique deploy antes da apresentação

### Durante
✅ **Fale claramente**: Voz audível e pausada  
✅ **Olhe para plateia**: Não apenas para tela  
✅ **Demonstre confiança**: Você conhece seu projeto  
✅ **Interaja**: Mostre cliques e funcionamento

### Técnicas
✅ **Mouse/cursor visível**: Facilita acompanhar  
✅ **Zoom se necessário**: Textos legíveis  
✅ **Feche outras abas**: Evite distrações  
✅ **Modo apresentação**: Desative notificações

---

## ❓ POSSÍVEIS PERGUNTAS E RESPOSTAS

### "Por que escolheu essas tecnologias?"
```
"React e Node.js são tecnologias modernas e muito utilizadas 
no mercado. Além disso, permitem usar JavaScript em todo o 
projeto, facilitando o desenvolvimento e manutenção."
```

### "Como funciona o deploy automático?"
```
"Configurei um workflow no GitHub Actions que monitora a branch
master. Quando há um push, automaticamente instala dependências,
faz build e deploy na Vercel. Todo processo leva cerca de 2-3 
minutos."
```

### "O projeto está pronto para produção?"
```
"A infraestrutura está pronta e funcional. Para produção real,
seria necessário adicionar banco de dados, autenticação robusta,
e funcionalidades específicas do negócio. Mas a base está sólida."
```

### "Quais foram os maiores desafios?"
```
"O principal desafio foi configurar o CI/CD e resolver problemas
de compatibilidade de versões. Aprendi muito sobre troubleshooting
e leitura de logs de erro."
```

### "Quanto tempo levou para desenvolver?"
```
"O desenvolvimento ocorreu durante o bimestre, com aproximadamente
[X] horas dedicadas. A configuração de deploy e troubleshooting
tomaram tempo considerável, mas agregaram muito aprendizado."
```

---

## 📱 CHECKLIST FINAL ANTES DE APRESENTAR

**5 minutos antes:**
- [ ] Deploy funcionando - CONFIRMAR!
- [ ] Abrir URL do deploy
- [ ] Abrir GitHub repository
- [ ] Fechar abas desnecessárias
- [ ] Desativar notificações
- [ ] Zoom adequado (se necessário)
- [ ] Respirar fundo e relaxar

**Durante apresentação:**
- [ ] Falar pausadamente
- [ ] Mostrar funcionamento real
- [ ] Explicar tecnologias
- [ ] Demonstrar GitHub
- [ ] Mencionar aprendizados
- [ ] Agradecer e abrir para perguntas

---

## 🎯 PONTOS-CHAVE PARA DESTACAR

1. **Projeto funcional** em produção
2. **Deploy automático** via CI/CD
3. **Tecnologias modernas** do mercado
4. **Documentação completa**
5. **Aprendizados práticos**
6. **Potencial de evolução**

---

**Boa sorte na apresentação! 🚀**

*Você construiu algo real e funcional. Mostre com orgulho!*
