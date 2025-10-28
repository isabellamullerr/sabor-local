-- Schema para o banco de dados Sabor Local
-- Execute este SQL no seu banco de dados AlwaysData

-- Tabela de restaurantes
CREATE TABLE IF NOT EXISTS restaurants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cuisine VARCHAR(100) NOT NULL,
  rating DECIMAL(2,1) DEFAULT 0.0,
  description TEXT,
  address VARCHAR(255),
  phone VARCHAR(20),
  image_url VARCHAR(500),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Inserir dados de exemplo
INSERT INTO restaurants (name, cuisine, rating, description, address, phone) VALUES
('Restaurante Local 1', 'Brasileira', 4.5, 'Comida brasileira tradicional com o melhor tempero caseiro', 'Rua das Flores, 123', '(11) 98765-4321'),
('Pizzaria da Esquina', 'Italiana', 4.2, 'As melhores pizzas artesanais da região', 'Av. Principal, 456', '(11) 91234-5678'),
('Sushi House', 'Japonesa', 4.8, 'Sushi fresco e autêntico preparado por chefs especializados', 'Rua do Comércio, 789', '(11) 99876-5432'),
('Burger Station', 'Hamburguer', 4.3, 'Hambúrguers artesanais com ingredientes premium', 'Av. Central, 321', '(11) 97654-3210');

-- Tabela de categorias (para expansão futura)
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir categorias
INSERT INTO categories (name, description) VALUES
('Brasileira', 'Culinária típica brasileira'),
('Italiana', 'Massas, pizzas e pratos italianos'),
('Japonesa', 'Sushi, sashimi e culinária japonesa'),
('Hamburguer', 'Hambúrgueres artesanais e fast food'),
('Mexicana', 'Tacos, burritos e culinária mexicana'),
('Vegetariana', 'Opções vegetarianas e veganas');

-- Índices para melhor performance
CREATE INDEX idx_restaurant_cuisine ON restaurants(cuisine);
CREATE INDEX idx_restaurant_rating ON restaurants(rating);
CREATE INDEX idx_restaurant_active ON restaurants(is_active);
