import mongoose from "mongoose";
import FoodNutrientDerivation from "./FoodNutrientDerivation.js";
import Nutrient from "./Nutrient.js";
import NutrientAnalysisDetails from "./NutrientAnalysisDetails.js";
export default interface FoodNutrient {
    id: Number;
    amount: Number;
    dataPoints: Number;
    min: Number;
    max: Number;
    median: Number;
    type: String;
    nutrient: Nutrient;
    foodNutrientDerivation: FoodNutrientDerivation;
    nutrientAnalysisDetails: NutrientAnalysisDetails;
}
export declare const FoodNutrientSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;
