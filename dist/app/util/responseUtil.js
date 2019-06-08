"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class resUtil {
    constructor() {
        this.successCode = 200;
        this.failCode = 500;
    }
    success(desc, key) {
        return {
            code: this.successCode,
            desc: desc,
            key: key
        };
    }
    fail(desc, key) {
        return {
            code: this.failCode,
            desc: desc,
            key: key
        };
    }
}
exports.initUtil = new resUtil();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2VVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL3V0aWwvcmVzcG9uc2VVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFHSTtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUksR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBVyxFQUFDLEdBQVU7UUFDMUIsT0FBTTtZQUNGLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztZQUN0QixJQUFJLEVBQUMsSUFBSTtZQUNULEdBQUcsRUFBQyxHQUFHO1NBQ1YsQ0FBQztJQUVOLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBVyxFQUFDLEdBQVU7UUFDdkIsT0FBTTtZQUNGLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNuQixJQUFJLEVBQUMsSUFBSTtZQUNULEdBQUcsRUFBQyxHQUFHO1NBQ1YsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQUdZLFFBQUEsUUFBUSxHQUFLLElBQUksT0FBTyxFQUFFLENBQUMifQ==