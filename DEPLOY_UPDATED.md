# 🚀 Deploy no Vercel - Sabor Local (Atualizado)

## 📋 Pré-requisitos

✅ Banco de dados MySQL no AlwaysData configurado  
✅ Tabelas criadas (restaurants e categories)  
✅ Dados inseridos no banco  
✅ Código commitado no GitHub  

---

## 🔧 Configuração das Variáveis de Ambiente

### **Backend (.env)**
Já configurado localmente em `backend/.env`:
```env
DB_HOST=mysql-isabellamuller.alwaysdata.net
DB_USER=429448
DB_PASSWORD=isa19nina
DB_NAME=isabellamuller_sabor-local
DB_PORT=3306
PORT=3001
NODE_ENV=production
```

### **Frontend (.env)**
Já configurado localmente em `frontend/.env.local`:
```env
VITE_API_URL=http://localhost:3001
```

---

## 🌐 Passos para Deploy no Vercel

### **1️⃣ Commit e Push para GitHub**

```bash
git add .
git commit -m "feat: adiciona busca, filtros, detalhes e imagens aos restaurantes"
git push origin master
```

### **2️⃣ No painel do Vercel**

1. Acesse: https://vercel.com
2. Faça login com sua conta GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório `sabor-local`
5. Configure conforme abaixo:

#### **Build & Development Settings**

```
Framework Preset: Other
Build Command: npm run build
Output Directory: frontend/dist
Install Command: npm install
Root Directory: ./
```

#### **Environment Variables - Adicione estas variáveis:**

**Para o Backend (Production):**
```
DB_HOST = mysql-isabellamuller.alwaysdata.net
DB_USER = 429448
DB_PASSWORD = isa19nina
DB_NAME = isabellamuller_sabor-local
DB_PORT = 3306
NODE_ENV = production
```

**Para o Frontend (Production):**
```
VITE_API_URL = https://seu-projeto.vercel.app
```

⚠️ **Importante**: Após o primeiro deploy, atualize `VITE_API_URL` com a URL real do seu projeto!

### **3️⃣ Deploy!**

Clique em **"Deploy"** e aguarde o build completar (2-3 minutos).

---

## 📡 Endpoints da API em Produção

Após o deploy, seus endpoints serão:

- `https://seu-projeto.vercel.app/` - Frontend React
- `https://seu-projeto.vercel.app/api/restaurants` - Lista de restaurantes
- `https://seu-projeto.vercel.app/api/restaurants/:id` - Detalhes do restaurante
- `https://seu-projeto.vercel.app/api/health` - Health check

---

## 🔄 Atualizar URL da API após Deploy

**Depois do primeiro deploy:**

1. Copie a URL do seu projeto (ex: `https://sabor-local-xyz.vercel.app`)
2. No Vercel, vá em **Settings** > **Environment Variables**
3. Edite `VITE_API_URL` e coloque a URL completa
4. Faça **Redeploy** do projeto

---

## ✅ Funcionalidades Implementadas

- ✅ **Listagem de restaurantes** com imagens
- ✅ **Busca por nome** de restaurante ou culinária
- ✅ **Filtro por tipo** de culinária
- ✅ **Página de detalhes** de cada restaurante
- ✅ **Navegação** entre páginas
- ✅ **Design responsivo** para mobile
- ✅ **Banco de dados MySQL** (AlwaysData)
- ✅ **API REST completa** (CRUD)

---

## 🐛 Solução de Problemas

### Erro: "Cannot GET /restaurant/1"
- Certifique-se que o `vercel.json` está configurado corretamente para SPA

### Erro: Imagens não carregam
- Verifique se executou os SQLs de atualização de imagens
- Confira se as URLs do Unsplash estão acessíveis

### Erro: API não conecta
- Verifique as variáveis de ambiente no Vercel
- Confirme que o banco AlwaysData está acessível publicamente
- Teste o endpoint `/api/health`

---

## 📝 Próximas Melhorias Sugeridas

1. Sistema de autenticação de usuários
2. Carrinho de compras e pedidos
3. Painel administrativo
4. Avaliações e comentários
5. Upload de imagens próprias
6. Geolocalização e mapa
7. Notificações em tempo real

---

**🎉 Seu projeto está pronto para o mundo!**
