import mongoose from "mongoose";
import NutrientAcquisitionDetails from "./NutrientAcquisitionDetails.js";
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
export declare const NutrientAnalysisDetailsSchema: mongoose.Schema<NutrientAnalysisDetails, mongoose.Model<NutrientAnalysisDetails, any, any, any>, {}, {}>;
