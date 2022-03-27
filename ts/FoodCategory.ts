import mongoose from "mongoose";

const { Schema } = mongoose;

export default interface FoodCategory {
    id: Number;
    code: String;
    description: String;
}

export const FoodCategorySchema = new Schema({
    id: Number,
    code: String,
    description: String
});

mongoose.model("FoodCategory", FoodCategorySchema);
