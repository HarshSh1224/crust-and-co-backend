import asyncHandler from "../utils/async_handler.js"
import { ApiResponse } from "../utils/api_response.js"
import { FoodItem } from "../models/food_item.model.js"

const getAllFoodItems = asyncHandler(async (req, res) => {
  const allFoodItems = await FoodItem.find({})

  // const allPromises = pizzasData.map((value) => {
  //   return FoodItem.create(value)
  // })

  // await Promise.all(allPromises)

  res.status(200).json(new ApiResponse(201, allFoodItems, "Success"))
})

export { getAllFoodItems }

// const pizzasData = [
//   {
//     title: "Margherita",
//     type: "pizza",
//     price: 825,
//     calories: 800,
//     prop1: 12,
//     description: "Fresh mozzarella, tomatoes, basil pizza.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "italian",
//   },
//   {
//     title: "Pepperoni",
//     type: "pizza",
//     price: 899,
//     calories: 900,
//     prop1: 14,
//     description: "Italian pizza with spicy pepperoni.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "italian",
//   },
//   {
//     title: "Quattro Stagioni",
//     type: "pizza",
//     price: 974,
//     calories: 850,
//     prop1: 12,
//     description: "Four seasons pizza with varied toppings.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "italian",
//   },
//   {
//     title: "Capricciosa",
//     type: "pizza",
//     price: 1011,
//     calories: 920,
//     prop1: 12,
//     description: "Pizza with mushrooms, artichokes, ham, olives.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "italian",
//   },
//   {
//     title: "Prosciutto e Funghi",
//     type: "pizza",
//     price: 974,
//     calories: 870,
//     prop1: 12,
//     description: "Prosciutto, mushrooms, oregano-topped pizza.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "italian",
//   },
//   {
//     title: "Quattro Formaggi",
//     type: "pizza",
//     price: 1049,
//     calories: 950,
//     prop1: 12,
//     description: "Four cheese blend Italian pizza.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "italian",
//   },
//   {
//     title: "Deep Dish Supreme",
//     type: "pizza",
//     price: 1049,
//     calories: 1100,
//     prop1: 10,
//     description: "Deep-dish pizza with cheese, sausage.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "chicagoStyle",
//   },
//   {
//     title: "Chicago Thin Crust",
//     type: "pizza",
//     price: 974,
//     calories: 950,
//     prop1: 16,
//     description: "Crispy pizza with tomato sauce, cheese.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "chicagoStyle",
//   },
//   {
//     title: "Chicago Style Meat Lover's",
//     type: "pizza",
//     price: 1086,
//     calories: 1200,
//     prop1: 14,
//     description: "Chicago pizza with sausage, bacon, ham.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "chicagoStyle",
//   },
//   {
//     title: "Vegetarian Chicago Style",
//     type: "pizza",
//     price: 974,
//     calories: 900,
//     prop1: 14,
//     description: "Chicago veggie pizza with fresh vegetables.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "chicagoStyle",
//   },
//   {
//     title: "BBQ Chicken Chicago Style",
//     type: "pizza",
//     price: 1049,
//     calories: 1050,
//     prop1: 14,
//     description: "Barbecue chicken pizza with red onions.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "chicagoStyle",
//   },
//   {
//     title: "Buffalo Chicken Chicago Style",
//     type: "pizza",
//     price: 1049,
//     calories: 1000,
//     prop1: 14,
//     description: "Buffalo chicken pizza with blue cheese.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "chicagoStyle",
//   },
//   {
//     title: "Sicilian Style Pepperoni",
//     type: "pizza",
//     price: 1124,
//     calories: 1250,
//     prop1: 12,
//     description: "Square pepperoni-topped Sicilian pizza.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "sicilianPizza",
//   },
//   {
//     title: "Sicilian Supreme",
//     type: "pizza",
//     price: 1161,
//     calories: 1300,
//     prop1: 12,
//     description: "Sicilian pizza with sausage, vegetables.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "sicilianPizza",
//   },
//   {
//     title: "Hawaiian Sicilian",
//     type: "pizza",
//     price: 1086,
//     calories: 1150,
//     prop1: 12,
//     description: "Sicilian pizza with ham, pineapple.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "sicilianPizza",
//   },
//   {
//     title: "Meatball Sicilian",
//     type: "pizza",
//     price: 1124,
//     calories: 1200,
//     prop1: 12,
//     description: "Meatball, marinara, mozzarella Sicilian pizza.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "sicilianPizza",
//   },
//   {
//     title: "White Sicilian",
//     type: "pizza",
//     price: 1049,
//     calories: 1100,
//     prop1: 12,
//     description: "Ricotta, garlic, spinach Sicilian pizza.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "sicilianPizza",
//   },
//   {
//     title: "Mushroom Lovers Sicilian",
//     type: "pizza",
//     price: 1086,
//     calories: 1150,
//     prop1: 12,
//     description: "Mushroom-loaded Sicilian pizza with cheese.",
//     imageUrl:
//       "https://res.cloudinary.com/dm4pf8fkw/image/upload/v1716811519/drxha6zyy9w7vwdnl1x8.png",
//     pizzaCategory: "sicilianPizza",
//   },
// ]
