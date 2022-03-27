import mongoose from "mongoose";

const { Schema } = mongoose;

export default interface WweiaFoodCategory {
    wweiaFoodCategoryCode: Number;
    wweiaFoodCategoryDescription: String;
}

export const WweiaFoodCategorySchema = new Schema<WweiaFoodCategory>({
    wweiaFoodCategoryCode: Number,
    wweiaFoodCategoryDescription: String
});

mongoose.model("WweiaFoodCategory", WweiaFoodCategorySchema);
