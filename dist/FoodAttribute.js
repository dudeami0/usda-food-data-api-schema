import mongoose from "mongoose";
const { Schema } = mongoose;
export const FoodAttributeSchema = new Schema({
    id: Number,
    sequenceNumber: Number,
    value: String,
    foodAttributeType: { type: Schema.Types.ObjectId, ref: "FoodAttributeType" }
});
mongoose.model("FoodAttribute", FoodAttributeSchema);
//# sourceMappingURL=FoodAttribute.js.map