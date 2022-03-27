import mongoose from "mongoose";
const { Schema } = mongoose;
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
//# sourceMappingURL=FoodNutrient.js.map