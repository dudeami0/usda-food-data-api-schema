import mongoose from "mongoose";

const { Schema } = mongoose;

export default interface FoodNutrientSource {
    id: Number;
    code: String;
    description: String;
}

export const FoodNutrientSourceSchema = new Schema<FoodNutrientSource>({
    id: Number,
    code: String,
    description: String
});

mongoose.model("FoodNutrientSource", FoodNutrientSourceSchema);
