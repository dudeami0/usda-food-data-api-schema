import mongoose from "mongoose";
const { Schema } = mongoose;
export const NutrientAnalysisDetailsSchema = new Schema({
    subSampleId: Number,
    amount: Number,
    nutrientid: Number,
    labMethodDescription: String,
    labMethodOriginalDescription: String,
    labMethodLink: String,
    labMethodTechnique: String,
    nutrientAcquisitionDetails: [
        { type: Schema.Types.ObjectId, ref: "NutrientAcquisitionDetails" }
    ]
});
mongoose.model("NutrientAnalysisDetails", NutrientAnalysisDetailsSchema);
//# sourceMappingURL=NutrientAnalysisDetails.js.map