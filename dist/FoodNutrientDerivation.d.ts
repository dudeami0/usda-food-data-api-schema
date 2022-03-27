import mongoose from "mongoose";
import FoodNutrientSource from "./FoodNutrientSource.js";
export default interface FoodNutrientDerivation {
    id: Number;
    code: String;
    description: String;
    foodNutrientSource: FoodNutrientSource;
}
export declare const FoodNutrientDeviationSchema: mongoose.Schema<FoodNutrientDerivation, mongoose.Model<FoodNutrientDerivation, any, any, any>, {}, {}>;
