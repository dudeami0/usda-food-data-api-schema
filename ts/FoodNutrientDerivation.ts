import mongoose from "mongoose";
import FoodNutrientSource from "./FoodNutrientSource.js";

const { Schema } = mongoose;

export default interface FoodNutrientDerivation {
    id: Number;
    code: String;
    description: String;
    foodNutrientSource: FoodNutrientSource;
}

export const FoodNutrientDeviationSchema = new Schema<FoodNutrientDerivation>({
    id: Number,
    code: String,
    description: String,
    foodNutrientSource: {
        type: Schema.Types.ObjectId,
        ref: "FoodNutrientSource"
    }
});

mongoose.model("FoodNutrientDerivation", FoodNutrientDeviationSchema);
