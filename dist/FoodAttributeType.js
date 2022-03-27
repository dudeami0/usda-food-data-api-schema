import mongoose from "mongoose";
const { Schema } = mongoose;
export const FoodAttributeTypeSchema = new Schema({
    id: Number,
    name: String,
    description: String
});
mongoose.model("FoodAttributeType", FoodAttributeTypeSchema);
//# sourceMappingURL=FoodAttributeType.js.map