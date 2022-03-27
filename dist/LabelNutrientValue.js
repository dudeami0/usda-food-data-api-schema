import mongoose from "mongoose";
const { Schema } = mongoose;
export const LabelNutrientValue = new Schema({
    value: Number
});
mongoose.model("LabelNutrientValue", LabelNutrientValue);
//# sourceMappingURL=LabelNutrientValue.js.map