# 🚀 GitHub Actions - Deploy Automático para Vercel

Este workflow automatiza o deploy do frontend do projeto **Sabor Local** para a Vercel sempre que há um push na branch `master`.

## 📋 Configuração

### Secrets Necessários
Configure os seguintes secrets no seu repositório GitHub:
- `VERCEL_TOKEN` - Token de acesso da Vercel
- `VERCEL_ORG_ID` - ID da organização/usuário na Vercel  
- `VERCEL_PROJECT_ID` - ID do projeto na Vercel

### Como Obter os Secrets

1. **VERCEL_TOKEN**:
   - Acesse: https://vercel.com/account/tokens
   - Crie um novo token
   - Copie e adicione nos secrets do GitHub

2. **VERCEL_ORG_ID e VERCEL_PROJECT_ID**:
   ```bash
   # No terminal, dentro da pasta frontend
   npx vercel link
   # Isso criará um arquivo .vercel/project.json com os IDs
   ```

## 🔄 Como Funciona

O workflow é executado automaticamente quando:
- Há um push na branch `master`
- As alterações incluem arquivos do frontend

### Etapas do Deploy:
1. **Checkout** do código
2. **Setup** do Node.js 18
3. **Instalação** das dependências (`npm ci`)
4. **Build** do projeto React/Vite
5. **Deploy** automático para produção na Vercel

## 📊 Monitoramento

- ✅ Logs disponíveis na aba "Actions" do GitHub
- 📱 Notificações por email em caso de falha
- 🌐 URL de produção atualizada automaticamente

## 🛠️ Estrutura de Arquivos

```
.github/
└── workflows/
    └── deploy-vercel.yml    # Workflow principal

frontend/
├── vercel.json             # Configuração específica do frontend
└── .vercelignore          # Arquivos ignorados no deploy
```

## 🐛 Solução de Problemas

### Deploy Falha
1. Verifique se os secrets estão configurados
2. Confirme que o build local funciona: `npm run build`
3. Veja os logs no GitHub Actions

### Primero Deploy
- O primeiro deploy pode levar mais tempo
- Certifique-se que o projeto existe na Vercel
- Execute `npx vercel link` localmente primeiro

## 📝 Comandos Úteis

```bash
# Testar build localmente
cd frontend && npm run build

# Configurar projeto na Vercel
cd frontend && npx vercel link

# Deploy manual (se necessário)
cd frontend && npx vercel --prod
```
