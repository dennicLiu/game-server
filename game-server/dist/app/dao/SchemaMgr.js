"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class SchemaMgr {
    constructor() {
        this.schema = {};
        this.load();
    }
    async load() {
        let self = this;
        let filepath = path.resolve(__dirname, "./Schema");
        let schemas = await fs.readdirSync(filepath);
        schemas.map((one) => {
            let appendPath = path.join(filepath, one);
            let filename = one.split(".")[0];
            self.schema[filename] = require(appendPath);
        });
    }
    getSchemas() {
        return this.schema;
    }
    getSchemaByName(tablename) {
        let self = this;
        if (self.schema.hasOwnProperty(tablename)) {
            return self.schema[tablename];
        }
        self.load();
        return self.schema[tablename];
    }
}
exports.schema = async function () {
    return await new SchemaMgr();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZW1hTWdyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL2Rhby9TY2hlbWFNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBeUI7QUFDekIsNkJBQTZCO0FBRTdCO0lBRUk7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJO1FBQ04sSUFBSSxJQUFJLEdBQUssSUFBSSxDQUFDO1FBQ2xCLElBQUksUUFBUSxHQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFDLEVBQUU7WUFDZixJQUFJLFVBQVUsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFVBQVU7UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUVELGVBQWUsQ0FBQyxTQUFnQjtRQUM1QixJQUFJLElBQUksR0FBSSxJQUFJLENBQUM7UUFDakIsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBQztZQUNyQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDaEM7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDakMsQ0FBQztDQUNKO0FBRWEsUUFBQSxNQUFNLEdBQUcsS0FBSztJQUN4QixPQUFRLE1BQU8sSUFBSyxTQUFTLEVBQUUsQ0FBQztBQUNwQyxDQUFDLENBQUEifQ==