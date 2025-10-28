# 🚀 GUIA COMPLETO DE DEPLOY NO VERCEL

## 📋 Pré-requisitos

✅ Código já está no GitHub (https://github.com/isabellamullerr/sabor-local)
✅ Banco de dados MySQL configurado no AlwaysData
✅ Aplicação funcionando localmente

---

## 🔧 PASSO 1: Executar SQL no Banco de Dados

**IMPORTANTE:** Antes de fazer o deploy, adicione mais restaurantes ao banco!

1. Acesse: https://admin.alwaysdata.com/
2. Faça login
3. Vá em **Databases** → **MySQL** → **phpMyAdmin**
4. Selecione o banco: `isabellamuller_sabor-local`
5. Clique na aba **SQL**
6. Copie TODO o conteúdo do arquivo: `backend/database/EXECUTE_THIS.sql`
7. Cole no campo SQL
8. Clique em **"Go"** ou **"Executar"**
9. Você deve ver mensagens de sucesso ✅

---

## 🌐 PASSO 2: Deploy no Vercel

### 2.1 - Acesse o Vercel

1. Vá para: https://vercel.com/
2. Clique em **"Sign Up"** ou **"Log In"**
3. Escolha: **"Continue with GitHub"**
4. Autorize o Vercel a acessar sua conta GitHub

### 2.2 - Importar o Projeto

1. No dashboard do Vercel, clique em **"Add New..."** → **"Project"**
2. Procure por: **sabor-local**
3. Clique em **"Import"** ao lado do repositório

### 2.3 - Configurar o Projeto

**Configure Name:**
- Nome do projeto: `sabor-local` (ou o que preferir)

**Framework Preset:**
- Deixe como: **Other** (o Vercel detectará automaticamente)

**Root Directory:**
- Deixe como: `./` (raiz do projeto)

**Build and Output Settings:**
- Build Command: `npm run build --prefix frontend`
- Output Directory: `frontend/dist`
- Install Command: `npm install`

### 2.4 - Adicionar Variáveis de Ambiente

⚠️ **MUITO IMPORTANTE!**

Clique em **"Environment Variables"** e adicione:

**Para Produção:**

```
DB_HOST=mysql-isabellamuller.alwaysdata.net
DB_USER=429448
DB_PASSWORD=isa19nina
DB_NAME=isabellamuller_sabor-local
DB_PORT=3306
NODE_ENV=production
VITE_API_URL=https://seu-projeto.vercel.app
```

**ATENÇÃO:** 
- Substitua `seu-projeto` pelo nome que você escolheu no Vercel
- Essas variáveis são SENSÍVEIS - mantenha em segredo!

### 2.5 - Fazer o Deploy

1. Clique em **"Deploy"**
2. Aguarde o build (pode levar 2-5 minutos)
3. Se tudo der certo, você verá: 🎉 **"Congratulations!"**

---

## 🔍 PASSO 3: Testar o Deploy

### 3.1 - Verificar o Site

Após o deploy, você receberá uma URL como:
```
https://sabor-local.vercel.app
```

ou
```
https://sabor-local-isabellamullerr.vercel.app
```

### 3.2 - Testar Funcionalidades

Acesse a URL e verifique:

✅ O site carrega corretamente
✅ As cores laranja/branco aparecem
✅ O mapa de localização funciona
✅ Os restaurantes aparecem (os 12 que você adicionou)
✅ A busca funciona
✅ Os filtros funcionam
✅ Clicar em "Ver detalhes" funciona
✅ A navegação entre páginas funciona

### 3.3 - Testar a API

Acesse diretamente a API:
```
https://seu-projeto.vercel.app/api/restaurants
```

Deve retornar um JSON com todos os restaurantes.

---

## 🐛 SOLUÇÃO DE PROBLEMAS

### Problema: "Build Failed"

**Solução:**
1. Vá em **"Deployments"** no Vercel
2. Clique no deploy que falhou
3. Veja os logs de erro
4. Geralmente é problema de:
   - Variáveis de ambiente faltando
   - Erro no build do frontend

### Problema: "API não funciona"

**Solução:**
1. Verifique se TODAS as variáveis de ambiente foram adicionadas
2. Confirme que o banco de dados está acessível
3. Teste a conexão do banco localmente primeiro

### Problema: "Imagens não aparecem"

**Solução:**
1. Certifique-se de que executou o SQL do `EXECUTE_THIS.sql`
2. Verifique se as URLs das imagens estão corretas no banco

### Problema: "Página em branco"

**Solução:**
1. Abra o Console do navegador (F12)
2. Veja os erros
3. Geralmente é:
   - CORS (já configurado no backend)
   - URL da API incorreta

---

## ⚙️ PASSO 4: Configurações Adicionais (Opcional)

### 4.1 - Domínio Personalizado

1. No Vercel, vá em **"Settings"** → **"Domains"**
2. Adicione seu domínio personalizado
3. Configure o DNS conforme instruções do Vercel

### 4.2 - Analytics

1. Ative o **Vercel Analytics** em Settings
2. Veja estatísticas de acesso em tempo real

### 4.3 - Proteção de Produção

**IMPORTANTE:** Remova o arquivo `.env` do backend antes do deploy!

Ele já está no `.gitignore`, mas certifique-se de que não foi commitado com suas senhas.

---

## 📊 CHECKLIST FINAL

Antes de considerar o deploy completo:

- [ ] SQL executado no AlwaysData (12 restaurantes)
- [ ] Projeto deployado no Vercel
- [ ] Todas variáveis de ambiente configuradas
- [ ] Site carrega corretamente
- [ ] Mapa de localização funciona
- [ ] Lista de restaurantes aparece
- [ ] Busca e filtros funcionam
- [ ] Página de detalhes funciona
- [ ] API responde corretamente
- [ ] Design laranja/branco aparece
- [ ] Site é responsivo (teste no celular)

---

## 🎉 RESULTADO FINAL

Você terá um site COMPLETO e PROFISSIONAL:

🌐 **URL Pública:** https://seu-projeto.vercel.app
📱 **Totalmente Responsivo**
🎨 **Design Moderno (Laranja/Branco)**
🗺️ **Geolocalização em Tempo Real**
🔍 **Busca e Filtros**
🍽️ **12 Restaurantes com Imagens**
⚡ **Deploy Automático** (cada push atualiza)

---

## 💡 DICAS EXTRAS

1. **Atualizações Automáticas:**
   - Cada `git push` fará um novo deploy automático!

2. **Preview Deployments:**
   - Cada branch/PR cria um preview único
   - Teste antes de ir para produção

3. **Logs em Tempo Real:**
   - Veja logs da API no dashboard do Vercel
   - Útil para debug

4. **Performance:**
   - O Vercel otimiza automaticamente
   - CDN global incluso
   - SSL/HTTPS automático

---

## 📞 PRECISA DE AJUDA?

Se encontrar algum problema:

1. Verifique os logs no Vercel Dashboard
2. Teste localmente primeiro (`npm run dev`)
3. Confirme que o banco de dados está acessível
4. Verifique se todas as variáveis de ambiente estão corretas

---

## 🚀 PRONTO PARA O DEPLOY?

Siga os passos acima e em alguns minutos seu site estará NO AR! 🎉

**Boa sorte!** 🍀
