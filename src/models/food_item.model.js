import mongoose, { Schema } from "mongoose"

const foodItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    prop1: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    pizzaCategory: {
      type: String,
    },
  },
  { timestamps: true }
)

foodItemSchema.set("toJSON", {
  getters: true,
  transform: (doc, ret) => {
    if (ret.price) {
      ret.price = ret.price.toString()
    }
    delete ret.__v
    return ret
  },
})

export const FoodItem = mongoose.model("FoodItem", foodItemSchema)
