# 🗄️ CONFIGURAÇÃO DO BANCO ALWAYSDATA NA VERCEL

## 📋 INFORMAÇÕES NECESSÁRIAS

Antes de começar, você precisa ter em mãos as seguintes informações do AlwaysData:

### Dados de Conexão MySQL
```
Host: mysql-seuusuario.alwaysdata.net
Usuário: seuusuario (ou outro usuário MySQL)
Senha: ****************
Banco de Dados: seuusuario_saborlocal (ou outro nome)
Porta: 3306
```

---

## 🚀 PASSO 1: CONFIGURAR VARIÁVEIS DE AMBIENTE NA VERCEL

### 1.1 Acessar o Painel da Vercel
1. Acesse: https://vercel.com/dashboard
2. Clique no seu projeto **sabor-local**
3. Clique em **Settings** (Configurações)
4. No menu lateral, clique em **Environment Variables**

### 1.2 Adicionar Variáveis (UMA POR UMA)

Clique em "Add New" e adicione cada variável:

#### Variável 1: DB_HOST
```
Name: DB_HOST
Value: mysql-seuusuario.alwaysdata.net
Environment: Production, Preview, Development (marcar todas)
```

#### Variável 2: DB_USER
```
Name: DB_USER
Value: seu_usuario_alwaysdata
Environment: Production, Preview, Development (marcar todas)
```

#### Variável 3: DB_PASSWORD
```
Name: DB_PASSWORD
Value: sua_senha_do_banco
Environment: Production, Preview, Development (marcar todas)
```

#### Variável 4: DB_NAME
```
Name: DB_NAME
Value: seuusuario_saborlocal
Environment: Production, Preview, Development (marcar todas)
```

#### Variável 5: DB_PORT
```
Name: DB_PORT
Value: 3306
Environment: Production, Preview, Development (marcar todas)
```

#### Variável 6: NODE_ENV
```
Name: NODE_ENV
Value: production
Environment: Production (apenas esta)
```

### 1.3 Salvar e Verificar
Após adicionar todas as variáveis, você deve ter **6 variáveis** configuradas.

---

## 🔄 PASSO 2: FAZER REDEPLOY

Depois de configurar as variáveis:

### Opção A: Redeploy Automático (RECOMENDADO)
1. Vá para aba **Deployments**
2. Clique nos três pontinhos (...) do último deploy
3. Clique em **Redeploy**
4. Aguarde o processo finalizar (2-3 minutos)

### Opção B: Novo Commit
Ou simplesmente faça um novo commit no GitHub:
```bash
git add .
git commit -m "🔧 Configuração AlwaysData"
git push origin master
```

O GitHub Actions vai disparar um novo deploy automaticamente.

---

## ✅ PASSO 3: TESTAR A CONEXÃO

Depois do deploy, teste se está funcionando:

### Teste 1: Health Check
```
https://sabor-local-ecru.vercel.app/api/health
```
**Esperado**: `{"status":"OK","service":"Sabor Local Backend"}`

### Teste 2: Restaurantes
```
https://sabor-local-ecru.vercel.app/api/restaurants
```
**Esperado**: Lista de restaurantes do banco de dados

---

## 🐛 TROUBLESHOOTING

### Se der erro "Failed to fetch"

#### 1. Verificar Logs da Vercel
1. No painel da Vercel, vá em **Deployments**
2. Clique no último deploy
3. Clique em **View Function Logs**
4. Procure por mensagens de erro do MySQL

#### 2. Erros Comuns e Soluções

**Erro: "Access denied for user"**
- ✅ Solução: Verificar usuário e senha nas variáveis de ambiente
- ✅ Confirmar no AlwaysData que o usuário tem permissões

**Erro: "Unknown database"**
- ✅ Solução: Verificar o nome do banco de dados
- ✅ Confirmar no AlwaysData que o banco existe

**Erro: "Can't connect to MySQL server"**
- ✅ Solução: Verificar o host (mysql-usuario.alwaysdata.net)
- ✅ Confirmar que o banco AlwaysData está ativo

**Erro: "Too many connections"**
- ✅ Solução: Reduzir connectionLimit no database.js para 5

#### 3. Testar Conexão Local

Para testar se as credenciais estão corretas:

```bash
# No backend, criar arquivo .env com as credenciais
cd backend
# Editar .env com suas credenciais reais

# Testar localmente
npm start
```

Se funcionar localmente, as credenciais estão corretas!

---

## 📝 CHECKLIST FINAL

Antes de considerar concluído:

- [ ] Todas as 6 variáveis configuradas na Vercel
- [ ] Redeploy feito após adicionar variáveis
- [ ] Teste do endpoint /api/health funcionando
- [ ] Teste do endpoint /api/restaurants retornando dados
- [ ] Site principal carregando sem "Failed to fetch"

---

## 🆘 SE AINDA NÃO FUNCIONAR

### Me forneça essas informações:

1. **Host do AlwaysData**: mysql-?????.alwaysdata.net
2. **Nome do banco**: ??????_saborlocal
3. **Usuário**: ???????
4. **Screenshot dos logs de erro** da Vercel

Com essas informações posso te ajudar mais especificamente!

---

## 🎯 RESUMO RÁPIDO

1. ✅ Pegar credenciais do AlwaysData
2. ✅ Adicionar 6 variáveis de ambiente na Vercel
3. ✅ Fazer redeploy
4. ✅ Testar endpoints
5. ✅ Sucesso! 🎉

---

**Observação**: Se você NÃO tiver as credenciais do AlwaysData agora, posso configurar o sistema para funcionar com dados mock temporariamente até você configurar o banco.
