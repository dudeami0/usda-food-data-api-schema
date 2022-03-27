import mongoose from "mongoose";

const { Schema } = mongoose;

export default interface LabelNutrientValue {
    value: Number;
}

export const LabelNutrientValue = new Schema<LabelNutrientValue>({
    value: Number
});

mongoose.model("LabelNutrientValue", LabelNutrientValue);
