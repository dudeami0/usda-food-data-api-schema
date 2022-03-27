import mongoose from "mongoose";
export default interface LabelNutrientValue {
    value: Number;
}
export declare const LabelNutrientValue: mongoose.Schema<LabelNutrientValue, mongoose.Model<LabelNutrientValue, any, any, any>, {}, {}>;
