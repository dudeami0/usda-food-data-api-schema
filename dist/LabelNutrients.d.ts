import mongoose from "mongoose";
import LabelNutrientValue from "./LabelNutrientValue.js";
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
export declare const LabelNutrients: mongoose.Schema<LabelNutrients, mongoose.Model<LabelNutrients, any, any, any>, {}, {}>;
