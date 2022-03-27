import mongoose from "mongoose";
const { Schema } = mongoose;
export const SampleFoodItemSchema = new Schema({
    fdcId: Number,
    dataType: String,
    description: String,
    foodClass: String,
    publicationDate: String,
    foodAttributes: { type: Schema.Types.ObjectId, ref: "FoodCategory" }
});
mongoose.model("SampleFoodItem", SampleFoodItemSchema);
//# sourceMappingURL=SampleFoodItem.js.map