import mongoose from "mongoose";
const { Schema } = mongoose;
export const InputFoodFoundationSchema = new Schema({
    id: Number,
    foodDescription: String,
    inputFood: { type: Schema.Types.ObjectId, ref: "SampleFoodItem" }
});
mongoose.model("InputFoodFoundation", InputFoodFoundationSchema);
//# sourceMappingURL=InputFoodFoundation.js.map