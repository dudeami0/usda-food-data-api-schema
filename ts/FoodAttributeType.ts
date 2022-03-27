import mongoose from "mongoose";

const { Schema } = mongoose;

export default interface FoodAttributeType {
    id: Number;
    name: String;
    description: String;
}

export const FoodAttributeTypeSchema = new Schema<FoodAttributeType>({
    id: Number,
    name: String,
    description: String
});

mongoose.model("FoodAttributeType", FoodAttributeTypeSchema);
