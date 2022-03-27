import mongoose from "mongoose";
export default interface MeasureUnit {
    id: Number;
    abbreviation: String;
    name: String;
}
export declare const MeasureUnitSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;
