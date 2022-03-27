import mongoose from "mongoose";
const { Schema } = mongoose;
export const NutrientConversionFactorsSchema = new Schema({
    type: String,
    value: Number
});
mongoose.model("NutrientConversionFactors", NutrientConversionFactorsSchema);
//# sourceMappingURL=NutrientConversionFactors.js.map