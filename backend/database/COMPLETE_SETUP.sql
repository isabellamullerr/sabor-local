-- ============================================
-- SCRIPT COMPLETO PARA SABOR LOCAL
-- Execute este script no phpMyAdmin do AlwaysData
-- ============================================

-- Apagar tabela antiga se existir
DROP TABLE IF EXISTS restaurants;

-- Criar tabela restaurants
CREATE TABLE restaurants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  address VARCHAR(255),
  phone VARCHAR(50),
  rating DECIMAL(2,1) DEFAULT 0,
  image_url VARCHAR(500),
  cuisine_type VARCHAR(100),
  price_range VARCHAR(20),
  opening_hours VARCHAR(200),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Inserir restaurantes
INSERT INTO restaurants (name, description, address, phone, rating, image_url, cuisine_type, price_range, opening_hours, latitude, longitude) VALUES
('Pizzaria Bella Napoli', 'Autêntica pizza napolitana com massa fermentada por 48 horas e ingredientes importados da Itália', 'Rua Augusta, 1234 - Consolação, São Paulo - SP', '(11) 3456-7890', 4.8, 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800', 'Italiana', '$$', 'Seg-Dom: 18h-23h', -23.5505, -46.6333),

('Sushi Master', 'Restaurante japonês premium com chef especializado em culinária tradicional e contemporânea', 'Av. Paulista, 2000 - Bela Vista, São Paulo - SP', '(11) 2345-6789', 4.9, 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800', 'Japonesa', '$$$', 'Ter-Dom: 12h-15h, 19h-23h', -23.5613, -46.6563),

('Churrascaria Gaúcha', 'Rodízio de carnes nobres com buffet completo de saladas e pratos quentes', 'Rua da Consolação, 3456 - Consolação, São Paulo - SP', '(11) 3234-5678', 4.7, 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800', 'Brasileira', '$$$', 'Seg-Dom: 11h30-15h, 18h30-23h', -23.5489, -46.6388),

('Cantina Italiana Nonna Rosa', 'Comida caseira italiana com receitas tradicionais da nonna há mais de 30 anos', 'Rua Bela Cintra, 789 - Jardins, São Paulo - SP', '(11) 3123-4567', 4.6, 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800', 'Italiana', '$$', 'Ter-Sáb: 12h-15h, 19h-22h30', -23.5629, -46.6544),

('Tacos & Tequila', 'Autêntica comida mexicana com mais de 50 tipos de tequila premium', 'Rua Oscar Freire, 456 - Jardins, São Paulo - SP', '(11) 3012-3456', 4.5, 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800', 'Mexicana', '$$', 'Seg-Qui: 18h-00h, Sex-Sáb: 18h-02h', -23.5613, -46.6702),

('Burguer House', 'Hamburgueria artesanal com carne angus e pão feito na casa diariamente', 'Rua Haddock Lobo, 234 - Cerqueira César, São Paulo - SP', '(11) 2901-2345', 4.4, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800', 'Hamburgueria', '$', 'Seg-Dom: 18h-23h', -23.5590, -46.6598),

('Bistrô Francês', 'Cozinha francesa refinada com vinhos selecionados e ambiente romântico', 'Rua Amauri, 567 - Itaim Bibi, São Paulo - SP', '(11) 3078-9012', 4.9, 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800', 'Francesa', '$$$$', 'Ter-Sáb: 19h-23h', -23.5844, -46.6760),

('Restaurante Vegano Verde Vida', 'Culinária vegana criativa e saudável com ingredientes orgânicos', 'Rua dos Pinheiros, 890 - Pinheiros, São Paulo - SP', '(11) 3456-7891', 4.7, 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800', 'Vegana', '$$', 'Seg-Sáb: 11h30-15h, 18h30-22h', -23.5617, -46.6849),

('Feijoada da Vila', 'Feijoada completa todos os dias com música ao vivo aos sábados', 'Rua Mourato Coelho, 123 - Vila Madalena, São Paulo - SP', '(11) 3234-5679', 4.6, 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=800', 'Brasileira', '$$', 'Qua-Dom: 12h-16h', -23.5503, -46.6892),

('Padaria Artesanal Pão Nosso', 'Padaria com fermentação natural e café especial torrado na casa', 'Av. Brigadeiro Faria Lima, 2345 - Jardim Europa, São Paulo - SP', '(11) 3123-4568', 4.8, 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800', 'Padaria', '$', 'Seg-Sex: 7h-20h, Sáb-Dom: 8h-18h', -23.5784, -46.6824),

('Pizzaria Margherita', 'Pizza artesanal no forno à lenha com massa madre e molho de tomate San Marzano', 'Rua Aspicuelta, 456 - Vila Madalena, São Paulo - SP', '(11) 2345-6780', 4.7, 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800', 'Italiana', '$$', 'Ter-Dom: 18h-23h30', -23.5475, -46.6935),

('Temakeria Sakura', 'Temakis e sushis frescos com rodízio executivo no almoço', 'Rua Girassol, 789 - Vila Madalena, São Paulo - SP', '(11) 3456-7892', 4.5, 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800', 'Japonesa', '$$', 'Seg-Sex: 12h-15h, 18h30-23h, Sáb-Dom: 12h-23h', -23.5501, -46.6901),

('Empório Árabe', 'Culinária libanesa autêntica com esfihas, quibes e pratos árabes tradicionais', 'Rua Teodoro Sampaio, 1234 - Pinheiros, São Paulo - SP', '(11) 3234-5680', 4.6, 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800', 'Árabe', '$$', 'Seg-Dom: 11h30-23h', -23.5651, -46.6813),

('Café Colonial Sabor da Roça', 'Café colonial completo com mais de 50 itens no buffet', 'Rua Harmonia, 234 - Vila Madalena, São Paulo - SP', '(11) 3123-4569', 4.8, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800', 'Brasileira', '$$', 'Sáb-Dom: 9h-17h', -23.5493, -46.6881),

('Macarronada Italiana', 'Massas frescas feitas diariamente com molhos artesanais da famiglia', 'Rua Fradique Coutinho, 567 - Vila Madalena, São Paulo - SP', '(11) 2901-2346', 4.7, 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800', 'Italiana', '$$', 'Ter-Dom: 12h-15h, 19h-23h', -23.5522, -46.6872),

('Açaí Premium', 'Açaí premium com mais de 40 opções de acompanhamentos e frutas orgânicas', 'Av. Rebouças, 890 - Pinheiros, São Paulo - SP', '(11) 3078-9013', 4.4, 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800', 'Sorveteria', '$', 'Seg-Dom: 10h-22h', -23.5634, -46.6799),

('Restaurante Chinês Dragon', 'Culinária chinesa autêntica com dim sum e pratos cantoneses', 'Rua da Liberdade, 123 - Liberdade, São Paulo - SP', '(11) 3456-7893', 4.6, 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800', 'Chinesa', '$$', 'Seg-Dom: 11h30-15h, 18h-23h', -23.5587, -46.6354),

('Doceria Santa Clara', 'Doces artesanais, bolos caseiros e tortas francesas feitos diariamente', 'Rua Estados Unidos, 456 - Jardim América, São Paulo - SP', '(11) 3234-5681', 4.9, 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800', 'Doceria', '$$', 'Ter-Sáb: 10h-20h, Dom: 10h-18h', -23.5669, -46.6753),

('Espetinho do Zé', 'Espetinhos variados na brasa com molhos especiais da casa', 'Rua Purpurina, 789 - Vila Madalena, São Paulo - SP', '(11) 3123-4570', 4.5, 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800', 'Brasileira', '$', 'Qua-Dom: 18h-00h', -23.5489, -46.6908),

('Thai Food Express', 'Comida tailandesa autêntica com curries aromáticos e pad thai tradicional', 'Av. Pedroso de Morais, 234 - Pinheiros, São Paulo - SP', '(11) 2901-2347', 4.7, 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800', 'Tailandesa', '$$', 'Seg-Sáb: 12h-15h, 19h-23h', -23.5631, -46.6886);

-- Verificar se os dados foram inseridos
SELECT COUNT(*) as total_restaurantes FROM restaurants;
SELECT * FROM restaurants LIMIT 5;
