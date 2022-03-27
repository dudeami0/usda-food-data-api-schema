import mongoose from "mongoose";
const { Schema } = mongoose;
export const NutrientAcquisitionDetailsSchema = new Schema({
    sampleUnitId: Number,
    purchaseDate: String,
    storeCity: String,
    storeState: String
});
mongoose.model("NutrientAcquisitionDetails", NutrientAcquisitionDetailsSchema);
//# sourceMappingURL=NutrientAcquisitionDetails.js.map