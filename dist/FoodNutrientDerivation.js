import mongoose from "mongoose";
const { Schema } = mongoose;
export const FoodNutrientDeviationSchema = new Schema({
    id: Number,
    code: String,
    description: String,
    foodNutrientSource: {
        type: Schema.Types.ObjectId,
        ref: "FoodNutrientSource"
    }
});
mongoose.model("FoodNutrientDerivation", FoodNutrientDeviationSchema);
//# sourceMappingURL=FoodNutrientDerivation.js.map