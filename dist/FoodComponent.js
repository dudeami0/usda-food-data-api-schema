import mongoose from "mongoose";
const { Schema } = mongoose;
export const FoodComponentSchema = new Schema({
    id: Number,
    name: String,
    dataPoints: Number,
    gramWeight: Number,
    isRefuse: Boolean,
    minYearAcquired: Number,
    percentWeight: Number
});
mongoose.model("FoodComponent", FoodComponentSchema);
//# sourceMappingURL=FoodComponent.js.map