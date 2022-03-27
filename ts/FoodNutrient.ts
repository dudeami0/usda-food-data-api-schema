import mongoose from "mongoose";
import FoodNutrientDerivation from "./FoodNutrientDerivation.js";
import Nutrient from "./Nutrient.js";
import NutrientAnalysisDetails from "./NutrientAnalysisDetails.js";

const { Schema } = mongoose;

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

export const FoodNutrientSchema = new Schema({
    id: Number,
    amount: Number,
    dataPoints: Number,
    min: Number,
    max: Number,
    median: Number,
    type: String,
    nutrient: { type: Schema.Types.ObjectId, ref: "Nutrient" },
    foodNutrientDerivation: {
        type: Schema.Types.ObjectId,
        ref: "FoodNutrientDerivation"
    },
    nutrientAnalysisDetails: {
        type: Schema.Types.ObjectId,
        ref: "NutrientAnalysisDetails"
    }
});

mongoose.model("FoodNutrient", FoodNutrientSchema);
