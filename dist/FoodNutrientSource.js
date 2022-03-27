import mongoose from "mongoose";
const { Schema } = mongoose;
export const FoodNutrientSourceSchema = new Schema({
    id: Number,
    code: String,
    description: String
});
mongoose.model("FoodNutrientSource", FoodNutrientSourceSchema);
//# sourceMappingURL=FoodNutrientSource.js.map