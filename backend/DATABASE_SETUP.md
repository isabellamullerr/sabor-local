# 🗄️ Configuração do Banco de Dados - AlwaysData

## Passo a Passo para Configurar

### 1️⃣ **Acesse seu painel AlwaysData**
- Faça login em: https://admin.alwaysdata.com/

### 2️⃣ **Crie o banco de dados MySQL**
- No painel, vá em **Databases** > **MySQL**
- Clique em **Add a database**
- Anote as informações:
  - **Host**: `mysql-seu-usuario.alwaysdata.net`
  - **User**: seu nome de usuário
  - **Password**: sua senha
  - **Database Name**: nome do banco criado

### 3️⃣ **Configure o arquivo `.env`**
Edite o arquivo `backend/.env` com suas credenciais:

```env
DB_HOST=mysql-seu-usuario.alwaysdata.net
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_usuario_sabor_local
DB_PORT=3306
```

### 4️⃣ **Execute o schema SQL**
Opção 1 - Via phpMyAdmin do AlwaysData:
- Acesse o phpMyAdmin no painel
- Selecione seu banco de dados
- Vá na aba **SQL**
- Cole todo o conteúdo do arquivo `backend/database/schema.sql`
- Clique em **Execute**

Opção 2 - Via linha de comando (se tiver acesso SSH):
```bash
mysql -h mysql-seu-usuario.alwaysdata.net -u seu_usuario -p seu_banco < backend/database/schema.sql
```

### 5️⃣ **Reinicie o servidor**
```bash
# Pare o servidor atual (Ctrl+C)
# Inicie novamente
cd backend
node index.js
```

### 6️⃣ **Verifique a conexão**
Ao iniciar o servidor, você deve ver:
```
✅ Conexão com MySQL estabelecida com sucesso!
🚀 Servidor rodando na porta 3001
```

Se aparecer erro, verifique:
- ❌ Credenciais no `.env`
- ❌ Banco de dados criado no AlwaysData
- ❌ Tabelas criadas (executou o schema.sql?)

## 📊 Estrutura das Tabelas

### Tabela `restaurants`
- `id` - ID único (auto incremento)
- `name` - Nome do restaurante
- `cuisine` - Tipo de culinária
- `rating` - Avaliação (0.0 a 5.0)
- `description` - Descrição
- `address` - Endereço
- `phone` - Telefone
- `image_url` - URL da imagem
- `is_active` - Ativo/Inativo
- `created_at` - Data de criação
- `updated_at` - Data de atualização

### Tabela `categories`
- `id` - ID único
- `name` - Nome da categoria
- `description` - Descrição
- `created_at` - Data de criação

## 🔌 Endpoints da API

### GET `/api/restaurants`
Retorna todos os restaurantes ativos

### GET `/api/restaurants/:id`
Retorna um restaurante específico

### POST `/api/restaurants`
Cria um novo restaurante

**Body:**
```json
{
  "name": "Nome do Restaurante",
  "cuisine": "Tipo de Culinária",
  "rating": 4.5,
  "description": "Descrição",
  "address": "Endereço",
  "phone": "Telefone",
  "image_url": "URL da imagem"
}
```

### PUT `/api/restaurants/:id`
Atualiza um restaurante existente

### DELETE `/api/restaurants/:id`
Remove um restaurante (soft delete)

## 🚨 Problemas Comuns

### Erro: "Access denied for user"
- Verifique usuário e senha no `.env`

### Erro: "Unknown database"
- Certifique-se que o banco foi criado no AlwaysData

### Erro: "Table doesn't exist"
- Execute o arquivo `schema.sql` no banco de dados

### Servidor inicia mas não conecta ao banco
- Verifique se o host está correto
- Confirme que a porta é 3306
- Teste credenciais direto no phpMyAdmin

## ✅ Dados de Teste

O arquivo `schema.sql` já insere 4 restaurantes de exemplo:
- Restaurante Local 1 (Brasileira)
- Pizzaria da Esquina (Italiana)
- Sushi House (Japonesa)
- Burger Station (Hamburguer)

Você pode adicionar mais usando a rota POST ou direto no banco!
