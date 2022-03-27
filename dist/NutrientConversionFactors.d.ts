import mongoose from "mongoose";
export default interface NutrientConversionFactors {
    type: String;
    value: Number;
}
export declare const NutrientConversionFactorsSchema: mongoose.Schema<NutrientConversionFactors, mongoose.Model<NutrientConversionFactors, any, any, any>, {}, {}>;
