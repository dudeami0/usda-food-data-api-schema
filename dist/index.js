import fs from "fs/promises";
import mongoose from "mongoose";
import readline from "readline";
import url, { URL } from "url";
const __dirname = new URL(".", import.meta.url).pathname.replace(new RegExp("^/", "g"), "");
let updateConfig = false;
let mongoUri = "";
/**
 * Asks the user for a mongodb:// uri
 * @returns The user given mongodb:// uri
 */
async function getDatabaseUrl() {
    let options;
    try {
        options = JSON.parse((await fs.readFile("./config.json")).toString());
        if (options.mongouri) {
            return options.mongouri;
        }
        else {
            throw new Error("Missing mongodb:// in config.json!");
        }
    }
    catch (e) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return await new Promise((resolve) => {
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
            options = JSON.parse(String(await fs.readFile("./config.json")));
        }
        catch (e) {
            options = {};
        }
        options.mongouri = mongoUri;
        await fs.writeFile("./config.json", JSON.stringify(options, null, 4));
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
    await Promise.all(files.map(async (file) => {
        if (file !== "index.js" && file.endsWith(".js")) {
            await import(url.pathToFileURL(__dirname + file).toString());
        }
    }));
    writeConfig();
}
//# sourceMappingURL=index.js.map