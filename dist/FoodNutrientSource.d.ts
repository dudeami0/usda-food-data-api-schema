import mongoose from "mongoose";
export default interface FoodNutrientSource {
    id: Number;
    code: String;
    description: String;
}
export declare const FoodNutrientSourceSchema: mongoose.Schema<FoodNutrientSource, mongoose.Model<FoodNutrientSource, any, any, any>, {}, {}>;
