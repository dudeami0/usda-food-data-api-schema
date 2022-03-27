import mongoose from "mongoose";
const { Schema } = mongoose;
export const MeasureUnitSchema = new Schema({
    id: Number,
    abbreviation: String,
    name: String
});
mongoose.model("MeasureUnit", MeasureUnitSchema);
//# sourceMappingURL=MeasureUnit.js.map