import asyncHandler from "../utils/async_handler.js";
import { ApiResponse } from "../utils/api_response.js";

const getAllPizzas = asyncHandler(async (req,res) => {
    console.log("Helllll");
    res.status(200).json(new ApiResponse(201,{pizzas: pizzasData} ,"Success"))
})

export { getAllPizzas }

const pizzasData = [
    {
      "title": "Margherita",
      "price": 825.99,
      "calories": 800,
      "diameter": 12,
      "description": "Classic Italian pizza topped with fresh mozzarella, tomatoes, and basil.",
      "imageUrl": "https://example.com/margherita.jpg",
      "category": "Italian"
    },
    {
      "title": "Pepperoni",
      "price": 899.25,
      "calories": 900,
      "diameter": 14,
      "description": "Traditional Italian pizza topped with slices of spicy pepperoni.",
      "imageUrl": "https://example.com/pepperoni.jpg",
      "category": "Italian"
    },
    {
      "title": "Quattro Stagioni",
      "price": 974.25,
      "calories": 850,
      "diameter": 12,
      "description": "Delicious Italian pizza divided into four sections, each representing a different season with various toppings.",
      "imageUrl": "https://example.com/quattro-stagioni.jpg",
      "category": "Italian"
    },
    {
      "title": "Capricciosa",
      "price": 1011.75,
      "calories": 920,
      "diameter": 12,
      "description": "Traditional Italian pizza topped with mushrooms, artichokes, ham, and olives.",
      "imageUrl": "https://example.com/capricciosa.jpg",
      "category": "Italian"
    },
    {
      "title": "Prosciutto e Funghi",
      "price": 974.25,
      "calories": 870,
      "diameter": 12,
      "description": "Italian pizza topped with prosciutto, mushrooms, and a sprinkle of oregano.",
      "imageUrl": "https://example.com/prosciutto-e-funghi.jpg",
      "category": "Italian"
    },
    {
      "title": "Quattro Formaggi",
      "price": 1049.25,
      "calories": 950,
      "diameter": 12,
      "description": "A delightful Italian pizza topped with a blend of four cheeses: mozzarella, gorgonzola, fontina, and parmesan.",
      "imageUrl": "https://example.com/quattro-formaggi.jpg",
      "category": "Italian"
    },
    {
      "title": "Deep Dish Supreme",
      "price": 1049.25,
      "calories": 1100,
      "diameter": 10,
      "description": "Thick, buttery crust filled with layers of cheese, sausage, peppers, and onions.",
      "imageUrl": "https://example.com/deep-dish-supreme.jpg",
      "category": "Chicago Style"
    },
    {
      "title": "Chicago Thin Crust",
      "price": 974.25,
      "calories": 950,
      "diameter": 16,
      "description": "Thin, crispy crust topped with tangy tomato sauce, cheese, and assorted toppings.",
      "imageUrl": "https://example.com/chicago-thin-crust.jpg",
      "category": "Chicago Style"
    },
    {
      "title": "Chicago Style Meat Lover's",
      "price": 1086.75,
      "calories": 1200,
      "diameter": 14,
      "description": "Hearty Chicago-style pizza loaded with sausage, pepperoni, bacon, and ham.",
      "imageUrl": "https://example.com/chicago-meat-lovers.jpg",
      "category": "Chicago Style"
    },
    {
      "title": "Vegetarian Chicago Style",
      "price": 974.25,
      "calories": 900,
      "diameter": 14,
      "description": "Chicago-style pizza topped with an assortment of fresh vegetables including bell peppers, onions, mushrooms, and olives.",
      "imageUrl": "https://example.com/chicago-vegetarian.jpg",
      "category": "Chicago Style"
    },
    {
      "title": "BBQ Chicken Chicago Style",
      "price": 1049.25,
      "calories": 1050,
      "diameter": 14,
      "description": "Chicago-style pizza topped with barbecue sauce, grilled chicken, red onions, and cilantro.",
      "imageUrl": "https://example.com/chicago-bbq-chicken.jpg",
      "category": "Chicago Style"
    },
    {
      "title": "Buffalo Chicken Chicago Style",
      "price": 1049.25,
      "calories": 1000,
      "diameter": 14,
      "description": "Chicago-style pizza topped with spicy buffalo sauce, grilled chicken, red onions, and blue cheese crumbles.",
      "imageUrl": "https://example.com/chicago-buffalo-chicken.jpg",
      "category": "Chicago Style"
    },
    {
      "title": "Sicilian Style Pepperoni",
      "price": 1124.25,
      "calories": 1250,
      "diameter": 12,
      "description": "Thick, square-shaped Sicilian pizza topped with generous slices of pepperoni.",
      "imageUrl": "https://example.com/sicilian-pepperoni.jpg",
      "category": "Sicilian Pizza"
    },
    {
      "title": "Sicilian Supreme",
      "price": 1161.75,
      "calories": 1300,
      "diameter": 12,
      "description": "Robust Sicilian pizza topped with sausage, pepperoni, bell peppers, onions, and olives.",
      "imageUrl": "https://example.com/sicilian-supreme.jpg",
      "category": "Sicilian Pizza"
    },
    {
      "title": "Hawaiian Sicilian",
      "price": 1086.75,
      "calories": 1150,
      "diameter": 12,
      "description": "Sicilian pizza topped with ham, pineapple, and a hint of barbecue sauce.",
      "imageUrl": "https://example.com/sicilian-hawaiian.jpg",
      "category": "Sicilian Pizza"
    },
    {
      "title": "Meatball Sicilian",
      "price": 1124.25,
      "calories": 1200,
      "diameter": 12,
      "description": "Sicilian pizza topped with savory meatballs, marinara sauce, and mozzarella cheese.",
      "imageUrl": "https://example.com/sicilian-meatball.jpg",
      "category": "Sicilian Pizza"
    },
    {
      "title": "White Sicilian",
      "price": 1049.25,
      "calories": 1100,
      "diameter": 12,
      "description": "Sicilian pizza topped with creamy ricotta cheese, garlic, spinach, and a sprinkle of parmesan.",
      "imageUrl": "https://example.com/sicilian-white.jpg",
      "category": "Sicilian Pizza"
    },
    {
      "title": "Mushroom Lovers Sicilian",
      "price": 1086.75,
      "calories": 1150,
      "diameter": 12,
      "description": "Sicilian pizza loaded with assorted mushrooms, garlic, and a blend of Italian cheeses.",
      "imageUrl": "https://example.com/sicilian-mushroom-lovers.jpg",
      "category": "Sicilian Pizza"
    }
  ]
  