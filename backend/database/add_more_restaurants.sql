-- SQL para adicionar mais restaurantes ao banco de dados
-- Execute este SQL no phpMyAdmin

INSERT INTO restaurants (name, cuisine, rating, description, address, phone, image_url) VALUES
('Churrascaria Bom Gosto', 'Brasileira', 4.7, 'Rodízio de carnes nobres com buffet completo', 'Av. Paulista, 1000', '(11) 98888-7777', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400'),
('Cantina da Nonna', 'Italiana', 4.6, 'Massas artesanais e receitas tradicionais italianas', 'Rua Bela Vista, 234', '(11) 97777-6666', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400'),
('Taco Loco', 'Mexicana', 4.4, 'Tacos, burritos e nachos autênticos', 'Rua das Palmeiras, 567', '(11) 96666-5555', 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400'),
('Green Garden', 'Vegetariana', 4.9, 'Opções veganas e vegetarianas saudáveis e deliciosas', 'Av. Ecológica, 890', '(11) 95555-4444', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400'),
('Dragon Wok', 'Chinesa', 4.3, 'Culinária chinesa autêntica com pratos tradicionais', 'Rua Oriental, 123', '(11) 94444-3333', 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400'),
('Le Petit Bistro', 'Francesa', 4.8, 'Gastronomia francesa sofisticada e refinada', 'Alameda Gourmet, 456', '(11) 93333-2222', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400'),
('Fogo & Brasa', 'Churrasco', 4.5, 'Espetinhos e carnes grelhadas no ponto perfeito', 'Rua do Fogo, 789', '(11) 92222-1111', 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400'),
('Sabores do Mar', 'Frutos do Mar', 4.7, 'Peixes frescos e frutos do mar direto do litoral', 'Av. Marítima, 321', '(11) 91111-0000', 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400');
