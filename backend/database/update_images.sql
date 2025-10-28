-- SQL para atualizar os restaurantes existentes com imagens
-- Execute este SQL no phpMyAdmin

UPDATE restaurants SET image_url = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400' WHERE name = 'Restaurante Local 1';
UPDATE restaurants SET image_url = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' WHERE name = 'Pizzaria da Esquina';
UPDATE restaurants SET image_url = 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400' WHERE name = 'Sushi House';
UPDATE restaurants SET image_url = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' WHERE name = 'Burger Station';
