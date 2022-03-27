import mongoose from "mongoose";
const { Schema } = mongoose;
export const FoodPortionSchema = new Schema({
    id: Number,
    amount: Number,
    dataPoints: Number,
    gramWeight: Number,
    minYearAcquired: Number,
    modifier: String,
    portionDescription: String,
    sequenceNumber: Number,
    measureUnit: { type: Schema.Types.ObjectId, ref: "MeasureUnit" }
});
mongoose.model("FoodPortion", FoodPortionSchema);
//# sourceMappingURL=FoodPortion.js.map