import mongoose from "mongoose";
import LabelNutrientValue from "./LabelNutrientValue.js";

const { Schema } = mongoose;

export default interface LabelNutrients {
    fat: LabelNutrientValue;
    saturatedFat: LabelNutrientValue;
    transFat: LabelNutrientValue;
    cholesterol: LabelNutrientValue;
    sodium: LabelNutrientValue;
    carbohydrates: LabelNutrientValue;
    fiber: LabelNutrientValue;
    sugars: LabelNutrientValue;
    protein: LabelNutrientValue;
    calcium: LabelNutrientValue;
    iron: LabelNutrientValue;
    potassium: LabelNutrientValue;
    calories: LabelNutrientValue;
}

export const LabelNutrients = new Schema<LabelNutrients>({
    fat: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" },
    saturatedFat: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" },
    transFat: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" },
    cholesterol: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" },
    sodium: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" },
    carbohydrates: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" },
    fiber: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" },
    sugars: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" },
    protein: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" },
    calcium: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" },
    iron: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" },
    potassium: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" },
    calories: { type: Schema.Types.ObjectId, ref: "LabelNutrientValue" }
});

mongoose.model("LabelNutrients", LabelNutrients);
