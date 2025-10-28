# ⚡ GUIA RÁPIDO - SABOR LOCAL

## 🔗 Links Importantes
- **Deploy**: https://sabor-local.vercel.app *(atualizar com URL real)*
- **GitHub**: https://github.com/isabellamullerr/sabor-local
- **Actions**: https://github.com/isabellamullerr/sabor-local/actions

---

## 🚀 Instalação Rápida

```bash
# 1. Clonar repositório
git clone https://github.com/isabellamullerr/sabor-local.git
cd sabor-local

# 2. Instalar tudo
npm run install-all

# 3. Executar (frontend + backend)
npm run dev
```

**Acessar:**
- Frontend: http://localhost:5173
- Backend: http://localhost:3001
- API Health: http://localhost:3001/api/health
- API Restaurants: http://localhost:3001/api/restaurants

---

## 📁 Estrutura do Projeto

```
sabor-local/
├── backend/           # API Node.js/Express
├── frontend/          # App React/Vite
├── .github/workflows/ # CI/CD automático
├── README.md          # Documentação completa
├── RELATORIO_FINAL.md # Relatório do projeto
└── APRESENTACAO.md    # Guia de apresentação
```

---

## 🛠️ Comandos Úteis

### Raiz do Projeto
```bash
npm run dev         # Executar tudo
npm run build       # Build frontend
npm run install-all # Instalar dependências
```

### Frontend Apenas
```bash
cd frontend
npm run dev     # Desenvolvimento
npm run build   # Build produção
npm run preview # Preview build
```

### Backend Apenas
```bash
cd backend
npm run dev   # Com auto-reload
npm start     # Produção
```

---

## 🌐 Deploy

**Automático:**
- Cada push na branch `master` → deploy automático via GitHub Actions

**Manual:**
```bash
cd frontend
npx vercel --prod
```

---

## 📊 Tecnologias

- **Frontend**: React 19 + Vite 7
- **Backend**: Node.js 20 + Express 5
- **Deploy**: Vercel + GitHub Actions
- **Versionamento**: Git + GitHub

---

## ✅ Checklist Entrega

- [x] Projeto funcional local
- [x] Deploy publicado
- [x] README organizado
- [x] Relatório final completo
- [ ] Apresentação preparada

---

## 🆘 Problemas Comuns

**Erro de versão Node.js:**
```bash
# Usar Node.js 20+
node --version  # Verificar
```

**Porta em uso:**
```bash
# Frontend usa 5173, Backend usa 3001
# Matar processo se necessário
```

**Deploy falha:**
- Verificar GitHub Actions logs
- Confirmar secrets configurados na Vercel
- Testar build local: `npm run build`

---

## 📞 Contato

**Desenvolvedor**: Isabella Muller  
**GitHub**: @isabellamullerr  
**Email**: *(adicionar)*

---

Criado em: Outubro 2025
