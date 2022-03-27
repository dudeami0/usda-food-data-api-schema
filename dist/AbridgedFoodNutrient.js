import mongoose from "mongoose";
const { Schema } = mongoose;
export const AbridgedFoodNutrientSchema = new Schema({
    number: Number,
    name: String,
    amount: Number,
    unitName: String,
    derivationCode: String,
    derivationDescription: String
});
mongoose.model("AbridgedFoodNutrient", AbridgedFoodNutrientSchema);
//# sourceMappingURL=AbridgedFoodNutrient.js.map