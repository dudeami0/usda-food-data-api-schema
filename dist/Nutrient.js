import mongoose from "mongoose";
const { Schema } = mongoose;
export const NutrientSchema = new Schema({
    id: Number,
    number: String,
    name: String,
    rank: Number,
    unitName: String
});
mongoose.model("Nutrient", NutrientSchema);
//# sourceMappingURL=Nutrient.js.map