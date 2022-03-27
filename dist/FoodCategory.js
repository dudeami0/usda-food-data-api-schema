import mongoose from "mongoose";
const { Schema } = mongoose;
export const FoodCategorySchema = new Schema({
    id: Number,
    code: String,
    description: String
});
mongoose.model("FoodCategory", FoodCategorySchema);
//# sourceMappingURL=FoodCategory.js.map