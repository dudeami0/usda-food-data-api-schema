import mongoose from "mongoose";
export default interface NutrientAcquisitionDetails {
    sampleUnitId: Number;
    purchaseDate: String;
    storeCity: String;
    storeState: String;
}
export declare const NutrientAcquisitionDetailsSchema: mongoose.Schema<NutrientAcquisitionDetails, mongoose.Model<NutrientAcquisitionDetails, any, any, any>, {}, {}>;
