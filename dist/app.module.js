"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const items_controller_1 = require("./items/items.controller");
const items_service_1 = require("./items/items.service");
const items_module_1 = require("./items/items.module");
const mongoose_1 = require("@nestjs/mongoose");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const users_module_1 = require("./users/users.module");
const auth_service_1 = require("./auth/auth.service");
const shared_module_1 = require("./shared/shared.module");
const auth_module_1 = require("./auth/auth.module");
const keys_1 = require("./config/keys");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [items_module_1.ItemsModule, users_module_1.UsersModule, mongoose_1.MongooseModule.forRoot(keys_1.default.mongoURI), shared_module_1.SharedModule, auth_module_1.AuthModule],
        controllers: [app_controller_1.AppController, items_controller_1.ItemsController, users_controller_1.UsersController],
        providers: [app_service_1.AppService, items_service_1.ItemsService, users_service_1.UsersService, auth_service_1.AuthService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map