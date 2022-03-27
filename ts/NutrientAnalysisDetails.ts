import mongoose from "mongoose";
import NutrientAcquisitionDetails from "./NutrientAcquisitionDetails.js";

const { Schema } = mongoose;

export default interface NutrientAnalysisDetails {
    subSampleId: Number;
    amount: Number;
    nutrientid: Number;
    labMethodDescription: String;
    labMethodOriginalDescription: String;
    labMethodLink: String;
    labMethodTechnique: String;
    nutrientAcquisitionDetails: NutrientAcquisitionDetails[];
}

export const NutrientAnalysisDetailsSchema =
    new Schema<NutrientAnalysisDetails>({
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
