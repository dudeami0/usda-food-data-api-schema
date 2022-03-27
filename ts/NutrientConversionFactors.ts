import mongoose from "mongoose";

const { Schema } = mongoose;

export default interface NutrientConversionFactors {
    type: String;
    value: Number;
}

export const NutrientConversionFactorsSchema =
    new Schema<NutrientConversionFactors>({
        type: String,
        value: Number
    });

mongoose.model("NutrientConversionFactors", NutrientConversionFactorsSchema);
