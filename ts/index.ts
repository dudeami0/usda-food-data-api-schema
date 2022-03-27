import fs from "fs/promises";
import mongoose from "mongoose";
import readline from "readline";
import url, { URL } from "url";

const __dirname = new URL(".", import.meta.url).pathname.replace(
    new RegExp("^/", "g"),
    ""
);

let updateConfig = false;
let mongoUri: string = "";

/**
 * Configuration object interface
 */
interface Config {
    mongouri: string;
}

/**
 * Asks the user for a mongodb:// uri
 * @returns The user given mongodb:// uri
 */
async function getDatabaseUrl() {
    let options: Config;
    try {
        options = JSON.parse(
            (await fs.readFile("./usda-food-data.json")).toString()
        );
        if (options.mongouri) {
            return options.mongouri;
        } else {
            throw new Error();
        }
    } catch (e) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return <string>await new Promise((resolve) => {
            rl.question("Enter your mongodb:// uri: ", async (code) => {
                rl.close();
                updateConfig = true;
                resolve(code);
            });
        });
    }
}

async function writeConfig() {
    if (updateConfig) {
        let options;
        try {
            options = JSON.parse(
                String(await fs.readFile("./usda-food-data.json"))
            );
        } catch (e) {
            options = {};
        }
        options.mongouri = mongoUri;
        await fs.writeFile(
            "./usda-food-data.json",
            JSON.stringify(options, null, 4)
        );
        updateConfig = false;
    }
}

export async function shutdown() {
    await mongoose.disconnect();
}

export async function start() {
    mongoUri = await getDatabaseUrl();
    await mongoose.connect(mongoUri);

    let files = await fs.readdir(__dirname);
    await Promise.all(
        files.map(async (file) => {
            if (file !== "index.js" && file.endsWith(".js")) {
                await import(url.pathToFileURL(__dirname + file).toString());
            }
        })
    );

    writeConfig();
}

export default {
    start,
    shutdown
};
export { default as AbridgedFoodItem } from "./AbridgedFoodItem.js";
export { default as AbridgedFoodNutrient } from "./AbridgedFoodNutrient.js";
export { default as BrandedFoodItem } from "./BrandedFoodItem.js";
export { default as FoodAttribute } from "./FoodAttribute.js";
export { default as FoodAttributeType } from "./FoodAttributeType.js";
export { default as FoodCategory } from "./FoodCategory.js";
export { default as FoodComponent } from "./FoodComponent.js";
export { default as FoodNutrient } from "./FoodNutrient.js";
export { default as FoodNutrientDerivation } from "./FoodNutrientDerivation.js";
export { default as FoodNutrientSource } from "./FoodNutrientSource.js";
export { default as FoodPortion } from "./FoodPortion.js";
export { default as FoodUpdateLog } from "./FoodUpdateLog.js";
export { default as FoundationFoodItem } from "./FoundationFoodItem.js";
export { default as InputFoodFoundation } from "./InputFoodFoundation.js";
export { default as InputFoodSurvey } from "./InputFoodSurvey.js";
export { default as LabelNutrients } from "./LabelNutrients.js";
export { default as LabelNutrientValue } from "./LabelNutrientValue";
export { default as MeasureUnit } from "./MeasureUnit.js";
export { default as Nutrient } from "./Nutrient.js";
export { default as NutrientAcquisitionDetails } from "./NutrientAcquisitionDetails.js";
export { default as NutrientAnalysisDetails } from "./NutrientAnalysisDetails.js";
export { default as NutrientConversionFactors } from "./NutrientConversionFactors.js";
export { default as RetentionFactor } from "./RetentionFactor.js";
export { default as SampleFoodItem } from "./SampleFoodItem.js";
export { default as SRLegacyFoodItem } from "./SRLegacyFoodItem";
export { default as SurveyFoodItem } from "./SurveyFoodItem.js";
export { default as WweiaFoodCategory } from "./WweiaFoodCategory.js";
