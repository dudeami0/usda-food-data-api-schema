import mongoose from "mongoose";
const { Schema } = mongoose;
export const WweiaFoodCategorySchema = new Schema({
    wweiaFoodCategoryCode: Number,
    wweiaFoodCategoryDescription: String
});
mongoose.model("WweiaFoodCategory", WweiaFoodCategorySchema);
//# sourceMappingURL=WweiaFoodCategory.js.map