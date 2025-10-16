# Deploy no Vercel - Sabor Local

## 📋 Checklist para Deploy

### ✅ Arquivos Configurados
- [x] `backend/package.json` com scripts adequados
- [x] `backend/index.js` servidor Express funcionando
- [x] `vercel.json` configuração do Vercel
- [x] `package.json` raiz do projeto

### 🚀 Passos para Deploy

1. **Commit e Push das alterações**:
   ```bash
   git add .
   git commit -m "Configuração para deploy no Vercel"
   git push origin main
   ```

2. **No painel do Vercel**:
   - Conecte seu repositório GitHub
   - O Vercel detectará automaticamente a configuração
   - Use as configurações padrão
   - Deploy!

### 🔧 Configurações do Vercel

**Build Settings**:
- Framework Preset: `Other`
- Build Command: `npm run build`
- Output Directory: `frontend/dist`
- Install Command: `npm install`

**Environment Variables** (se necessário):
- `NODE_ENV=production`

### 📡 Endpoints Disponíveis

Após o deploy, seus endpoints serão:
- `https://seu-projeto.vercel.app/` - Frontend React
- `https://seu-projeto.vercel.app/api/health` - Health check
- `https://seu-projeto.vercel.app/api/restaurants` - Lista de restaurantes

### 🐛 Solução de Problemas

Se der erro no deploy:
1. Verifique se todas as dependências estão no `package.json`
2. Confirme que o build do frontend funciona localmente
3. Verifique os logs de build no Vercel
4. Certifique-se que a estrutura de pastas está correta

### 📝 Notas Importantes

- O backend roda como serverless functions no Vercel
- Cada rota `/api/*` é uma função separada
- O frontend é servido como site estático
- Logs estão disponíveis no painel do Vercel
