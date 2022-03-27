import mongoose from "mongoose";
export default interface FoodComponent {
    id: Number;
    name: String;
    dataPoints: Number;
    gramWeight: Number;
    isRefuse: Boolean;
    minYearAcquired: Number;
    percentWeight: Number;
}
export declare const FoodComponentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;
