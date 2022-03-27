import mongoose from "mongoose";
import FoodAttributeType from "./FoodAttributeType.js";

const { Schema } = mongoose;

export default interface FoodAttribute {
    id: Number;
    sequenceNumber: Number;
    value: String;
    foodAttributeType: FoodAttributeType;
}

export const FoodAttributeSchema = new Schema<FoodAttribute>({
    id: Number,
    sequenceNumber: Number,
    value: String,
    foodAttributeType: { type: Schema.Types.ObjectId, ref: "FoodAttributeType" }
});

mongoose.model("FoodAttribute", FoodAttributeSchema);
