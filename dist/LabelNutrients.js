import mongoose from "mongoose";
const { Schema } = mongoose;
export const LabelNutrients = new Schema({
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
//# sourceMappingURL=LabelNutrients.js.map