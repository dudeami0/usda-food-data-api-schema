import mongoose from "mongoose";

const { Schema } = mongoose;

export default interface NutrientAcquisitionDetails {
    sampleUnitId: Number;
    purchaseDate: String;
    storeCity: String;
    storeState: String;
}

export const NutrientAcquisitionDetailsSchema =
    new Schema<NutrientAcquisitionDetails>({
        sampleUnitId: Number,
        purchaseDate: String,
        storeCity: String,
        storeState: String
    });

mongoose.model("NutrientAcquisitionDetails", NutrientAcquisitionDetailsSchema);
