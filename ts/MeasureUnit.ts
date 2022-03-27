import mongoose from "mongoose";

const { Schema } = mongoose;

export default interface MeasureUnit {
    id: Number;
    abbreviation: String;
    name: String;
}

export const MeasureUnitSchema = new Schema({
    id: Number,
    abbreviation: String,
    name: String
});

mongoose.model("MeasureUnit", MeasureUnitSchema);
