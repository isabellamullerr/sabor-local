# ✅ DEPLOY RÁPIDO - CHECKLIST

## 🎯 PASSO A PASSO SIMPLIFICADO

### 1️⃣ ANTES DO DEPLOY - Adicione Restaurantes ao Banco

```
1. Abra: https://admin.alwaysdata.com/
2. Login → Databases → MySQL → phpMyAdmin
3. Selecione banco: isabellamuller_sabor-local
4. Aba SQL
5. Cole o código de: backend/database/EXECUTE_THIS.sql
6. Executar
```

### 2️⃣ FAZER O DEPLOY

```
1. Acesse: https://vercel.com/
2. Login com GitHub
3. "Add New Project"
4. Importar: sabor-local
5. Configurar:
   - Build Command: npm run build --prefix frontend
   - Output Directory: frontend/dist
```

### 3️⃣ VARIÁVEIS DE AMBIENTE

Adicione estas variáveis no Vercel:

```env
DB_HOST=mysql-isabellamuller.alwaysdata.net
DB_USER=429448
DB_PASSWORD=isa19nina
DB_NAME=isabellamuller_sabor-local
DB_PORT=3306
NODE_ENV=production
```

### 4️⃣ DEPLOY

```
Clique em "Deploy" e aguarde!
```

### 5️⃣ TESTAR

```
Acesse a URL fornecida pelo Vercel
Teste:
- Site carrega ✅
- Mapa funciona ✅
- Restaurantes aparecem ✅
- Busca funciona ✅
- Detalhes funcionam ✅
```

---

## 🚨 SE DER ERRO

### Build Failed:
- Verifique os logs no Vercel
- Confirme variáveis de ambiente

### API não responde:
- Teste banco de dados
- Verifique credenciais

### Página branca:
- Abra F12 (Console)
- Veja erros JavaScript

---

## 📱 DEPOIS DO DEPLOY

Seu site estará em:
```
https://seu-projeto.vercel.app
```

Cada `git push` fará um novo deploy automaticamente! 🎉

---

**PRONTO! É SÓ ISSO! 🚀**
